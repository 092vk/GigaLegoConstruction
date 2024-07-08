import React from 'react'
import './Header.css'
import './Header2.css'
import { BrowserRouter as Router, Route, Routes, Link ,NavLink} from 'react-router-dom';


function Header() {
  return (
    <section className='h-wrapper'>
        <div className='h-container paddings innerWidth'>
            
            <div className="flexCenter h-menu h2-menu">

                <NavLink to={'/Teams'}>Teams</NavLink>
                <NavLink to={'/Market'}>Market</NavLink>
                <NavLink to={'/Career'}>Career</NavLink>
                <NavLink to={'/Architectural'}>Architectural</NavLink>
                <NavLink to={'/Civil'}>Civil</NavLink>
                <NavLink to={'/BIM'}>BIM</NavLink>

            </div>
        </div>
    </section>
  )
}

export default Header