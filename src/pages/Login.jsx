import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase"; // Import Firebase auth instance
// import "../styles/Login.css"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

//   🔵 Login with Email & Password
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/recipes"); // Redirect to recipes after login
    } catch (error) {
      setError("Invalid email or password!");
    }
  };
// const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCytw1R7nNOSvAsg_c6yG1ibepTFXydBsI",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email, password, returnSecureToken: true }),
//         }
//       );
  
//       const data = await response.json();
//       console.log("Login Response:", data); // Debugging: Check Firebase response
  
//       if (!response.ok) {
//         throw new Error(data.error.message); // Log specific Firebase error
//       }
  
//       console.log("User logged in:", data);
//     } catch (error) {
//       console.error("Login Error:", error.message); // Show the exact error
//     }
//   };
  

  // 🔴 Google Login
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/recipes"); // Redirect to recipes
    } catch (error) {
      setError("Google Sign-In failed!");
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Your Account</h2>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="login-btn">Login</button>
      </form>

      <p className="or">OR</p>

      <button className="google-btn" onClick={handleGoogleLogin}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google Logo" />
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
