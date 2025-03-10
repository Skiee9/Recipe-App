import React from "react";
import RecipeDetail from "../components/RecipeDetail";
import "../styles/RecipePage.css"; 

const RecipePage = () => {
  return (
    <div className="recipe-page">
      <div className="recipe-container">
      

        <RecipeDetail />
      </div>
    </div>
  );
};

export default RecipePage;
