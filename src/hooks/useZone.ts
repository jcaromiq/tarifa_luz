import {useState} from "react";
import {currentZone, NextZone} from "../domain/ZoneRepository";
import {useQuery} from "react-query";
import {prices} from "../domain/PriceRepository";
import useInterval from "./useInterval";
import moment from "moment";

const getCurrentPrice = (data: any) => {
    const now = moment().format('YYYY-MM-DD[T]HH:00:00.000Z');
    return data.prices
        .find((price: any) => price.datetime === now)
        ?.price
};

const getNextPrice = (data: any, next: NextZone) => {
    let time: String
    if (next.sameDay) {
        time = moment().format(`YYYY-MM-DD[T]${next.from}:00:00.000Z`);
    } else {
        time = moment().add(1, "days").format(`YYYY-MM-DD[T]${next.from}:00:00.000Z`)
    }

    return data.prices
        .find((price: any) => price.datetime === time)
        ?.price
};

const useZone = () => {
    const [zone, setZone] = useState(currentZone());
    const [currentPrice, setCurrentPrice] = useState();
    const [nextPrice, setNextPrice] = useState();

    const {data} = useQuery('pricesData', prices)

    useInterval(() => {
        setZone(currentZone())
        setCurrentPrice(getCurrentPrice(data))
        setNextPrice(getNextPrice(data, currentZone().next))

    }, 1000)
    return {zone, currentPrice, nextPrice}
};

export default useZone
