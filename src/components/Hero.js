import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='body'>
      <section id='#home' className="hero row container">
        <div>
            <h1>Arroz Solutions</h1>
            <p>IT Consultancy & Solutions</p>
            {/*we can provide section id here to map it with section no need for the link tag*/}
            <a href="#contact" className='hero-btn'>Contact Us</a>
        </div>
        <div className="row">
            <img src="https://ranstago.com/images/company/clip-940.png" alt="" />
        </div>
      </section>
    </div>
  )
}

export default Hero
