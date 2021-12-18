import React from "react";
import { Link } from "react-router-dom";
import HouseCard from "./HouseCard";
import FetchingHouses from "../../API-Calls/FetchingHouses";
import houses from "../../API-Calls/NewHouses";
import "./Houses.css";
const Houses = () => {
  const housesApi = FetchingHouses();
  const housesImgs = houses.map((house) => house.img);
  console.log(housesImgs);
  return (
    <div className="houses">
      <h1>Game of thrones</h1>
      <h2>Houses</h2>

      <div className="container">
        {housesApi.map((house, index) => (
          <div key={house.url}>
            <Link to={`/${house.url}`}>
              <HouseCard
                name={house.name}
                image={housesImgs[index]}
              ></HouseCard>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Houses;
