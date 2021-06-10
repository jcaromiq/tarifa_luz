import React, {useState, useRef, useEffect} from "react";
import {current as currentZone} from "./Zone";
import './App.css';

function App() {
    const [time, setTime] = useState(currentZone());

    useEffect(() => {
        const interval = setInterval(() => setTime(currentZone()), 1000);
        return () => {
            setTime(currentZone());
        };
    }, []);
    return (
        <div className={"vh-100 w-100 " + time}>
            <h1>{time}</h1>
        </div>
    );
}

export default App;
