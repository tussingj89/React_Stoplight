import './lights.css'
import React, { useEffect, useState} from 'react';
import Circles from './components/circles';


const Light = () => {
  const [redLight, setRedLight] = useState("");
  const [yellowLight, setYellowLight] = useState("");
  const [greenLight, setGreenLight] = useState("");
  const [next, setNext] = useState("");
  setNext("red");

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
    setInterval(() => { 
      handeLightChange();
    }, 2000)
  });
  setRedLight("red")
  console.log(redLight)
  console.log(yellowLight)
  console.log(greenLight)
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