import Zone from "components/Zone";
import Footer from "components/Footer";
import useZone from "hooks/useZone";
import Header from "components/Header";

function Main() {

    const {zone, currentPrice, nextPrice} = useZone()

    return (
        <div className='flex flex-col min-h-screen bg-white align-center place-items-center'>
           <Header/>
            <div className="pt-8 flex flex-col space-y-12" >
                <Zone title="Actual"
                    name={zone.current}
                    description={zone.currentZoneLabel()}
                    price={currentPrice}/>
                <Zone title="Siguiente"
                    name={zone.next.zone}
                    price={nextPrice}
                    description={zone.nextZoneLabel()}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Main;
