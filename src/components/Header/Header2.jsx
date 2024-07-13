import React from 'react'
import './Header2.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Header() {
  return (
    <section className='h-wrapper'>
        <div className='h-container paddings innerWidth'>
            
            <div className="flexCenter h-menu h2-menu">
                
                <div className="dropdown">
                    <Link to={'/Teams'} className="dropbtn">Teams</Link>
                    <div className="dropdown-content">
                        <Link to={'/Teams/SubTeam1'}>SubTeam 1</Link>
                        <Link to={'/Teams/SubTeam2'}>SubTeam 2</Link>
                        <Link to={'/Teams/SubTeam3'}>SubTeam 3</Link>
                    </div>
                </div>

                <div className="dropdown">
                    <Link to={'/Market'} className="dropbtn">Market</Link>
                    <div className="dropdown-content">
                        <Link to={'/Market/Option1'}>Option 1</Link>
                        <Link to={'/Market/Option2'}>Option 2</Link>
                        <Link to={'/Market/Option3'}>Option 3</Link>
                    </div>
                </div>

                <div className="dropdown">
                    <Link to={'/Career'} className="dropbtn">Career</Link>
                </div>

                <div className="dropdown">
                    <Link to={'/Architectural'} className="dropbtn">Architectural</Link>
                    <div className="dropdown-content">
                            <Link to={'/Architectural/CadConversion'}>Cad Conversion</Link>
                            <Link to={'/Architectural/FloorPlanConversion'}>2D & 3D Floor Plan Conversion</Link>
                            <Link to={'/Architectural/PresentationDrawings'}>Presentation Drawings</Link>
                            <Link to={'/Architectural/2DDrafting'}>2D Drafting</Link>
                            <Link to={'/Architectural/3DModeling'}>3D Modeling</Link>
                            <Link to={'/Architectural/3DWalkThroughAnimation'}>3D Walk Through Animation</Link>
                            <Link to={'/Architectural/GlassShopDrawings'}>Glass Shop Drawings</Link>
                            <Link to={'/Architectural/RevitServices'}>Revit Services</Link>
                        </div>
                </div>

                <div className="dropdown">
                    <Link to={'/Civil'} className="dropbtn">Civil</Link>
                   

                      <div className="dropdown-content">
                        <Link to={'/Civil/ConstructionDrawings'}>Construction Drawings</Link>
                        <Link to={'/Civil/GeospatialServices'}>Geospatial Services</Link>
                        <Link to={'/Civil/ConstructionCostEstimation'}>Construction Cost Estimation</Link>
                        <Link to={'/Civil/DrainageSewarageDesign'}>Drainage & Sewarage Design</Link>
                        <Link to={'/Civil/StructuralDesignDrafting'}>Structural Design and Drafting</Link>
                        <Link to={'/Civil/StructuralSteelDetailing'}>Structural Steel Detailing</Link>
                        <Link to={'/Civil/FabricationDrawing'}>Fabrication Drawing</Link>
                        <Link to={'/Civil/VolumetricEstimation'}>Volumetric Estimation</Link>
                        <Link to={'/Civil/ProjectProcessManagement'}>Project Process Management</Link>
                        <Link to={'/Civil/ConstructionInspection'}>Construction Inspection</Link>
                      </div>

                </div>

                <div className="dropdown">
                    <Link to={'/BIM'} className="dropbtn">BIM</Link>
                    <div className="dropdown-content">
                        <Link to={'/BIM/BIMForInfrastructure'}>BIM For Infrastructure</Link>
                        <Link to={'/BIM/ScanToBIM'}>Scan to BIM</Link>
                        <Link to={'/BIM/ShopDrawingExtraction'}>Shop Drawing Extraction</Link>
                        <Link to={'/BIM/BIMModeling'}>BIM Modeling</Link>
                        <Link to={'/BIM/RevitFamilyCreation'}>Revit Family Creation</Link>
                        <Link to={'/BIM/BIMCoordination'}>BIM Coordination</Link>
                        <Link to={'/BIM/ClashDetection'}>Clash Detection</Link>
                        <Link to={'/BIM/LeanConstruction'}>Lean Construction</Link>
                        
                      </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Header;
