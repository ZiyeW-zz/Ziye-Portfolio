import React, { useState, useEffect } from 'react';
import './typewritercss.css';

function Typewriter({ text, turn='1'}) {
    const [displayText, setDisplayText] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);
    let index = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayText((prevText) => prevText + text.charAt(index));
                index++;
            } else {
                clearInterval(interval);
                setCursorVisible(false);
            }
        }, 50);  // Adjust the typing speed by changing this value

        return () => clearInterval(interval);  // Cleanup interval on unmount
    }, [text]);
    
    const cursorStyle = {
        display: cursorVisible ? 'inline' : 'none',
    };

    return (
        <span className="typewriterbasics">
            {displayText}
            <span className="cursor" style={cursorStyle}>|</span>
        </span>
    );
}

export default Typewriter;