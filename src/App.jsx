import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Header2 from './components/Header/Header2'
import Hero from './components/Hero/Hero'
import Cards from './components/Cards/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <div>
          <div className='white-gradient'/>
          <Header/>
          <Header2/>
          <Hero/>
        </div>
        <Cards/>
      </div>
    </>
  )
}

export default App
