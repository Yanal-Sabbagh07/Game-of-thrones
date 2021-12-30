import React from "react";
import HouseName from "./components/HouseName";
import OverLord from "./components/OverLord";
import Titles from "./components/Titles";
import Lord from "./components/Lord";
import Heir from "./components/Heir";
import Founder from "./components/Founder";
import "../../imgs/logos/1.png";
import "./DetailsCard.css";
const DetailsCard = (props) => {
  return (
    <div className="detailsCard-content">
      <div className="detailsCard-left">
        <img
          className="detailsImg"
          alt="house logo"
          src={require(`../../imgs/logos/${props.img}`)}
        />
        <div className="founder-heir-container">
          {props.founder && <Founder url={props.founder} />}
          {props.heir && <Heir heir={props.heir} />}
        </div>
      </div>
      <div className="detailsCard-right">
        <HouseName name={props.name} region={props.region} />
        <div>
          <h3 className="house-region">Located in: {props.region} region.</h3>
        </div>
        {props.overlord && <OverLord houseUrl={props.overlord} />}
        {props.titles && (
          <div className="titles-container">
            <h3 className="titles-title">Titles that this House has won:</h3>
            <Titles titles={props.titles} />
          </div>
        )}
        {props.seats && (
          <div className="seats-container">
            <h3 className="titles-title">Seats that this House has owned:</h3>
            <Titles titles={props.seats} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsCard;
