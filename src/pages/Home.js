import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import homeimg from '../images/travel4.jpg'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero cName="hero" heroimg={homeimg}
        title="Your Journey Your Story" text="Choose Your Favorite Destination" url="/" btnClass="show" btntext="Travel Plane" />
    </div>
  )
}

export default Home