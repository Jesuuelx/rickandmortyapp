import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../redux/store/slices/thunks";
import { ItemList } from "./ItemList";

export const MarketMain = () => {
  const dispatch = useDispatch();

  const { items, isLoading } = useSelector((state) => state.rickandmorthy);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return <ItemList items={items} isLoading={isLoading} />;
};
