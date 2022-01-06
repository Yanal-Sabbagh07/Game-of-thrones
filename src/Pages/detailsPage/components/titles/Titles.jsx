import React from "react";
import "./Titles.css";
const Titles = (props) => {
  return (
    <div className="titles-container">
      {props.titles.map((item, index) => (
        <li key={index} className="titles-name">
          {props.titles[index]}
        </li>
      ))}
    </div>
  );
};

export default Titles;
