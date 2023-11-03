import React, { useState } from 'react';
import app_name from '../app_name.png'

function FadingImage() {
  const [isVisible, setIsVisible] = useState(false);

  const handleImageLoad = () => {
    setIsVisible(true);
  };

  return (
    <div className={`image-container ${isVisible ? 'visible' : ''}`}>
      <img
        src={app_name}
        alt="Your Image"
        onLoad={handleImageLoad}
      />
    </div>
  );
}

export default FadingImage;

