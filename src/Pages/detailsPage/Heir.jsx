import React, { useEffect, useState } from "react";
import axios from "axios";
const Heir = (props) => {
  const [heir, setHeir] = useState(props.heir);

  useEffect(() => {
    axios
      .get(heir)
      .then((res) => {
        setHeir(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.heir]);
  if (!heir) return null;
  else return <span className="lord-name"> {heir.name}</span>;
};

export default Heir;
