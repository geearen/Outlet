import React from 'react'
import Navbar from '../components/Landing/Navbar/Navbar';
import Footer from '../components/Landing/Footer/Footer';

import LogoBackground from '../components/Landing/LogoBackground/LogoBackground';
import LogoSection from '../components/Landing/LogoSection/LogoSection';

function LandingPage(){
  return(
  <>
    <div className="landing_page">
    <LogoBackground/>
    <LogoSection/>
      <Navbar/> 
      <h1>
        Hello I am Landing Page
      </h1>
      <a href="/canvas"> Canvas Link</a>

      <Footer/>
    </div>
  </>
  )
}

export default LandingPage;