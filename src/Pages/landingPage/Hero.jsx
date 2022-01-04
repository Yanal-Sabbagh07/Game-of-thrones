import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import "./Hero.css";
import "./ResHero.css";
const Hero = (props) => {
  return (
    <div className="hero-container">
      <NavBar menu={props.menu} setMenu={props.setMenu} />
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
    </div>
  );
};

export default Hero;
