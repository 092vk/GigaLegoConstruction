import React from 'react';
import '../Civil/DropDownBox.css';

function DropdownBox({ info }) {
  return (
    <>
      <div className="dropdown-container">
        {/* Box 1: Inline Block */}
        <div className="dropdown-box">
          <p>Service/Consultancy</p>
          <button className='button'>Know More</button>
          <button className='button'>Book the service</button>
        </div>

        {/* Box 2: Positioned Below the First Box */}
        <div className="dropdown-info">
          <p>{info} Service will be provided soon
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ea praesentium molestias asperiores aliquid vel labore expedita consequatur adipisci reiciendis!</p>
        </div>
      </div>
    </>
  );
}

export default DropdownBox;
