import {Header, Icon, List, Popup} from "semantic-ui-react";
import {useEffect, useState} from "react";

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
        <Popup
            position="top center"
            trigger={<Icon name="question circle" size="large"/>}>
            <Header content={"Cuanto te costaría:"}/>
            <List>
                {prices.map(i =>
                    <List.Item>{i.description}: {i.value.toLocaleString()}€</List.Item>
                )}
            </List>
        </Popup>
    )
}

export default PriceExamples
