import React from 'react'
import NavBar from "./components/Navbar"
import Footer from './components/Footer'
import AnimatedText from './components/Animated-Text'

import { Link } from "react-router-dom";

import './App.css'

function App() {

  return (
    <div className=''>
      <NavBar/>
      <div className="hero">
      <video src="/img/Hero-12.mp4" className="video-hero" playsInline autoPlay="autoPlay" loop="true" muted defaultmuted></video>
        <div className="text-overlay">
          <div className="text-container d-flex justify-content-center align-items-center">
            <AnimatedText />
          </div>
        </div>
      </div>
        <div className="seal-container-two-1">                  
           <Link style={{textDecoration:"none"}} to="/Ventas">
             <div className="seal">
               <img className='seal-img-home' src="/img/Home.png" alt="home.icono" />
                 <span className='fs-3'>Ventas</span>
             </div>
            </Link>
            <Link style={{color:"green",textDecoration:"none"}} to="/Alquileres">
              <div className="seal ms-2">
                <img className='seal-img-home' src="/img/renta.png" alt="rent.icono" />
                    <span className='fs-3'>Alquileres</span>
              </div>
             </Link>
           </div>
      <Footer/>
    </div>
  )
}

export default App
