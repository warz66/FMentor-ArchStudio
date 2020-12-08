import './Portfolio.css';
import ProjectsGallery from 'components/projectsGallery/ProjectsGallery'
import arrayProjectCards from './portfolioProjectCards';
import React, { useEffect } from 'react';

const Portfolio = ({assignLocation}) => {

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