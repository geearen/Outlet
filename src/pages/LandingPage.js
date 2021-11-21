import React from 'react'
import Navbar from '../components/Landing/NavBar/Navbar';
import Footer from '../components/Landing/Footer/Footer';

import LogoBackground from '../components/Landing/LogoBackground/LogoBackground';
import LogoSection from '../components/Landing/LogoSection/LogoSection';
import AboutOutlet from '../components/Landing/AboutOutlet/AboutOutlet';
import Developer from '../components/Landing/Developers/Developer';

function LandingPage(){
  return(
    <>
        <div className="landing_page">
        <LogoBackground/>
        <Navbar/> 
        <LogoSection/>  
        <AboutOutlet />
        <Developer/>
        <Footer/>
          

        </div>


        
    </>
  )
}

export default LandingPage;