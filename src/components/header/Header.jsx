import './Header.css';
import logo from 'assets/logo.svg';
import React, { useState } from 'react';
import { useLocation, Link } from "react-router-dom";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const location = useLocation()
    
    return (
        <header>
            <div>
                <Link to="/">
                    <img id="logo" src={logo} alt="logo arch studio"/>
                </Link>
                <div id="menuH" onClick={() => setOpenMenu(!openMenu)} className={openMenu ? 'is-active' : ''}>
                    <span></span>
                </div>
                <div id="menu" className={openMenu ? 'is-open' : ''}>
                    <ul>
                        <li><Link onClick={() => setOpenMenu(!openMenu)} className={(location.pathname === '/portfolio') ? 'link-activated' : ''} to="/portfolio">Portfolio</Link></li>
                        <li><Link onClick={() => setOpenMenu(!openMenu)} className={(location.pathname === '/about-us') ? 'link-activated' : ''} to="/about-us">About Us</Link></li>
                        <li><Link onClick={() => setOpenMenu(!openMenu)} className={(location.pathname === '/contact') ? 'link-activated' : ''} to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;