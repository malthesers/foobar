import BeerItemBasket from "./BeerItemBasket";
import TipsSelector from "./TipsSelector";

export default function Basket (props) {
    return (
        <section id="modal-basket" className={ props.basketDisplay ? "" : "slide-hidden"}>
            <div className="basket-inner">
                <div className="basket-header">
                    <h3>Basket</h3>
                    <hr />
                </div>
                <div className="basket-items">
                    <BeerItemBasket basket={props.basket} setBasket={props.setBasket} />
                </div>
                <TipsSelector />
                <div className="basket-checkout">
                    <div className="basket-total">
                        <h4>TOTAL</h4>
                        <p>75 DKK</p>
                    </div>
                    <button>PROCEED</button>
                </div>
            </div>
        </section>
    )
}