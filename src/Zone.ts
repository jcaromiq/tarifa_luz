export enum ZoneEnum {
    Valle = "valle",
    Punta = "punta",
    Llana = "llana",
}
export interface Zone {
    current:ZoneEnum,
}
export function zone(): Zone {
    let date = new Date();
    const currentHour = date.getHours();
    const dayOfWeek = date.getDay()

    if (dayOfWeek === 0 || dayOfWeek === 6) {
        return {current : ZoneEnum.Valle}
    }
    if (currentHour >= 0 && currentHour < 8) {
        return {current : ZoneEnum.Valle}
    }
    if (currentHour >= 8 && currentHour < 10) {
        return {current : ZoneEnum.Llana}
    }
    if (currentHour >= 10 && currentHour < 14) {
        return {current : ZoneEnum.Punta}
    }
    if (currentHour >= 14 && currentHour < 18) {
        return {current : ZoneEnum.Llana}
    }
    if (currentHour >= 18 && currentHour < 22) {
        return {current : ZoneEnum.Punta}
    }
    if (currentHour >= 22 && currentHour <= 23) {
        return {current : ZoneEnum.Llana}
    }
    return  {current : ZoneEnum.Punta}
}
