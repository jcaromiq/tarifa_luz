export enum ZoneEnum {
    Valle = "valle",
    Punta = "punta",
    Llana = "llana",
}

export interface Zone {
    current: ZoneEnum,
    weekend: boolean,
    from: number,
    to: number,
    next: ZoneEnum
}

let zone1: Zone = {current: ZoneEnum.Valle, weekend: true, from: 0, to: 8, next: ZoneEnum.Punta}
let zone2: Zone = {current: ZoneEnum.Valle, weekend: false, from: 0, to: 8, next: ZoneEnum.Llana}
let zone3: Zone = {current: ZoneEnum.Llana, weekend: false, from: 8, to: 10, next: ZoneEnum.Punta}
let zone4: Zone = {current: ZoneEnum.Punta, weekend: false, from: 10, to: 14, next: ZoneEnum.Llana}
let zone5: Zone = {current: ZoneEnum.Llana, weekend: false, from: 14, to: 18, next: ZoneEnum.Punta}
let zone6: Zone = {current: ZoneEnum.Punta, weekend: false, from: 18, to: 22, next: ZoneEnum.Llana}
let zone7: Zone = {current: ZoneEnum.Llana, weekend: false, from: 22, to: 24, next: ZoneEnum.Valle}
export const zones: Zone[] = [zone1, zone2, zone3, zone4, zone5, zone6, zone7]

export function zone(): Zone {
    let date = new Date();
    const currentHour = date.getHours();
    const weekend = date.getDay() === 0 || date.getDay() === 6;

    if (weekend) {
        return zone1;
    }
    if (currentHour >= 0 && currentHour < 8) {
        return zone2;
    }
    if (currentHour >= 8 && currentHour < 10) {
        return zone3;
    }
    if (currentHour >= 10 && currentHour < 14) {
        return zone4;
    }
    if (currentHour >= 14 && currentHour < 18) {
        return zone5;
    }
    if (currentHour >= 18 && currentHour < 22) {
        return zone6;
    }
    if (currentHour >= 22 && currentHour <= 23) {
        return zone7;
    }
    return zone1;
}
