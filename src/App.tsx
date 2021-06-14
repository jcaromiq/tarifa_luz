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
        <div className="space-y-5 d-flex flex-column justify-content-center pt-5 text-center">
            <div><h1>Franja actual</h1></div>
            <div><p className={"text-uppercase font-weight-bold " + time}>Hora {time}</p></div>
            <p>Hecho con <a href="https://www.buymeacoffee.com/jcaro" target="_blank" rel="noreferrer" >❤️</a> por <a
                href="https://github.com/jcaromiq/" target="_blank" rel="noreferrer" >Joaco</a></p>
        </div>
    );
}

export default App;
