import React from 'react'
import { Link } from 'react-router-dom';
import { NavbarData } from '../../data/NavbarData';
import * as FaIcons from 'react-icons/fa'

function Navbar(){
  return(
    <nav className='navbar'>
      <ul className='navbar-list'>
        {NavbarData.map((item, idx) => {
          return(
            <li key={idx} className={item.className}>
              <Link to={item.path}>
                {item.title}
                {
                  item.icon 
                  ? <span className='nav-item-icon'>{item.icon}</span> 
                  : ''
                }
              </Link>
            </li>
          )
        })}
      </ul>
      <div className='navbar-toggle'>
        <Link to='#' className='navbar-bars'>
          <FaIcons.FaBars />
        </Link>
      </div>
    </nav>
  )
}
export default Navbar;