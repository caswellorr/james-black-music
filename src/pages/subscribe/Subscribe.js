import './subscribe.scss';
import background from '../../img/colorfulJames.jpg';

import React, { useState } from 'react';

import Modal from '../../components/modal/Modal';




function Subscribe() {

const [isOpen, setIsOpen] = useState(false);

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
                <div className='subscribe-button'>
                  <button className='subBtn'>
                    submit
                  </button>
                </div>
              </form>
                <div className='terms-modal'>
                  <button
                    className='termsBtn'
                    onClick={() => setIsOpen(true)}>
                  terms
                  </button>
                  <Modal 
                  open={isOpen} 
                  onClose={() => setIsOpen(false)} />
                </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Subscribe