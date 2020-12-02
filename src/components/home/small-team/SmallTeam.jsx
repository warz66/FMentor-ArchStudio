import './SmallTeam.css';
import Button from 'components/button/Button'
import imgSmallTeamMobile from 'assets/home/mobile/image-small-team.jpg'
import imgSmallTeamTablet from 'assets/home/tablet/image-small-team.jpg'
import imgSmallTeamDesktop from 'assets/home/desktop/image-small-team.jpg'

const SmallTeam = () => {
    
    return (
        <section id="small-team">
            <picture>
                <source srcSet={imgSmallTeamMobile} media="(max-width: 450px)" type="image/jpeg"/>
                <source srcSet={imgSmallTeamTablet} media="(max-width: 850px)" type="image/jpeg"/>
                <img src={imgSmallTeamDesktop} alt="Small team"/>
            </picture>
            <div id="small-team-info">
                <h2>Small team, big ideas</h2>
                <Button path="/about-us" text="About Us"/>
            </div>
        </section>
    );
}

export default SmallTeam;