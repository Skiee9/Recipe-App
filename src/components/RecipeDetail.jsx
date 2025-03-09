import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/RecipePage.css"; 

const RecipeDetail = () => {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!idMeal) {
      setError("Invalid Recipe ID");
      setLoading(false);
      return;
    }

    const fetchRecipeDetail = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();

        if (data.meals && data.meals.length > 0) {
          setRecipe(data.meals[0]);
        } else {
          setError("Recipe not found!");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
        setError("Failed to fetch recipe.");
        setLoading(false);
      }
    };

    fetchRecipeDetail();
  }, [idMeal]);

  if (loading) return <h2 className="loading">Loading Recipe...</h2>;
  if (error) return <h2 className="error">{error}</h2>;
  if (!recipe) return <h2 className="error">No recipe found.</h2>;


  // added the date for the estimated time for cooking to add more features

  const cookingTimes = {
    "Beef": "45-60 mins",
    "Chicken": "30-45 mins",
    "Vegetarian": "20-30 mins",
    "Seafood": "25-40 mins",
    "Pasta": "15-25 mins",
    "Dessert": "30-60 mins"
  };

  const estimatedTime = cookingTimes[recipe.strCategory] || "30-45 mins";
  const servings = "2-4 people";

  // Check if the recipe is vegetarian
  const isVegetarian = recipe.strCategory.toLowerCase().includes("vegetarian") || recipe.strCategory.toLowerCase().includes("vegan");

  return (
    <div className="recipe-detail">
      <div className="recipe-image">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      </div>

      <div className="recipe-content">
        <h1 className="recipe-title">{recipe.strMeal}</h1>

        <div className="recipe-meta">
          <p><strong>Category:</strong> {recipe.strCategory}</p>
          <p><strong>Cuisine:</strong> {recipe.strArea}</p>
          <p><strong>Cooking Time:</strong> {estimatedTime}</p>
          <p><strong>Servings:</strong> {servings}</p>
          <p><strong>Dietary Info:</strong> {isVegetarian ? "Vegetarian 🌱" : "Non-Vegetarian 🍖"}</p>
        </div>

        <p className="recipe-info">{recipe.strInstructions}</p>

        <h3>Ingredients:</h3>
        <ul className="ingredients-list">
          {Array.from({ length: 20 }).map((_, i) => {
            const ingredient = recipe[`strIngredient${i + 1}`];
            const measure = recipe[`strMeasure${i + 1}`];

            return ingredient && ingredient.trim() !== "" ? (
              <li key={i}>{measure} {ingredient}</li>
            ) : null;
          })}
        </ul>

  
       

        <a href="/" className="back-button">Go Back</a>
      </div>
    </div>
  );
};

export default RecipeDetail;
