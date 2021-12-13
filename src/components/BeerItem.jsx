import ButtonAmount from "./ButtonAmount"

export default function propsItem (props) {
    return (
        <article>
            <img src={`./images/beers/${props.label}`} alt={props.description.overallImpression}/>
            <h4>{props.name}</h4>
            <p>{props.category} - {props.alc}%</p>
            <p>{props.price} DKK</p>
            <ButtonAmount name={props.name} index={props.index} basket={props.basket} setBasket={props.setBasket} />
            <button onClick={ () => { props.setSliderDisplay(prevState => !prevState); props.setSlideIndex(props.index) } }>Read more</button>
        </article>
    )
}