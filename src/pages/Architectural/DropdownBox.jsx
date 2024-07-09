// DropdownBox.js
import React from 'react';

function DropdownBox() {
  return (
    <>
    <div style={{
      display: 'inline-block',
      marginLeft: '10px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      background: '#f9f9f9'
    }}>
      <p>Some information here</p>
      <button>Book the service</button>
    </div>


    <div style={{
        position:'fixed',
        top: '50%',
        left: '50%',
        padding:'10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        background: '#f9f9f9',
    }
    }>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam similique esse pariatur magnam dolor voluptates officiis mollitia, alias et saepe!</p>
    </div>
    </>

  );
}

export default DropdownBox;
