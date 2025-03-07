import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
// import Home from './pages/Home'
// import About from './pages/About'


const App = () => {
  return (
    <BrowserRouter>
       <Navbar/>
       <SearchBar/>
    </BrowserRouter>
  
  )
}

export default App
