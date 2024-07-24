// MainPage.js
import React, { useState } from 'react';
import DropdownBox from './DropdownBox';
import '../Civil/HCivil.css'
import './AHome.css'

function MainPage() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleButtonClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div
    className='buttonW'>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(0)}>Revit Services</button>
        {activeDropdown === 0 && <DropdownBox link={"./Architectural/RevitServices"}/>}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(1)}>CAD Conversion</button>
        {activeDropdown === 1 && <DropdownBox link={"./Architectural/CadConversion"}/>}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(2)}>2D & 3D Floor Plan Conversion</button>
        {activeDropdown === 2 && <DropdownBox link={"./Architectural/FloorPlanConversion"}/>}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(3)}>PresentationDrawings</button>
        {activeDropdown === 3 && <DropdownBox link={"./Architectural/PresentationDrawings"}/>}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(4)}>2D Drafting</button>
        {activeDropdown === 4 && <DropdownBox link={"./Architectural/2DDrafting"}/>}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(5)}>3D Modeling</button>
        {activeDropdown === 5 && <DropdownBox link={"./Architectural/3DModeling"}/>}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(6)}>3D Walk Through Animation</button>
        {activeDropdown === 6 && <DropdownBox link={"./3DWalkThroughAnimation"} />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(7)}>Glass shop Drawings</button>
        {activeDropdown === 7 && <DropdownBox link={"./Architectural/GlassShopDrawings"}/>}
      </div>
    </div>
  );
}

export default MainPage;
