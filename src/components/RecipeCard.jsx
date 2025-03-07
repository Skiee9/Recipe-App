import React from 'react';
import '../styles/RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <div className="recipe-content">
        <h2 className="recipe-title">{recipe.title}</h2>
        <p className="recipe-description">
          {recipe.description.length > 100
            ? recipe.description.substring(0, 100) + '...'
            : recipe.description}
        </p>
        <button className="recipe-btn">View Recipe</button>
      </div>
    </div>
  );
};

export default RecipeCard;
