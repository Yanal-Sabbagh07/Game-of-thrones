import React from "react";
import HouseCard from "./HouseCard";
import FetchingHouses from "../API/FetchingHouses";
import houses from "../API/NewHouses";
import "./Houses.css";
import "./ResHouses.css";

const Houses = () => {
  const housesApi = FetchingHouses();
  const housesImgs = houses.map((house) => house.img);
  return (
    <div>
      <div className="houses" id="houses">
        <h1>Most Popular Houses</h1>

        <div className="cards-container">
          {housesApi.map((house, index) => (
            <div key={house.url}>
              <HouseCard
                name={house.name}
                image={housesImgs[index]}
                url={house.url}
              ></HouseCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Houses;
