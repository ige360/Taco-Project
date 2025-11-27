import React, { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import "./App.css";
import Footer from "./components/Footer";
import FishToppings from "./components/Fish Toppings";
import ChickenToppings from "./components/Chicken Toppings";

function App() {
  let [option, setOption] = useState(null);

  const [chicken, fish] = Menu;
  const {
    ingredients: {
      protein: { name: chickenName },
    },
  } = chicken;
  const {
    ingredients: {
      protein: { name: fishName },
    },
  } = fish;

  const {
    ingredients: {
      protein: { preparation: chickenPrep },
    },
  } = chicken;
  const {
    ingredients: {
      protein: { preparation: fishPrep },
    },
  } = fish;

  const {
    ingredients: {
      salsa: { name: chickenSalsaName },
    },
  } = chicken;
  const {
    ingredients: {
      salsa: { name: fishSalsaName },
    },
  } = fish;

  const {
    ingredients: { toppings: fishToppingsItems },
  } = fish;
  const {
    ingredients: { toppings: ChickenToppingsItems },
  } = chicken;

  const { name: fishTacoName } = fish;
  const { name: chickenTacoName } = chicken;

  function ShowChicken() {
    setOption("chicken");
  }

  function ShowFish() {
    setOption("fish");
  }

  return (
    <div className="main-container">
      <div>
        <Header />
        <div className="icon-container">
          <div className="icon">
            <i onClick={ShowChicken} class="fa-solid fa-drumstick-bite"></i>
          </div>
          <div className="icon">
            <i onClick={ShowFish} class="fa-solid fa-fish"></i>
          </div>
        </div>
        {option === null && (
          <h2 className="choice">Pick your favourite Taco ingredient 👆</h2>
        )}
        {option === "chicken" && (
          <ul>
            <h2>{chickenTacoName}</h2>
            <h3>Ingredients:</h3>
            <li>
              {chickenName}, {chickenPrep}
            </li>
            <li>{chickenSalsaName}</li>
            {ChickenToppingsItems.map((ChickenToppingsItems) => (
              <ChickenToppings
                quantity={ChickenToppingsItems.quantity}
                name={ChickenToppingsItems.name}
              />
            ))}
          </ul>
        )}
        {option === "fish" && (
          <ul>
            <h2>{fishTacoName}</h2>
            <h3>Ingredients:</h3>
            <li>
              {fishName}, {fishPrep}
            </li>
            <li>{fishSalsaName}</li>
            {fishToppingsItems.map((fishToppingsItems) => (
              <FishToppings
                quantity={fishToppingsItems.quantity}
                name={fishToppingsItems.name}
              />
            ))}
          </ul>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;