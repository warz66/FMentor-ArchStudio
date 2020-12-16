import './Details.css';
import iconOffice from 'assets/icons/icon-map-point.svg'
import Office from './office/Office'
import React, { useEffect, useState, useRef } from 'react'
import { MapContainer, useMap, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet";
import * as jsonOffices from "./offices.json";

const Details = () => {
    const anchorMapOffice = "details-map-offices"
    const center = useState(null);
    const [openPopupOfficeId , setOpenPopupOfficeId] = useState(null);


    function goToMapOffice(office) {
        document.getElementById(anchorMapOffice).scrollIntoView({
            block: 'center',
            behavior: 'smooth',
            inline: 'nearest'
        });
        setOpenPopupOfficeId(office.id);
    }

    function PointsLayer(props) {
        const { offices } = props;
        return offices.map( office => (
          <PointMarker
            key={office.id}
            office={office}
            openPopup={office.id === openPopupOfficeId}
          />
        ));
    }

    function PointMarker(props) {
        const map = useMap();
        const markerRef = useRef(null);
        const { office, openPopup } = props;
        const icon = new Icon({
            iconUrl: iconOffice,
            iconSize: [40, 48]
        });
      
        useEffect(() => {
            if (openPopup) { 
                map.flyTo(office.coordinates, 15, {duration: 6});
                markerRef.current.openPopup(); 
            }
        }, [openPopup]);
      
        return (
          <Marker ref={markerRef} icon={icon} position={[office.coordinates[0],office.coordinates[1]]}>
            <Popup position={[office.coordinates[0], office.coordinates[1]]} >
                <div>
                    <h3>{office.name}</h3>
                    <p>{office.description}</p>
                    <p>{office.num} {office.street}</p>
                    <p>{office.mail}</p>
                    <p>{office.phone}</p>
                </div>
            </Popup>
          </Marker>
        );
      }

    function MyMapComponent (props) {
        return (
            <MapContainer bounds={jsonOffices.offices.map(office => office.coordinates)} center={center} zoomControl={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <PointsLayer offices={jsonOffices.offices}/>
            </MapContainer>
          )
    };

    return (
        <section id="details">
            
            <div>
                <h2>Contact Details</h2>

                <div id="details-offices">

                    {jsonOffices.offices.map(office => (
                        <Office 
                            key={office.id}
                            id={office.id}
                            name={office.name}
                            mail={office.mail}
                            num={office.num}
                            street={office.street}
                            phone={office.phone}
                            goToMapOffice={goToMapOffice}
                            office={office}
                        />
                    ))}

                </div>
            </div>

            <div id={anchorMapOffice}>
                <MyMapComponent/>
            </div>

        </section>
    );
}

export default Details;