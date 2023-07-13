import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './components/Pages/Contacto.jsx';
import App from './App.jsx';
import SobreNosotros from './components/Pages/SobreNosotros.jsx';
import Ventas from './components/Pages/Ventas.jsx';
import Alquiler from './components/Pages/Alquiler.jsx';
import DetallesAlquiler from './components/Pages/DetallesAlquiler.jsx';
import DetallesVentas from './components/Pages/DetallesVentas.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="/Nosotros" element={<SobreNosotros />} />
      <Route path="/Ventas" element={<Ventas />} />
      <Route path="/Alquileres" element={<Alquiler />} />
      <Route path="/Alquieres/:id" element={<DetallesAlquiler />} />
      <Route path="/Ventas/:id" element={<DetallesVentas />} />
    </Routes>
  </BrowserRouter>
);