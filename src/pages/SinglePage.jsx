import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const [singleData, setSingleData] = useState({});
  const params = useParams();
  //   console.log(pra);
  const fetchSingle = async (id) => {
    const response = await axios.get(
      `https://child.onrender.com/api/sciencefiction/${id}`
    );
    console.log(response.data);
    return setSingleData(response.data);
  };

  useEffect(() => {
    fetchSingle(params.id);
  }, []);
  return (
    <>
      <div className="single">
        <div className="singlepage">
          <img
            src={"https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"}
            alt="img"
          />
          <p>{singleData.Title}</p>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
