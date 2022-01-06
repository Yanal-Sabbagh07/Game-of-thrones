import React from "react";
import FetchingData from "../../../../API/FetchingData";
const Heir = (props) => {
  const houseHeir = props.heir.split("/");
  const heirId = houseHeir[houseHeir.length - 1];
  const heir = FetchingData(`characters/${heirId}`);
  return (
    <div className="house-heir">
      <h3 className="house-heir-title"> HEIR</h3>
      <img
        className="heir-img"
        src={require(`../../../../imgs/characters/${heirId}.jpg`)}
        alt="heir"
      />
      <h3 className="heir-name">{heir.name}</h3>
    </div>
  );
};

export default Heir;
