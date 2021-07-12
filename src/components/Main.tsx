import Zone from "components/Zone";
import Footer from "components/Footer";
import useZone from "hooks/useZone";

function Main() {

    const {zone, currentPrice, nextPrice} = useZone()

    return (
        <div className="container p-4">
            <Zone title="Franja actual"
                  name={zone.current}
                  description={zone.currentZoneLabel()}
                  price={currentPrice}/>
            <Zone title="Franja siguiente"
                  name={zone.next.zone}
                  price={nextPrice}
                  description={zone.nextZoneLabel()}/>
            <Footer/>
        </div>
    )
}

export default Main;
