import React from "react";
import "./App.css";

import animals from "./data";
import AnimalCard from "../AnimalCard/AnimalCard";

function App() {
  return (
    <div className="wrapper">
      {animals.map(({ diet, name, size, scientificName, petName }) => (
        <AnimalCard
          diet={diet}
          key={name}
          name={name}
          size={size}
          scientificName={scientificName}
          petName={petName}
        />
      ))}
    </div>
  );
}

export default App;
