import './Header.css';
import logo from 'assets/logo.svg';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header>
            <div>
                <img id="logo" src={logo} alt="logo arch studio"/>
                <div id="menuH" onClick={() => setOpenMenu(!openMenu)} className={openMenu ? 'is-active' : ''}>
                    <span></span>
                </div>
                <div id="menu" className={openMenu ? 'is-open' : ''}>
                    <ul>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;