// import React, { Suspense } from 'react'
// import './Architectural.css'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import AHome from './AHome'


// function Architectural() {
//   return (
//     <>
//           <Routes>
//             <Route path='/' element={<AHome/>}></Route>
//             <Route path=''></Route>

//           </Routes>
//     </>
//   )
// }

// export default Architectural


import React from 'react';
import AHome from './AHome';
import './Architectural.css'

function App() {
  return (
    <div className='arch-wrapper'>
      <div className="archHero">
      <h1 className='h1A'>Architectural Page</h1>
      <p className='pA'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, quaerat!</p>
      </div>
      
      <AHome />
      
    </div>
  );
}

export default App;