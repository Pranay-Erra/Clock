import React, { useState, useEffect } from "react";
import axios from "axios";

export const Demo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://clock-1-vz1p.onrender.com/demo");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

  }, []);

  return (
    <>
      {
        data.map((item) => (
            <>
          <h1>{item.hist}</h1>
        </>
      ))}
    </>
  );
};
