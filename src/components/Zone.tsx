import PriceExamples from "./PricesExamples";

interface Props {
    title: string,
    name: string,
    description: string,
    currentPrice?: number
}

function Zone({title, name, description, currentPrice}: Props) {
    return (
        <div className="card-body">
            <h2 className="display-2 border-bottom"><strong>{title}</strong></h2>
            <p className="display-6">{description}</p>
            <div className={"zone d-flex flex-column " + name}>
                <p className={"display-4 mb-0 text-uppercase"}>Hora {name}</p>
                {currentPrice ?
                    <div className={"d-flex flex-row justify-content-center"}>
                        <p className={"display-6 mb-0 "}>{currentPrice.toLocaleString()} €/kWh</p>
                        <PriceExamples price={currentPrice}/>
                    </div>
                    :
                    ""}
            </div>
        </div>
    )
}

export default Zone;
