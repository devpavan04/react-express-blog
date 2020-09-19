import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbarStyle'>
      <div id='navItem1'>
        <h3>Express Blog</h3>
      </div>
      <div id='navItem2'>
        <Link to='/'>Home</Link>
        <Link to='/compose'>Compose</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
