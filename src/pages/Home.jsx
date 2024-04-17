import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Home = () => {
  const [data, setData] = useState([]);
  const fetchStories = async () => {
    const response = await axios.get(
      "https://child.onrender.com/api/sciencefiction"
    );
    return setData(response.data);
  };

  useEffect(() => {
    fetchStories();
  }, []);
  return (
    <div>
     
      <div className="container">
        {data.map((data) => (
          <Cards key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Home;
