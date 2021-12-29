import './lights.css'
import React, { useState} from 'react';
import Circles from './components/circles';


const App = () => {
  const [redLight, setredLight] = useState([]);
  const [yellowLight, setyellowLight] = useState([]);
  const [greenLight, setGreenLight] = useState([]);
  const [next, setnext] = useState([]);
  setnext("red");

  handeLightChange = () => {
    switch (next) {
      case "red":
        setredLight("red"),
        setyellowLight("white"),
        setGreenLight("white")
        setnext("green")
        break;
      case "green":
        setredLight("white"),
        setyellowLight("white"),
        setGreenLight("green")
        setnext("green")
        break;
      case "yellow":
        setredLight("white"),
        setyellowLight("yellow"),
        setGreenLight("white")
        setnext("green")
        break;
    }

  componentDidMount() {
    setInterval(() => { 
      handeLightChange();
    }, 2000)
  }
};
    
    return (
        <><h1>Traffic light</h1>
        <Circles color={redLight} />
        <Circles color={yellowLight} />
        <Circles color={greenLight} /></>

    );
}

export default App;