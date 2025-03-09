// import { useState } from "react";
// import { db, auth } from "../firebase";
// import { push, ref, set } from "firebase/database";
// import { collection, addDoc } from "firebase/firestore";

// const AddRecipeForm = ({ fetchRecipes }) => {
//   const [title, setTitle] = useState("");
//   const [ingredients, setIngredients] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!title || !ingredients) return alert("All fields are required!");

//     const userId = auth.currentUser?.uid;
//     const recipeRef = ref(db, `users/${userId}/recipes`);
//     const newRecipeRef = push(recipeRef);

//     await set(newRecipeRef, { title, ingredients });

//     setTitle("");
//     setIngredients("");
//     fetchRecipes(); // Refresh the list
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)} />
//       <textarea placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
//       <button type="submit">Add Recipe</button>
//     </form>
//   );
// };

// export default AddRecipeForm;
import { useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

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
      fetchRecipes(); // Refresh the list
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
