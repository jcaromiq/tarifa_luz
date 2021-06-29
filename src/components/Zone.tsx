import React from "react";


function Zone({title, name, description}:any) {
    return (
        <div className="card-body">
            <h2 className="display-2 border-bottom"><strong>{title}</strong></h2>
            <p className="display-6">{description}</p>
            <div>
                <p className={"text-uppercase display-4 zone " + name}>Hora {name}</p>
            </div>
        </div>
    )
}

export default Zone;
