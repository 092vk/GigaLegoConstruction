import React from 'react'
import Header2 from '../components/Header/Header2'
import Hero from '../components/Hero/Hero'
import Cards from '../components/Cards/Cards'
import Value from '../components/Value/Value'
import Contact from '../components/Contact/Contact'
import data from '../utils/slider.json'
import Home2 from '../components/home2/Home2'

function Home() {
  return (
    <div className='App'>

        <Home2/>
        <Hero/>
        <Cards data={data}/>
        <Value/>
        <Contact/>
        
        {/* <div>
          <div className='white-gradient'/>
          
        </div>
        */}


        
      </div>
  )
}

export default Home