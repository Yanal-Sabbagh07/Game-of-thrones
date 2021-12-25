import React from "react";
import Lord from "./Lord";
import Heir from "./Heir";
import Founder from "./Founder";

const DetailsCard = (props) => {
  return (
    <div className="detailsCard">
      <div className="detailsCard-left">
        <p>
          <span className="normal">{props.name}</span> is a noble House from{" "}
          <span className="normal">{props.region}</span> region, it was founded
          by {props.founder && <Founder url={props.founder} />} in
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
        <img className="detailsImg" alt="house logo" src={props.img} />
      </div>
    </div>
  );
};

export default DetailsCard;
