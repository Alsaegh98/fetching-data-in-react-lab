// src/App.jsx
import './App.css';
import * as starshipService from './services/starshipService';
import StarshipSearch from './components/StarshipSearch';
import { useState, useEffect } from 'react';
import StarshipList from './components/StarshipList';

const App = () => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await starshipService.getStarships();
      setStarships(data.results);
      setLoading(false);
    };
    fetchDefaultData();
  }, []);

  const fetchData = async (query) => {
    setLoading(true);
    const data = await starshipService.searchStarships(query);
    setStarships(data.results);
    setLoading(false);
  };

  return (
    <main>
      <h1>Star Wars Starship Finder</h1>
      <StarshipSearch fetchData={fetchData} />
      {loading ? <p>Loading...</p> : <StarshipList starships={starships} />}
    </main>
  );
};

export default App;
