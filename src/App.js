import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Recipe from './Recipe';

import './App.css';

const App = () => {
  const APP_ID = '20bfce46';
  const APP_KEY = 'ad3fbcd6f5df5b7384466e065c7de4fd';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
      },
      effect: 'fade',
    });

    getRecipes();

    return () => {
      swiper.destroy();
    };
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
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {recipes.map((recipe) => (
            <div key={recipe.recipe.label} className="swiper-slide">
              <Recipe
                title={recipe.recipe.label}
                /* calories={recipe.recipe.calories} */
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients || []}
              />
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

const styles = {
  sliderContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(150px, 1fr))',
    gridGap: '2rem',
    justifyItems: 'initial',
    height: '100%',
    justifyContent: 'space-between',
    overflowX: 'scroll',
  },
};

export default App;

