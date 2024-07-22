import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import { AnalysisProvider } from './context.tsx'
import './index.css'

import Analytics from './pages/analytics.tsx'
import Home from './pages/chess.tsx'
import  {PlayVsStockfish}  from './pages/ai.tsx'

// export default function Chess () { ([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/analytics',
//     element: <Analytics />
//   },
//   {
//     path: '/ai',
//     element: <PlayVsStockfish />
//   }
// ])}

function Apps() {
  return (
    <>
      {/* <Head /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/game/ai:address" element={<PlayVsStockfish />} />
      </Routes>
    </>
  );
}

export default Apps;

// ReactDOM.createRoot(document.getElementById('root')!).render(
// )

// for exporting to the landing page
// export default function Main () {
//     <React.StrictMode>
//       <AnalysisProvider>
//         <RouterProvider router={router} />
//       </AnalysisProvider>
//     </React.StrictMode>
// }
