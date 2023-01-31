import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServiceImg from '../images/travels.jpeg'

const Service = () => {
  return (
    <div>
        <Navbar/>
        <Hero 
        cName="hero-mid" 
        heroimg={ServiceImg} 
        title="Service"
        url="/" 
        btnClass="hide" 
        btntext="Travel Plane" />
    </div>
  )
}

export default Service