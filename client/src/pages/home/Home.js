import './home.scss';

import Media from '../../components/media/Media';

import portrait from '../../img/james.png';

function Home() {
  return (
    <section className='home'>
      <div className='media-component'>
        <Media />
      </div>
      <div className='title'>
        <h1>james black</h1>
      </div>
      <div className='portrait'>
        <img src={portrait} alt='' />
      </div>
    </section>
  )
}

export default Home