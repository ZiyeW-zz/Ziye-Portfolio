import React, { useState, useEffect } from 'react';
import './bigheadercss.css';

function Typewriter({ text, turn='1'}) {
    const [displayText, setDisplayText] = useState("");
    let index = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayText((prevText) => prevText + text.charAt(index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 150);  // Adjust the typing speed by changing this value

        return () => clearInterval(interval);  // Cleanup interval on unmount
    }, [text]);

    return <span className="typewriter">{displayText}</span>;
}

export default Typewriter;