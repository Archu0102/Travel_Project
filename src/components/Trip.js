import './TripStyle.css'

import React from 'react'
import TripData from './TripData'
import Trip1 from '../images/taj2.jpg'
import Trip2 from '../images/2.webp'
import Trip3 from '../images/3.jpg'

const Trip = () => {
  return (
    <div className='trip'>
    <h1>Recent Trips</h1>
    <p>You can discover unique Destinations using Google Maps</p>
    <div className='tripcard'>
      <TripData heading="Taj Mahal"
      text="Agra is home to India's most iconic attraction the Taj Mahal and a part of the famous 
      Golden Triangle route, making it one of the most visited cities in India. The magnificent 
      Taj Mahal, built by the fifth emperor of the Mughal Empire Shah Jahan as a memorial to his 
      beloved wife Mumtaz Mahal."
      image={Trip1}
      />

      <TripData heading="City Palace, Jaipur"
      text="The City Palace, Jaipur was established at the same time as the city of Jaipur, by Maharaja Sawai Jai Singh II, who moved his court to Jaipur from Amber, in 1727. Jaipur is the present-day capital of the state of Rajasthan, and until 1949 the City Palace was the ceremonial and administrative seat of the Maharaja of Jaipur."
      image={Trip2}
      />

      <TripData heading="Jal Mahal"
      text="Jal Mahal is a palace in the middle of the Man Sagar Lake in Jaipur city, the capital of the state of Rajasthan, India. The palace was originally constructed in 1699; the building and the lake around it were later renovated and enlarged in the 18th century by Maharaja Jai Singh II of Amber."
      image={Trip3}
      />
      </div>
    </div>
  )
}

export default Trip