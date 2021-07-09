import PriceExamples from "./PricesExamples";

interface Props {
    title: string,
    name: string,
    description: string,
    price?: number
}

function Zone({title, name, description, price}: Props) {
    return (
        <div className="card-body">
            <h2 className="display-2 border-bottom"><strong>{title}</strong></h2>
            <p className="display-6">{description}</p>
            <div className={"zone d-flex flex-column " + name}>
                <p className={"display-4 mb-0 text-uppercase"}>Hora {name}</p>
                {price ?
                    <div className={"d-flex flex-row justify-content-center"}>
                        <p className={"display-6 mb-0 "}>{price.toLocaleString()} €/kWh</p>
                        <PriceExamples price={price}/>
                    </div>
                    :
                    ""}
            </div>
        </div>
    )
}

export default Zone;
