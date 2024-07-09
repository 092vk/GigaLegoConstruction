import React from 'react';

function DropdownBox({info}) {
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
        <p>Service/Consultancy</p>
        <button>Book the service</button>
      </div>

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '75%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
        height: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        background: '#f9f9f9',
        overflow: 'auto'
      }}>
        <p>`{info} Service will be provided soon`</p>
      </div>
    </>
  );

  
  
}

export default DropdownBox;
