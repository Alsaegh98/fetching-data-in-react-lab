
const BASE_URL = 'https://swapi.dev/api/starships/';

export const getStarships = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const searchStarships = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}?search=${query}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

