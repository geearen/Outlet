import React from 'react'
import { DeveloperData } from '../../data/DeveloperData';
import Heading from '../Heading/Heading'
function Developer(){
  
  return(
    <div className="developers">
      <Heading title='Meet the Developers!!!' />
      {DeveloperData.map((item) =>{
        return (
          <>
            <div className="developer__portrait">
              <img src={item.portrait} alt="" />
            </div>

            <div className="developer__about">
              <h2>{item.name}</h2>
              <p>{item.about}</p>

              <a href="">{item.github}</a>
              <a href="">{item.linkedin}</a>
              <a href="">{item.portfolio}</a>
              <a href="">{item.email}</a>
            </div>
          </>
        );
      })}
    </div>
  )
}

export default Developer;