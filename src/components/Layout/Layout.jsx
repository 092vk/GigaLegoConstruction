import React from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
    <div style={{background:'var(--black)',overflow:'hidden'}}>
        <Header/>
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout