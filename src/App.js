import "./App.scss";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import BeerContainer from "./components/BeerContainer";
import BeerSlider from "./components/BeerSlider";

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
  const [beers, setBeers] = useState([]);
  const [basket, setBasket] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
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

          //Add price property and value to beer
          beer.price = rngPrice;

          //Set and increment beerIndex
          beer.index = beerIndex;
          beerIndex++;

          //Add beer to new array
          return beer;
        });

        //Set reformatted beers as state
        setBeers(pricedBeers);
      });
  }, []);

  return (
    <>
      <Header />
      <main>
        <BeerContainer props={beers} basket={basket} setBasket={setBasket} setSlideIndex={setSlideIndex} />
        <BeerSlider props={beers} basket={basket} setBasket={setBasket} slideIndex={slideIndex} />
      </main>
    </>
  );
}

export default App;
