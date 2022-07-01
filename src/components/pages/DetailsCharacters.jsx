import React, { useEffect } from "react";
import { getOnceCharacter } from "../redux/store/slices/thunks";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setItemsWhiteList } from "../redux/store/slices/rickandmorthySlices";

export const DetailsCharacters = () => {
  const { id } = useParams();

  const { character, isLoading, whiteList } = useSelector(
    (state) => state.rickandmorthy
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOnceCharacter(id));
  }, [id]);

  const handleAdd = () => {
    dispatch(setItemsWhiteList(character));
  };

  return (
    <div>
      {isLoading ? (
        <p className="animate__animated animate__fadeInLeft">Loading...</p>
      ) : (
        <div className="card animate__animated animate__fadeInLeft">
          <p>{character.name}</p>
          <img src={character.image} alt={character.name} />
          <p>GENDER: {character.gender}</p>
          <p>STATUS: {character.status}</p>
          <p>SPECIES: {character.species} </p>
        </div>
      )}

      <button className="outline" onClick={handleAdd}>
        AGREGAR A FAVORITOS
      </button>
    </div>
  );
};
