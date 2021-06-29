import Zone from "./Zone";
import Footer from "./Footer";
import useZone from "../hooks/useZone";

function Main() {

    const {zone, price} = useZone()

    return (
        <div className="container p-4">
            <Zone title="Franja actual"
                  name={zone.current}
                  description={zone.currentZoneLabel()}
                  currentPrice={price}/>
            <Zone title="Franja siguiente"
                  name={zone.next}
                  description={zone.nextZoneLabel()}/>
            <Footer/>
        </div>
    )
}

export default Main;
