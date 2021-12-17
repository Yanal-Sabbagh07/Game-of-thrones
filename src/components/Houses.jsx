import React from "react";
import HouseCard from "./HouseCard";
import FetchingHouses from "../API-Calls/FetchingHouses";
import "./Houses.css";
const Houses = (props) => {
  const housesApi = FetchingHouses();
  const housesNames = housesApi.map((house) => house.name);
  console.log(housesNames);
  return (
    <div className="container">
      {props.houses.map((house, index) => (
        <HouseCard
          key={house.id}
          name={housesNames[index]}
          image={house.img}
        ></HouseCard>
      ))}
    </div>
  );
};

export default Houses;
