import React from 'react'
import './Header.css'
import { BrowserRouter as Router, Route, Routes, Link ,NavLink} from 'react-router-dom';
// import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from '../ProfileMenu/ProfileMenu';
function Header() {
    // const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();


    

    const isAuthenticated = false;

  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth h-container '>

            <Link to='/'>
                <img src="logo.svg" alt="logi" width={100}/>
            </Link>

            <div className="flexCenter h-menu">

                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/AboutUs'}>About Us</NavLink>


                <NavLink to={'/Services'}>Services</NavLink>
                <NavLink to={'/ContactUs'}>ContactUs</NavLink>
                

                {/* <button className="button">
                    <a href="">SignIn</a>
                </button> */}

               {/* login button */}
            {/* {!isAuthenticated ? (
              <button className="button" onClick={loginWithRedirect}>
                Login
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )} */}



            {!isAuthenticated ? (
              <>
              <button className="button"><Link to={'/login'}>Login</Link></button>
              <button className="button"><Link to={'/register'}>Register</Link></button>
              </>
            ) : (
              <button className='button'>Logout</button>
            )}
              
              

            </div>
        </div>
    </section>
  )
}

export default Header