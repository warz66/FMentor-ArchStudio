import './Contact.css';
import { useEffect } from 'react';
import Hero from 'components/hero/Hero'
import Details from 'components/contact/details/Details'
import Connect from 'components/contact/connect/Connect'
import imgContactMobile from 'assets/contact/mobile/image-hero.jpg'
import imgContactTablet from 'assets/contact/tablet/image-hero.jpg'
import imgContactDesktop from 'assets/contact/desktop/image-hero.jpg'

const Home = ({assignLocation}) => {
    
    useEffect(() => {
        document.title = "Contact | Arch Studio";
        assignLocation("CONTACT");
    },[assignLocation]);

    return (
        <main id="contact" className="slideY">

            <Hero 
                imgMobile={imgContactMobile}
                imgTablet={imgContactTablet}
                imgDesktop={imgContactDesktop}
                heroTitle="Contact"
                heroTextTitle="Tell us about your project"
                heroTextParagraph="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
            />

            <Details/>

            <Connect/>

        </main>
    );
}

export default Home;