import './index.css'
import websortLogo from '../../assets/logo.png';
import menuIcon from '../../assets/menuVector.png';
import { Link } from 'react-router-dom';

import React, { useState } from 'react';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="navbar-container">
            <div className="navbar-header">
                <img src={websortLogo} alt="websort logo" className="websort-logo" />
                <img
                    src={menuIcon}
                    alt="menu"
                    className="menu-icon"
                    onClick={handleMenuClick}
                    style={{ cursor: 'pointer', marginLeft: 'auto' }}
                />
                {showMenu && (
                    <div className="popup-menu">
                        <ul className="navbar-list-popup">
                            <li className="navbar-item">
                                <Link to="/" className="logo-link">Home</Link> 
                            </li>
                            <li className="navbar-item">
                                <Link to="/about" className="logo-link">About Us</Link> 
                            </li>
                            <li className="navbar-item">
                                <Link to="/services" className="logo-link">Services</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/projects" className="logo-link">Projects</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/careers" className="logo-link">Careers</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/contact" className="logo-link">Contact Us</Link> 
                            </li>
                            {/* Uncomment the following lines if you want to add more items */}
                            {/* <li className="navbar-item">About Us</li>
                            <li className="navbar-item">Contact Us</li> */}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;