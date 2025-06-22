import React, { useState } from 'react';
import './index.css';

// Import your local images
import img1 from '../../assets/your-image1.png';
import img2 from '../../assets/your-image2.png';
import img3 from '../../assets/your-image3.png';
import img4 from '../../assets/your-image4.png';

// Use the imported images in the array
const images = [
  img1,
  img2,
  img3,
  img4
];

function Carousel1() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel1-container">
      <button className="carousel1-btn" onClick={prevSlide}>&lt;</button>
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="carousel1-image"
      />
      <button className="carousel1-btn" onClick={nextSlide}>&gt;</button>
      <div className="carousel1-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`carousel1-dot${idx === current ? ' active' : ''}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel1;