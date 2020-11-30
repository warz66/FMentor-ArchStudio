import './Home.css';
import Carousel from 'components/carousel/Carousel';
import React, { useEffect } from 'react';

const Home = ({assignLocation}) => {
    
    useEffect(() => {
        assignLocation("HOME");
    });

    return (
        <div id="home">
            <Carousel/>
        </div>
    );
}

export default Home;