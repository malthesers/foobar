import BeerItem from "./BeerItem";

export default function BeerContainer (props) {
    const beersToInclude = ["El Hefe", "Fairy Tale Ale", "GitHop", "Hollaback Lager", "Hoppily Ever After", "Mowintime", "Sleighride"];
    const filteredBeers = props.props.filter(beer => {
        return beersToInclude.some(inclBeer => {
            return inclBeer === beer.name ? true : false;
        })
    })
    const mappedBeers = filteredBeers.map(beer => <BeerItem {...beer} key={beer.name} />)

    return (
        <section id="section-beers">
            <p>How?</p>
            <p>On this page you can shuffle around and see the different beers. If you are curious about the individual beer then click on it and see what happens!</p>
            <div className="beer-container">
                {mappedBeers}
            </div>
        </section>
    )
}