import './form.scss';

import React, { useState, useEffect } from 'react';

function Form() {

  const intialState = {
    name: '',
    email: ''
  };

  const [ formValues, setFormValues] = useState(intialState);
  const [ formErrors, setFormErrors] = useState({});
  const [ isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [ name ]: value });
    console.log(formValues);
  };

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

  }, [ formErrors ]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!values.email) {
      errors.email = "Email is required!"
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email."
    }
    
    if(!values.name) {
      errors.name = "Name is required!"
    } else if (!regex.test(values.name)) {
      errors.name = "Please enter your name."
    }

    return errors;

  };
  return (
    <div className='subForm'>
       <div className='form-title'>
         <h2>subscribe</h2>
       </div>
       <form 
         onSubmit={handleSubmit}>
         <div className='inputs-section'>
           {/* <label className="subscribeInput animation">
             <input 
               
               type="text"
               name="name"
               value={ formValues.name }
               onChange={handleChange}
               placeholder="&nbsp;"/>
             <span className="placeholder">name</span>
             <p className='form-error'>{ formErrors.name }</p>
           </label> */}
           <label className="subscribeInput animation">
             <input 
              
               type="text"
               name="email"
               value={ formValues.email }
               onChange={handleChange}
               placeholder="&nbsp;"/>
             <span className="placeholder">email address</span>
             <p className='form-error'>{ formErrors.email }</p>
           </label>
         </div>
         <div className='subscribe-button'>
           <button className='subBtn'>
             submit
           </button>
         </div>
       </form>
      </div>
  )
}

export default Form