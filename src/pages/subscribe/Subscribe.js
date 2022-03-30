import './subscribe.scss';
import background from '../../img/colorfulJames.jpg';

import React, { useState } from 'react';

import Modal from '../../components/modal/Modal';
import Form from '../../components/form/Form';




function Subscribe(props) {

  
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
            <Form />
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
    </section>
  )
}

export default Subscribe