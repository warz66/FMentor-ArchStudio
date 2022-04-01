import './Home.css';
import { useEffect } from 'react';
import Slider from 'components/home/slider/Slider';
import Welcome from 'components/home/welcome/Welcome';
import SmallTeam from 'components/home/small-team/SmallTeam';
import Featured from 'components/home/featured/Featured';

const Home = ({assignLocation}) => {
    
    useEffect(() => {
        document.title = "Home | Arch Studio";
        assignLocation("HOME");
    },[assignLocation]);

    return (
        <main id="home" className="slideY">

            <Slider/>

            <Welcome/> 

            <SmallTeam/>

            <Featured/>

        </main>
    );
}

export default Home;