// utils.js

// Get favorite character IDs from local storage
export function getFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites;
  }
  
  // Set favorite character IDs in local storage
  export function setFavorites(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
  