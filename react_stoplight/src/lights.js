import './lights.css'
import React, { useEffect, useState} from 'react';
import Circles from './components/circles';


const Light = () => {
  const [redLight, setRedLight] = useState("red");
  const [yellowLight, setYellowLight] = useState("white");
  const [greenLight, setGreenLight] = useState("white");
  const [next, setNext] = useState("red");
  

  const handeLightChange = () => {
    switch (next) {
      case "red":
        setRedLight("red")
        setYellowLight("white")
        setGreenLight("white")
        setNext("green")
        break;
      case "green":
        setRedLight("white")
        setYellowLight("white")
        setGreenLight("green")
        setNext("yellow")
        break;
      default:
        setRedLight("white")
        setYellowLight("yellow")
        setGreenLight("white")
        setNext("red")
        break;
    }
  }
  useEffect(() => {
   const timeout = setTimeout(() => {
      handeLightChange();
    }, 2000)
    return () => {
      clearTimeout(timeout)
    }
  });

    return (
      <div className="light">
        <h1>Traffic light</h1>
        <Circles color={redLight} />
        <Circles color={yellowLight} />
        <Circles color={greenLight} />
      </div>
    );
  }

export default Light;