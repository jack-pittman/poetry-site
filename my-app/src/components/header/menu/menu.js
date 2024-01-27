import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './menu.css'; // Make sure to import your CSS file

function Menu() {
    var location = useLocation().pathname;

    return (
        <div className="menu">
            <Link to="/about">
                <p id={location === '/about' ? 'activeLink' : ''}>ABOUT</p>
            </Link>
            <Link to="/publications">
                <p id={location === '/publications' ? 'activeLink' : ''}>PUBLICATIONS</p>
            </Link>
            <Link to="/contact">
                <p id={location === '/contact' ? 'activeLink' : ''}>CONTACT</p>
            </Link>
        </div>
    );
}

export default Menu;
