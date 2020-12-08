import './ProjectsGallery.css';
import ProjectCard from 'components/projectCard/ProjectCard'

const ProjectsGallery = ({arrayProjectCards = [], numberDesign = false, date = true}) => {

    return (
        <div id="projects-gallery">
            {arrayProjectCards.map( (projectCard, index) => {
                            return <ProjectCard projectCard={projectCard} numberDesign={numberDesign} date={date} index={index+1} key={projectCard.title}/> 
                    })}
        </div> 
    );
}

export default ProjectsGallery;