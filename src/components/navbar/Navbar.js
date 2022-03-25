import './navbar.scss';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>JB</a>

        </div>
        <div className='right'>
          right
        </div>
      </div>
    </div>
  )
}

export default Navbar