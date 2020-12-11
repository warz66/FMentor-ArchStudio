import './Contact.css';
import { useEffect } from 'react';
import Hero from 'components/hero/Hero'
import imgContactMobile from 'assets/contact/mobile/image-hero.jpg'
import imgContactTablet from 'assets/contact/tablet/image-hero.jpg'
import imgContactDesktop from 'assets/contact/desktop/image-hero.jpg'

const Home = ({assignLocation}) => {
    
    useEffect(() => {
        assignLocation("CONTACT");
    });

    return (
        <div id="contact">

            <Hero 
                imgMobile={imgContactMobile}
                imgTablet={imgContactTablet}
                imgDesktop={imgContactDesktop}
                heroTitle="Contact"
                heroTextTitle="Tell us about your project"
                heroTextParagraph="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
            />

        </div>
    );
}

export default Home;