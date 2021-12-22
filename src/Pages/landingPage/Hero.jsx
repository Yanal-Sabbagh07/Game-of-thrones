import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div>
        <h2 className="hero-header">you win or you die</h2>
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
