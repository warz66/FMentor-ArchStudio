import './AboutUs.css';
import React, { useEffect } from 'react';
import imgAboutMobile from 'assets/about/mobile/image-hero.jpg'
import imgAboutTablet from 'assets/about/tablet/image-hero.jpg'
import imgAboutDesktop from 'assets/about/desktop/image-hero.jpg'

const AboutUs = ({assignLocation}) => {

    useEffect(() => {
        assignLocation("ABOUT US");
    });

    return (
        <div id="about-us">
            <div id="hero">
                <picture>
                    <source srcSet={imgAboutMobile} media="(max-width: 580px)" type="image/jpeg"/>
                    <source srcSet={imgAboutTablet} media="(max-width: 850px)" type="image/jpeg"/>
                    <img src={imgAboutDesktop} alt="About hero"/>
                </picture>
                <div id="hero-info">
                    <span className="h1-design-light">About</span>
                    <div id="hero-text">
                        <h2>Your team of professionals</h2>
                        <p>
                        Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;