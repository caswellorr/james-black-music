import { Link } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
  return (
    <>

    <nav className='navbar'>
      <div className='nav-container'>
        <Link exact to='/' calssName='nav-logo'>
          JB
        </Link>
        <ul>
          <li>
            <Link exact to='/' calssName='nav-links'>
            Home
          </Link>
          </li>
          <li>
            <Link exact to='/bio' calssName='nav-links'>
            Bio
          </Link>
          </li>
          <li>
            <Link exact to='/gallery' calssName='nav-links'>
            Gallery
          </Link>
          </li>
          <li>
            <Link exact to='/subscribe' calssName='nav-links'>
            Subscribe
          </Link>
          </li>
        </ul>
      </div>
    </nav>

      
    </>
  )
}

export default Navbar