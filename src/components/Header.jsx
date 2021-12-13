export default function Header (props) {
    let basketItems = 0;

    //Calculate amount of beers
    props.basket.forEach( beer => {
        basketItems += beer.amount;
    })

    //Toggle basketModal
    function toggleBasketModal () {
        props.setBasketDisplay(prevState => !prevState);
    }

    return (
        <header>
            <div className="icon-logo-container">
                <img className="icon-logo" onClick={() => {window.location.reload()}} src="./images/icons/foobar-logo.svg" alt="Foobar logo"/>
            </div>
            {props.orderDisplay === false && <div className="icon-cart-container" onClick={toggleBasketModal}>
                <img className="icon-cart-icon" src={`./images/icons/icon-${props.basketDisplay ? "close" : "cart"}.svg`} alt="Foobar cart icon"/>
                {props.basketDisplay === false && <p className="icon-cart-length">{basketItems > 0 ? basketItems : ""}</p>}
            </div>}
        </header>
    )
}