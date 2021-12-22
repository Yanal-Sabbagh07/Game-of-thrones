import React from "react";
import Lord from "./Lord";
import Heir from "./Heir";

const DetailsCard = (props) => {
  return (
    <div className="detailsCard">
      <div className="detailsCard-left">
        <p>
          <span className="normal">{props.name}</span> is a noble House from{" "}
          <span className="normal">{props.region}</span> region, it was founded
          by <span>{props.founder ? props.founder : " unknown"}</span> in
          <span>{props.founded ? props.founded : " unknown"}</span>.<br />
          Their Lord was
          <span>
            {props.currentLord ? <Lord lord={props.currentLord} /> : " unknown"}
          </span>{" "}
          and the heir is
          <span>{props.heir ? <Heir heir={props.heir} /> : " unknown"}.</span>
        </p>
      </div>
      <div className="detailsCard-right">
        <img className="detailsImg" src={props.img} />
      </div>
    </div>
  );
};

export default DetailsCard;
