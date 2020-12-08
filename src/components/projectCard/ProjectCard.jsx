import './ProjectCard.css'
import { Link } from "react-router-dom";

const ProjectCard = ({projectCard, numberDesign, date, index}) => {
    
    return (
        <div className="project-card">
            <Link to={projectCard.path}>
                <picture>
                    <source srcSet={projectCard.image.mobile} media="(max-width: 450px)" type="image/jpeg"/>
                    <source srcSet={projectCard.image.tablet} media="(max-width: 1040px)" type="image/jpeg"/>
                    <img src={projectCard.image.desktop} alt={projectCard.title}/>
                </picture>
            </Link>
            {
                (numberDesign && 
                    <span className="design-number">{index}</span>) 
            }
            <div className="project-card-info">
                <Link to={projectCard.path}>
                    <h3>{projectCard.title}</h3 >
                </Link>
                {
                    (date && 
                        <span>{projectCard.date}</span>) 
                    ||
                        <Link to="/portfolio">View All Projects</Link>       
                } 
            </div>
        </div>
    );
}

export default ProjectCard;