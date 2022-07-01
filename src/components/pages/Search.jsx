import React from "react";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { useNavigate, useLocation } from "react-router-dom";

export const Search = ({ items, setShowItems }) => {
  const navigate = useNavigate();

  const location = useLocation();

  const query = queryString.parse(location.search);

  const { q = "" } = query;

  const [{ seachText }, handleInputChange, reset] = useForm({
    seachText: q,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItems = items.filter((item) =>
      item.name.toLocaleLowerCase().includes(seachText.toLocaleLowerCase())
    );
    setShowItems([...newItems]);
    navigate(`?q=${seachText}`);
  };

  return (
    <form onSubmit={handleSubmit} className='input-outline' aria-label="form">
      <input
        type="text"
        placeholder="Buscar tu NFT"
        name="seachText"
        autoComplete="off"
        value={seachText}
        onChange={handleInputChange}
      />

      <button type="submit" className="outline">Buscar</button>
    </form>
  );
};
