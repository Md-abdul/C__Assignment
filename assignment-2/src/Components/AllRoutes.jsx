import React from "react";
import { Route, Routes } from "react-router-dom";
import { CharacterList } from "../Pages/CharacterList";
import { FavoriteCharacters } from "../Pages/FavoriteCharacters";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/favoritecharacter" element={<FavoriteCharacters />} />
      </Routes>
    </div>
  );
};
