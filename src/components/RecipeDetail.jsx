import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { idMeal } = useParams(); // Ensure idMeal is correctly extracted from URL
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

  if (loading) return <h2>Loading Recipe...</h2>;
  if (error) return <h2>{error}</h2>;
  if (!recipe) return <h2>No recipe found.</h2>;

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

          return ingredient && ingredient.trim() !== "" ? (
            <li key={i}>{measure} {ingredient}</li>
          ) : null;
        })}
      </ul>
    </div>
  );
};

export default RecipeDetail;
