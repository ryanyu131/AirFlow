import React from 'react'
import Maskon from '../../images/maskimage.png'
import Water from '../../images/waterimage.png'
import Window from '../../images/windowimage.png'
import Outdoor from '../../images/outdoorimage.png'
import './Precautions.css'

const precautions = () => {
  return (
    <section className='precautions' id='precautions'>
        <div className='precautions-container'>
            <div className='subtitle'>
                <h2>Safety Measures</h2>
            </div>
            <div className='precaution-content-images'>
                <div className='precaution-image'>
                    <img src={Maskon} alt="" />
                </div>
                <div className='precaution-image'>
                    <img src={Water} alt="" />
                </div>
                <div className='precaution-image'>
                    <img src={Window} alt="" />
                </div>
                <div className='precaution-image'>
                    <img src={Outdoor} alt="" />
                </div>
            </div>
            <div className='precautions-content'>
                <div className='precaution'>
                    <p>Use masks/respirators</p>
                    <ul className='precaution-list'>
                        <li>If the AQI is very high, consider using a mask or respirator rated to filter out fine particulate matter (N95 or N99 masks). </li> 
                        <li>These masks can help reduce inhalation of harmful pollutants.</li>
                    </ul>
                </div>
                <div className='precaution'>
                    <p>Stay hydrated</p>
                    <ul className='precaution-list'>
                        <li>Drinking plenty of water can help your body flush out toxins and reduce potential health effects.</li>
                    </ul>
                </div>
                <div className='precaution'>
                    <p>Keep windows and doors closed</p>
                    <ul className='precaution-list'>
                        <li>At home or in your car, keep windows and doors closed to minimize outdoor air infiltration.</li>
                    </ul>
                </div>
                <div className='precaution'>
                    <p>Avoid strenuous activities</p>
                    <ul className='precaution-list'>
                        <li>Engaging in vigorous outdoor exercises during poor air quality can lead to increased inhalation of pollutants.</li>
                    </ul>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default precautions