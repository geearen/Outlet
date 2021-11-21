import React from 'react';
import Canvas from '../components/Canvas/Canvas';

function CanvasPage(){

  return(
    <div className="canvas">
      <h1>
        this is canvas
        <a href='/'> home</a>
      </h1>
      <Canvas />
    </div>
  )
}

export default CanvasPage;