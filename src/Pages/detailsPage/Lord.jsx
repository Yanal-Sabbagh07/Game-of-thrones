import React, { useEffect, useState } from "react";
import axios from "axios";
const Lord = (props) => {
  const [lord, setLord] = useState(props.lord);

  useEffect(() => {
    axios
      .get(props.lord)
      .then((res) => {
        setLord(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.lord]);
  if (!lord) return null;
  else return <span className="lord-name"> {lord.name + "  "}</span>;
};

export default Lord;
