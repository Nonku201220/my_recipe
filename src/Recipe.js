import React, { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import './App.css';

const Recipe = ({ title, image, ingredients }) => {
  const [showIngredients, setShowIngredients] = useState(false);

  const toggleIngredients = () => {
    setShowIngredients(!showIngredients);
  };

  return (
    <div className="recipe">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <button onClick={toggleIngredients}>
        {showIngredients ? 'Hide Ingredients' : 'Show Ingredients'}
      </button>
      {showIngredients && (
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  recipe: {
    borderRadius: '10px',
    boxShadow: '0px 5px 20px rgba(71, 71, 71)',
    margin: '-100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    background: 'white',
    marginLeft: '10rem', // Updated marginLeft value for wider background
    alignItems: 'center',
    minWidth: '40px',
    marginTop: '5rem',
  },
  ingredientsList: {
    listStyleType: 'decimal',
    paddingLeft: '20px',
  },
  image: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
  },
};

export default Recipe;




