import './home.scss';

import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';

function Home() {
  return (
    <>
    
     <Header />
     <div className='home'>
       <Sidebar />
       <div className='content'>
         Hello World
       </div>
     </div>
     
    </>
  )
}

export default Home