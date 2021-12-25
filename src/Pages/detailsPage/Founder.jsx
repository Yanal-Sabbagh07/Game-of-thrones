import React from "react";
import FetchingHouses from "../../API/FetchingHouses";
const Founder = (props) => {
  const housefounder = props.url.split("/");
  const founderId = housefounder[housefounder.length - 1];
  const founder = FetchingHouses(`characters/${founderId}`);
  console.log(founder);

  return <span>{founder.name}</span>;
};

export default Founder;
