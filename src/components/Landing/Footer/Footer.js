import React from 'react'
import Heading from '../Heading/Heading'

export default function Footer(){
  return(
    <div className="footer">

      <Heading title='Technologies' />
      <div className='footer__icon'>
        <h4>React Icon</h4>
        <h4>Sass Icon</h4>
        
      </div>
    </div>
  )
}