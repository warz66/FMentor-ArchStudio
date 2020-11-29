import './Home.css';
import React, { useEffect } from 'react';

const Home = ({assignLocation}) => {
    
    useEffect(() => {
        assignLocation("HOME");
    });

    return (
        <div id="home">

        </div>
    );
}

export default Home;