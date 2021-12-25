import axios from "axios";
import { useEffect, useState } from "react";
const FetchingHouses = (url) => {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    axios
      .get(`https://anapioficeandfire.com/api/${url}`)
      .then((res) => {
        setHouses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return houses;
};

export default FetchingHouses;
