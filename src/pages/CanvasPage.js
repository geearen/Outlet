import React from 'react';
import Canvas from '../components/Canvas/Canvas';
import OutletLogo from '../assets/outlet_logo7.svg';

function CanvasPage(){

  return(
    <div className="canvas">

      <div className="canvas__logo">
        <img src={OutletLogo} alt="" />

      </div>
      <h1>
        this is canvas
        <a href='/'> home</a>
      </h1>
      
      <Canvas />
    </div>
  )
}

export default CanvasPage;