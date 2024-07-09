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

function App() {
  return (
    <div>
      <h1>Architectural Page</h1>
      <AHome />
    </div>
  );
}

export default App;