// MainPage.js
import React, { useState } from 'react';
import DropdownBox from './DropdownBox';
import '../Civil/HCivil.css'
import './BHome.css'

function MainPage() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleButtonClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div
    className='buttonW'>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(0)}>BIM For Infrastructure</button>
        {activeDropdown === 0 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(1)}>Scan to BIM</button>
        {activeDropdown === 1 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(2)}>Shop Drawing Extraction</button>
        {activeDropdown === 2 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(3)}>BIM Modeling</button>
        {activeDropdown === 3 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(4)}>Revit Family Creation</button>
        {activeDropdown === 4 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(5)}>BIM Coordination</button>
        {activeDropdown === 5 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(6)}>Clash Detection</button>
        {activeDropdown === 6 && <DropdownBox />}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleButtonClick(7)}>Lean Construction</button>
        {activeDropdown === 7 && <DropdownBox />}
      </div>
    </div>
  );
}

export default MainPage;
