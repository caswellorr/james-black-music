import './bio.scss';

import image from '../../img/james.png';

import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';

function Bio() {
  return (
    <div className='bio'>
     <Header />
      <div className='wrapper'>
        <Sidebar />
        <div className='content'>
          <div className='bioContainer'>
            <div className="bioHeader">
              <h1 class="title">Welcome, amigo.</h1>
            </div>
            <div className="body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod alias ut illo doloremque eum ipsum obcaecati distinctio debitis reiciendis quae quia soluta totam doloribus quos nesciunt necessitatibus, consectetur quisquam accusamus ex, dolorum, dicta vel? Nostrum voluptatem totam, molestiae rem at ad autem dolor ex aperiam. Amet assumenda eos architecto, dolor placeat deserunt voluptatibus tenetur sint officiis perferendis atque! Voluptatem maxime eius eum dolorem dolor exercitationem quis iusto totam! Repudiandae nobis nesciunt sequi iure! Eligendi, eius libero. Ex, repellat sapiente!
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod alias ut illo doloremque eum ipsum obcaecati distinctio debitis reiciendis quae quia soluta totam doloribus quos nesciunt necessitatibus, consectetur quisquam accusamus ex, dolorum, dicta vel? Nostrum voluptatem totam, molestiae rem at ad autem dolor ex aperiam. Amet assumenda eos architecto, dolor placeat deserunt voluptatibus tenetur sint officiis perferendis atque! Voluptatem maxime eius eum dolorem dolor exercitationem quis iusto totam! Repudiandae nobis nesciunt sequi iure! Eligendi, eius libero. Ex, repellat sapiente!</p>
            </div>
          </div>
          <img src={image} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Bio