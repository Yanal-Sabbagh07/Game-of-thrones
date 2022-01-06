import React from "react";
import { Link } from "react-router-dom";

import "./HouseCard.css";
const HouseCard = (props) => {
  const houseUrl = props.url.split("/"); //convert the url string to array and split it to get the id from it.
  const houseId = houseUrl[houseUrl.length - 1];
  return (
    <Link className="link" to={`/houses/${houseId}`}>
      <div className="house">
        <h4>{props.name}</h4>
        <img className="house-img" src={props.image} alt="house-logo" />
      </div>
    </Link>
  );
};

export default HouseCard;
