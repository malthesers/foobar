import { useState } from "react";

export default function TransactionHandler (props) {
    const [orderState, setOrderState] = useState("loading");

    //Random queue number
    const orderNumber = Math.floor(Math.random() * 50 + 20);

    function completeOrder () {
        setOrderState("complete");
    }

    setTimeout(completeOrder, 5000)

    function resetApp () {
        window.location.reload();
    }

    return (
        <section id="section-order" className={props.orderDisplay ? "" : "slide-hidden"}>
            <div className="order-inner">
                <div className="order-centre">
                    { orderState === "loading" && <div className="order-loading">
                        <img src="./images/payment/winged-bill.svg" alt="Foobar winged bill loading" />
                        <h3 className="order-loading-text">Please wait </h3>
                        <h3>Your payment is currently being processed</h3>
                    </div>}
                    { orderState === "complete" && <div className="order-complete">
                        <img src="./images/payment/thanks-mate-message.svg" alt="Foobar thanks mate message" />
                        <h3>Your order number is:</h3>
                        <h1>{orderNumber}</h1>
                    </div>}
                </div>
                { orderState === "complete" && <button onClick={resetApp}>New order</button>}
            </div>
        </section>
    )
}