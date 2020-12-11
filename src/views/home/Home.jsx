import './Home.css';
import { useEffect } from 'react';
import Carousel from 'components/home/carousel/Carousel';
import Welcome from 'components/home/welcome/Welcome';
import SmallTeam from 'components/home/small-team/SmallTeam';
import Featured from 'components/home/featured/Featured';

const Home = ({assignLocation}) => {
    
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