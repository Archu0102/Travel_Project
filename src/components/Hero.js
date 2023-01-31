import './HeroStyle.css';

import React from 'react'

const Hero = (props) => {
  return (
    <div className={props.cName}>
        <img src={props.heroimg} alt='image'/>

        <div className='hero-text'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>{props.btntext}</a>
        </div>

    </div>
  )
}

export default Hero