import React,{useState} from 'react';
import Canvas from '../components/Canvas/Canvas';

function CanvasPage(){
  const [modalState, setModalState] = useState(false);

  const modalOpen = (e) => {
    setModalState(true);
  };

  const modalClose = (e) => {
    setModalState(false);
  };

  return (
    <>
      <div className="canvas">
        <Canvas
          modalOpen={modalOpen}
          modalClose={modalClose}
          modalState={modalState}
        />
      </div>
    </>
  );
}

export default CanvasPage;