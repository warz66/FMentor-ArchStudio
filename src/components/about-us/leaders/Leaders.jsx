import './Leaders.css';
import Leader from 'components/leader/Leader';
import jake from 'assets/about/desktop/avatar-jake.jpg';
import thompson from 'assets/about/desktop/avatar-thompson.jpg';
import jackson from 'assets/about/desktop/avatar-jackson.jpg';
import maria from 'assets/about/desktop/avatar-maria.jpg';

const Leaders = () => {

    return (
        <div id="section-leaders">
            <h2>The<br/>Leaders</h2>
            <div id="the-leaders">
                <Leader image={jake} name="Jake Richards" spec="Chief Architect"/>
                <Leader image={thompson} name="Thompson Smith" spec="Head of Finance"/>
                <Leader image={jackson} name="Jackson Rourke" spec="Lead Designer"/>
                <Leader image={maria} name="Maria Simpson" spec="Senior Architect"/>
            </div>
        </div>
    );
}

export default Leaders;