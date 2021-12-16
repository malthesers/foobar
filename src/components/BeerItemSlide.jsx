import ButtonAmount from "./ButtonAmount"

export default function BeerItemSlide (props) {
    return (
        <article className="beer-slide">
            <div className="beer-slide-top">
                <div className="beer-slide-top-display">
                    <img src={`./images/beers/${props.label}`} alt={props.description.overallImpression}/>
                    <div className="beer-slide-header">
                        <h3 className="beer-slide-name">{props.name}</h3>
                        <p className="beer-slide-alc">{props.category} - {props.alc}%</p>
                        <p className="beer-slide-price">{props.price} DKK</p>
                        <ButtonAmount name={props.name} available={props.available} index={props.index} basket={props.basket} setBasket={props.setBasket} />
                    </div>
                </div>
                <div className="beer-slide-top-description-container">
                    <div className="beer-slide-top-description">
                        <div className="beer-slide-aroma">
                        <h4>Aroma</h4>
                        <p>{props.description.aroma}</p>
                        </div>
                        <div className="beer-slide-appearance">
                            <h4>Appearance</h4>
                            <p>{props.description.appearance}</p>
                        </div>
                        <div className="beer-slide-mouthfeel">
                            <h4>Mouthfeel</h4>
                            <p>{props.description.mouthfeel}</p>
                        </div>
                        <div className="beer-slide-overall">
                            <h4>Overall Impression</h4>
                            <p>{props.description.overallImpression}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="beer-slide-bottom">
                <div className="beer-slide-bottom-buttons">
                    <button tabIndex={-1} onClick={ () => {props.setSliderDisplay(prevState => !prevState)}}><img src="./images/icons/icon-return.svg" alt="Foobar return to beer grid icon" /></button>
                    <button tabIndex={-1} onClick={ () => {props.setBasketDisplay(prevState => !prevState)}}className="button-fill">Checkout</button>
                </div>
            </div>
        </article>
    )
}