export enum ZoneEnum {
    Valle = "valle",
    Punta = "punta",
    Llana = "llana",
}

export interface Zone {
    id: number,
    current: ZoneEnum,
    weekend: boolean,
    from: number,
    to: number,
    next: ZoneEnum
}

export const zones: Zone[] = [
    {id:1, current: ZoneEnum.Valle, weekend: true, from: 0, to: 8, next: ZoneEnum.Punta},
    {id:2, current: ZoneEnum.Valle, weekend: false, from: 0, to: 8, next: ZoneEnum.Llana},
    {id:3, current: ZoneEnum.Llana, weekend: false, from: 8, to: 10, next: ZoneEnum.Punta},
    {id:4, current: ZoneEnum.Punta, weekend: false, from: 10, to: 14, next: ZoneEnum.Llana},
    {id:5, current: ZoneEnum.Llana, weekend: false, from: 14, to: 18, next: ZoneEnum.Punta},
    {id:6, current: ZoneEnum.Punta, weekend: false, from: 18, to: 22, next: ZoneEnum.Llana},
    {id:7, current: ZoneEnum.Llana, weekend: false, from: 22, to: 24, next: ZoneEnum.Valle}]

export function zone(): Zone {
    let date = new Date()
    const currentHour = date.getHours()
    const isWeekend = date.getDay() === 0 || date.getDay() === 6
    const inRange = (value: Zone) => currentHour >= value.from && currentHour < value.to;
    if (isWeekend) {
        return zones
            .find(value => value.weekend)!
    }
    return zones
        .filter(value => !value.weekend)
        .find(inRange)!

}
