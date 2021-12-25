import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./HouseDetails.css";
import "./ResHouseDetails.css";
import DetailsCard from "./DetailsCard";
import housesLogo from "../../API/HousesLogo";

const HouseDetails = () => {
  const { id } = useParams();
  const [house, setHouse] = useState();

  useEffect(() => {
    axios
      .get(`https://anapioficeandfire.com/api/houses/${id}`)
      .then((res) => {
        setHouse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
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
