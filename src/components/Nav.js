import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../images/Logo.webp';
import menu from '../images/menu.png';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
      
    function handleMenuClick() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
      <nav className="nav-container">
            <Link to="/"><img className="nav-logo" src={logo}></img></Link>

            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <li className="nav-li"><Link to="/">Home</Link></li>
                <li className="nav-li"><Link to="/about">About Me</Link></li>
                <li className="nav-li"><Link to="/work">My Work</Link></li>
                <li className="nav-li"><Link to="/contact">Contact Me</Link></li>
            </ul>

            <img className="nav-menu" src={menu} onClick={handleMenuClick}></img>
        </nav>
    )
}


export default Nav;