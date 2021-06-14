export enum ZoneEnum {
    Valle = "valle",
    Punta = "punta",
    Llana = "llana",
}

export function current(): ZoneEnum {
    let date = new Date();
    const currentHour = date.getHours();
    const dayOfWeek = date.getDay()

    if (dayOfWeek === 0 || dayOfWeek === 6) {
        return ZoneEnum.Valle;
    }
    if (currentHour >= 0 && currentHour < 8) {
        return ZoneEnum.Valle;
    }
    if (currentHour >= 8 && currentHour < 10) {
        return ZoneEnum.Llana;
    }
    if (currentHour >= 10 && currentHour < 14) {
        return ZoneEnum.Punta;
    }
    if (currentHour >= 14 && currentHour < 18) {
        return ZoneEnum.Llana;
    }
    if (currentHour >= 18 && currentHour < 22) {
        return ZoneEnum.Punta;
    }
    if (currentHour >= 22 && currentHour <= 23) {
        return ZoneEnum.Llana;
    }
    return ZoneEnum.Punta;
}
