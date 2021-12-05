export default function ButtonAmount (props) {
    const beerItem = props.basket[props.index];

    function updateAmount (e) {
        const operation = e.target.dataset.cart;
        const beer = props.basket[props.index];

        // if(operation === "increment") {            
        //     props.setBasket(prevBasket => {
        //         prevBasket[props.index].amount++;
        //         return prevBasket
        //     })
        // } else if (operation === "decrement") {
        //     console.log("decrement: ", props.name)
        // }

        // props.setBasket(prevBasket => {
        //     if (operation === "increment") {
        //         prevBasket[props.index].amount++;
        //     } else if (operation === "decrement") {
        //         prevBasket[props.index].amount--;
        //     }
        //     return prevBasket;
        // })


        // if (operation === "increment") {
        //     props.basket[props.index].amount++;
        // } else if (operation === "decrement") {
        //     props.basket[props.index].amount--;
        // }
        // props.setBasket(props.basket)

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
        <button className="button-amount">
            <span onClick={updateAmount} data-cart="decrement">-</span>
            <span>{ beerItem.amount }</span>
            <span onClick={updateAmount} data-cart="increment">+</span>
        </button>
    )
}