import BeerItem from "./BeerItem";

export default function BeerContainer (props) {
    const mappedBeers = props.props.map(beer => <BeerItem {...beer} basket={props.basket} setBasket={props.setBasket} setSliderDisplay={props.setSliderDisplay} setSlideIndex={props.setSlideIndex} key={beer.name} />)
    return (
        <section id="section-beers">
            <div className="beer-header">
                <h4>How?</h4>
                <p>On this page you can shuffle around and see the different beers. If you are curious about the individual beer then click on it and see what happens!</p>
            </div>
            <div className="beer-container">
               {mappedBeers}
            </div>
        </section>
    )
}