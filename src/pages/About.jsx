import React from 'react'

const About = () => {
    return (
      <div style={{ padding: "20px" }}>
        <h2>About This App</h2>
        <p>
          Welcome to the Recipe Manager! This app allows users to create, save, and manage their favorite recipes.  
          With a simple and easy-to-use interface, you can add new recipes, edit existing ones, or remove them whenever you want.
        </p>
  
        <h3>Features:</h3>
        <ul>
          <li>🔹 Add and manage personal recipes</li>
          <li>🔹 Secure authentication with Firebase</li>
          <li>🔹 Store recipes in a real-time database</li>
          <li>🔹 Edit or delete recipes anytime</li>
        </ul>
  
        <h3>How to Use:</h3>
        <ol>
          <li>✅ Register or log in to access your personal recipe dashboard.</li>
          <li>✅ Add new recipes by entering the title, ingredients, and steps.</li>
          <li>✅ View, edit, or delete your saved recipes at any time.</li>
        </ol>
  
        <p>Start creating your favorite recipes today! 🎉</p>
      </div>
    );
  };
  
  export default About;
  
