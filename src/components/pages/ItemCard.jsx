import React from "react";
import { Link } from "react-router-dom";

export const ItemCard = ({ name, image, id }) => {
  return (
    <div className="card">
      <p>{name}</p>
      <div>
        <img  src={image} alt={image} />
      </div>
  <button className="outline">    <Link to={`/${id}/details`}> Ver Mas...</Link> </button>
    </div>
  );
};
