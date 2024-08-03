import React from 'react';
import '../Civil/DropDownBox.css';

function DropdownBox({ link }) {
  return (
    <>
      <div className="dropdown-container">
        {/* Box 1: Inline Block */}
        <div className="dropdown-box">
          <p>Service/Consultancy</p>
          <a href={link}><button className='button'>Know More</button></a>
          <a href="./ContactUs"><button className='button'>Book the service</button></a>
        </div>

        {/* Box 2: Positioned Below the First Box */}
        <div className="dropdown-info">
          <p>Service will be provided soon
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ea praesentium molestias asperiores aliquid vel labore expedita consequatur adipisci reiciendis!</p>
        </div>
      </div>
    </>
  );
}

export default DropdownBox;
