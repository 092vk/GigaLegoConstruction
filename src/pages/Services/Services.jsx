import React from 'react'
import './Services.css'
import Cards from '../../components/Cards/Cards'
import dataS from '../../utils/sliderServices.json'

function Services() {
  return (
    <div className='services'>
      <div className='services-hero'>
        <h1>Services @ GIGA LEGO </h1>
        <p>We Provide Excellence and Nothing Else</p>
      </div>
        
        

      <div className='cardContainer'>
        <Cards data={dataS}/>
      </div>
      <div className='serviceEndLine'> Trust GigaLego Construction for all your real estate and <br/>architectural consultancy needs.</div>
    </div>
  )
}

export default Services;