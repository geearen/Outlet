import React from 'react';
import { useState } from 'react';
import Canvas from '../components/Canvas/Canvas';
import { Colors } from '../components/data/Colors';

function CanvasPage(){
  const [color, setColor] = useState('red');
  
  const handleColor = (selectedColor) => {
    setColor(selectedColor);
  }

  return(
    <>
      <h1>
        this is canvas
        <a href='/'> home</a>
      </h1>
      <div className='colors-container'>
        {Colors.map((color) => {
          return(
            <div className='color-option' id={color} key={color} onClick={() => handleColor(color)}></div>
          )
        })}
      </div>
      <Canvas />
    </>
  )
}

export default CanvasPage;