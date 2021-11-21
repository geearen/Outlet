import React from 'react'
import { DeveloperData } from '../../data/DeveloperData';
import Heading from '../Heading/Heading'
import * as FaIcons from 'react-icons/fa';

function Developer(){
  
  return(
    <div className='developers'>
      <Heading title='Meet the Developers' />

      <div className="developers__container">
        {DeveloperData.map((item, idx) =>{
          return (
            <div className='developer__profile' key={idx}>
              <div className='developer__portrait'>
                <img src={item.portrait} alt='' />
              </div>

              <div className='developer__about'>
                <h3>{item.name}</h3>
                <p>{item.about}</p>

              <div className="developer__links">
                <a href={item.github}><FaIcons.FaGithub /></a>
                <a href={item.linkedin}><FaIcons.FaLinkedin /></a>
                <a href={item.portfolio}><FaIcons.FaSuitcase /></a>
                <a href={item.email}><FaIcons.FaEnvelope /></a>
              </div>
                
              </div>
            </div>
          );
        })}
      </div> 
      
    </div>
  )
}

export default Developer;