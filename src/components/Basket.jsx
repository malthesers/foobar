import { useState } from "react";
import BeerItemBasket from "./BeerItemBasket";
import TipsSelector from "./TipsSelector";
import PaymentModal from "./PaymentModal";

export default function Basket (props) {
    const mappedBeers = props.basket.map(beer => <BeerItemBasket {...beer} basket={props.basket} setBasket={props.setBasket} key={beer.index}/>)
    console.log(mappedBeers)
    const [paymentDisplay, setPaymentDisplay] = useState(false);
    const [tip, setTip] = useState(0);
    let basketItems = 0;
    let beerPrice = 0;

    //Calculate amount of beers
    props.basket.forEach( beer => {
        basketItems += beer.amount;
    })

    //Calculate total beer price
    props.basket.forEach( beer => {
        beerPrice += beer.amount * beer.price;
    })

    //Add tip to beer price
    const totalPrice = beerPrice + tip;

    //Toggle paymentModal
    function togglePaymentModal () {
        setPaymentDisplay(prevState => !prevState);
    }

    return (
        <section id="modal-basket" className={ props.basketDisplay ? "" : "slide-hidden"}>
            <div className="basket-inner">
                <div className="basket-header">
                    <h4>Basket</h4>
                    <hr />
                </div>
                <div className="basket-items">
                    {basketItems === 0 && <><h3>Currently no items in basket</h3><hr /></>}
                    {mappedBeers}
                </div>
                <TipsSelector setTip={setTip} />
                <div className="basket-checkout">
                    <div className="basket-total">
                        <h4>Total</h4>
                        <p>{totalPrice} DKK</p>
                    </div>
                    <button onClick={togglePaymentModal} className={totalPrice === 0 ? "proceed-locked" : ""} >Proceed</button>
                </div>
            </div>
            <PaymentModal paymentDisplay={paymentDisplay} setPaymentDisplay={setPaymentDisplay} setOrderDisplay={props.setOrderDisplay} />
        </section>
    )
}