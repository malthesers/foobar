export default function Header (props) {
    
    function toggleBasketModal () {
        props.setBasketDisplay(prevState => !prevState);
    }

    return (
        <header>
            <img className="icon-logo" src="./images/icons/foobar-logo.svg" alt="Foobar logo"/>
            <img className="icon-cart" onClick={toggleBasketModal} src={`./images/icons/icon-${props.basketDisplay ? "close" : "cart"}.svg`} alt="Foobar cart icon"/>
        </header>
    )
}