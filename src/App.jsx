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
import PresentationDrawings from './pages2/Architectural/PresentationDrawings/PresentationDrawings'
import ThreeDModelling from './pages2/Architectural/3DModelling/threeDModelling'
import GlassShopDrawings from './pages2/Architectural/GlassShopDrawings/GlassShopDrawings'
import FloorPlanConversion from './pages2/Architectural/2D3DFloorPlanConversion/FloorPlanConversion'
import TwoDDrafting from './pages2/Architectural/twoDDrafting/twoDDrafting'
import ThreeDWalkThroughAnimation from './pages2/Architectural/threeDWalkThroughAnimation/threeDWalkThroughAnimation'
import RevitServices from './pages2/Architectural/RevitServices/RevitServices'


import ConstructionDrawings from './pages2/Civil/ConstructionDrawings/ConstructionDrawings'
import ConstructionCostEstimation from './pages2/Civil/ConstructionCostEstimation/ConstructionCostEstimation'
import StructuralDesignDrafting from './pages2/Civil/StructuralDesignAndDrafting/StructuralDesignDrafting'
import FabricationDrawing from './pages2/Civil/FabricationDrawing/FabricationDrawing'
import ProjectProcessManagement from './pages2/Civil/ProjectProcessManagement/ProjectProcessManagement'
import GeoSpatialServices from './pages2/Civil/GeoSpatialServices/GeoSpatialServices'
import DrainageSewerageDesign from './pages2/Civil/DrainageSewerageDesign/DrainageSewerageDesign'
import StructuralSteelDetailing from './pages2/Civil/StructuralSteelDetailing/StructuralSteelDetailing'
import VolumetricEstimation from './pages2/Civil/VolumetricEstimation/VolumetricEstimation'
import ConstructionInspection from './pages2/Civil/ConstructionInspection/ConstructionInspection'


import BIMForInfrastructure from './pages2/BIM/BIMForInfrastructure/BIMForInfrastructure'
import ShopDrawingExtraction from './pages2/BIM/ShopDrawingExtraction/ShopDrawingExtraction'
import RevitFamilyCreation from './pages2/BIM/RevitFamilyCreation/RevitFamilyCreation'
import ClashDetection from './pages2/BIM/ClashDetection/ClashDetection'
import ScanToBIM from './pages2/BIM/ScanToBIM/ScanToBIM'
import BIMModelling from './pages2/BIM/BIMModelling/BIMModelling'
import BIMCoordination from './pages2/BIM/BIMCoordination/BIMCoordination'
import LeanConstruction from './pages2/BIM/LeanConstruction/LeanConstruction'


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


        <Route path="/Architectural/RevitServices" element={<RevitServices/>} />
        <Route path="/Architectural/CadConversion" element={<CadConversion/>} />
        <Route path="/Architectural/FloorPlanConversion" element={<FloorPlanConversion/>} />
        <Route path="/Architectural/PresentationDrawings" element={<PresentationDrawings/>} />
        <Route path="/Architectural/2DDrafting" element={<TwoDDrafting/>} />
        <Route path="/Architectural/3DModeling" element={<ThreeDModelling/>} />
        <Route path="/Architectural/3DWalkThroughAnimation" element={<ThreeDWalkThroughAnimation/>} />
        <Route path="/Architectural/GlassShopDrawings" element={<GlassShopDrawings/>} />

        <Route path="/Civil/ConstructionDrawings" element={<ConstructionDrawings/>} />
        <Route path="/Civil/GeospatialServices" element={<GeoSpatialServices/>} />
        <Route path="/Civil/ConstructionCostEstimation" element={<ConstructionCostEstimation/>} />
        <Route path="/Civil/DrainageSewarageDesign" element={<DrainageSewerageDesign/>} />
        <Route path="/Civil/StructuralDesignDrafting" element={<StructuralDesignDrafting/>} />
        <Route path="/Civil/StructuralSteelDetailing" element={<StructuralSteelDetailing/>} />
        <Route path="/Civil/FabricationDrawing" element={<FabricationDrawing/>} />
        <Route path="/Civil/VolumetricEstimation" element={<VolumetricEstimation/>} />
        <Route path="/Civil/ProjectProcessManagement" element={<ProjectProcessManagement/>} />
        <Route path="/Civil/ConstructionInspection" element={<ConstructionInspection/>} />

        <Route path="/BIM/BIMForInfrastructure" element={<BIMForInfrastructure/>} />
        <Route path="/BIM/ScanToBIM" element={<ScanToBIM/>} />
        <Route path="/BIM/ShopDrawingExtraction" element={<ShopDrawingExtraction/>} />
        <Route path="/BIM/BIMModeling" element={<BIMModelling/>} />
        <Route path="/BIM/RevitFamilyCreation" element={<RevitFamilyCreation/>} />
        <Route path="/BIM/BIMCoordination" element={<BIMCoordination/>} />
        <Route path="/BIM/ClashDetection" element={<ClashDetection/>} />
        <Route path="/BIM/LeanConstruction" element={<LeanConstruction/>} />

            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      </MantineProvider>
    </>
  )
}

export default App
