import './index.css';
import React from 'react';

import Carousel from '../../subComponents/Carousel';

import MobileNavbar from '../../subComponents/Mobilenavbar';

import Navbar from '../../subComponents/Navbar';


function Home() {
    return (
        <div className="home-container">
            <Navbar />
            <h1>Projects</h1>
            <Carousel />
            <MobileNavbar />
        </div>
    );
}

export default Home;