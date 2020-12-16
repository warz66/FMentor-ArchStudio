import './Details.css';
import iconOffice from 'assets/icons/icon-map-point.svg'
import Office from './office/Office'
import React, { useEffect, useState, useRef, useImperativeHandle, forwardRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet";
import * as jsonOffices from "./offices.json";

const Details = () => {
    const anchorMapOffice = "details-map-offices"
    const [center, setCenter] = useState(null);
    const [openPopupOfficeId , setOpenPopupOfficeId] = useState(null);
    const [zoom, setZoom] = useState(null);

    function goToMapOffice(office) {
        document.getElementById(anchorMapOffice).scrollIntoView({
            block: 'center',
            behavior: 'smooth',
            inline: 'nearest'
        });
        setOpenPopupOfficeId(office.id);
        //console.log(mapRef);
        //mapRef.mapInstance.flyTo(office.coordinates, 15);
        setCenter(office.coordinates);
        setZoom(15);
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
        const markerRef = useRef(null);
        const { office, openPopup } = props;
        const icon = new Icon({
            iconUrl: iconOffice,
            iconSize: [40, 48]
        });
      
        useEffect(() => {
            if (openPopup) { 
                markerRef.current.openPopup() 
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

    function MyMapComponent () {
        const mapRef = useRef(null);
        return (
            <MapContainer ref={mapRef} bounds={jsonOffices.offices.map(office => office.coordinates)} center={center} zoom={zoom} zoomControl={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <PointsLayer offices={jsonOffices.offices} />
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
                {/*<MapContainer ref={mapRef} bounds={bounds} zoomControl={lol}>

                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {jsonOffices.offices.map(office => (
                        <Marker
                            ref={mapRef}
                            key={office.id}
                            position={[
                                office.coordinates[0],
                                office.coordinates[1]
                            ]}
                            icon={icon}
                            eventHandlers={{click: () => {
                                setActiveOffice(office);
                            }}}
                        >
                            {activeOffice && (
                            <Popup
                                position={[
                                    activeOffice.coordinates[0],
                                    activeOffice.coordinates[1]
                                ]}
                            >
                                <div>
                                    <h3>{activeOffice.name}</h3>
                                    <p>{activeOffice.num} {activeOffice.street}</p>
                                    <p>{activeOffice.mail}</p>
                                    <p>{activeOffice.phone}</p>
                                </div>
                            </Popup>
                            )}
                        </Marker>
                    ))}

                </MapContainer>*/}

                {/*<MapContainer center={[45.42, -75.45]} zoom={11} zoomControl={false}>

                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {parkData.features.map(park => (
                        <Marker
                            key={park.properties.PARK_ID}
                            position={[
                                park.geometry.coordinates[1],
                                park.geometry.coordinates[0]
                            ]}
                            icon={icon}
                            eventHandlers={{click: () => {
                                setActivePark(park);
                            }}}
                        >
                            {activePark && (
                            <Popup
                                position={[
                                    activePark.geometry.coordinates[1],
                                    activePark.geometry.coordinates[0]
                                ]}
                            >
                                <div>
                                    <h3>{activePark.properties.NAME}</h3>
                                    <p>{activePark.properties.DESCRIPTIO}</p>
                                </div>
                            </Popup>
                            )}
                        </Marker>
                    ))}
                    
                </MapContainer>*/}

            </div>

        </section>
    );
}

export default Details;