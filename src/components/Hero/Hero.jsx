import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import { useEffect,useRef } from 'react'


function Hero() {
  return (
    <section className='hero-wrapper'>
        <div className="paddings innerWidth flexCenter hero-container ">

            <div className="flexColstart hero-left">
                <div className="hero-title">
                    <div className='orange-circle'></div>
                    <h1>GIGA LEGO <br />
                    Construction</h1>
                </div>

                <div className="flexColStart hero-des">
                    <span className='secondaryText'>A website dedicated to fullfill the needs of modern indian to build best</span>
                    <span className='secondaryText'>
                        We care about your dreams and we aim to make them true
                    </span>
                </div>

                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text" placeholder='Search Here'/>
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

            {/* <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./HeroImage.jpg" alt="" />
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default Hero