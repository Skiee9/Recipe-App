import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { idMeal } = useParams(); // Get meal ID from URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );
        const data = await res.json();
        setRecipe(data.meals[0]); // The API returns an array with one item
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
        setLoading(false);
      }
    };

    fetchRecipeDetail();
  }, [idMeal]);

  if (loading) return <h2>Loading Recipe...</h2>;

  return (
    <div className="recipe-detail">
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>{recipe.strInstructions}</p>
      <h3>Ingredients:</h3>
      <ul>
        {Array.from({ length: 20 }).map((_, i) => {
          const ingredient = recipe[`strIngredient${i + 1}`];
          const measure = recipe[`strMeasure${i + 1}`];
          return ingredient ? <li key={i}>{measure} {ingredient}</li> : null;
        })}
      </ul>
    </div>
  );
};

export default RecipeDetail;
