interface Props {
    title: string,
    name: string,
    description: string,
    currentPrice?: any
}

function Zone({title, name, description, currentPrice}: Props) {
    return (
        <div className="card-body">
            <h2 className="display-2 border-bottom"><strong>{title}</strong></h2>
            <p className="display-6">{description}</p>
            <div className={"zone " + name}>
                <p className={"display-4 text-uppercase"}>Hora {name}</p>
                {currentPrice ? <p className={"display-6 "}>{currentPrice} €/kWh</p> : ""}
            </div>
        </div>
    )
}

export default Zone;
