import React from "react";
import "./App.css";

import animals from "./data";
import AnimalCard from "../AnimalCard/AnimalCard";

function App() {
  return (
    <div className="wrapper">
      {animals.map(({ diet, name, size }) => (
        <AnimalCard diet={diet} key={name} name={name} size={size} />
      ))}
    </div>
  );
}

export default App;
