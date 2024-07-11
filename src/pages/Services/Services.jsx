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
        
        

        <Cards data={dataS}/>
    </div>
  )
}

export default Services;