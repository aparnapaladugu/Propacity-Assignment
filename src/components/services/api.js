// api.js
const BASE_URL = 'https://swapi.dev/api/';

const fetchFromAPI = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
};

export const getFilms = async () => {
  return fetchFromAPI('films/');
};

// Similar functions for other SWAPI endpoints
// Example:
// export const getPeople = async () => {
//   return fetchFromAPI('people/');
// };
// export const getPlanets = async () => {
//   return fetchFromAPI('planets/');
// };
