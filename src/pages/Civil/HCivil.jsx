// MainPage.js
import React, { useState } from 'react';
import DropdownBox from './DropdownBox';
import './HCivil.css'

function MainPage() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleButtonClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className='buttonW'>
      <div style={{ marginBottom: '10px' }} >
        <button onClick={() => handleButtonClick(0)}>Construction Drawings</button>
        {activeDropdown === 0 && <DropdownBox info='this is a Construction Drawing'/>}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(1)}>CAD Conversion</button>
        {activeDropdown === 1 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(2)}>Geospatial Services</button>
        {activeDropdown === 2 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(3)}>Construction Cost Estimation</button>
        {activeDropdown === 3 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(4)}>Drainage  &  Sewarage Design</button>
        {activeDropdown === 4 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(5)}>Structural  Design and Drafting</button>
        {activeDropdown === 5 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(6)}>Structural  Steel Detailing</button>
        {activeDropdown === 6 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(7)}>Fabrication Drawing</button>
        {activeDropdown === 7 && <DropdownBox />}
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(8)}>Volumetric Estimation</button>
        {activeDropdown === 8 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(9)}>Project process Management</button>
        {activeDropdown === 9 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(10)}>Construction Inspection </button>
        {activeDropdown === 10 && <DropdownBox />}
      </div>
      

    </div>
  );
}

export default MainPage;
