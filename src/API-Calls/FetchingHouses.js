import axios from "axios";
import { useEffect, useState } from "react";
const FetchingHouses = () => {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    axios
      .get("https://anapioficeandfire.com/api/houses")
      .then((res) => {
        setHouses(res.data);
        //console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return houses;
};

export default FetchingHouses;
