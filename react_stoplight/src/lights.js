import './lights.css'
import React, { useEffect, useState} from 'react';
import Circles from './components/circles';


const Light = () => {
  const [redLight, setRedLight] = useState("red");
  const [yellowLight, setYellowLight] = useState("grey");
  const [greenLight, setGreenLight] = useState("grey");
  const [next, setNext] = useState("red");
  

  const handeLightChange = () => {
    switch (next) {
      case "red":
        setRedLight("red")
        setYellowLight("grey")
        setGreenLight("grey")
        setNext("green")
        break;
      case "green":
        setRedLight("grey")
        setYellowLight("grey")
        setGreenLight("green")
        setNext("yellow")
        break;
      default:
        setRedLight("grey")
        setYellowLight("yellow")
        setGreenLight("grey")
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