import imgParamourMobile from 'assets/home/mobile/image-hero-paramour.jpg'
import imgParamourTablet from 'assets/home/tablet/image-hero-paramour.jpg'
import imgParamourDesktop from 'assets/home/desktop/image-hero-paramour.jpg'

import imgSeraphMobile from 'assets/home/mobile/image-hero-seraph.jpg'
import imgSeraphTablet from 'assets/home/tablet/image-hero-seraph.jpg'
import imgSeraphDesktop from 'assets/home/desktop/image-hero-seraph.jpg'

import imgFederalMobile from 'assets/home/mobile/image-hero-federal.jpg'
import imgFederalTablet from 'assets/home/tablet/image-hero-federal.jpg'
import imgFederalDesktop from 'assets/home/desktop/image-hero-federal.jpg'

import imgTrinityMobile from 'assets/home/mobile/image-hero-trinity.jpg'
import imgTrinityTablet from 'assets/home/tablet/image-hero-trinity.jpg'
import imgTrinityDesktop from 'assets/home/desktop/image-hero-trinity.jpg'


const slides = [
    {
        name: "Paramour",
        title: "Project Paramour", 
        text: "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
        image: {
            mobile: imgParamourMobile,
            tablet: imgParamourTablet,
            desktop: imgParamourDesktop
        },
    },
    {
        name: "Seraph",
        title: "Seraph Station", 
        text: "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
        image: {
            mobile: imgSeraphMobile,
            tablet: imgSeraphTablet,
            desktop: imgSeraphDesktop
        }, 
    },
    {
        name: "Federal",
        title: "Federal II Tower", 
        text: "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
        image: {
            mobile: imgFederalMobile,
            tablet: imgFederalTablet,
            desktop: imgFederalDesktop
        }, 
    },
    {
        name: "Trinity",
        title: "Trinity Bank Tower", 
        text: "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
        image: {
            mobile: imgTrinityMobile,
            tablet: imgTrinityTablet,
            desktop: imgTrinityDesktop
        }, 
    }
];

export default slides;