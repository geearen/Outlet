import React from 'react'
import OutletLogo from '../../../assets/outlet_logo7.svg';

function LogoSection(){
  return (
    <div className='logo__section'>
      <img className="logo__svg" src={OutletLogo} alt="logo--image" />

      <h1 className="logo__text">UTLET</h1>
    </div>
  );
}

export default LogoSection