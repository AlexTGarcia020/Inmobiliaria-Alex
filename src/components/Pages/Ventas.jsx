import React from "react";
import NavBar from "../Navbar";
import Footer from "../Footer";
import VentasList from "../VentasList";

function Ventas() {
  return (
    <div>
      <NavBar />
      <div>
        <VentasList/>
      </div>
      <Footer />
    </div>
  );
}

export default Ventas;