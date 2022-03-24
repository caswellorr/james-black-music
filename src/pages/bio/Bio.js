import './bio.scss';

import image from '../../img/james.png';

import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';

function Bio() {
  return (
    <div className='container'>
     <Header />
      <div className='wrapper'>
        <Sidebar />
        <div className='content'>
          BIO
          <img src={image} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Bio