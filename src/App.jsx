import { useState,Suspense } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Services from './pages/Services/Services'
import ContactUs from './pages/ContactUs/ContactUs'
import Market from './pages/Market/Market'
import Career from './pages/Career/Career'
import Architectural from './pages/Architectural/Architectural'
import Civil from './pages/Civil/Civil'
import BIM from './pages/BIM/BIM'
import Teams from './pages/Teams/Teams'

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

              <Route path='/AboutUs' element={<AboutUs/>}/>


              <Route path='/Market' element={<Market/>}/>
              <Route path='/Career' element={<Career/>}/>
              <Route path='/Architectural' element={<Architectural/>}/>
              <Route path='/Civil' element={<Civil/>}/>
              <Route path='/BIM' element={<BIM/>}/>

              <Route path='/Teams' element={<Teams/>}/>

            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      
    </>
  )
}

export default App
