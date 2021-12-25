import React from "react";
import { useParams } from "react-router-dom";
import "./HouseDetails.css";
import "./ResHouseDetails.css";
import DetailsCard from "./DetailsCard";
import housesLogo from "../../API/HousesLogo";
import FetchingHouses from "../../API/FetchingHouses";

const HouseDetails = () => {
  const { id } = useParams();
  const url = `houses/${id}`;
  const house = FetchingHouses(url);
  if (!house) return null;
  else {
    return (
      <div className="detailsPage">
        <div className="detailsHeader">
          <h1 className="detailsHeader">{house.name}</h1>
        </div>
        <div className="details-card-container">
          <DetailsCard
            houseID={id}
            name={house.name}
            region={house.region}
            founder={house.founder}
            founded={house.founded}
            lord={house.currentLord}
            heir={house.heir}
            img={housesLogo[id - 1]}
          />
        </div>
      </div>
    );
  }
};

export default HouseDetails;
