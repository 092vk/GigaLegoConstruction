// MainPage.js
import React, { useState } from 'react';
import DropdownBox from './DropdownBox';

function MainPage() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleButtonClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(0)}>Revit Services</button>
        {activeDropdown === 0 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(1)}>CAD Conversion</button>
        {activeDropdown === 1 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(2)}>2D & 3D Floor Plan Conversion</button>
        {activeDropdown === 2 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(3)}>PresentationDrawings</button>
        {activeDropdown === 3 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(4)}>2D Drafting</button>
        {activeDropdown === 4 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(5)}>3D Modeling</button>
        {activeDropdown === 5 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(6)}>3D Walk Through Animation</button>
        {activeDropdown === 6 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(7)}>Glass shop Drawings</button>
        {activeDropdown === 7 && <DropdownBox />}
      </div>
    </div>
  );
}

export default MainPage;
