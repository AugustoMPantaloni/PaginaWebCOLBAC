import CardsWorks from "../cards/CardsWork"
import dataProceso from "../../../data/proceso"

const IntroWork = () => {
    return (
        <>
        {dataProceso.map(data => 
            <CardsWorks
                key={data.title}
                icon={data.icon}
                title={data.title}
                description={data.description}
            />
        )}
        </>
    )

}

export default IntroWork;