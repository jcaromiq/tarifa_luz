import {useState} from "react";
import {currentZone} from "../domain/ZoneRepository";
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

const useZone = () => {
    const [zone, setZone] = useState(currentZone());
    const [price, setPrice] = useState();

    const {data} = useQuery('pricesData', prices)

    useInterval(() => {
        setZone(currentZone())
        setPrice(getCurrentPrice(data))

    }, 30000)
    return {zone, price}
};

export default useZone
