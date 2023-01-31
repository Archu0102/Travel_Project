import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ContactImg from '../images/travel4.jpg'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <Hero 
        cName="hero-mid" 
        heroimg={ContactImg} 
        title="Contact"
        url="/" 
        btnClass="hide" 
        btntext="Travel Plane" />
    </div>
  )
}

export default Contact