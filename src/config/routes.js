import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CanvasPage from '../pages/CanvasPage';
import LandingPage from '../pages/LandingPage';

function PageRoute(){
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/canvas" element={<CanvasPage/>} />
    </Routes>
  );
}

export default PageRoute;