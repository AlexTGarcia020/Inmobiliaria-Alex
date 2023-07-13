import React from "react";
import "../../assets/SobreNosotros.css";
import NavBar from "../Navbar";
import Footer from "../Footer";
import MyMap from "../Map";
import { Link } from "react-router-dom";

function SobreNosotros() {
    return (
      <div>
        <NavBar />
        <div>
          <div className="row p-0 mx-0 mt-5">
            <div className="col-12 col-md-6">
              <div className="contact-container">
                <h1 className="fs-2">Nosotros</h1>
                <div className="text-contact fs-6">
                  Acosta y De Martini Propiedades es una empresa líder en el mercado inmobiliario, dedicada a brindar soluciones de calidad y personalizadas para la compra, venta y alquiler de propiedades.<br /> <br />
                  Con un enfoque centrado en la satisfacción del cliente, nos esforzamos por entender las necesidades únicas de cada cliente, ofreciendo soluciones personalizadas que superen sus expectativas.
                <hr/>
                </div>
              </div>
                <div className="seal-container">
                  <div className="seal">
                    <img src="/img/padlock.png" alt="Seguridad" />
                    <span>Seguridad</span>
                  </div>
                  <div className="seal">
                    <img src="/img/trust.png" alt="Confianza" />
                    <span>Confianza</span>
                  </div>
                  <div className="seal">
                    <img src="/img/support.png" alt="Atención al público" />
                    <span>Atención</span>
                  </div>
                </div>
                <hr className="w-100 p-0 dividor-nosotros"/>
                <div className="seal-container-two">                  
                <Link style={{textDecoration:"none"}} to="https://api.whatsapp.com/send?phone=97262731">
                <div className="seal">
                    <img src="/img/whatsapp.png" alt="Seguridad" />
                    <span>WhatsApp</span>
                </div>
                </Link>
                <Link style={{textDecoration:"none"}} to="https://www.instagram.com/inmobiliariaacostaydemartini/">
                  <div className="seal ms-2">
                    <img src="/img/instagram.png" alt="Confianza" />
                    <span>Instagram</span>
                  </div>
                </Link>
                </div>
                <hr className="w-100 p-0 dividor-nosotros"/>
            </div>
            <div className="col-12 col-md-6 contact-container-two">
              <span className="fs-2">Nos encontramos aqui!</span>
              <div className="image-container" style={{ maxHeight: "100%", maxWidth: "550px" }}>
                <MyMap />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  export default SobreNosotros;