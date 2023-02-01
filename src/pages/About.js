import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Aboutimg from '../images/light1.jpg'
import Footer from '../components/Footer'
import Aboutus from '../components/Aboutus'

const About = () => {
  return (
    <div>
        <Navbar/>
        <Hero 
        cName="hero-mid" 
        heroimg={Aboutimg} 
        title="About"
        url="/" 
        btnClass="hide" 
        btntext="Travel Plane" />
        <Aboutus/>
        <Footer/>
    </div>
  )
}

export default About