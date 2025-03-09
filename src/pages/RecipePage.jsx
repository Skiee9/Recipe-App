
import React from "react";
import RecipeDetail from "./RecipeDetail";
import "../styles/RecipePage.css"; // Import styling for better UI

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
