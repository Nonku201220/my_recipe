import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

import './App.css';

const App = () => {
  const APP_ID = '20bfce46';
  const APP_KEY = 'ad3fbcd6f5df5b7384466e065c7de4fd';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);

    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <div className='Header'> Search Recipes
        <form onSubmit={getSearch} className="search-Form">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <div key={recipe.recipe.label}>
              <Recipe
                title={recipe.recipe.label}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients || []}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;


