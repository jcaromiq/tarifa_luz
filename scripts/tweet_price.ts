import {TwitterApi, Keys} from "./twitterapi.ts";
import {format} from "https://deno.land/std@0.91.0/datetime/mod.ts";
import {currentZone, Zone, ZoneEnum} from "../src/domain/ZoneRepository.ts"
import moment from "https://deno.land/x/momentjs@2.29.1-deno/mod.ts";

interface Price {
    zone: Zone,
    value: number
}

async function tweet(price: Price) {
    const t: Keys = {
        consumerApiKey: Deno.env.get("consumer_key")!,
        consumerApiSecret: Deno.env.get("consumer_secret")!,
        accessToken: Deno.env.get("access_key")!,
        accessTokenSecret: Deno.env.get("access_secret")!
    };
    let twitterApi = new TwitterApi(t);
    let tweetMessage = "";
    switch (price.zone.current) {
        case ZoneEnum.Valle:
            tweetMessage += "🟢 Zona Valle\n";
            break;
        case ZoneEnum.Punta:
            tweetMessage = "🔴 Zona Punta\n";
            break;
        case ZoneEnum.Llana:
            tweetMessage = "🟡 Zona Llana\n";
            break;
    }
    tweetMessage += `⏰ ${price.zone.from}:00 - ${price.zone.to}:00\n💰${price.value} €/kWh`

    let {status} = await twitterApi.request("POST", "statuses/update.json", {
        status: tweetMessage
    });
    console.log(status);

}

async function getPrice(): Promise<Price> {
    const response = await fetch('http://worldtimeapi.org/api/timezone/Europe/Madrid')
    const {datetime, utc_offset} = await response.json();
    let m = moment(datetime);
    let currentTime = m.format('YYYY-MM-DD[T]HH:00:00.000Z');
    // const currentDate = new Date(datetime)
    //
    // let currentTime = format(currentDate,"yyyy-MM-ddTHH:00:00.000")+utc_offset
    console.log("currentTime ="+currentTime);
    const responsePrices = await fetch('http://luz.joaquin-caro.es/data/prices.json');
    const prices = await responsePrices.json();
    let p = await prices.prices
        .find((price: any) => price.datetime === currentTime)
        ?.price;
    return {value: p, zone: currentZone(m.toDate())}

}

let price = await getPrice();
tweet(price);


