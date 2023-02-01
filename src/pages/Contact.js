import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ContactImg from '../images/travel4.jpg'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

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
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Contact