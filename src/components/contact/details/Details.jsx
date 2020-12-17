import './Details.css';
import Office from './office/Office'
import React, { useState } from 'react'
import * as jsonOffices from "./offices.json";
import MapComponent from "./map/Map";

const Details = () => {
    const anchorMapOffice = "details-map-offices"
    const [openPopup , setOpenPopup] = useState(null);
    const [goToOfficeId , setGoToOfficeId] = useState(null);

    function goToMapOffice(officeId) {
        const elMap = document.getElementById(anchorMapOffice);
        const rectMap = elMap.getBoundingClientRect();

        if (rectMap.y  >= window.innerHeight - rectMap.height) {
            elMap.scrollIntoView({
                block: 'end',
                behavior: 'smooth',
                inline: 'nearest'
            });
        }

       (rectMap.height > 530) ? setOpenPopup(true) : setOpenPopup(false);
        
        setGoToOfficeId(officeId);
    }

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

            <MapComponent anchorMapOffice={anchorMapOffice} openPopup={openPopup} goToOfficeId={goToOfficeId}/>

        </section>
    );
}

export default Details;