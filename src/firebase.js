// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCytw1R7nNOSvAsg_c6yG1ibepTFXydBsI",
  authDomain: "recipe-9b745.firebaseapp.com",
  projectId: "recipe-9b745",
  storageBucket: "recipe-9b745.firebasestorage.app",
  messagingSenderId: "198443489632",
  appId: "1:198443489632:web:a25d07db78b272cb976605"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;