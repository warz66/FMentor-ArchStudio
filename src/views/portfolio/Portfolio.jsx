import './Portfolio.css';
import ProjectsGallery from 'components/projectsGallery/ProjectsGallery'
import arrayProjectCards from './portfolioProjectCards';
import React, { useEffect } from 'react';

const Portfolio = ({assignLocation}) => {

    useEffect(() => {
        assignLocation("PORTFOLIO");
    });

    return (
        <main id="portfolio" className="slideY">
            <ProjectsGallery arrayProjectCards={arrayProjectCards}/>
        </main>
    );
}

export default Portfolio;