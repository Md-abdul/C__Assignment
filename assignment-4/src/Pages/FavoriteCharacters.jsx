import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import styled from 'styled-components';
export const FavoriteCharacters = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching from local storage)
    setTimeout(() => {
      // Load favorites from local storage when the component mounts
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(storedFavorites);
      setLoading(false); // Set loading to false once the data is loaded
    }, 1000); // Simulated delay for loading (you can adjust this as needed)
  }, []);

  const removeFavorite = (id) => {
    // Remove a character from favorites
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(updatedFavorites);
    // Update local storage
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  if (loading) {
    return <Loading/>; // Display a loading message or spinner while loading
  }

  return (
    <ColumnContainer>
    {favorites.map((character, index) => (
      // Group every three items into a row
      index % 3 === 0 && (
        <RowContainer key={index}>
          {favorites.slice(index, index + 3).map((char) => (
            <ColumnItem key={char.id}>
              <img src={char.image} alt={char.name} />
              <h2>{char.name}</h2>
              <p>{char.description}</p>
              <p>Popularity: {char.popularity}/10</p>
              <p>Health: {char.health}</p>
              <button onClick={() => removeFavorite(char.id)}>
                Remove from Favorites
              </button>
            </ColumnItem>
          ))}
        </RowContainer>
      )
    ))}
  </ColumnContainer>
  );
};

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column; /* Force a single column layout */
  gap: 20px; /* Adjust the gap between rows as needed */
  align-items: center; /* Center items horizontally */
`

const ColumnItem  = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   width: 400px;
   margin: 20px;
   padding: 10px;
   border-radius: 20px;
   background-color: rgb(229, 230, 238);

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

`

const RowContainer = styled.div`
  display: flex;
  justify-content: center; /* Center items horizontally within the row */
  gap: 20px; /* Adjust the gap between items within a row as needed */
`;