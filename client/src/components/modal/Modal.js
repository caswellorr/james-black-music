import './modal.scss';

import ReactDOM from "react-dom";

function Modal({ open, onClose }) {

  if (!open) return null;
  
  return ReactDOM.createPortal (
    <>
      <div className='overlay' onClick={onClose}></div>

      <div className='modal'>
        <div className='modal-content'>
          <div className='modal-header'>
            <i className="close-Btn fa-solid fa-xmark" onClick={onClose}></i>
          </div>
          <div className='modal-body'>
            <h3>terms</h3>
            <p>
              By signing up, I agree to receive personalized marketing messages and updates about James Black. I acknowledge that I can opt-out at any time by emailing jamesblack@gmail.com.
            </p>
          </div>
        </div>
      </div>
    </>,

    document.getElementById('portal')


    )
}

export default Modal