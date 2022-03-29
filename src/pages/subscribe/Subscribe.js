import './subscribe.scss';

import background from '../../img/colorfulJames.jpg';



function Subscribe() {
  return (
    <section className='subscribe'>
      <div className='subContainer'>
          <div className='left' 
            style={{ 
              backgroundImage: `url(${background})`, 
              backgroundSize: 'contain',
              backgroundPosition: 'center'
               }}>
          </div>
          <div className='right'>
            <div className='subForm'>
              <div className='form-title'>
                <h2>subscribe</h2>
              </div>
              <form action='' name='subscribe-form'>
                <div className='email-section'>
                  <label className="email animation">
                    <input type="email" placeholder="&nbsp;"/>
                    <span className="placeholder">email address</span>
                  </label>
                </div>
                <button className='subBtn'>submit</button>
              </form>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Subscribe