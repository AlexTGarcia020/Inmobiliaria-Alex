import React from "react";
import Footer from "../Footer";
import NavBar from "../Navbar";
import "../../assets/Contacto.css";

function Contacto() {
  return (
    <div>
      <NavBar />
      <div className="row p-0 mx-0 mt-5">
        <div className="col-md-6 mb-3">
          <div className="contact-container">
            <h2 className="contact-title fs-2">¿Te gustaría obtener más información?</h2>
            <p className="fs-6">Completa los siguientes datos para ponernos en contacto.</p>
            <form className="row g-3 mt-1 contact-form">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Nombre
                </label>
                <input type="name" className="form-control" id="inputEmail4" placeholder="Ej: Claudio" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Apellido
                </label>
                <input type="lastname" className="form-control" id="inputPassword4" placeholder="Ej: De Martini" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputAddress2" placeholder="Ej: Correo@gmail.com" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Telefono
                </label>
                <input type="phone" className="form-control" id="inputAddress" placeholder="Ej: (+598) 097262731" />
              </div>
              <div style={{marginTop:"2.9rem"}} className="col-12 d-flex align-items-center">
                <h4 className="fs-6">Al completar este formulario, uno de nuestros trabajadores se pondrá en contacto a la brevedad. ¡Gracias por tu interés!</h4>
                <button className="button-contacto-over ms-2">Enviar<span className="ms-2 fs-5" role="img" aria-label="up-right-arrow">&#8599;</span></button>
              </div>
            </form>
          </div>
        </div>
         <div  className="col-md-6">
            <div className="contact-container-two">
            {/* <h6 className="text-contact">
                Acosta y De Martini Propiedades es una empresa líder en el mercado inmobiliario, dedicada a brindar soluciones de calidad y personalizadas para la compra, venta y alquiler de propiedades. Con un enfoque centrado en la satisfacción del cliente, nos esforzamos por entender las necesidades únicas de cada cliente y ofrecer un servicio excepcional.
                </h6> */}
                <div className="image-container-a">
                <img src="/Contacto.jpg" className="rounded img-contact"></img>
                </div>
            </div>
            </div> 
      </div>
      <Footer />
    </div>
  );
}

export default Contacto;
