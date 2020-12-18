import './Hero.css';

const Hero = ({imgMobile, imgTablet, imgDesktop, heroTitle, heroTextTitle, heroTextParagraph}) => {

    return (
        <section id="hero">
            <picture>
                <source srcSet={imgMobile} media="(max-width: 580px)" type="image/jpeg"/>
                <source srcSet={imgTablet} media="(max-width: 850px)" type="image/jpeg"/>
                <img src={imgDesktop} alt="About hero"/>
            </picture>
            <div id="hero-info">
                <span className="h1-design-light">{heroTitle}</span>
                <div id="hero-text">
                    <h2>{heroTextTitle}</h2>
                    <p>{heroTextParagraph}</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;