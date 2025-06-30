import React from 'react'
import reactDOM from 'react-dom'
import './style.css'
function Modal(props) {
  return reactDOM.createPortal(<div className='modal-overlay'>
    <div className='modal-content'>
      <h4>Modal Header</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quam.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, repudiandae!
      </p>
      <h6>Modal Footer: {props.age}</h6>
      <button onClick={()=>props.toggleModal(false)}>close modal</button>
    </div>
  </div>, document.getElementById('portal-root')) 
}

export default Modal