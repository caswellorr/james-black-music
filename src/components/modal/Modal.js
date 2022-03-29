import React from 'react'

function Modal({ open, children, onClose }) {

  if (!open) return null;
  
  return (
    <>
      <div className='overlay'></div>

      <div className='modal'>
        <button onClick={onClose}>Close Modal</button>
        { children }
      </div>
    </>
    )
}

export default Modal