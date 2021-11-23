import React,{useState} from 'react';
import Canvas from '../components/Canvas/Canvas';
import OutletLogo from '../assets/outlet_logo7.svg';

function CanvasPage(){
  const [modalState, setModalState] = useState(false);

  const modalOpen = (e) => {
    setModalState(true);
  };

  const modalClose = (e) => {
    setModalState(false);
  };

  return (
    <div className="canvas">


      <div className="canvas__logo">
        <img src={OutletLogo} alt="" />
      </div>
      <h1>
        this is canvas
        <a href="/"> home</a>
      </h1>

      <Canvas modalOpen={modalOpen} modalClose={modalClose} modalState={modalState}/>
    </div>
  );
}

export default CanvasPage;