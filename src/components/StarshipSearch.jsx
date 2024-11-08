
import { useState } from 'react';

const StarshipSearch = ({ fetchData }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(query);
    setQuery('');
  };

  return (
    <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="starship">Enter a Starship Name: </label>
        <input 
          type="text" 
          id="starship" 
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default StarshipSearch;
