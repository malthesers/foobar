export default function ButtonAmount (props) {
    const beerItem = props.basket[props.index];

    function updateAmount (e) {
        const operation = e.target.dataset.cart;
        const beer = props.basket[props.index];

        const newBasket = props.basket.map( item => {
            if (item.name === beer.name) {
                if (operation === "increment") {
                    item.amount++;
                } else if (operation === "decrement") {
                    if(item.amount > 0) {
                        item.amount--;
                    }
                }
            }

            return item;
        })

        props.setBasket(newBasket);
    }

    return (
        <>
            { props.available && <button tabIndex={-1} className="button-amount">
                <span onClick={updateAmount} data-cart="decrement">-</span>
                <span>{ beerItem.amount }</span>
                <span onClick={updateAmount} data-cart="increment">+</span>
            </button>}
            { props.available === false && <button tabIndex={-1} className="button-sold-out">Sold Out</button>}
        </>
    )
}