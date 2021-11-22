import React from 'react'

function Modal({handleClose, modalState}) {
  return(
    <div>
      <div className="modal-container">

        <a href="javascript:;" className="modal-close" onClick={handleClose}></a>
      </div>
    </div>
  )
}

export default Modal;