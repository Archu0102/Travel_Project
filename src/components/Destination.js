import './DestinationStyle.css'

import React from 'react'
import Tajmahal1 from '../images/taj1.avif'
import Tajmahal2 from '../images/taj3.jpg'
import Hawa1 from '../images/l1.avif'
import Hawa2 from '../images/l2.jpg'
import Goaimg1 from '../images/4.jpg'
import Goaimg2 from '../images/5.jpg'
import DestinationData from './DestinationData'

const Destination = () => {
  return (
    <div className='Destination'>
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame</p>
       
        <DestinationData className="first-des" heading="Agra for the iconic Taj Mahal"
        dtext="Agra is home to India's most iconic attraction the Taj Mahal and a part of the famous 
        Golden Triangle route, making it one of the most visited cities in India. The magnificent 
        Taj Mahal, built by the fifth emperor of the Mughal Empire Shah Jahan as a memorial to his 
        beloved wife Mumtaz Mahal, is considered to be the symbol of love and is one of the New Seven 
        Wonders of the World. Every year, millions of visitors come to admire this beautiful mausoleum 
        and listen to the fascinating story behind it."
        img1={Tajmahal1}
        img2={Tajmahal2} />

        <DestinationData className="first-des-reverse" heading="lastminute.com London Eye"
        dtext="The London Eye, or the Millennium Wheel, is a cantilevered observation wheel on the South Bank of the River Thames in London. It is Europe's tallest cantilevered observation wheel, and is the most popular paid tourist attraction in the United Kingdom with over 3 million visitors annually. It has made many appearances in popular culture. The structure is 135 metres tall and the wheel has a diameter of 120 metres. When it opened to the public in 2000 it was the world's tallest Ferris wheel. Its height was surpassed by the 160 metres Star of Nanchang in 2006, the 165 metres Singapore Flyer in 2008, and the 167 metres High Roller in 2014."
        img1={Hawa1}
        img2={Hawa2} />

        <DestinationData className="first-des" heading="Burj Al Arab"
        dtext="The Burj Al Arab is a luxury hotel located in the city of Dubai, United Arab Emirates. Managed by Jumeirah hotel group, it is one of the tallest hotels in the world, although 39% of its total height is made up of non-occupiable space. Burj Al Arab stands on an artificial island that is 280 m from Jumeirah Beach and is connected to the mainland by a private curving bridge. The shape of the structure is designed to resemble the sail of a ship. It has a helipad near the roof, at a height of 210 m above ground. "
        img1={Goaimg1}
        img2={Goaimg2} />
        
    </div>
  )
}

export default Destination