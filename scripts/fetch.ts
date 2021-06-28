import {parse} from "https://deno.land/std@0.99.0/datetime/mod.ts";
import {ensureDirSync} from "https://deno.land/std@0.99.0/fs/mod.ts";

const TOKEN = Deno.env.get("API_TOKEN")


main()

function main() {
    getPrices()
        .then(parseData)
        .then(writeFile)
}

function getPrices(): Promise<any> {
    const response = fetch("https://api.esios.ree.es/indicators/10391?geo_ids[]=8741", {
        method: "GET",
        headers: {
            "Authorization": `Token token=${TOKEN}`,
        },
    })
    return response.then(j => j.json())
}

function parseData(jsonData: any): Prices {
    const updatedAt = jsonData.indicator.values_updated_at
    const prices = jsonData.indicator.values.map(({value, datetime}: any) => {
        return {
            price: (value / 1000).toFixed(4),
            hour: parse(datetime, "yyyy-MM-ddTHH:mm:ss.SSS'+'02:00").getHours()
        }
    })

    return {
        prices: prices,
        updatedAt
    }
}

function writeFile(prices: Prices) {
    ensureDirSync("public/data")
    Deno.writeTextFileSync("public/data/prices.json", JSON.stringify(prices))
}

interface Price {
    hour: number
    price: number
}

interface Prices {
    updatedAt: string
    prices: Array<Price>
}
