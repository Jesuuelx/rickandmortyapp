import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailsCharacters } from "../pages/DetailsCharacters";
import { FavoritesCharacters } from "../pages/FavoritesCharacters";
import { Footer } from "../pages/Footer";
import { MarketMain } from "../pages/MarketMain";
import { NavBar } from "../ui/NavBar";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MarketMain />} />
        <Route path="/:id/details" element={<DetailsCharacters />} />
        <Route path="/favorites" element={<FavoritesCharacters />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};
