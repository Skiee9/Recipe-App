// import React {useState} from 'react'
import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Home from './pages/Home'
import Login from "./pages/Login"; 
import Dashboard from "./pages/Dashboard"; 
import Recipes from './pages/Recipes';
// import RecipeDetail from './components/RecipeDetail';
import About from './pages/About'
import RecipePage from './pages/RecipePage';

import "./App.css"


const App = () => {

  return (
    <BrowserRouter>
       <Navbar/>
       <SearchBar onSearch={(query) => setSearchQuery(query)}/>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/recipe/:idMeal" element={<RecipePage/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/recipes" element={<Recipes />} />
      
    </Routes>
    </BrowserRouter>
  
  )
}

export default App
