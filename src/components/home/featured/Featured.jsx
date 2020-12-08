import './Featured.css';
import Button from 'components/button/Button'
import ProjectsGallery from 'components/projectsGallery/ProjectsGallery'
import arrayProjectCards from './featuredProjectCardsHome';

const Featured = () => {
    
    return (
        <section id="featured">
            <div>
                <h2>Featured</h2>
                <Button path="/portfolio" text="See All"/>
            </div>

            <ProjectsGallery  arrayProjectCards={arrayProjectCards} numberDesign={true} date={false}/>

        </section>
    );
}

export default Featured;