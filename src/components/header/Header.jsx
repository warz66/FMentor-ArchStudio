import './Header.css';
import logo from 'assets/logo.svg';
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const location = useLocation();

    function handleMenu() {
        setOpenMenu(!openMenu);
    }

    useEffect(() => {
        function closeMenuHandleResize() {
            if(window.innerWidth > 730) {
                setOpenMenu(false);
            }
        }
        window.addEventListener('resize', closeMenuHandleResize);
        return () => {
            window.removeEventListener('resize', closeMenuHandleResize);
        }
    });
    
    return (
        <header>
            <div>
                <Link to="/">
                    <img id="logo" src={logo} alt="logo arch studio"/>
                </Link>
                <div id="menuH" onClick={handleMenu} className={openMenu ? 'is-active' : ''}>
                    <span></span>
                </div>
                <div id="menu" className={openMenu ? 'is-open' : ''}>
                    <ul>
                        <li><Link onClick={handleMenu} className={(location.pathname === '/portfolio') ? 'link-activated' : ''} to="/portfolio">Portfolio</Link></li>
                        <li><Link onClick={handleMenu} className={(location.pathname === '/about-us') ? 'link-activated' : ''} to="/about-us">About Us</Link></li>
                        <li><Link onClick={handleMenu} className={(location.pathname === '/contact') ? 'link-activated' : ''} to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <span id="menu-curtain" onClick={handleMenu} className={openMenu ? 'is-open' : ''}></span>
            </div>
        </header>
    );
}

export default Header;