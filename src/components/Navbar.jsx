import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    // navbar started here
    <nav>


    <div>
      <Link to="/home">logo</Link>
    </div>

    
    {/* middle navbar */}
    <div className='center-nav'>  
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    </div>
   
     <Link to="/login">Login</Link>
    </nav>
  )
}

export default Navbar

