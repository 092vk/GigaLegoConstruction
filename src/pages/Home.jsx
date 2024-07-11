import React from 'react'
import Header2 from '../components/Header/Header2'
import Hero from '../components/Hero/Hero'
import Cards from '../components/Cards/Cards'
import Value from '../components/Value/Value'
import Contact from '../components/Contact/Contact'
import data from '../utils/slider.json'

function Home() {
  return (
    <div className='App'>
        <div>
          <div className='white-gradient'/>
          <Hero/>
        </div>
        <Cards data={data}/>
        <Value/>
        <Contact/>
      </div>
  )
}

export default Home