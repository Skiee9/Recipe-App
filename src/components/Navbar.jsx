import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    // navbar started here
    <nav>


    <div>
      <Link to="/home"><img src='https://cdn.freebiesupply.com/logos/thumbs/2x/my-recipes-logo.png' alt='logo' height="40px" width="40px"/></Link>
    </div>


    {/* middle navbar */}
    <div className='center-nav'>  
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    </div>
   
     <button><Link to="/login">Log In</Link></button>
    </nav>
  )
}

export default Navbar

