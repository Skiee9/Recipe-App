import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css';
import Login from "../pages/Login"

const Navbar = () => {
  return (
    // navbar started here
    <nav>

    {/* starting navbar */}
    <div>
      <Link to="/"><img src='https://cdn.freebiesupply.com/logos/thumbs/2x/my-recipes-logo.png' alt='logo' height="50px" width="80px"/></Link>
    </div>


    {/* middle navbar */}
    <div className='center-nav'>  
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    </div>
   

   {/* ending navbar */}
     <button><Link to="/login">Log In</Link></button>
    </nav>
  )
}

export default Navbar

