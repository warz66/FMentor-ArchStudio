import './Portfolio.css';
import ProjectsGallery from 'components/projectsGallery/ProjectsGallery'
import arrayProjectCards from './portfolioProjectCards';
import React, { useEffect, useLayoutEffect } from 'react';

const Portfolio = ({assignLocation}) => {
    
    /*useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });*/

    useEffect(() => {
        assignLocation("PORTFOLIO");
    });

    return (
        <div id="portfolio">
            <ProjectsGallery arrayProjectCards={arrayProjectCards}/>
        </div>
    );
}

export default Portfolio;