import React from "react";
import HouseCard from "./HouseCard";
import FetchingData from "../../../API/FetchingData";
import housesLogo from "../../../API/HousesLogo";
import "./Houses.css";
import "./ResHouses.css";
import NavBar from "../../../components/NavBar";

const Houses = (props) => {
  const housesApi = FetchingData("houses");
  //console.log(housesApi);
  return (
    <div>
      <div className="houses" id="houses">
        <NavBar menu={props.menu} setMenu={props.setMenu} />
        <h1>Most Popular Houses</h1>

        <div className="cards-container">
          {housesApi.map((house, index) => (
            <div key={house.name}>
              <HouseCard
                name={house.name}
                image={housesLogo[index]}
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
