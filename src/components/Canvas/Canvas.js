import { useEffect, useRef, useCallback, useState } from 'react';
import Toolbar from '../Canvas/Toolbar/Toolbar'
import Modal from './Modal/Modal';

function Canvas({modalState, modalClose, modalOpen}) {
  // @desc ref object that holds the reference to our canvas element. ref objects can store references to elements AND to preserve any kind of info we need between rerenders
  const canvasRef = useRef(null); 
  const contextRef = useRef(null);
  
  const [isDrawing, setIsDrawing] = useState(false);
  const [isPaint, setIsPaint] = useState(false);
  const [isLine, setIsLine] = useState(false);
  const [isRectangle, setIsRectangle] = useState(false);
  const [isCircle, setIsCircle] = useState(false);
  const [isEraser, setIsEraser] = useState(false);
  const [currentColor, setCurrentColor] = useState('#000000');
  const [currentWidth, setCurrentWidth] = useState(5);
  const [dataUrl, setDataUrl] = useState('#')

  const selectedColor = useRef('#000000');
  const selectedLineWidth = useRef(5);
  const direction = useRef(true);
  const isPaintMode= useRef(false);
  const isEraserMode = useRef(false);
  const isLineMode = useRef(false);
  const isRectangleMode = useRef(false);
  const isCircleMode = useRef(false);
  const lastX = useRef(0);
  const lastY = useRef(0);

  // @desc initializes canvas api when component is mounted
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    // canvas.style.width = `${document.body.clientWidth}px`;
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

  const startDrawing = useCallback(({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    
    contextRef.current.beginPath();
    
    if(isLineMode.current) {
      contextRef.current.moveTo(offsetX, offsetY);
    }

    if (isRectangleMode.current || isRectangle || isCircleMode.current) {
      lastX.current = offsetX;
      lastY.current = offsetY;
    }
    
    contextRef.current.strokeStyle = selectedColor.current;
    contextRef.current.lineWidth = selectedLineWidth.current;
    setCurrentColor(selectedColor.current);
    dynamicLineWidth(selectedLineWidth.current);
    
    if(isPaintMode.current || isEraserMode.current){
      isEraserMode.current ? (contextRef.current.globalCompositeOperation ='destination-out') :(contextRef.current.globalCompositeOperation = 'source-over')
    }
    
    setIsDrawing(true);
  },[]);

  const dynamicLineWidth = useCallback(() =>{
    if(!contextRef || !contextRef.current) return;

    if(contextRef.current.lineWidth >= 100 || contextRef.current.lineWidth <= 5){
      direction.current = !direction.current;
    }

    setCurrentWidth(contextRef.current.lineWidth);
  },[]);

  const finishDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    
    if (isLine) {
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
      setIsDrawing(false);
      return;
    } 

    if (isRectangle) {
      const width = offsetX - lastX.current;
      const height = offsetY - lastY.current;

      contextRef.current.strokeRect(lastX.current, lastY.current, width, height);
      setIsDrawing(false);
      return;
    }

    if(isCircle){
      const radius = Math.sqrt(Math.pow((offsetX-lastX.current), 2) + Math.pow((offsetY-lastY.current), 2))
      contextRef.current.arc(lastX.current, lastY.current, radius, 0, 2*Math.PI);
      contextRef.current.stroke();
      setIsDrawing(false);
      return;
    }
    
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing || isLine || isRectangle || isCircle) {
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
    selectedLineWidth.current = e.currentTarget.value;
  };

  //@desc will reset / clear the canvas and close modal popup
  const handleClear = useCallback(() => {
    if(!contextRef || !contextRef.current || !canvasRef || !canvasRef.current){
      return;
    }
    contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    modalClose();
  },[])

  const handlePaintMode = useCallback(() =>{
    setIsPaint(true);
    isPaintMode.current = true;
    setIsLine(false);
    isLineMode.current = false
    setIsRectangle(false);
    isRectangleMode.current = false;
    setIsCircle(false);
    isCircleMode.current = false;
    setIsEraser(false);
    isEraserMode.current = false;
  },[])

  const handleLineMode = useCallback(() => {
    setIsLine(true);
    isLineMode.current = true;
    setIsPaint(false);
    isPaintMode.current = false;
    setIsRectangle(false);
    isRectangleMode.current = false;
    setIsCircle(false);
    isCircleMode.current = false;
    setIsEraser(false);
    isEraserMode.current = false;
  },[])
  
  const handleRectangleMode = useCallback(() => {
    setIsRectangle(true);
    isRectangleMode.current = true;
    setIsLine(false);
    isLineMode.current = false;
    setIsPaint(false);
    isPaintMode.current = false;
    setIsCircle(false);
    isCircleMode.current = false;
    setIsEraser(false);
    isEraserMode.current = false;
  },[])

  const handleCircleMode = useCallback(()=>{
    setIsCircle(true);
    isCircleMode.current = true;
    setIsRectangle(false);
    isRectangleMode.current = false;
    setIsLine(false);
    isLineMode.current = false;
    setIsPaint(false);
    isPaintMode.current = false;
    setIsEraser(false);
    isEraserMode.current = false;
  },[])

  const handleEraserMode = useCallback(()=>{
    setIsPaint(true);
    isEraserMode.current = true;
    setIsEraser(true);
    setIsLine(false);
    setIsRectangle(false);
    setIsCircle(false);
  },[])


  const handleDownload = useCallback(() =>{
    if(!canvasRef || !canvasRef.current) return;

    setDataUrl(canvasRef.current.toDataURL('image/png'));
  },[canvasRef]);


  return (
    <>
      <Toolbar
        className="canvas__toolbar"
        handleColor={handleColor}
        handleWidth={handleWidth}
        handleClear={handleClear}
        handlePaintMode={handlePaintMode}
        handleLineMode={handleLineMode}
        handleRectangleMode={handleRectangleMode}
        handleCircleMode={handleCircleMode}
        handleEraserMode={handleEraserMode}
        handleDownload={handleDownload}
        modalOpen={modalOpen}
        dataUrl={dataUrl}
      />
      <Modal modalState={modalState} modalClose={modalClose}>
        <div className="modal-content">
          <h3> Are you sure you want to clear? </h3>
          <div className="modal-button">
            <button onClick={handleClear} id="modal-yes">
              Yes
            </button>
            <button onClick={modalClose} id="modal-no">
              {" "}
              No{" "}
            </button>
          </div>
        </div>
      </Modal>
      <div className="canvas__drawpad">
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          onMouseLeave={finishDrawing}
          ref={canvasRef}
          style={{ border: "2px solid black" }}
        />
      </div>
    </>
  );
}

export default Canvas;