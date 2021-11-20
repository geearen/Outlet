import React from 'react'
import Navbar from '../components/Landing/NavBar/Navbar';
import Footer from '../components/Landing/Footer/Footer';

import LogoBackground from '../components/Landing/LogoBackground/LogoBackground';
import LogoSection from '../components/Landing/LogoSection/LogoSection';

function LandingPage(){
  return(
    <>
      <Navbar/> 
      <LogoSection/>  
        <h1>
          Hello I am Landing Page
        </h1>
        <a href='/canvas'> Canvas Link</a>

        <Footer/>
      <div className="landing_page">
      </div>
      <LogoBackground>
      </LogoBackground>
    </>
  )
}

export default LandingPage;