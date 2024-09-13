import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './ImageSlider.css';

function VerticalImageSlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Show one image at a time, calculate the current image
    const currentImage = images[currentIndex];

    // Function to move to the next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to move to the previous image
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider-container-vertical">
            {/* Chevron buttons outside of the slider */}
            <button onClick={prevImage} className="slider-button-up">
                <FontAwesomeIcon icon={faChevronUp} />
            </button>

            <div className="slider-vertical">
                {/* Display one image at a time */}
                <img src={currentImage} alt={`Slide ${currentIndex}`} className="slider-image-vertical" />
            </div>

            <button onClick={nextImage} className="slider-button-down">
                <FontAwesomeIcon icon={faChevronDown} />
            </button>
        </div>
    );
}

export default VerticalImageSlider;
