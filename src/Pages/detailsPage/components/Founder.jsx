import React from "react";
import FetchingHouses from "../../../API/FetchingHouses";
import "./Founder.css";

const Founder = (props) => {
  const housefounder = props.url.split("/");
  const founderId = housefounder[housefounder.length - 1];
  const founder = FetchingHouses(`characters/${founderId}`);

  return (
    <div className="house-founder">
      <h3 className="house-founder-title">LORD</h3>
      <img
        className="founder-img"
        src={require(`../../../imgs/characters/${founderId}.jpg`)}
        alt="founder"
      />
      <h3 className="house-founder-name">{founder.name}</h3>
    </div>
  );
};

export default Founder;
