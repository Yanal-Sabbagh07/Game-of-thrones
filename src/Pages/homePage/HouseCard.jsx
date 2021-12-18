import React from "react";

import "./Houses.css";
const HouseCard = (props) => {
  return (
    <div className="house">
      <img className="house-img" src={props.image} alt="house-logo" />
      <h4>{props.name}</h4>
    </div>
  );
};

export default HouseCard;
