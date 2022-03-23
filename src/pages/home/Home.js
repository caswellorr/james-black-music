import './home.scss';

import image from '../../img/JamesPortfolio.png';

import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import Modal from '../../components/modal/Modal';

function Home() {
  return (
    <div className='home'>
     <Header />
      <div className='homeContainer'>
        <Sidebar />
        <div className='content'  
              style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",
              backgroundSize:"contain", 
              }}>
          <Modal />
        </div>

      </div>
    </div>
  )
}

export default Home