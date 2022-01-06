import axios from "axios";
import { useEffect, useState } from "react";
const FetchingData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://anapioficeandfire.com/api/${url}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
  console.log(data);

  return data;
};

export default FetchingData;
