import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Header/>
        <Hero/>
        <rest className='rest'></rest>
      </div>
    </>
  )
}

export default App
