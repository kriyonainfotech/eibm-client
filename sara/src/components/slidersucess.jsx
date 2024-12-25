import React, { useState, useEffect } from "react";
import '../styles/Companies.css'; // Your CSS goes here

const Slider = () => {
  const navImages = [
    "../../ce1.jpeg",
    "../../ce2.jpeg",
    "../../ce3.jpeg",
    "../../ce4.jpeg",
    "../../ce5.jpeg",
    "../../ce6.jpeg",
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Preload images
  useEffect(() => {
    navImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleNext = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % navImages.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? navImages.length - 1 : prevIndex - 1
    );
  };

  const handleNavClick = (index) => {
    setCurrentSlideIndex(index);
  };

  return (
    <div className="image-slider">
      <section className="slider__content">
        <button
          type="button"
          className="slider-control--button prev-button"
          onClick={handlePrev}
        >
          <svg width="16" height="16" fill="currentColor" className="icon arrow-left-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
        </button>

        <main className="image-display">
          <img src={navImages[currentSlideIndex]} alt={`Slide ${currentSlideIndex + 1}`} />
        </main>

        <button
          type="button"
          className="slider-control--button next-button"
          onClick={handleNext}
        >
          <svg width="16" height="16" fill="currentColor" className="icon arrow-right-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        </button>
      </section>

      <nav className="slider-navigation">
        {navImages.map((src, index) => (
          <button
            key={index}
            className="nav-button"
            aria-selected={index === currentSlideIndex}
            onClick={() => handleNavClick(index)}
          >
            <img className="thumbnail" src={src} alt={`Thumbnail ${index + 1}`} />
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Slider;
