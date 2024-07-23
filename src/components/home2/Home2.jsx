import React, { useEffect } from 'react';
import './Home2.css'
import imageSlide from './hData';
import { useState } from 'react';
import { BackgroundImage } from '@mantine/core';

function Home2(){
    const [currentState,setCurrentState] = useState(0);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(currentState === 2){
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
    }

    const goToNext = (currentState)=>{
        setCurrentState(currentState)
    }

    return(
        <>
            <div className="Home2-wrapper">
                <div style={bgImageStyle}></div>
                <div className='description'>
                    <div>
                        <h1>GigaLegoConstruction</h1>
                        <p>We build trust and hope</p>
                    </div>
                    <div className="carousel-button">
                        {
                            imageSlide.map((imageSlide,currentState)=>(
                                <span key={currentState} onClick={()=> goToNext(currentState)}>1</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home2;
