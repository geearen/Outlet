import React from 'react'
import Nav from '../components/Landing/NavBar/Navbar';
import Footer from '../components/Landing/Footer/Footer';
import Background from '../components/Landing/Background/Background';

function LandingPage(){
  return(
    <div>
      <Background/>
      <Nav/> 
      
      
      <h1>
        Hello I am Landing Page
      </h1>
      <a href="/canvas"> Canvas Link</a>

      <Footer/>
    </div>
  )
}

export default LandingPage;