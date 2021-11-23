import React from 'react'

function Modal({ modalState, children}) {
  const showHideClassName = modalState ? "modal modal-show" :"modal modal-hide";

  return(
    <div className={showHideClassName}>
      <div className="modal-container">
        {children}
        
      </div>
    </div>
  )
}

export default Modal;