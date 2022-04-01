import './form.scss';

import React, { useState, useEffect } from 'react';

function Form() {

  const intialState = {
    // name: '',
    // email: '',
    MERGE0: '',
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

    if(!values.MERGE0) {
      errors.MERGE0 = "Email is required!"
    } else if (!regex.test(values.MERGE0)) {
      errors.MERGE0 = "Please enter a valid email."
    }
    
    // if(!values.name) {
    //   errors.name = "Name is required!"
    // } else if (!regex.test(values.name)) {
    //   errors.name = "Please enter your name."
    // }

    return errors;

  };
  return (
    <div className='subForm'>
       <div className='form-title'>
         <h2>subscribe</h2>
       </div>
       <form 
         onSubmit={handleSubmit}
         action="https://gmail.us14.list-manage.com/subscribe/post" method="POST"
         >
        <input type="hidden" name="u" value="970d2e87e09f618fb90406232" />
        <input type="hidden" name="id" value="2299ada69a" />
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
           <label className="subscribeInput animation"
           htmlFor='MERGE0'
           >
             <input 
                name="MERGE0" 
                id="MERGE0"
                type="email"
                // name="email"
                value={ formValues.MERGE0 }
                onChange={handleChange}
                placeholder="&nbsp;"/>
             <span className="placeholder">email address</span>
             <p className='form-error'>{ formErrors.MERGE0 }</p>
           </label>
         </div>
         <div className='subscribe-button'>
           <button className='subBtn'>
             submit
           </button>
         </div>
         <input type="hidden" name="ht" value="27cf3ffe574fabec239aeccf55d38a55e646a4ec:MTY0ODgzNzg2MS4xNjk=" />
        <input type="hidden" name="mc_signupsource" value="hosted" />
       </form>
      </div>
  )
}

export default Form