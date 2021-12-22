import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./HouseDetails.css";

import DetailsCard from "./DetailsCard";
import houses from "../homePage/API/NewHouses";
const HouseDetails = () => {
  const { id } = useParams();
  const [house, setHouse] = useState();
  const housesImgs = houses.map((house) => house.img);

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
          <h3 className="detailsHeader">{house.name}</h3>
        </div>

        <DetailsCard
          houseID={id}
          name={house.name}
          region={house.region}
          founder={house.founder}
          founded={house.founded}
          lord={house.currentLord}
          heir={house.heir}
          img={housesImgs[id - 1]}
        />
      </div>
    );
  }
};

export default HouseDetails;
