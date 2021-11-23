import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi'

function Toolbar({ handleColor, handleWidth, handleClear, handleEraserMode, handlePaintMode, handleLineMode, handleRectangleMode, handleDownload, dataUrl  }) {
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
      
      <div className="toolbar__rectangle">
        <button onClick={handleRectangleMode} className="">
          <BiIcons.BiRectangle className="toolbar-icons" />
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
        <button onClick={handleClear}>
          <MdIcons.MdClear className="toolbar-icons" />
          Clear Canvas
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
