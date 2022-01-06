import React, { useEffect, useState } from "react";
import FetchingHouses from "../../../API/FetchingHouses";

const Lord = (props) => {
  const houseLord = props.lord.split("/");
  const lordId = houseLord[houseLord.length - 1];
  const lord = FetchingHouses(`characters/${lordId}`);
  return <span className="lord-name">House Lord: {lord.name}</span>;
};

export default Lord;
