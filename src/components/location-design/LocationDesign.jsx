import './LocationDesign.css';

function LocationDesign(props) {

    return (
        <div id="location-design">
            <span></span>
            <span>{props.location}</span>
        </div>
    );
}

export default LocationDesign;