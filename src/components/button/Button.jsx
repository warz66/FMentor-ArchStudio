import './Button.css';
//import arrow from 'assets/icons/icon-arrow-white.svg';

import { Link } from "react-router-dom";

const Button = ({path = "/portfolio", text = "See Our Portfolio "}) => {

    return (
        <Link className="button" to={path}>
            <span>
                {text}
                {/*<img src={arrow} alt="arrow link"/>*/}
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><path fill="none" fillRule="evenodd" stroke="#fff" strokeWidth="2" d="M15 1l9 9-9 9M0 10h24"></path></svg>
            </span>
        </Link>
    );
}

export default Button;