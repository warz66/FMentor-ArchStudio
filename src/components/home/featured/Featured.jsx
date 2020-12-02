import './Featured.css';
import Button from 'components/button/Button'
import FeaturedCard from 'components/featuredCard/FeaturedCard'
import cards from './featuredCards';

const Featured = () => {
    
    return (
        <section id="featured">
            <div>
                <h2>Featured</h2>
                <Button path="/portofolio" text="See All"/>
            </div>
            <div id="featured-cards">
                {cards.map( (card, index) => {
                                return <FeaturedCard card={card} home={true} index={index+1} key={card.title}/> 
                        })}
            </div> 
        </section>
    );
}

export default Featured;