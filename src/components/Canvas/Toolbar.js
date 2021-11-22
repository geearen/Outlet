import React, { useState } from 'react';
import Modal  from './Modal/Modal';
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as AiIcons from 'react-icons/ai'


function Toolbar({ handleColor, handleWidth, handleClear, handleEraserMode, handlePaintMode, handleLineMode, handleDownload, dataUrl  }) {

  const [modalState, setModalState] = useState(false);
  

  const modalOpen =() =>{
    setModalState(true)
  }

  const modalClose = () => {
    setModalState(false)
  }


  return (
    <div className="toolbar">
      <div className="toolbar__color">
        <input type="color" onChange={handleColor} className="color-option" />
      </div>

      <div className="toolbar__size">
        <input
          type="range"
          defaultValue="5"
          min="5"
          max="100"
          onChange={handleWidth}
        />
      </div>

      <div className="toolbar__paint">
        <button onClick={handlePaintMode} className="">
          <FaIcons.FaPaintBrush className="toolbar-icons" />
        </button>
      </div>
      
      <div className="toolbar__line">
        <button onClick={handleLineMode} className="">
          <AiIcons.AiOutlineMenu className="toolbar-icons" />
        </button>
      </div>

      <div className="toolbar__eraser">
        <button onClick={handleEraserMode}>
          <FaIcons.FaEraser className="toolbar-icons" />
        </button>
      </div>

      <div className="toolbar__download">
        <a download="image.png" onClick={handleDownload} href={dataUrl}>
          {" "}
          <FaIcons.FaRegSave className="toolbar-icons" />
          Save Image
        </a>
      </div>

      <div className="toolbar__clear">
        <Modal modalState={modalState} modalClose={modalClose}>
          <div>
            <h3> Are you sure you want to clear? </h3>
            <h4>Yes</h4>
            <h4>No</h4>
          </div>
        </Modal>
        <button onClick={handleClear}>
          <MdIcons.MdClear className="toolbar-icons" />
          Clear Canvas
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
