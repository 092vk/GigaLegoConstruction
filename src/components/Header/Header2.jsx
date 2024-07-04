import React from 'react'
import './Header.css'
import './Header2.css'

function Header() {
  return (
    <section className='h-wrapper'>
        <div className='h-container paddings innerWidth'>
            
            <div className="flexCenter h-menu h2-menu">
                <a href="">Services</a>
                <a href="">Market</a>
                <a href="">Career</a>
                <a href="">Architectural</a>
                <a href="">Civil</a>
                <a href="">BIM</a>
            </div>
        </div>
    </section>
  )
}

export default Header