import React, { useState } from "react";
import styled from "styled-components";

export const CharacterItem = ({ character }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);

    // Update local storage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (fav) => fav.id !== character.id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favorites, character];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <DIV>
      <img src={character.image} alt={character.name} />
      <h1>{character.name}</h1>
      <p>{character.description}</p>
      <p>Popularity: {character.popularity}/10</p>
      <p>Health: {character.health}</p>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Remove from Favorites 🤍" : "Add to Favorites ❤️"}
      </button>
    </DIV>
  );
};

const DIV = styled.div`
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   width: 400px;
   margin: 20px;
   padding: 10px;
   border-radius: 20px;
   background-color: rgb(229, 230, 238);
;
  img{
    width: 300px;
    height: 300px;
    
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }  

  img:hover{
    width: 310px;
    transition: 10ms;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  }

  button {
  background-color: #3954a9;
  color: #fff;
  border: none;
  height: 40px;
  border-radius: 20px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  font-size: 16px;
  transition: font-size 0.3s ease-in-out;

  /* Hover effect */
  &:hover {
    background-color: #293c80;
    font-size: 24px; 
  }

  /* Focus effect (for accessibility) */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(57, 84, 169, 0.5);
  }

  /* Active effect */
  &:active {
    background-color: #1f2e5b;
  }
}

`;
