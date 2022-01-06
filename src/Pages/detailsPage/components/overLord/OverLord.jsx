import React from "react";
import { Link } from "react-router-dom";
import FetchingData from "../../../../API/FetchingData";
import "./OverLord.css";

const OverLord = (props) => {
  const urlSplited = props.houseUrl.split("/");
  const houseId = urlSplited[urlSplited.length - 1];
  const house = FetchingData(`houses/${houseId}`);
  return (
    <div className="house-overlord">
      <h3 className="overlord-title">
        Belongs to:
        <Link className="overlord-name" to={`/houses/${houseId}`}>
          {" "}
          {house.name}
        </Link>
      </h3>
    </div>
  );
};

export default OverLord;
