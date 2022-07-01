import React, { useEffect, useState } from "react";
import { ItemCard } from "./ItemCard";
import { Search } from "./Search";

export const ItemList = ({ items, isLoading }) => {


  const [showItems, setShowItems] = useState([]);

  useEffect(() => {
    setShowItems(items);
  }, [items]);

  const handleReset = () => {
    setShowItems([...items]);
  };

  return (
    <>
      <div className="banner-cont">
        <div className="banner-logo">
          <h1 className="nft-h1">NFT</h1>
        </div>
        <h2>Rick And Morty Coleccion NFT</h2>
        <p>Unica Coleccion NFT de Rick And Morty</p>
        <div className="rect-group">
          <div className="rect">------</div>
        </div>
      </div>

      <Search items={items} setShowItems={setShowItems} />
      <hr />

      {showItems.length === 0 && <p>Busca Otro Personaje</p>}
      <button className="outline" onClick={handleReset}>
        {" "}
        RESET{" "}
      </button>
      <hr />
      {isLoading && <p className="animate__animated animate__fadeInLeft">Loading</p>}

      <div className="card-grid animate__animated animate__fadeInLeft">
        {showItems.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};
