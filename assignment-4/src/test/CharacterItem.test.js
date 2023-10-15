import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CharacterItem from './CharacterItem';

test('renders character item with name', () => {
  const character = {
    name: 'Spider-Man',
    description: 'A superhero with spider-like abilities.',
    image: 'spiderman.jpg',
    favorite: false,
    popularity: 9,
    health: 'Excellent',
  };

  render(<CharacterItem character={character} selected={false} onSelect={() => {}} />);

  const characterName = screen.getByText('Spider-Man');
  expect(characterName).toBeInTheDocument();
});

test('checkbox should be clickable and toggle selection', () => {
  const character = {
    name: 'Spider-Man',
    description: 'A superhero with spider-like abilities.',
    image: 'spiderman.jpg',
    favorite: false,
    popularity: 9,
    health: 'Excellent',
  };

  let selected = false;
  const handleSelect = () => {
    selected = !selected;
  };

  render(<CharacterItem character={character} selected={selected} onSelect={handleSelect} />);

  const checkbox = screen.getByRole('checkbox');
  
  // Check that the initial state is unchecked
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);

  // Check that the checkbox has been checked
  expect(checkbox).toBeChecked();

  fireEvent.click(checkbox);

  // Check that the checkbox is unchecked again
  expect(checkbox).not.toBeChecked();
});
