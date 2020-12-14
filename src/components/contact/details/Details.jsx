import './Details.css';
import Office from './office/Office'
import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
//import { Icon } from "leaflet";
import * as parkData from "./offices.json";

const Details = () => {

    const [activePark, setActivePark] = useState(null);

    

    /*const skater = new Icon({
        iconUrl: "/skateboarding.svg",
        iconSize: [25, 25]
    });*/

    return (
        <section id="details">
            
            <div>
                <h2>Contact Details</h2>

                <div id="details-offices">

                    <Office 
                        name="Main Office"
                        mail="archone@mail.com"
                        num="1892"
                        street="Chenoweth Drive TN"
                        phone="123-456-3451"
                        link="#"
                    />

                    <Office 
                        name="Office II"
                        mail="archtwo@mail.com"
                        num="3399"
                        street="Wines Lane TX"
                        phone="832-123-4321"
                        link="#"
                    />

                    <Office 
                        name="Office II"
                        mail="archtwo@mail.com"
                        num="3399"
                        street="Wines Lane TX"
                        phone="832-123-4321"
                        link="#"
                    />

                    <Office 
                        name="Office II"
                        mail="archtwo@mail.com"
                        num="3399"
                        street="Wines Lane TX"
                        phone="832-123-4321"
                        link="#"
                    />

                    <Office 
                        name="Office II"
                        mail="archtwo@mail.com"
                        num="3399"
                        street="Wines Lane TX"
                        phone="832-123-4321"
                        link="#"
                    />

                </div>
            </div>

            <div>
                <MapContainer center={[45.42, -75.45]} zoom={11}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {activePark && (
                        <Popup
                            position={[
                                activePark.geometry.coordinates[1],
                                activePark.geometry.coordinates[0]
                            ]}
                            onClose={() => {
                                setActivePark(null);
                            }}
                        >
                            <div>
                                <h2>{activePark.properties.NAME}</h2>
                                <p>{activePark.properties.DESCRIPTIO}</p>
                            </div>
                        </Popup>
                    )}
                    {parkData.features.map(park => (
                        <Marker
                            key={park.properties.PARK_ID}
                            position={[
                                park.geometry.coordinates[1],
                                park.geometry.coordinates[0]
                            ]}
                            onClick={() => {
                                console.log('lol');setActivePark(park);
                            }}
                        />
                    ))}
                    
                </MapContainer>
            </div>

        </section>
    );
}

export default Details;