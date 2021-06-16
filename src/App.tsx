import React, {useState, useEffect} from "react";
import {zone as currentZone} from "./Zone";
import './App.css';

function App() {
    const [zone, setZone] = useState(currentZone());

    useEffect(() => {
        const interval = setInterval(() => setZone(currentZone()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    let nextZone;
    let current;
    if (zone.weekend) {
        nextZone = <p className="display-6">Lunes a las {zone.to}</p>
        current = <p className="display-6"> Todo el día</p>
        } else {
        nextZone = <p className="display-6">A las {zone.to}</p>
        current = <p className="display-6"> De {zone.from} a {zone.to}</p>        
    }
    return (
        <div className="container p-4">
            <div className="card-body">
                <h2 className="display-2 border-bottom"><strong>Franja actual</strong></h2>
                {current}
                <div><p className={"text-uppercase display-4 zone " + zone.current}>Hora {zone.current}</p></div>

            </div>
            <div className="card-body">
                <h2 className="display-3 border-bottom"><strong>Franja siguiente</strong></h2>
                {nextZone}
                <div><p className={"text-uppercase display-4 zone " + zone.next}>Hora {zone.next}</p></div>

            </div>
            <p className="lead p-5">Hecho con <a href="https://www.buymeacoffee.com/jcaro" target="_blank"
                                                 rel="noreferrer">❤️</a> por <a
                href="https://github.com/jcaromiq/" target="_blank" rel="noreferrer">Joaco</a></p>
        </div>
    );
}

export default App;
