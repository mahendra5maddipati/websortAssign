import './index.css'
import {Link} from 'react-router-dom'
import homeIcon from '../../assets/Home.png';
import serviceIcon from '../../assets/Services.png';
import projectIcon from '../../assets/Projects.png';
import careersIcon from '../../assets/Careers.png';

import React from 'react';

function MobileNavbar() {
    return (
        <div className="fixed-navbar">
            <nav>
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to="/" className="logo-link">
                            <img src={homeIcon} alt="Home Logo" className="logo" />
                            <span className="icon-label">Home</span>
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/services" className="logo-link">
                            <img src={serviceIcon} alt="Services Logo" className="logo" />
                            <span className="icon-label">Services</span>
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/projects" className="logo-link">
                            <img src={projectIcon} alt="Project Logo" className="logo" />
                            <span className="icon-label">Project</span>
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/careers" className="logo-link">
                            <img src={careersIcon} alt="Careers Logo" className="logo" />
                            <span className="icon-label">Careers</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default MobileNavbar;