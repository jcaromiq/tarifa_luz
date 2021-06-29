import {currentZone, ZoneEnum} from "./ZoneRepository"

describe("range hours", () => {

    const setHourToWeekDay = (hour:number) => {
        jest.setSystemTime(new Date(2021, 1, 1, hour, 0, 0))
    }

    const setHourToWeekendDay = (hour:number) => {
        jest.setSystemTime(new Date(2021, 5, 12, hour, 0, 0))
    }

    test("should get zone valle from 0:00 to 8:00", () => {
        jest.useFakeTimers("modern")
        let hours: number[] = [0, 1, 2, 3, 4, 5, 6, 7]
        hours.forEach(hour => {
            setHourToWeekDay(hour)
            const current: ZoneEnum = currentZone().current
            expect(current).toBe(ZoneEnum.Valle)
        })

    })

    test("should get zone valle at weekend", () => {
        jest.useFakeTimers("modern");
        let hours: number[] = [0, 10, 18];
        hours.forEach(hour => {
            setHourToWeekendDay(hour)
            const current: ZoneEnum = currentZone().current;
            expect(current).toBe(ZoneEnum.Valle);
        });

    });
    test("should get zone llana from 8:00 to 10:00 and 14 to 18 and 22 to 00", () => {
        jest.useFakeTimers("modern");
        let hours: number[] = [8, 9, 14, 15, 16, 17, 22, 23]
        hours.forEach(hour => {
            setHourToWeekDay(hour)
            const current: ZoneEnum = currentZone().current
            expect(current).toBe(ZoneEnum.Llana)
        })

    })

    test("should get zone punta from 10:00 to 14:00 and 18 to 22", () => {
        jest.useFakeTimers("modern");
        let hours: number[] = [10, 11, 12, 13, 18, 19, 20, 21]
        hours.forEach(hour => {
            setHourToWeekDay(hour)
            const current: ZoneEnum = currentZone().current
            expect(current).toBe(ZoneEnum.Punta)
        })

    });

    afterEach(() => {
        jest.useRealTimers()
    })

})
