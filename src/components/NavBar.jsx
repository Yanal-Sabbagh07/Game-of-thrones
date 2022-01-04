import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = (props) => {
  function handleClick(event) {
    props.setMenu(event.target.name);
    console.log(event.target.name);
  }
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <img
            className="logo"
            src={require(`../imgs/Logo/logo.png`)}
            alt="logo"
          />
        </div>
        <div className="right">
          <Link
            to="/"
            className={"home-btn " + (props.menu === "home" && "active")}
            onClick={handleClick}
            name="home"
          >
            Home
          </Link>
          <Link
            to="/Houses"
            className={"houses-btn " + (props.menu === "houses" && "active")}
            onClick={handleClick}
            name="houses"
          >
            Houses
          </Link>

          <Link
            to="/"
            className={"char-btn " + (props.menu === "char" && "active")}
            onClick={handleClick}
            name="char"
          >
            Characters
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
