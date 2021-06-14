import {zone as currentZone, ZoneEnum} from "./Zone";

describe("range hours", () => {
    test("should get zone valle from 0:00 to 8:00", () => {
        jest.useFakeTimers("modern");
        let list: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
        for (let i of list) {
            jest.setSystemTime(new Date(2021, 1, 1, i, 0, 0));
            const current: ZoneEnum = currentZone().current;
            expect(current).toBe(ZoneEnum.Valle);
        }

    });

    test("should get zone valle at weekend", () => {
        jest.useFakeTimers("modern");
        let list: number[] = [0, 10, 18];
        for (let i of list) {
            jest.setSystemTime(new Date(2021, 5, 12, i, 0, 0));
            const current: ZoneEnum = currentZone().current;
            expect(current).toBe(ZoneEnum.Valle);
        }

    });
    test("should get zone llano from 8:00 to 10:00 and 14 to 18 and 22 to 00", () => {
        jest.useFakeTimers("modern");
        let list: number[] = [8, 9, 14, 15, 16, 17, 22, 23];
        for (let i of list) {
            jest.setSystemTime(new Date(2021, 1, 1, i, 0, 0));
            const current: ZoneEnum = currentZone().current;
            expect(current).toBe(ZoneEnum.Llana);
        }

    });

    test("should get zone punta from 10:00 to 14:00 and 18 to 22", () => {
        jest.useFakeTimers("modern");
        let list: number[] = [10, 11, 12, 13, 18, 19, 20, 21];
        for (let i of list) {
            jest.setSystemTime(new Date(2021, 1, 1, i, 0, 0));
            const current: ZoneEnum = currentZone().current;
            expect(current).toBe(ZoneEnum.Punta);
        }

    });

    afterEach(() => {
        jest.useRealTimers();
    });

});
