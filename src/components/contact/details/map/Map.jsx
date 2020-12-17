import './Map.css';
import iconOffice from 'assets/icons/icon-map-point.svg';
import React, { useEffect, useRef } from 'react';
import { MapContainer, useMap, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import * as jsonOffices from "components/contact/details/offices.json";

const Map = ({anchorMapOffice, goToOfficeId, openPopup}) => {

    const PointsLayer = ({offices}) => {
        return offices.map( office => (
          <PointMarker
            key={office.id}
            office={office}
            goToOffice={office.id === goToOfficeId}
            openPopup={openPopup}
          />
        ));
    }

    const PointMarker = ({office, goToOffice, openPopup}) =>  {
        const map = useMap();
        const markerRef = useRef(null);

        const icon = new Icon({
            iconUrl: iconOffice,
            iconSize: [40, 48]
        });

        useEffect(() => {
            if (goToOffice) { 
                map.flyTo(office.coordinates, 15, {duration: 9});
                if (openPopup) {
                    markerRef.current.openPopup(); 
                }
            }
        }, [goToOffice, openPopup, map, office]);

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

    return (
        <div id={anchorMapOffice}>
            <MapContainer bounds={jsonOffices.offices.map(office => office.coordinates)} zoomControl={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <PointsLayer offices={jsonOffices.offices}/>
            </MapContainer>
        </div>
    );
}

export default Map;