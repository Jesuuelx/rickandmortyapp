import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="nav-container">
      <h1 className="nav-logo">NFT</h1>

      <button className="outline">
        <Link className="li" to="/">
          Market Place
        </Link>
      </button>
      <button className="outline">
        <Link className="li" to="/favorites">
          Favoritos
        </Link>
      </button>
    </div>
  );
};
