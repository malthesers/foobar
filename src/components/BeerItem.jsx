import ButtonAmount from "./ButtonAmount"

export default function BeerItem (beer) {
    return (
        <article>
            <img src={`./images/beers/${beer.label}`} alt={beer.description.overallImpression}/>
            <h3>{beer.name}</h3>
            <p>{beer.category} - {beer.alc}%</p>
            <ButtonAmount />
            <button>Read more</button>
        </article>
    )
}