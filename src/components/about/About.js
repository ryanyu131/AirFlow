import React from 'react'
import Aircurrent from '../../images/aircurrent.png'
import './About.css'
import Typewriter from 'typewriter-effect';

const about = () => {
  return (
    <section className='about' id='about'>
        <div className='about-container'>
            <div className='title'><h1><span>Air</span>Flow+</h1></div>
            <div className='header-image'>
              <img src={Aircurrent} alt="" /><img src={Aircurrent} alt="" />
            </div>
        </div>
        <div className='subtitle'>
            <h2>Our Mission:</h2>
            <p>Due to recent events of wildfires in Northeastern Ontario and Quebec,</p>
            <p>We aim to raise awareness about the potential <span>health hazards</span> that come with poor air quality.</p>
        </div>
        <div className='subtitle'>
            <h2>Did You Know...
            <Typewriter
              options={{
                strings: ['An AQI level of above 100 is unhealthy?', 'Exposures could lead to respiratory issues & diseases?', 'Pollutants such as PM2.5 & PM10 can trigger dormant health problems?'],
                autoStart: true,
                loop: true,
              }}
            />
            </h2>
        </div>
    </section>
  )
}

export default about