import ButtonAmount from "./ButtonAmount"

export default function BeerItemBasket (props) {
    if (props.amount > 0) {
        return (
            <>
                <article className="basket-item">
                    <div className="basket-top">
                        <div className="basket-item-left">
                            <div className="basket-item-image">
                                <img src={`./images/beers/${props.label}`}alt="taste very good"/>
                            </div>
                            <div className="basket-item-header">
                                <h3 className="basket-item-name">{props.name}</h3>
                                <p className="basket-item-type">{props.category}</p>
                                <p className="basket-item-alc">{props.alc}%</p>
                            </div>
                        </div>
                        <div className="basket-item-right">
                            <p className="basket-item-price">{props.price * props.amount} DKK</p>
                        </div>
                    </div>
                    <div className="basket-bottom">
                        <ButtonAmount name={props.name} available={props.available} index={props.index} basket={props.basket} setBasket={props.setBasket} />
                    </div>
                </article>
                <hr />
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }
}