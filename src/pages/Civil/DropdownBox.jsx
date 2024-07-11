import React from 'react';
import './DropDownBox.css';

function DropdownBox({ info }) {
  return (
    <>
      <div className="dropdown-container">
        {/* Box 1: Inline Block */}
        <div className="dropdown-box">
          <p>Service/Consultancy</p>
          <button>Book the service</button>
        </div>

        {/* Box 2: Positioned Below the First Box */}
        <div className="dropdown-info">
          <p>{info} Service will be provided soon</p>
        </div>
      </div>
    </>
  );
}

export default DropdownBox;
