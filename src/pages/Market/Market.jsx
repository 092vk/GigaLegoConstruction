import React from 'react';
import './Market.css';

function Market() {
  return (
    <div className='market-wrapper'>
      <h1>Markets</h1>
      <ul className='market-list'>
        <li>
          <strong>Residential</strong> - Development and maintenance of homes, apartments, and living spaces.
        </li>
        <li>
          <strong>Public Works & Infrastructure</strong> - Construction and maintenance of essential public utilities and facilities.
        </li>
        <li>
          <strong>Local & Regional Government</strong> - Projects commissioned by local and regional government authorities.
        </li>
        <li>
          <strong>Complete Streets</strong> - Designing streets to accommodate all users, including pedestrians, cyclists, and vehicles.
        </li>
        <li>
          <strong>Educational Works</strong> - Construction and renovation of educational facilities such as schools and universities.
        </li>
      </ul>
    </div>
  );
}

export default Market;
