import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import "./ResHero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div>
        <h2 className="top-header">Game Of thrones</h2>
      </div>

      <div>
        <h2 className="secound-header">You Win Or You Die</h2>
      </div>

      <div>
        <Link to="/Houses" className="hero-btn">
          Descover Popular houses
        </Link>
      </div>
    </div>
  );
};

export default Hero;
