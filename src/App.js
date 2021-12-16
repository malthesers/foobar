import "./App.scss";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Basket from "./components/Basket";
import BeerContainer from "./components/BeerContainer";
import BeerSlider from "./components/BeerSlider";
import LoadingScreen from "./components/LoadingScreen";
import OrderHandler from "./components/OrderHandler";

function filterBeers(data) {
  //Const of included beers
  const beersToInclude = ["El Hefe", "Fairy Tale Ale", "GitHop", "Hollaback Lager", "Hoppily Ever After", "Mowintime", "Sleighride"];

  //Filter through beers
  const filteredBeers = data.filter((beer) => {
    //Go through beers to include for each beer
    return beersToInclude.some((inclBeer) => {
      //Return true only for beers in beersToInclude
      return inclBeer === beer.name ? true : false;
    });
  });

  return filteredBeers;
}

function App() {
  const [basketDisplay, setBasketDisplay] = useState(false);
  const [sliderDisplay, setSliderDisplay] = useState(false);
  const [orderDisplay, setOrderDisplay] = useState(false);
  const [beers, setBeers] = useState([]);
  const [basket, setBasket] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  let isFetched = basket.length === 7;

  useEffect(() => {
    function getTaps() {
      fetch("https://group-7-foo-bar.herokuapp.com/")
        .then((res) => res.json())
        .then((data) => getBeerTypes(data.taps.map((tap) => tap.beer)));
    }

    getTaps();

    function getBeerTypes(taps) {
      fetch("https://group-7-foo-bar.herokuapp.com/beertypes")
        .then((res) => res.json())
        .then((data) => {
          //Filter beers
          const filteredBeers = filterBeers(data);

          //Variable to index beers
          let beerIndex = 0;

          //Add price to beers
          const pricedBeers = filteredBeers.map((beer) => {
            //Generate a random multiple of 5 from 50 to 80
            const rngPrice = Math.floor(Math.random() * 7) * 5 + 50;

            //Replace png file extension with webp
            beer.label = beer.label.replace(".png", ".webp");

            //Add price property and value to beer
            beer.price = rngPrice;

            //Add availability property based on server selection
            beer.available = taps.includes(beer.name);

            //Set and increment beerIndex
            beer.index = beerIndex;
            beerIndex++;

            //Add beer to new array
            return beer;
          });

          //Set reformatted beers as state
          setBeers(pricedBeers);
          //Create basket template
          const filteredBasket = pricedBeers.map((item) => {
            const basketItem = {
              index: item.index,
              name: item.name,
              category: item.category,
              alc: item.alc,
              label: item.label,
              price: item.price,
              available: item.available,
              amount: 0,
            };

            return basketItem;
          });

          //Set basket as state
          setBasket(filteredBasket);
        });
    }
  }, []);

  return (
    <>
      <Header orderDisplay={orderDisplay} basket={basket} basketDisplay={basketDisplay} setBasketDisplay={setBasketDisplay} />
      <LoadingScreen />
      {isFetched && (
        <main>
          <BeerContainer props={beers} basket={basket} setBasket={setBasket} setSliderDisplay={setSliderDisplay} setSlideIndex={setSlideIndex} />
          <BeerSlider
            props={beers}
            basket={basket}
            setBasket={setBasket}
            sliderDisplay={sliderDisplay}
            setSliderDisplay={setSliderDisplay}
            setBasketDisplay={setBasketDisplay}
            slideIndex={slideIndex}
          />
          <Basket basketDisplay={basketDisplay} basket={basket} setBasket={setBasket} setOrderDisplay={setOrderDisplay} />
          {orderDisplay && <OrderHandler basket={basket} orderDisplay={orderDisplay} setOrderDisplay={setOrderDisplay} />}
        </main>
      )}
    </>
  );
}

export default App;
