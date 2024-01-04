import React from "react";
import './colorSchemeToggle-style.css';


const ColorSchemeToggle = ({ isDarkMode, ontoggle}) => {
    return (
        <button className="color-scheme-toggle" onClick={ontoggle}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
    );
}

export default ColorSchemeToggle;