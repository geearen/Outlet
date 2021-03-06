import React, { useState, useRef } from 'react';
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io';
import OutletLogo from '../../../assets/outlet_logo7.svg';

function Toolbar({
  handleColor,
  handleWidth,
  handleClear,
  handleEraserMode,
  handlePaintMode,
  handleLineMode,
  handleRectangleMode,
  handleCircleMode,
  handleDownload,
  dataUrl,
  modalOpen,
  isPaint,
  isLine,
  isRectangle,
  isCircle,
  isEraser,
}) 
{
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const handleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <div className="toolbar">
      <div className="canvas__logo">
          <a href="/" className="canvas-logo-alink">
            <img src={OutletLogo} alt="outlet logo" />
            <span>UTLET</span>
          </a>
      </div>

      <div className="mobile-toggle-icon" onClick={handleMobileMenu}>
        {showMobileMenu ? <IoIcons.IoMdClose /> : <FaIcons.FaBars />}
      </div>

      <div className={showMobileMenu ? "toolbar__tools active" : "toolbar__tools"}>
        <div className="toolbar__color">
        <label htmlFor="color">Color</label>
        <input
          type="color"
          name="color"
          onChange={handleColor}
          className="color-option"
        />
        </div>

        <div className="toolbar__size">
          <label htmlFor="range">Stroke Size</label>
          <input
            type="range"
            name="range"
            defaultValue="5"
            min="5"
            max="100"
            onChange={handleWidth}
          />
        </div>

        <div className="toolbar__paint">
          <button
            onClick={handlePaintMode}
            className={`${isPaint ? "btn-active" : ""}`}
          >
            <FaIcons.FaPaintBrush className="toolbar-icons" />
          </button>
        </div>

        <div className="toolbar__line">
          <button
            onClick={handleLineMode}
            className={`${isLine ? "btn-active" : ""}`}
          >
            <AiIcons.AiOutlineMenu className="toolbar-icons" />
          </button>
        </div>

        <div className="toolbar__rectangle">
          <button
            onClick={handleRectangleMode}
            className={`${isRectangle ? "btn-active" : ""}`}
          >
            <BiIcons.BiRectangle className="toolbar-icons" />
          </button>
        </div>

        <div className="toolbar__circle">
          <button
            onClick={handleCircleMode}
            className={`${isCircle ? "btn-active" : ""}`}
          >
            <BiIcons.BiCircle className="toolbar-icons" />
          </button>
        </div>

        <div className="toolbar__eraser">
          <button
            onClick={handleEraserMode}
            className={`${isEraser ? "btn-active" : ""}`}
          >
            <FaIcons.FaEraser className="toolbar-icons" />
          </button>
        </div>

        <div className="toolbar__download">
          <a
            download="image.png"
            onClick={handleDownload}
            href={dataUrl}
            className="toolbar__download-container"
          >
            <button className="toolbar-icons">
              <FaIcons.FaRegSave className="toolbar-icons" />
            </button>
            <p>Save Image</p>
          </a>
        </div>

        <div className="toolbar__clear">
          <button onClick={modalOpen}>
            <MdIcons.MdClear className="toolbar-icons" />
          </button>
          <p>Clear Canvas</p>
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
