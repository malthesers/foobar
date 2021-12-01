import "./App.scss";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import BeerContainer from "./components/BeerContainer";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch("https://group-7-foo-bar.herokuapp.com/beertypes")
      .then((res) => res.json())
      .then((data) => {
        setBeers(data);
      });
  }, []);

  return (
    <>
      <Header />
      <main>
        <BeerContainer props={beers} />
      </main>
    </>
  );
}

export default App;
