import './subscribe.scss';
import background from '../../img/colorfulJames.jpg';

import React, { useState, useEffect } from 'react';

import Modal from '../../components/modal/Modal';




function Subscribe(props) {

  const intialState = {
    email: ''
  };

  const [ formValues, setFormValues] = useState(intialState);
  const [ formErrors, setFormErrors] = useState({});
  const [ isSubmit, setIsSubmit] = useState(false);
  
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);

    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }

  }, [ formErrors ])

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@{^\s@}+\.[^\s@]{2,}$/i;

    if(!values.email) {
      errors.email = "Email is required"
    }

    return errors
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ formValues, [ name ]: value });
    console.log(formValues);
  };

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
              <form 
                onSubmit={handleSubmit}>
                <div className='email-section'>
                  <label className="email animation">
                    <input 
                      type="email"
                      name="email"
                      value={ formValues.email }
                      onChange={handleChange}
                      placeholder="&nbsp;"/>
                    <span className="placeholder">email address</span>
                    <span className='form-error'>{  }</span>
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