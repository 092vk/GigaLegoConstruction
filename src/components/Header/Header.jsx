import React from 'react'
import './Header.css'


function Header() {
  return (
    <section className='h-wrapper'>
        <div className='h-container flexCenter paddings innerWidth'>
            <img src="logo.svg" alt="logi" width={100}/>
            <div className="flexCenter h-menu">
                <a className='a' href="">Home</a>
                <a className='a'  href="">About Us</a>
                <a className='a'  href="">Contact Us</a>
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