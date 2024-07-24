import React, { useEffect } from 'react';
import './Ap.css'
// import imageSlide from './ApData';


import { useState } from 'react';
import { BackgroundImage } from '@mantine/core';

function Home2({imageSlide}){
    const [currentState,setCurrentState] = useState(0);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(currentState === 3){
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
                        <h1>{imageSlide[currentState].Name}</h1>
                        <p>{imageSlide[currentState].des}</p>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Home2;
