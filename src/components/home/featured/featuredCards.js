import imgDelSolMobile from 'assets/portfolio/mobile/image-del-sol.jpg'
import imgDelSolTablet from 'assets/portfolio/tablet/image-del-sol.jpg'
import imgDelSolDesktop from 'assets/portfolio/desktop/image-del-sol.jpg'

import img228BMobile from 'assets/portfolio/mobile/image-228b.jpg'
import img228BTablet from 'assets/portfolio/tablet/image-228b.jpg'
import img228BDesktop from 'assets/portfolio/desktop/image-228b.jpg'

import imgPrototypeMobile from 'assets/portfolio/mobile/image-prototype.jpg'
import imgPrototypeTablet from 'assets/portfolio/tablet/image-prototype.jpg'
import imgPrototypeDesktop from 'assets/portfolio/desktop/image-prototype.jpg'

const cards = [
    {
        title: "Project Del Sol",
        path: "/#",
        image: {
            mobile: imgDelSolMobile,
            tablet: imgDelSolTablet, 
            desktop: imgDelSolDesktop
        },
    },
    {
        title: "228B Tower",
        path: "/#",  
        image: {
            mobile: img228BMobile,
            tablet: img228BTablet, 
            desktop: img228BDesktop
        },
    },
    {
        title: "Le Prototype",
        path: "/#",  
        image: {
            mobile: imgPrototypeMobile,
            tablet: imgPrototypeTablet, 
            desktop: imgPrototypeDesktop
        },
    },
];

export default cards;