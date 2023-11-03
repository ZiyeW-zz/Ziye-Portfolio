import React, { useEffect } from 'react';
import './myworkcss.css';

function RectangleForWork() {
  useEffect(() => {
    const adjustHeight = () => {
      const rect = document.querySelector('.rectforwork');
      if (rect) {
        const width = rect.offsetWidth;
        const height = (1450400 / width); // Preserved area / current width
        rect.style.height = `${height}px`;
      }
    };
    
    // Adjust height on mount and when resizing the window
    adjustHeight();
    window.addEventListener('resize', adjustHeight);
    
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('resize', adjustHeight);
  }, []);

  return <div className="rectforwork">Content</div>;
}

export default RectangleForWork;
