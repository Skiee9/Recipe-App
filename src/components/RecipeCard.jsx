import React from 'react';
import '../styles/RecipeCard.css';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className='recipe'>
      <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <div className="recipe-content">
        <h2 className="recipe-title">{recipe.title}</h2>
        <p className="recipe-description">
          { recipe.description.length > 100
            ? recipe.description.substring(0, 100) + '...'
          : recipe.description}
        </p>
        {/* show the description to 10 letters only after that it must show .... this */}

        <Link to={`/recipe/${recipe.idMeal}`} className="recipe-btn">
            View Recipe
          </Link>
      </div>
    </div>
    </div>
   
  );
};

export default RecipeCard;
