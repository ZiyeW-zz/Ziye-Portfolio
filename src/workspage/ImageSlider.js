import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './ImageSlider.css';

function ImageSlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Show two images at a time, calculate the visible pair
    const visibleImages = [
        images[currentIndex],
        images[(currentIndex + 1) % images.length] // Loop back when reaching the end
    ];

    // Function to move to the next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to move to the previous image
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider-container">
            {/* Chevron buttons outside of the slider */}
            <button onClick={prevImage} className="slider-button-left">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div className="slider">
                {/* Display two images side by side */}
                {visibleImages.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index}`} className="slider-image" />
                ))}
            </div>

            <button onClick={nextImage} className="slider-button-right">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}

export default ImageSlider;
