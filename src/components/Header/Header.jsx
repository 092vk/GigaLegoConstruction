import React, { useEffect, useState } from 'react';
import './Header.css';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import { auth } from '../auth/firebase'; // import the auth instance from firebase.js
import ProfileMenu from '../ProfileMenu/ProfileMenu';

function Header() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setIsAuthenticated(true);
                setUser(user);
            } else {
                setIsAuthenticated(false);
                setUser(null);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return (
        <section className='h-wrapper'>
            <div className='flexCenter paddings innerWidth h-container '>
                <Link to='/'>
                    <img src="logiGiga.jpeg" alt="logi" width={100}  className='logoC'/>
                </Link>

                <div className="flexCenter h-menu">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/AboutUs'}>About Us</NavLink>
                    <NavLink to={'/Services'}>Services</NavLink>
                    <NavLink to={'/ContactUs'}>Contact Us</NavLink>

                    {!isAuthenticated ? (
                        <>
                            <button className="button"><Link to={'/login'}>Login</Link></button>
                            <button className="button"><Link to={'/register'}>Register</Link></button>
                        </>
                    ) : (
                        <ProfileMenu user={user} />
                    )}
                </div>
                
            </div>
        </section>
    );
}

export default Header;
