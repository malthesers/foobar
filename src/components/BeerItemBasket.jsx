import ButtonAmount from "./ButtonAmount"

export default function BeerItemBasket (props) {
    return (
        <>
            <article className="basket-item">
                <div className="basket-item-left">
                    <div className="basket-item-image">
                        <img src="./images/beers/elhefe.png" alt="taste very good"/>
                    </div>
                    <div className="basket-item-header">
                        <h3 className="basket-item-name">El Hefe</h3>
                        <p className="basket-item-type">Lager</p>
                        <p className="basket-item-alc">2.3%</p>
                    </div>
                </div>
                <div className="basket-item-right">
                    <p className="basket-item-price">75 DKK</p>
                </div>
            </article>
            <hr />
        </>
    )
}