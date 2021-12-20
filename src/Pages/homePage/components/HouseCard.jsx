import React from "react";
import { Link } from "react-router-dom";

import "./HouseCard.css";
const HouseCard = (props) => {
  return (
    <div className="house">
      <img className="house-img" src={props.image} alt="house-logo" />
      <h4>{props.name}</h4>
      <Link className="link" to={`/${props.url}`}>
        <button href="#" className="details-btn">
          More Details
        </button>
      </Link>
    </div>
  );
};

export default HouseCard;
