import React from "react";
import { useParams } from "react-router-dom";
import "./HouseDetails.css";
import "./ResHouseDetails.css";
import DetailsCard from "./DetailsCard";
import { Link } from "react-router-dom";
import FetchingHouses from "../../API/FetchingHouses";
// {props.words && <h3 className="house-word">{props.words}</h3>}
const HouseDetails = () => {
  const { id } = useParams();
  const url = `houses/${id}`;
  const house = FetchingHouses(url);
  if (!house) return null;
  else {
    return (
      <div className="detailsPage">
        <div className="details-card-container">
          <div className="details-card-header">
            <Link to="/Houses" className="back-to-houses">
              Back to houses
            </Link>
          </div>
          <DetailsCard
            houseID={id}
            name={house.name}
            coatOfArms={house.coatOfArms}
            words={house.words}
            titles={house.titles}
            seats={house.seats}
            overlord={house.overlord}
            region={house.region}
            founder={house.founder}
            founded={house.founded}
            lord={house.currentLord}
            heir={house.heir}
            swornMembers={house.swornMembers}
            img={`${id}.png`}
          />
        </div>
      </div>
    );
  }
};

export default HouseDetails;
