import React from 'react'
import './Header.css'
import { BrowserRouter as Router, Route, Routes, Link ,NavLink} from 'react-router-dom';

function Header() {
  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth h-container '>
            <Link to='/'>
                <img src="logo.svg" alt="logi" width={100}/>
            </Link>
            <div className="flexCenter h-menu">
                <NavLink to='/services'>Services</NavLink>
                {/* <button className="button">LogIn</button> */}

                <NavLink to={'/ContactUs'}>ContactUs</NavLink>
                
                <a className='a' href="">Home</a>
                <a className='a'  href="">About Us</a>
                <button className="button">
                    <a href="">SignIn</a>
                </button>
                <button className="button">
                    <a href="">LogIn</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Header