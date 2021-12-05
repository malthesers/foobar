import ButtonAmount from "./ButtonAmount"

export default function BeerItemSlide (beer) {
    return (
        <article className="beer-slide">
            <div className="beer-slide-top">
                <img src={`./images/beers/${beer.label}`} alt={beer.description.overallImpression}/>
                <div className="beer-slide-header">
                    <h3 className="beer-slide-name">{beer.name}</h3>
                    <p className="beer-slide-alc">{beer.category} - {beer.alc}%</p>
                    <p className="beer-slide-price">{beer.price} DKK</p>
                    <ButtonAmount />
                </div>
            </div>
            <div className="beer-slide-bottom">
                {/* <div className="beer-slide-aroma">
                    <h4>Aroma</h4>
                    <p>{beer.description.aroma}</p>
                </div> */}
                <div className="beer-slide-appearance">
                    <h4>Appearance</h4>
                    <p>{beer.description.appearance}</p>
                </div>
                {/* <div className="beer-slide-mouthfeel">
                    <h4>Mouthfeel</h4>
                    <p>{beer.description.mouthfeel}</p>
                </div> */}
                <div className="beer-slide-overall">
                    <h4>Overall Impression</h4>
                    <p>{beer.description.overallImpression}</p>
                </div>
            </div>
        </article>
    )
}