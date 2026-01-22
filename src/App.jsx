import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'

// Import all pages
import PreLaunch from './pages/PreLaunch'
import Shop from './pages/Shop'
import ProductPage from './pages/ProductPage'
import BikiniTops from './pages/BikiniTops'

function App() {
  return (
    <>
      <Routes>
        {/* Pre-launch / Coming Soon page - set as homepage for now */}
        <Route path="/" element={<PreLaunch />} />
        
        {/* Shop pages */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/the-essential" element={<ProductPage />} />
        <Route path="/shop/bikini-tops" element={<BikiniTops />} />
        
        {/* Catch-all redirect to home */}
        <Route path="*" element={<PreLaunch />} />
      </Routes>
      <SpeedInsights />
    </>
  )
}

export default App
