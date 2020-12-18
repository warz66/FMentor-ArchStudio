import './AboutUs.css';
import { useEffect } from 'react';
import Hero from 'components/hero/Hero'
import Heritage from 'components/about-us/heritage/Heritage';
import Leaders from 'components/about-us/leaders/Leaders';
import imgAboutMobile from 'assets/about/mobile/image-hero.jpg'
import imgAboutTablet from 'assets/about/tablet/image-hero.jpg'
import imgAboutDesktop from 'assets/about/desktop/image-hero.jpg'

const AboutUs = ({assignLocation}) => {

    useEffect(() => {
        document.title = "About Us | Arch Studio";
        assignLocation("ABOUT US");
    },[]);

    return (
        <main id="about-us" className="slideY">

            <Hero 
                imgMobile={imgAboutMobile}
                imgTablet={imgAboutTablet}
                imgDesktop={imgAboutDesktop}
                heroTitle="About"
                heroTextTitle="Your team of professionals"
                heroTextParagraph="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings."
            />

            <Heritage/>

            <Leaders/>

        </main>
    );
}

export default AboutUs;