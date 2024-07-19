import React from 'react'
import './Teams.css'
import CardsT from './CardsT'
import DataT from './dataT.json'

function Teams() {
  return (
    <div className='Teams-wrapper'>
      <div className='TM'>
      <h1 className='orangeText'>Team Behind </h1>
      <p className='p'>GigaLegoConstruction</p>
      </div>
     
      <div className='p2div'>
        <p className='p2'>Our team is filled with higly qualified engineers from top Indian Institutes with years of experience</p>
      </div>

      <div className='Cards-Container'>
          <CardsT data={DataT}/>
      </div>


      <div>
        
      </div>
    </div>
  )
}

export default Teams