

export enum ZoneEnum {
    Valle = "valle",
    Punta = "punta",
    Llana = "llana",
}

export class NextZone {
    zone: ZoneEnum;
    from: number;
    to: number;
    sameDay: boolean;

    constructor(zone: ZoneEnum, from: number, to: number, sameDay: boolean) {
        this.zone = zone;
        this.from = from;
        this.to = to;
        this.sameDay = sameDay;
    }
}

export class Zone {
    id: number;
    current: ZoneEnum;
    weekend: boolean;
    from: number;
    to: number;
    next: NextZone;


    constructor(id: number,
                current: ZoneEnum,
                weekend: boolean,
                from: number,
                to: number,
                next: NextZone) {
        this.id = id;
        this.current = current;
        this.weekend = weekend;
        this.from = from;
        this.to = to;
        this.next = next;
    }

    nextZoneLabel(): string {
        if (this.weekend) {
            return `Lunes a las ${this.to}`
        }
        return `A las ${this.to}`
    }

    currentZoneLabel(): string {
        if (this.weekend) {
            return `Todo el día`
        }
        return `De ${this.from} a ${this.to}`
    }

}

const zones: Zone[] = [
    new Zone(1, ZoneEnum.Valle, true, 0, 24, {from: 8, to: 10, zone: ZoneEnum.Llana, sameDay: false}),
    new Zone(2, ZoneEnum.Valle, false, 0, 8, {from: 8, to: 10, zone: ZoneEnum.Llana, sameDay: true}),
    new Zone(3, ZoneEnum.Llana, false, 8, 10, {from: 10, to: 14, zone: ZoneEnum.Punta, sameDay: true}),
    new Zone(4, ZoneEnum.Punta, false, 10, 14, {from: 14, to: 18, zone: ZoneEnum.Llana, sameDay: true}),
    new Zone(5, ZoneEnum.Llana, false, 14, 18, {from: 18, to: 22, zone: ZoneEnum.Punta, sameDay: true}),
    new Zone(6, ZoneEnum.Punta, false, 18, 22, {from: 22, to: 24, zone: ZoneEnum.Llana, sameDay: true}),
    new Zone(7, ZoneEnum.Llana, false, 22, 24, {from: 0, to: 8, zone: ZoneEnum.Valle, sameDay: false})]


export function currentZone(date:Date = new Date()): Zone {
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

export function currentZoneWithMoment(date:any): Zone {
    const currentHour = date.hours()
    const isWeekend = date.day() === 0 || date.day() === 6
    const inRange = (value: Zone) => currentHour >= value.from && currentHour < value.to;
    if (isWeekend) {
        return zones
            .find(value => value.weekend)!
    }
    return zones
        .filter(value => !value.weekend)
        .find(inRange)!
}
