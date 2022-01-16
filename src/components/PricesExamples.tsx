import {useEffect, useState} from "react";
import ReactTooltip from 'react-tooltip'
const items = [
    {description: "Poner una lavadora", kwh: 1, hours: 1},
    {description: "Poner una secadora", kwh: 2, hours: 1.5},
    {description: "Poner el lavavajillas", kwh: 1.74, hours: 1.5},
    {description: "Cocinar 60 minutos en el horno", kwh: 1.3, hours: 1.2},
]

interface Props {
    price?: number
}

class Price {
    value: number
    description: string

    constructor(value: number, description: string) {
        this.value = value;
        this.description = description;
    }
}

function PriceExamples({price}: Props) {
    const [prices, setPrices] = useState(new Array<Price>());
    useEffect(() => {
        const c = items.map(p => new Price(p.kwh * p.hours * price!, p.description))
        setPrices(c);
    }, [price])

    return (
        <>
          <div className={"cursor-pointer"} data-tip data-for="registerTip">
            ❓
          </div>
  
        <ReactTooltip id="registerTip" place="left" effect="float">
          <div className="flex flex-col bg-gray-900 align-center">
          {prices.map((price, i) =>
                    <p key={i}>{price.description}: {price.value.toLocaleString()}€</p>
                )}
          </div>
        </ReactTooltip>
      </>
        
    )
}

export default PriceExamples
