import React, {useState} from "react";
import {zone as currentZone} from "./Zone";
import useInterval from "./hooks/useInterval";
import './App.css';

function App() {
    const [zone, setZone] = useState(currentZone());

    useInterval(() => {
        setZone(currentZone())
    }, 1000)


    return (
        <div className="container p-4">
            <div className="card-body">
                <h2 className="display-2 border-bottom"><strong>Franja actual</strong></h2>
                <p className="display-6">{zone.weekend ? 'Todo el dia' : `De ${zone.from} a ${zone.to}`}</p>
                <div>
                    <p className={"text-uppercase display-4 zone " + zone.current}>Hora {zone.current}</p>
                </div>

            </div>
            <div className="card-body">
                <h2 className="display-3 border-bottom"><strong>Franja siguiente</strong></h2>
                <p className="display-6">{zone.weekend ? `Lunes a las ${zone.to}` : `A las ${zone.to}`}</p>
                <div>
                    <p className={"text-uppercase display-4 zone " + zone.next}>Hora {zone.next}</p>
                </div>

            </div>
            <p className="lead p-5">Hecho con <a className="text-decoration-none"
                                                 href="https://www.buymeacoffee.com/jcaro" target="_blank"
                                                 rel="noreferrer">☕️️</a> por <a
                className="text-decoration-none" href="https://github.com/jcaromiq/tarifa_luz" target="_blank"
                rel="noreferrer">Joaco</a></p>
        </div>
    );
}

export default App;
