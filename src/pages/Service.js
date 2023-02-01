import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServiceImg from '../images/travels.jpeg'
import Footer from '../components/Footer'
import Trip from '../components/Trip'

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
        <Trip/>
        <Footer/>
    </div>
  )
}

export default Service