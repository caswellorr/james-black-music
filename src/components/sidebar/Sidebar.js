import './sidebar.scss';

import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='top'>
        <ul>
        <Link to='/' style={{ textDecoration: "none" }}>
          <li>
            <span>Home</span>
          </li>
        </ Link>
        <Link to='/bio' style={{ textDecoration: "none" }}>
          <li>
            <span>Bio</span>
          </li>
          </Link>
          <Link to='/gallery' style={{ textDecoration: "none" }}>
          <li>
            <span>Gallery</span>
          </li>
          </Link>
          <Link to='/subscribe' style={{ textDecoration: "none" }}>
          <li>
            <span>Subscribe</span>
          </li>
          </Link>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
      </div>
    </div>
  )
}

export default Sidebar