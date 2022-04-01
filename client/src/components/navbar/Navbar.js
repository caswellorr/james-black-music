import { NavLink } from 'react-router-dom';
import './navbar.scss';

import React, { useState } from 'react';
import Media from '../media/Media';


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
          james black
        </NavLink>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink 
              exact to='/'
              activeClassName='active' className='nav-links'
              onClick={handleClick}
            >
            home
          </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
              exact to='/bio'
              activeClassName='active' className='nav-links'
              onClick={handleClick}
            >
            bio
          </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
              exact to='/gallery'
              activeClassName='active' className='nav-links'
              onClick={handleClick}
            >
            gallery
          </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
              exact to='/subscribe'
              activeClassName='active' className='nav-links'
              onClick={handleClick}
            >
            subscribe
          </NavLink>
          </li>
          <li className='nav-item media-links'>
            <Media />
          </li>
        </ul>
        <div className='nav-icon' onClick={handleClick}>
          <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </div>
    </nav>

      
    </>
  )
}

export default Navbar;