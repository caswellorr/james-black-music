import './subscribe.scss';

import background from '../../img/colorfulJames.jpg';
import { convertLength } from '@mui/material/styles/cssUtils';


function Subscribe() {
  return (
    <section className='subscribe'>
      <div className='subContainer'>
        <div className='subRow'>
          <div className='col-left' 
            style={{ 
              backgroundImage: `url(${background})`, 
              backgroundSize: 'contain',
              backgroundRepeat: 'center',
              backgroundPosition: 'center'
              

               }}>
          </div>
          <div className='col-right'>
            <div className='form'>
              <h2>Subscribe</h2>
              <form action='' name='subscribe-form'>
                <input type='text' name='email' />
                <input type='submit' value='Submit' name='subscribe' className='subBtn' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe