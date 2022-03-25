import { NavLink } from 'react-router-dom';
import './navbar.scss';

import React, { useState } from 'react';


function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
    <nav className='navbar'>
      <div className='nav-container'>
        <NavLink 
          exact to='/' activeClassName='active' className='nav-logo'
        >
          JB
        </NavLink>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <NavLink 
              exact to='/'
              activeClassName='active' className='nav-links'
            >
            Home
          </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
              exact to='/bio'
              activeClassName='active' className='nav-links'
            >
            Bio
          </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
              exact to='/gallery'
              activeClassName='active' className='nav-links'
            >
            Gallery
          </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
              exact to='/subscribe'
              activeClassName='active' className='nav-links'
            >
            Subscribe
          </NavLink>
          </li>
        </ul>
        <div className='nav-icon' onClick={handleClick}>
          <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </div>
      </div>
    </nav>

      
    </>
  )
}

export default Navbar;