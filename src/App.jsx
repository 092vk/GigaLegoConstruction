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
import { MantineProvider } from '@mantine/core'



// importing from pages2 
import CadConversion from './pages2/Architectural/CadConversion/CadConversion'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MantineProvider>
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






        <Route path="/Teams/SubTeam1" element={<Teams/>} />
        <Route path="/Teams/SubTeam2" element={<Teams/>} />
        <Route path="/Teams/SubTeam3" element={<Teams/>} />

        <Route path="/Market/Option1" element={<Market/>} />
        <Route path="/Market/Option2" element={<Market/>} />
        <Route path="/Market/Option3" element={<Market/>} />


        <Route path="/Architectural/RevitServices" element={<Architectural/>} />
        <Route path="/Architectural/CadConversion" element={<CadConversion/>} />
        <Route path="/Architectural/FloorPlanConversion" element={<Architectural/>} />
        <Route path="/Architectural/PresentationDrawings" element={<Architectural/>} />
        <Route path="/Architectural/2DDrafting" element={<Architectural/>} />
        <Route path="/Architectural/3DModeling" element={<Architectural/>} />
        <Route path="/Architectural/3DWalkThroughAnimation" element={<Architectural/>} />
        <Route path="/Architectural/GlassShopDrawings" element={<Architectural/>} />

        <Route path="/Civil/ConstructionDrawings" element={<Civil/>} />
        <Route path="/Civil/GeospatialServices" element={<Civil/>} />
        <Route path="/Civil/ConstructionCostEstimation" element={<Civil/>} />
        <Route path="/Civil/DrainageSewarageDesign" element={<Civil/>} />
        <Route path="/Civil/StructuralDesignDrafting" element={<Civil/>} />
        <Route path="/Civil/StructuralSteelDetailing" element={<Civil/>} />
        <Route path="/Civil/FabricationDrawing" element={<Civil/>} />
        <Route path="/Civil/VolumetricEstimation" element={<Civil/>} />
        <Route path="/Civil/ProjectProcessManagement" element={<Civil/>} />
        <Route path="/Civil/ConstructionInspection" element={<Civil/>} />

        <Route path="/BIM/BIMForInfrastructure" element={<BIM/>} />
        <Route path="/BIM/ScanToBIM" element={<BIM/>} />
        <Route path="/BIM/ShopDrawingExtraction" element={<BIM/>} />
        <Route path="/BIM/BIMModeling" element={<BIM/>} />
        <Route path="/BIM/RevitFamilyCreation" element={<BIM/>} />
        <Route path="/BIM/BIMCoordination" element={<BIM/>} />
        <Route path="/BIM/ClashDetection" element={<BIM/>} />
        <Route path="/BIM/LeanConstruction" element={<BIM/>} />

            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      </MantineProvider>
    </>
  )
}

export default App
