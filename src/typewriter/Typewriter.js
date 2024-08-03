import React, { useState, useEffect } from 'react';
import './typewritercss.css';

function Typewriter({ text, turn = '1', highlightLastNine = false }) {
    const [displayText, setDisplayText] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        let index = 0; // Move index inside useEffect to avoid closure issues
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayText((prevText) => prevText + text.charAt(index));
                index++;
            } else {
                clearInterval(interval);
                setCursorVisible(false);
            }
        }, 50); // Adjust the typing speed here

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [text]);

    const cursorStyle = {
        display: cursorVisible ? 'inline' : 'none',
    };

    // Determine if we need to style the last 9 characters
    const normalText = highlightLastNine ? displayText.slice(0, -9) : displayText;
    const highlightedText = highlightLastNine ? displayText.slice(-9) : '';

    return (
        <span className="typewriterbasics">
            {normalText}
            <span className="pink">{highlightedText}</span>
            <span className="cursor" style={cursorStyle}>|</span>
        </span>
    );
}

export default Typewriter;
