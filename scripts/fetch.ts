import {parse} from "https://deno.land/std@0.99.0/datetime/mod.ts";

const TOKEN = Deno.env.get("API_TOKEN");

const json = fetch("https://api.esios.ree.es/indicators/10391?geo_ids[]=8741", {
    method: "GET",
    headers: {
        "Authorization": `Token token=${TOKEN}`,
    },
});

await json
    .then((response) => {
        return response.json();
    })
    .then((jsonData) => {
        return jsonData.indicator.values.map(({value, datetime}: any) => {
            return {
                price: value / 1000,
                hour: parse(datetime, "yyyy-MM-ddTHH:mm:ss.SSS'+'02:00").getHours()
            }
        });
    })
    .then((json) => {
        Deno.writeTextFileSync("public/prices.json", JSON.stringify(json));
    });
