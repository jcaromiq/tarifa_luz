import rewire from "rewire"
const useZone = rewire("./useZone")
const getCurrentPrice = useZone.__get__("getCurrentPrice")
// @ponicode
describe("getCurrentPrice", () => {
    test("0", () => {
        let callFunction: any = () => {
            getCurrentPrice(2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            getCurrentPrice("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            getCurrentPrice({ prices: [977.00, 571.00, 977.00], price: 571.00 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            getCurrentPrice({ prices: [25.00, 25.00, 25.00], price: 392.00 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            getCurrentPrice({ prices: [571.00, 25.00, 977.00], price: 258.00 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            getCurrentPrice(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("useZone.default", () => {
    test("0", () => {
        let callFunction: any = () => {
            useZone.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
