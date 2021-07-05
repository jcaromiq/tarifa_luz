import {ensureDirSync} from "https://deno.land/std@0.99.0/fs/mod.ts";

const TOKEN = Deno.env.get("API_TOKEN")

main()

function main() {
    getPrices()
        .then(parseData)
        .then(writeFile)
}

function getPrices(): Promise<any> {
    const today = new Date();

    const from = `${today.getFullYear()}-${today.getUTCMonth() + 1}-${today.getUTCDate()}`;
    const to = `${today.getFullYear()}-${today.getUTCMonth() + 1}-${today.getUTCDate() + 2}`;

    const response = fetch("https://api.esios.ree.es/indicators/10391?" +
        "geo_ids[]=8741" +
        `&start_date=${from}` +
        `&end_date=${to}`, {
        method: "GET",
        headers: {
            "Authorization": `Token token=${TOKEN}`,
        },
    })
    return response.then(j => j.json())
}

function parseData(jsonData: any): Prices {
    const updatedAt = jsonData.indicator.values_updated_at
    const prices:Array<Price> = jsonData.indicator.values.map(({value, datetime}: any) => {
        return {
            price: (value / 1000).toFixed(4),
            datetime
        }
    })

    return {
        prices,
        updatedAt
    }
}

function writeFile(prices: Prices) {
    ensureDirSync("public/data")
    Deno.writeTextFileSync("public/data/prices.json", JSON.stringify(prices))
}

interface Price {
    datetime: string
    price: number
}

interface Prices {
    updatedAt: string
    prices: Array<Price>
}
