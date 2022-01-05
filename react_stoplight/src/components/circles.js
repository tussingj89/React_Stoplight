import React from 'react';
import './circles.css';

function circles({color}) {
    return(
    <div className="circle" style={{backgroundColor: color}}></div>)
}

export default circles;
