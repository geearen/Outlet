import React from 'react'
import Nav from '../components/Landing/NavBar/Navbar';
import Footer from '../components/Landing/Footer/Footer';

import LogoBackground from '../components/Landing/LogoBackground/LogoBackground';
import LogoSection from '../components/Landing/LogoSection/LogoSection';

function LandingPage(){
  return(
  <>
    <div className='landing_page'>
    </div>
    <LogoSection/>
      <Nav/> 
      <h1>
        Hello I am Landing Page
      </h1>
      <a href='/canvas'> Canvas Link</a>

      <Footer/>
    <LogoBackground/>
  </>
  )
}

export default LandingPage;