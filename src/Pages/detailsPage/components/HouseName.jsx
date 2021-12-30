import React from "react";
import "./HouseName.css";
const HouseName = (props) => {
  return (
    <div>
      <div className="name-container">
        <h5 className="container-name">{props.name}: </h5>
      </div>
    </div>
  );
};

export default HouseName;
