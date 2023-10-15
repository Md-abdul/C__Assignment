// api.js

// Define the API endpoint URL
const API_URL = 'https://comichero.onrender.com/characters';

// Fetch characters from the API
export async function fetchCharacters() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
