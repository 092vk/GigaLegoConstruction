import React from 'react'
import './PreFooter.css'
import { BackgroundImage } from '@mantine/core';
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'

function PreFooter() {
    
  return (
    <div className='PreFooterWrapper'>
        <div className="flexLeft search-bar">
            <HiLocationMarker color="var(--blue)" size={25}/>
            <input type="text" placeholder='Search Here' className='M3'/>
            <button className='button'>Search</button>
        </div> 

        <div className='flexCenter stats'>
            <div className="flexColCenter stat">
                <span>
                    <CountUp start={8800} end={9000} duration={4}/>
                    <span>+</span>
                </span>
                <span className='secondaryText'>Site Visits</span>

            </div>

            <div className="flexColCenter stat">
                <span>
                    <CountUp start={1950} end={2000} duration={4}/>
                    <span>+</span>
                </span>
                <span className='secondaryText'>Happy Customers</span>

            </div>

            <div className="flexColCenter stat">
                <span>
                    <CountUp start={5} end={200} duration={5}/>
                    <span>+</span>
                </span>
                <span className='secondaryText'>Structure Constructed</span>

            </div>
        </div>
    </div>
  )
}

export default PreFooter