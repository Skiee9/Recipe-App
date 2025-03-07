import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home'
// import About from './pages/About'


const App = () => {
  return (
    <BrowserRouter>
       <Navbar/>
    </BrowserRouter>
  
  )
}

export default App
