import React, { useState, useRef } from 'react';
import './index.css';

import web from '../../assets/web development.jpg';
import app from '../../assets/App development.jpg';
import design from '../../assets/UI design.jpg';
import digital from '../../assets/Digital Marketing.jpg';


const images = [{img: app, caption: 'App Development'},
    {img: design, caption: 'UI/UX Design'}, 
    {img: web, caption: 'Web Development'},
    {img: digital, caption: 'Digital Marketing'}];

function App() {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);
  const isDragging = useRef(false);

  // Touch events
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    handleSwipe();
  };

  // Mouse events
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    endX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    handleSwipe();
  };

  const handleSwipe = () => {
    const delta = startX.current - endX.current;

    if (delta > 50) {
      // swipe left (next)
      setIndex((prev) => (prev + 1) % images.length);
    } else if (delta < -50) {
      // swipe right (prev)
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div
      className="coverflow"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // if mouse leaves while dragging
    >
      {images.map((src, i) => {
        let position = 'nextSlide';

        if (i === index) {
          position = 'activeSlide';
        } else if (i === (index - 1 + images.length) % images.length) {
          position = 'prevSlide';
        }

        return (
            <div key={i} className={`slideWrapper ${position}`}>
                <img
                    src={src.img}
                    alt={`Slide ${i + 1}`}
                    className="slide"
                />
                <h1 className="caption">{src.caption}</h1>
            </div>

        );
      })}
    </div>
  );
}

export default App;

// function Carousel() {
//     const [index, setIndex] = useState(0);
//     const satrtX = useRef(0);
//     const endX = useRef(0);

//     const handleTouchStart = (e) => {
//         satrtX.current = e.touches[0].clientx;
//     };
//     const handleTouchMove = (e) => {
//         endX.current = e.touches[0].clientX;
//     }

//     const handleTouchEnd = () => {
//         const delta = satrtX.current - endX.current;

//         if(delta > 50){
//             setIndex((prev) => (prev + 1) % images.length);
//         } else if (delta < -50) {
//             setIndex((prev) => (prev - 1 + images.length) % images.length)
//         }
//     };

//     // const prevSlide = () => {
//     //     setIndex((prev) => (prev - 1 + images.length) % images.length);
//     // };

//     // const nextSlide = () => {
//     //     setIndex((prev) => (prev + 1) % images.length);
//     // };

//     return (
//         <div className = "carousel-container" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
//             {images.map((src, i) => {
//                 let position = 'nextSlide';

//                 if (i === index){
//                     position = 'activeSlide'
//                 } else if (i === (index - 1 + images.length) % images.length){
//                     position = 'prevSlide';
//                 }

//                 return (
//                     <img key = {i} src = {src} alt = {`Slide ${i+1}`} className = {`slide ${position}`} />
//                 )
//             })}
//         </div>
//     )
// }

// export default Carousel;