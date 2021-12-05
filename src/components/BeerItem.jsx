import ButtonAmount from "./ButtonAmount"

function displaySlider() {
    const slideContainer = document.querySelector("#section-slider");

    slideContainer.classList.contains("slide-hidden") ? slideContainer.classList.remove("slide-hidden") : slideContainer.classList.add("slide-hidden");
}

export default function propsItem (props) {
    return (
        <article>
            <img src={`./images/beers/${props.label}`} alt={props.description.overallImpression}/>
            <h3>{props.name}</h3>
            <p>{props.category} - {props.alc}%</p>
            <p>{props.price} DKK</p>
            <ButtonAmount name={props.name} index={props.index} basket={props.basket} setBasket={props.setBasket} />
            <button onClick={ () => { displaySlider(); props.setSlideIndex(props.index) } }>Read more</button>
        </article>
    )
}