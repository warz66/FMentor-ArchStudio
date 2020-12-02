import './FeaturedCard.css'
import { Link } from "react-router-dom";

const FeaturedCard = ({card, home = false, index}) => {
    
    return (
        <div className="featured-card">
            <Link to={card.path}>
                <picture>
                    <source srcSet={card.image.mobile} media="(max-width: 450px)" type="image/jpeg"/>
                    <source srcSet={card.image.tablet} media="(max-width: 970px)" type="image/jpeg"/>
                    <img src={card.image.desktop} alt={card.title}/>
                </picture>
            </Link>
            <span className="design-number">{index}</span>
            <div className="featured-card-info">
                <h3>{card.title}</h3 >
                {
                    (home && 
                        <Link to="/portfolio">View All Projects</Link>) 
                    ||
                        <span>{card.date}</span>         
                } 
            </div>
        </div>
    );
}

export default FeaturedCard;