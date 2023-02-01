import React from 'react'
import Destination from '../components/Destination'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Trip from '../components/Trip'
import homeimg from '../images/travel4.jpg'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero cName="hero" heroimg={homeimg}
        title="Your Journey Your Story" text="Choose Your Favorite Destination" url="/" btnClass="show" btntext="Travel Plane" />
        <Destination/>
        <Trip/>
        <Footer/>
    </div>
  )
}

export default Home