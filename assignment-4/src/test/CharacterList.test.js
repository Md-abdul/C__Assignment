import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CharacterList from './CharacterList';

test('renders a list of characters', () => {
  const characters = [
    {
      name: 'Spider-Man',
      description: 'A superhero with spider-like abilities.',
      image: 'spiderman.jpg',
      favorite: false,
      popularity: 9,
      health: 'Excellent',
    },
    // Add more character objects as needed
  ];

  render(<CharacterList />);

  for (const character of characters) {
    const characterName = screen.getByText(character.name);
    expect(characterName).toBeInTheDocument();
  }
});

test('delete button should remove selected items', () => {
  const characters = [
    {
      name: 'Spider-Man',
      description: 'A superhero with spider-like abilities.',
      image: 'spiderman.jpg',
      favorite: false,
      popularity: 9,
      health: 'Excellent',
    },
    // Add more character objects as needed
  ];

  render(<CharacterList />);

  for (const character of characters) {
    const checkbox = screen.getByRole('checkbox', { name: character.name });
    fireEvent.click(checkbox);
  }

  const deleteButton = screen.getByText('Delete Selected');
  fireEvent.click(deleteButton);

  for (const character of characters) {
    const characterName = screen.queryByText(character.name);
    expect(characterName).toBeNull();
  }
});
