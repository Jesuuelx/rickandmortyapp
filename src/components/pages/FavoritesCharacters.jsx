import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remoteWhiteList } from "../redux/store/slices/rickandmorthySlices";

const init = () => {
  return JSON.parse(localStorage.getItem("whiteList")) || [];
};

export const FavoritesCharacters = () => {
  const dispatch = useDispatch();

  const { whiteList } = useSelector((state) => state.rickandmorthy);

  return (
    <>
      <h2> Favorites </h2>
      <div className="card-grid animate__animated animate__fadeInLeft">
        {init().map((item) => (
          <div key={item.name} className="card">
            <div>{item.name}</div>
            <img src={item.image} alt={item.name} />
            <button
              className="outline"
              onClick={() => dispatch(remoteWhiteList(item.name))}
            >
              REMOVE
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
