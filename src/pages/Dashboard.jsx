// import { useEffect, useState } from "react";
// import { auth, db } from "../firebase";
// import { ref, onValue, remove } from "firebase/database";
// import { signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import AddRecipeForm from "../components/AddRecipeForm";

// const Dashboard = () => {
//   const [recipes, setRecipes] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchRecipes();
//   }, []);

//   const fetchRecipes = () => {
//     const userId = auth.currentUser?.uid;
//     const recipeRef = ref(db, `users/${userId}/recipes`);

//     onValue(recipeRef, (snapshot) => {
//       const data = snapshot.val();
//       const recipeList = data ? Object.entries(data).map(([id, values]) => ({ id, ...values })) : [];
//       setRecipes(recipeList);
//     });
//   };

//   const handleDelete = async (id) => {
//     await remove(ref(db, `users/${auth.currentUser?.uid}/recipes/${id}`));
//     fetchRecipes();
//   };

//   const handleLogout = async () => {
//     await signOut(auth);
//     navigate("/login");
//   };

//   return (
//     <div>
//       <h2>Welcome, {auth.currentUser?.email} 🎉</h2>
//       <button onClick={handleLogout}>Logout</button>

//       <h3>Add a New Recipe</h3>
//       <AddRecipeForm fetchRecipes={fetchRecipes} />

//       <h3>Your Recipes</h3>
//       <ul>
//         {recipes.map((recipe) => (
//           <li key={recipe.id}>
//             <strong>{recipe.title}</strong> - {recipe.ingredients}
//             <button onClick={() => handleDelete(recipe.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, query, getDocs, deleteDoc, doc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import AddRecipeForm from "../components/AddRecipeForm";
import "../styles/Dashboard.css"; 

const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const userId = auth.currentUser?.uid;
      const recipeRef = collection(db, `users/${userId}/recipes`);
      const snapshot = await getDocs(query(recipeRef));

      const recipeList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setRecipes(recipeList);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const userId = auth.currentUser?.uid;
      await deleteDoc(doc(db, `users/${userId}/recipes`, id));
      fetchRecipes();
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="recipe-form">
      <h2>Welcome, {auth.currentUser?.email} 🎉</h2>
      <button onClick={handleLogout}>Logout</button>

      <h3>Add a New Recipe</h3>
      <AddRecipeForm fetchRecipes={fetchRecipes} />

      <h3>Your Recipes</h3>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <strong>{recipe.title}</strong> - {recipe.ingredients}
            <button onClick={() => handleDelete(recipe.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
