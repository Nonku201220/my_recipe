import React from 'react';
import { SwiperSlide } from 'swiper/react';
import './App.css';

const Recipe = ({ title, /* calories,  */image, ingredients }) => {
  return (
    <SwiperSlide>
      <div style={styles.recipe}>
        <h1>{title}</h1>
        <img style={styles.image} src={image} alt='' />
        <ol style={styles.ingredientsList}>
          {ingredients && ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ol>
       {/*  <p>{calories}</p> */}
      
      </div>
    </SwiperSlide>
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




