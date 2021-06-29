export enum ZoneEnum {
    Valle = "valle",
    Punta = "punta",
    Llana = "llana",
}


export class Zone {
    id: number;
    current: ZoneEnum;
    weekend: boolean;
    from: number;
    to: number;
    next: ZoneEnum;


    constructor(id: number, current: ZoneEnum, weekend: boolean, from: number, to: number, next: ZoneEnum) {
        this.id = id;
        this.current = current;
        this.weekend = weekend;
        this.from = from;
        this.to = to;
        this.next = next;
    }

    nextZoneLabel():string {
        if(this.weekend) {
            return `Lunes a las ${this.to}`
        }
        return `A las ${this.to}`
    }

    currentZoneLabel():string {
        if(this.weekend) {
            return `Todo el dia`
        }
        return `De ${this.from} a ${this.to}`
    }

}

const zones: Zone[] = [
    new Zone(1, ZoneEnum.Valle, true, 0, 8, ZoneEnum.Punta),
    new Zone(2, ZoneEnum.Valle, false, 0, 8, ZoneEnum.Llana),
    new Zone(3, ZoneEnum.Llana, false, 8, 10, ZoneEnum.Punta),
    new Zone(4, ZoneEnum.Punta, false, 10, 14, ZoneEnum.Llana),
    new Zone(5, ZoneEnum.Llana, false, 14, 18, ZoneEnum.Punta),
    new Zone(6, ZoneEnum.Punta, false, 18, 22, ZoneEnum.Llana),
    new Zone(7, ZoneEnum.Llana, false, 22, 24, ZoneEnum.Valle)]

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
