import './Home.css';
import React, { useEffect, useLayoutEffect } from 'react';
import Carousel from 'components/home/carousel/Carousel';
import Welcome from 'components/home/welcome/Welcome';
import SmallTeam from 'components/home/small-team/SmallTeam';
import Featured from 'components/home/featured/Featured';

const Home = ({assignLocation}) => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    
    useEffect(() => {
        assignLocation("HOME");
    });

    return (
        <div id="home">

            <Carousel/>

            <Welcome/> 

            <SmallTeam/>

            <Featured/>

        </div>
    );
}

export default Home;