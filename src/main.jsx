import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Navbar.jsx'
import HeroSection from './HeroSection.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <HeroSection />
  </React.StrictMode>,
)
