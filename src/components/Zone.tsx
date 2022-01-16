import PriceExamples from "components/PricesExamples";

interface Props {
    title: string,
    name: string,
    description: string,
    price?: number
}

function Zone({title, name, description, price}: Props) {
    return (
        <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold text-left">{title}</h2>
            <div className={"text-left space-y-1 px-6 py-4 rounded-xl border-black border-2 shadow-black shadow-lg bg-"+name}>
                <h3 className="pb-2 text-2xl capitalize text-center font-bold">{name}</h3>
                <p className="text-xl">⏱ {description}</p>
                {price ?
                    <div className={"flex flex-row justify-content-center"}>
                        <p className="text-lg">💰{price.toLocaleString()} €/kWh</p>
                        <PriceExamples price={price}/>
                    </div>
                :
                ""}
                
            </div>
        </div>
        
    )
}

export default Zone;
