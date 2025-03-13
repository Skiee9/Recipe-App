
import { useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import "../styles/AddRecipeForm.css"

const AddRecipeForm = ({ fetchRecipes }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !ingredients) return alert("All fields are required!");

    try {
      const userId = auth.currentUser?.uid;
      const recipeRef = collection(db, `users/${userId}/recipes`);
      await addDoc(recipeRef, { title, ingredients });

      setTitle("");
      setIngredients("");
      fetchRecipes();
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  return (
    <div className="new-recipe">
        <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
      <button type="submit">Add Recipe</button>
    </form>
    </div>
  
  );
};

export default AddRecipeForm;
