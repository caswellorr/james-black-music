import './sidebar.scss';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='top'>
        <ul>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>Bio</span>
          </li>
          <li>
            <span>Media</span>
          </li>
          <li>
            <span>Subscribe</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption'>1</div>
        <div className='colorOption'>2</div>
      </div>
    </div>
  )
}

export default Sidebar