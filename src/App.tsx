import React, {useState} from "react";
import {zone as currentZone} from "./domain/Zone";
import useInterval from "./hooks/useInterval";
import './App.css';
import Footer from "./components/Footer";
import Zone from "./components/Zone";

function App() {
    const [zone, setZone] = useState(currentZone());

    useInterval(() => {
        setZone(currentZone())
    }, 1000)

    return (
        <div className="container p-4">
            <Zone title="Franja actual"
                  name={zone.current}
                  description={zone.currentZoneLabel()}/>
            <Zone title="Franja siguiente"
                  name={zone.next}
                  description={zone.nextZoneLabel()}/>
            <Footer/>
        </div>
    );
}

export default App;
