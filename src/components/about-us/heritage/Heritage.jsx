import './Heritage.css';
import imgHeritage from 'assets/about/desktop/image-heritage.jpg';

const Heritage = () => {

    return (
        <section id="heritage">
            <div id="heritage-text">
                <h2>Our<br/>Heritage</h2>
                <p>
                    Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.
                    <br/><br/>
                    Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. 
                    <br/><br/>
                    Our small team of world-class professionals provides input on every project.  
                </p>
            </div>
            <img src={imgHeritage} alt="Our heritage"/>
        </section>
    );
}

export default Heritage;