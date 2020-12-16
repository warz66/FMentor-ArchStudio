import './Details.css';
import Office from './office/Office'
import React, { useState } from 'react'
import * as jsonOffices from "./offices.json";
import MapComponent from "./map/Map";

const Details = () => {
    const anchorMapOffice = "details-map-offices"
    const [openPopupOfficeId , setOpenPopupOfficeId] = useState(null);

    function goToMapOffice(office) {
        document.getElementById(anchorMapOffice).scrollIntoView({
            block: 'center',
            behavior: 'smooth',
            inline: 'nearest'
        });
        setOpenPopupOfficeId(office.id);
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

            <MapComponent anchorMapOffice={anchorMapOffice} openPopupOfficeId={openPopupOfficeId}/>

        </section>
    );
}

export default Details;