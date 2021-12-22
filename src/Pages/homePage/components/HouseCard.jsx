import React from "react";
import { Link } from "react-router-dom";

import "./HouseCard.css";
const HouseCard = (props) => {
  return (
    <Link className="link" to={`/${props.url}`}>
      <div className="house">
        <h4>{props.name}</h4>
        <img className="house-img" src={props.image} alt="house-logo" />
      </div>
    </Link>
  );
};

export default HouseCard;
