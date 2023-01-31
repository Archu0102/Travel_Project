import './DestinationStyle.css'

import React from 'react'
import Tajmahal1 from '../images/taj1.avif'
import Tajmahal2 from '../images/taj3.jpg'
import Goaimg from '../images/goa.jpg'
import Kasmir from '../images/travels.jpeg'

const Destination = () => {
  return (
    <div className='Destination'>
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame</p>
        <div className='first-des'>
            <div className='des-text'>
                <h2>Agra for the iconic Taj Mahal</h2>
                <p>Agra is home to India's most iconic attraction the Taj Mahal and a part of the famous 
                Golden Triangle route, making it one of the most visited cities in India. The magnificent 
                Taj Mahal, built by the fifth emperor of the Mughal Empire Shah Jahan as a memorial to his 
                beloved wife Mumtaz Mahal, is considered to be the symbol of love and is one of the New Seven 
                Wonders of the World. Every year, millions of visitors come to admire this beautiful mausoleum 
                and listen to the fascinating story behind it.
                </p>
            </div>
            <div className='image'>
                <img src={Tajmahal1} alt='Tajmahkimage'/>
                <img src={Tajmahal2} alt='Goaimage'/>
            </div>
            
        </div>
    </div>
  )
}

export default Destination