import {parse} from "https://deno.land/std@0.99.0/datetime/mod.ts";

const TOKEN = Deno.env.get("API_TOKEN");

const response = await fetch("https://api.esios.ree.es/indicators/10391?geo_ids[]=8741", {
    method: "GET",
    headers: {
        "Authorization": `Token token=${TOKEN}`,
    },
});

const jsonData = await response.json();

const updatedAt = jsonData.indicator.values_updated_at;
const prices = jsonData.indicator.values.map(({value, datetime}: any) => {
    return {
        price: (value / 1000).toFixed(4),
        hour: parse(datetime, "yyyy-MM-ddTHH:mm:ss.SSS'+'02:00").getHours()
    }
});

const file = {
    prices: prices,
    updatedAt
}
Deno.writeTextFileSync("public/prices.json", JSON.stringify(file))
