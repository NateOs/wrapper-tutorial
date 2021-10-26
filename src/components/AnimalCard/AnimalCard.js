import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import AnimalDetails from "../AnimalDetails/AnimalDetails";

export default function AnimalCard({ name, size, ...props }) {
  // Wow!, this prop can even take JSX
  // whatever you wrap inside of Card
  // becomes it's child(ren)
  return (
    <Card title="Animal" details={<AnimalDetails {...props} />}>
      <div>
        <h3>{name}</h3>
        <div>{size}kg</div>
      </div>
    </Card>
  );
}

AnimalCard.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};
