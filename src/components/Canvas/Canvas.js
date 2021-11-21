import { useEffect, useRef, useCallback, useState } from 'react';
import Toolbar from './Toolbar';


function Canvas() {
  // @desc ref object that holds the reference to our canvas element. ref objects can store references to elements AND to preserve any kind of info we need between rerenders
  const canvasRef = useRef(null); 
  const contextRef = useRef(null);

  const [ isDrawing, setIsDrawing ] = useState(false);
  const [isPaint, setIsPaint] = useState(false);
  const [isEraser, setIsEraser] = useState(false);
  const [currentColor, setCurrentColor] = useState("#000000");
  const [currentWidth, setCurrentWidth] = useState(5);

  const selectedColor = useRef("#000000");
  const selectedLineWidth = useRef(5);
  const direction = useRef(true);
  const isPaintMode= useRef(false);
  const isEraserMode = useRef(false);

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
    context.strokeStyle = '#000000';
    context.lineWidth = 5;
    contextRef.current = context;
  }, [])

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;


    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);

    if(isPaintMode.current || isEraserMode.current){
      contextRef.current.strokeStyle = selectedColor.current;
      setCurrentColor(selectedColor.current);
      contextRef.current.lineWidth = selectedLineWidth.current;
      dynamicLineWidth(selectedLineWidth.current);

      isEraserMode.current ? (contextRef.current.globalCompositeOperation ="destination-out") :(contextRef.current.globalCompositeOperation = "source-over");

    }

    setIsDrawing(true);
    handlePaintMode();
  }

  const dynamicLineWidth = useCallback(() =>{
    if(!contextRef || !contextRef.current) return;

    if(contextRef.current.lineWidth > 90 || contextRef.current.lineWidth <10){
      direction.current = !direction.current;
    }

    direction.current ? contextRef.current.lineWidth++ : contextRef.current.lineWidth--;
    setCurrentWidth(contextRef.current.lineWidth);
  },[]);

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return
    }

    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke()
  };

  const handleColor =(e) =>{
    setCurrentColor(e.currentTarget.value);
    selectedColor.current = e.currentTarget.value;
  };

  const handleWidth = (e) => {
    setCurrentWidth(e.currentTarget.value);
    selectedLineWidth.current = e.currentTarget.value;
  };

  //@desc will reset / clear the canvas
  const handleClear = useCallback(() => {
    if(!contextRef || !contextRef.current || !canvasRef || !canvasRef.current){
      return;
    }
    contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

  },[])


  const handlePaintMode = useCallback(() =>{
    setIsPaint(true);
    isEraserMode.current = false;
    setIsEraser(false);
    isPaintMode.current = true;
  },[])
  
  const handleEraserMode = useCallback(()=>{
    setIsPaint(true);
    isEraserMode.current = true;
    setIsEraser(true);
  },[])

  return(
    <>
      <Toolbar className="canvas__toolbar" handleColor={handleColor} handleWidth={handleWidth} handleClear={handleClear} handlePaintMode={handlePaintMode} handleEraserMode={handleEraserMode}/>
      <canvas
        className="canvas__drawpad"
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
        style={{border:'1px solid black'}}
      />
    </>
  )
}

export default Canvas;