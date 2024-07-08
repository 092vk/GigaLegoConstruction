import { useState,Suspense } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Services from './pages/Services/Services'
import ContactUs from './pages/ContactUs/ContactUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}> 
        {/* thing that is shown when the page is still loading  */}
          <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/Services' element={<Services/>}/>
              <Route path='/ContactUs' element={<ContactUs/>}/>

              <Route path='/AboutUs' element={<ContactUs/>}/>


              <Route path='/Market' element={<ContactUs/>}/>
              <Route path='/Career' element={<ContactUs/>}/>
              <Route path='/Architectural' element={<ContactUs/>}/>
              <Route path='/Civil' element={<ContactUs/>}/>
              <Route path='/BIM' element={<ContactUs/>}/>

            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      
    </>
  )
}

export default App
