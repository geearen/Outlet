import {useCallback, useRef, useState} from 'react';

function CanvasHook(){

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const [isReady, setIsReady] = useState(false);
  // const [isDrawing, setIsDrawing] = useState(false);

  const [currentColor, setCurrentColor] = useState('black')
  
  const lastX = useRef(0);
  const lastY = useRef(0);
  const isDrawing = useRef(false);
  const selectedColor = useRef('black')
  const canvas = canvasRef.current;
  

  const context = useRef(canvas?.current?.getContext('2d'));

  const startDrawing = useCallback((e) => {
    if(!context || !context.current){
      return;
    }

    context.current.beginPath();
    context.current.moveTo(lastX.current, lastY.current);
    context.current.lineTo(e.offsetX, e.offsetY);
    context.current.stroke();
    [lastX.current, lastY.current] = [e.offsetX, e.offsetY];
  }, [],)

  const handleMouseDown = useCallback((e) =>{
    isDrawing.current = true;
    [lastX.current, lastY.current] =[e.offsetX, e.offsetY];
  }, []);


  const draw = useCallback((e) => {
    if(!isDrawing.current || !context.current) return;
    
    context.current.strokeStyle = selectedColor.current;

    setCurrentColor(selectedColor.current);
    
    startDrawing(e)
    },
    [startDrawing],
  )

  const stopDrawing = useCallback(() =>{
    isDrawing.current = false;
  },[])

  const init = useCallback(() =>{
    context.current = canvas?.current?.getContext('2d');
    if(canvas && canvas.current && context && context.current){
      canvas.current.addEventListener('mousedown', handleMouseDown);
      canvas.current.addEventListener('mousemove', draw);
      canvas.current.addEventListener('mouseup', stopDrawing);
      canvas.current.addEventListener('mouseout', stopDrawing);


      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 2;
      canvas.style.width = `${document.body.clientWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      context.current.strokeStyle = 'black';
      context.current.lineJoin = 'round';
      context.current.lineCap = 'round';
      context.current.lineWidth = 5;
      setIsReady(true)

    }
  },[draw, handleMouseDown, stopDrawing]); 

  const handleColor = (e) =>{
    setCurrentColor(e.current.value);
    selectedColor.current = e.currentTarget.value;
  }

  const handleClear = useCallback(() =>{
    if(!context || !context.current || !context || !context.current){
      return
    }
    context.current.clearRect(0,0, canvas.current.width, canvas.current.height);
  }, []);
  
  return[
    {
      canvas,isReady,currentColor,
    },
    {
      init,handleColor, handleClear,
    }
  ]
}

export default CanvasHook;