import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { NavbarData } from '../../data/NavbarData';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

function Navbar(){
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleClick = () => setShowMobileMenu(!showMobileMenu);

  const closeMobileMenu = () => setShowMobileMenu(false);

  return(
    <nav className='navbar'>
      <div className='nav-toggle-icon' onClick={handleClick}>
        {showMobileMenu 
          ? <IoIcons.IoMdClose /> 
          : <FaIcons.FaBars />}
      </div>
      <ul className={showMobileMenu ? 'nav-menu active' : 'nav-menu'}>
          {NavbarData.map((item, idx) => {
          return(
            <li key={idx} className='nav-item'>
              <Link to={item.path} onClick={closeMobileMenu}>
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
    </nav>
  )
}
export default Navbar;