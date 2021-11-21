
import React from 'react'

function Toolbar({ handleColor, handleWidth, handleClear, handleEraserMode, handlePaintMode, handleDownload, dataUrl  }) {
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

      <div className="toolbar__clear">
        <button onClick={handleClear}> Clear </button>
      </div>

      <div className="toolbar__eraser">
        <button onClick={handleEraserMode}> Eraser</button>
      </div>

      <div className="toolbar__paint"> 
        <button onClick={handlePaintMode}>Paint</button>
      </div>

      <div className="toolbar__download">
        <a download="image.png" onClick={handleDownload} href={dataUrl}> Save Image</a>
      </div>
      
      
    </div>
  );
}

export default Toolbar;
