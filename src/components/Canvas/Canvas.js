import { useEffect, useRef, useState } from 'react';

function Canvas() {
  // @desc ref object that holds the reference to our canvas element. ref objects can store references to elements AND to preserve any kind of info we need between rerenders
  const canvasRef = useRef(null); 
  const contextRef = useRef(null);

  const [ isDrawing, setIsDrawing ] = useState(false);

  // @desc initializes canvas api when component is mounted
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${document.body.clientWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    // @desc context to allow us to draw on canvas which is needed in startDrawing, finish, and draw
    const context = canvas.getContext('2d');

    context.scale(2,2);
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 5;
    contextRef.current = context;
  }, [])

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);

    setIsDrawing(true);
  }

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  }

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return
    }

    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke()
  }

  return(
    <canvas 
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
      style={{border:'1px solid black'}}
    />
  )
}

export default Canvas;