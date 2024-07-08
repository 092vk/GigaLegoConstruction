import React from 'react'
import Header from '../Header/Header.jsx'
import Header2 from '../Header/Header2.jsx'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
    <div style={{background:'var(--black)',overflow:'hidden'}}>
        <Header/>
        <Header2/>
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout