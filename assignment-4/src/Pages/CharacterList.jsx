
// ====================

// CharacterList.js
import React, { useState, useEffect } from 'react';
import CharacterItem from './CharacterItem';
import { fetchCharacters } from './api';
import { getFavorites, setFavorites } from './utils';
import styled from 'styled-components';
import Loading from './Loading';


const LoadingMessage = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: red;
  text-align: center;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  font-size: 1.2rem;
`;

const CharacterListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://comichero.onrender.com/characters');
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
        const data = await response.json();
        setCharacters(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleDeleteSelected = () => {
    // Remove selected items from the characters array
    const updatedCharacters = characters.filter(
      (character) => !selectedItems.includes(character.id)
    );
    setCharacters(updatedCharacters);

    // Clear the selection
    setSelectedItems([]);
  };

  const handleFavoriteSelected = () => {
    // Update the favorite status of selected items in the characters array
    const updatedCharacters = characters.map((character) => {
      if (selectedItems.includes(character.id)) {
        character.isFavorite = !character.isFavorite;
      }
      return character;
    });
    setCharacters(updatedCharacters);

    // Persist favorite status in local storage
    setFavorites(
      updatedCharacters
        .filter((character) => character.isFavorite)
        .map((character) => character.id)
    );

    // Clear the selection
    setSelectedItems([]);
  };

  return (
    <div>
      {isLoading && <LoadingMessage><Loading/></LoadingMessage>}
      {error && <ErrorMessage>Error: {error.message}</ErrorMessage>}
      <CharacterListWrapper>
        {characters.map((character) => (
          <CharacterItem
            key={character.id}
            character={character}
            selected={selectedItems.includes(character.id)}
            onSelect={handleSelectItem}
          />
        ))}
      </CharacterListWrapper>
      <Button onClick={handleDeleteSelected}>Delete Selected</Button>
      <Button onClick={handleFavoriteSelected}>Favorite Selected</Button>
    </div>
  );
}

// export default CharacterList;
