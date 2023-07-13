import React from "react";
import NavBar from "../Navbar";
import Footer from "../Footer";
import AlquilerList from "../AlquilerList";

function Alquiler() {
  return (
    <div>
      <NavBar />
      <div>
        <AlquilerList/>
      </div>
      <Footer />
    </div>
  );
}

export default Alquiler;