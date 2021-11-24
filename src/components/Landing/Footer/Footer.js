import React from 'react';
import Heading from '../Heading/Heading';
import * as FaIcons from 'react-icons/fa'

export default function Footer(){
  return(
    <div className="footer">

      <Heading title='Technologies' />

      <div className='footer__icon__container'>
        <span className='footer__icon'><FaIcons.FaReact /></span>
        <span className='footer__icon'><FaIcons.FaSass /></span>
      </div>
    </div>
  )
}