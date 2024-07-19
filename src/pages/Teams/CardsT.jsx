import React from 'react'
import './CardsT.css'

function CardsT({data}) {
  return (
    <div className='CardsT-wrapper'>
      {
        data.map((item,index)=>(
          <div className="CardsT" key={index}>
          <img src={item.img} alt="" className='CardsTImg'/>
          <div className="CardsInfo">
            <span className='Name'>{item.Name}</span>
            <span className='Post'>{item.Post}</span>
            <span className='Info'>{item.Info}</span>
          </div>
        </div>
        ))
      }
    </div>
  )
}

export default CardsT