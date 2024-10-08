import React, { useEffect } from 'react';
import './Home2.css'
import imageSlide from './hData';
import { useState } from 'react';
import { BackgroundImage } from '@mantine/core';
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import './Hero.css'

function Home2(){
    const [currentState,setCurrentState] = useState(0);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(currentState === 4){
                setCurrentState(0)
            }
            else{
                setCurrentState(currentState+1)
            }
        },4000)
        return ()=>clearTimeout(timer)
    },[currentState])

    const bgImageStyle={
        backgroundImage:`url(${imageSlide[currentState].url})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        height:'100%',
        opacity:'0.7'
    }

    const goToNext = (currentState)=>{
        setCurrentState(currentState)
    }

    return(
        <>
            <div className="Home2-wrapper">
                <div style={bgImageStyle}></div>
                <div className='descriptione'>
                    <div>
                    <div className="paddings innerWidth flexLeft hero-container ">

                        <div className="flexColstart hero-left">
                            <div className="hero-title">
                                
                                <h1>GIGA <span className='Ltext'>LEGO</span> CONSTRUCTIONS</h1>
                            </div>

                            <div className="flexColStart hero-des">
                                <div className='orange-circle'></div>
                                <span className='mywords'>A website dedicated to fullfill the needs of modern indian to build best</span>
                                <span className='mywords'>
                                    We care about your dreams and we aim to make them true
                                </span>
                            </div>


                            <div className="search-bar flexLeft ">
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
                                    <span className='mywords'>Site Visits</span>

                                </div>

                                <div className="flexColCenter stat">
                                    <span>
                                        <CountUp start={1950} end={2000} duration={4}/>
                                        <span>+</span>
                                    </span>
                                    <span className='mywords'>Happy Customers</span>

                                </div>

                                <div className="flexColCenter stat">
                                    <span>
                                        <CountUp start={5} end={200} duration={5}/>
                                        <span>+</span>
                                    </span>
                                    <span className='mywords'>Structure Constructed</span>

                                </div>

                            </div>
                        </div>

                        {/* <div className="flexCenter hero-right">
                            <div className="image-container">
                                <img src="./HeroImage.jpg" alt="" />
                            </div>
                        </div>  */}

                        </div>

                    </div>
                     <div className="carousel-button">
                        {
                            imageSlide.map((imageSlide,currentState)=>(
                                <span key={currentState} onClick={()=> goToNext(currentState)}></span>
                            ))
                        }
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Home2;
