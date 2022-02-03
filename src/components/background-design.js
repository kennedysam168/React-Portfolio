import React from 'react';
import {  Link } from "react-router-dom";
import background from "/Users/samkennedy/Desktop/React-Portfolio/src/wood-ring-GIF.gif";


const BackgroundDesign = () => {
    return (
    <div className="background-design">
        <div style={{ backgroundImage: `url(${background})` }}>
      </div>
    </div>
    )
};



export default BackgroundDesign;