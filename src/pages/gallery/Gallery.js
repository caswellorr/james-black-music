import './gallery.scss';

import image from '../../img/james.png';

import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';


function Gallery() {
  return (
    <div className='container'>
     <Header />
      <div className='wrapper'>
        <Sidebar />
        <div className='content'>
          Gallery
          <img src={image} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Gallery