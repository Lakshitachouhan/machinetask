import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <>
      <Link to={`/singlepage/${data._id}`} className="card">
        <img
          src={"https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"}
          alt="img"
        />
        <p>{data.Title}</p>
        <button>
          <Link className="link">{!data.Status ? "empty" : data.Status}</Link>
        </button>
      </Link>
    </>
  );
};

export default Cards;
