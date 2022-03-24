import './home.scss';

import image from '../../img/james.png';

import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import Modal from '../../components/modal/Modal';

function Home() {
  return (
    <div className='container'>
     <Header />
      <div className='wrapper'>
        <Sidebar />
        <div className='content'>
          <Modal />
          <img src={image} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Home