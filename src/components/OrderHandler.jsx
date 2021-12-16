import { useEffect, useState } from "react";

export default function OrderHandler (props) {
    const [orderState, setOrderState] = useState("loading");

    //Random queue number
    const orderNumber = Math.floor(Math.random() * 50 + 20);

    useEffect(() => {
        console.log("yo1")
        setTimeout(() => {
            setOrderState("complete");

                        const filteredOrders = props.basket.filter(beer => {
                if (beer.amount > 0) {
                    return true
                } else {
                    return false
                }
            })
    
            const mappedOrders = filteredOrders.map(beer => {
                if (beer.amount > 0) {
                    const orderedBeer = {
                        name: beer.name,
                        amount: beer.amount
                    }
    
                    return orderedBeer;
                }
    
                return null;
            })
    
            console.log(mappedOrders);

            if (mappedOrders.length !== 0) {
                const order = JSON.stringify(mappedOrders);
    
                fetch("https://group-7-foo-bar.herokuapp.com/order", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: order,
                })
            }

            console.log("yo2");
        }, 5000)
    }, [props.basket])

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
                        <h3>The bartender will call your order number when ready</h3>
                    </div>}
                </div>
                { orderState === "complete" && <button onClick={resetApp}>New order</button>}
            </div>
        </section>
    )
}