import React from 'react'

function Modal({ modalState, children, modalClose}) {
  const showHideClassName = modalState ? "modal modal-show" :"modal modal-hide";


  return(
    <div className={showHideClassName} onClick={modalClose}>
      <div className="modal-container" >
        {children}
        
      </div>
    </div>
  )
}

export default Modal;