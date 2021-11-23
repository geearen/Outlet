import React,{useState} from 'react';
import Canvas from '../components/Canvas/Canvas';
import OutletLogo from '../assets/outlet_logo7.svg'

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
        <div className="canvas__logo">
          <a href="/" className="canvas-logo-alink">
            <img src={OutletLogo} alt="outlet logo" />
            <span>UTLET</span>
          </a>
        </div>
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