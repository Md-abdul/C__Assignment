// CharacterItem.js
import React from 'react';
import styled from 'styled-components';

const CharacterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const CharacterName = styled.span`
  font-weight: bold;
  margin-left: 10px;
`;

const CharacterDescription = styled.p`
  margin: 10px 0;
`;

const CharacterImage = styled.img`
  max-width: 100px;
  max-height: 100px;
  margin-right: 10px;
`;

const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

function CharacterItem({ character, selected, onSelect }) {
  return (
    <CharacterWrapper className={selected ? 'selected' : ''}>
      <input
        type="checkbox"
        checked={selected}
        onChange={() => onSelect(character.id)}
      />
      <CharacterImage src={character.image} alt={character.name} />
      <CharacterInfo>
        <CharacterName>{character.name}</CharacterName>
        <CharacterDescription>{character.description}</CharacterDescription>
        <p>Popularity: {character.popularity}</p>
        <p>Health: {character.health}</p>
      </CharacterInfo>
    </CharacterWrapper>
  );
}

export default CharacterItem;
