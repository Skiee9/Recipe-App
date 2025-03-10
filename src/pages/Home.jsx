import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
// import './Home.css';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async () => {
    
    try {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await res.json();
      setRecipes(data.meals); // 'meals' is the array from the API
      setLoading(false);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (loading) return <h2>Loading Recipes...</h2>;

  return (
    // <div >
    //   {/* <h1>Popular Recipes</h1> */}
    //   <div className="recipes-container">
    //     {recipes && recipes.map((recipe) => (
    //       <RecipeCard
    //         key={recipe.idMeal}
    //         recipe={{
    //           idMeal: recipe.idMeal,
    //           title: recipe.strMeal,
    //           description: recipe.strInstructions,
    //           image: recipe.strMealThumb,
    //         }}
    //       />
    //     ))}
    //   </div>
    // </div>
    <div className="page-container">
  {/* Left Sidebar */}
  <div className="left-sidebar">
    <h3>Categories</h3>
    <ul>
      <li>Vegetarian</li>
      <li>Non-Vegetarian</li>
      <li>Vegan</li>
      <li>Gluten-Free</li>
    </ul>
  </div>

  {/* Centered Recipes Container */}
  <div className="recipes-container">
    {recipes &&
      recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={{
            idMeal: recipe.idMeal,
            title: recipe.strMeal,
            description: recipe.strInstructions,
            image: recipe.strMealThumb,
          }}
        />
      ))}
  </div>

  {/* Right Sidebar */}
  <div className="right-sidebar">
    <h3>Popular Recipes</h3>
    <p>Try these amazing dishes!</p>
    <ul>
      <li>Chicken Biryani</li>
      <li>Paneer Butter Masala</li>
      <li>Pasta Alfredo</li>
    </ul>
  </div>
</div>

  );
};

export default Home;
