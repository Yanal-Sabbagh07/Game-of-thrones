import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const [house, setHouse] = useState();

  useEffect(() => {
    axios
      .get(`https://anapioficeandfire.com/api/houses/${id}`)
      .then((res) => {
        setHouse(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!house) return null;
  else {
    return (
      <React.Fragment>
        <Link to="/">Houses</Link>
        <div className="header">
          <h1>{house.name}</h1>
        </div>
      </React.Fragment>
    );
  }
};

export default Details;
