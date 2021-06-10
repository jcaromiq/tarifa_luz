import React, {useState, useEffect} from "react";
import {current as currentZone} from "./Zone";
import './App.css';

function App() {
    const [time, setTime] = useState(currentZone());

    useEffect(() => {
        const interval = setInterval(() => setTime(currentZone()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className="d-flex flex-column justify-content-center pt-5 text-center">
            <h1>Franja actual</h1>
            <p className={"text-uppercase font-weight-bold mt-5 " + time}>Hora {time}</p>
        </div>
    );
}

export default App;
