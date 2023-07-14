import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer';
import NavBar from '../Navbar';
import '../../assets/Contacto.css';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');


  return (
    <div>
      <NavBar />
      <div className="row p-0 mx-0 mt-5">
        <div className="col-md-6 mb-3">
          <div className="contact-container">
            <h2 className="contact-title fs-2">¿Te gustaría obtener más información?</h2>
            <p className="fs-6">Completa los siguientes datos para ponernos en contacto.</p>
            <form
              className="row g-3 mt-1 contact-form"
              action="https://formspree.io/f/xbjvjvdr"
              method="POST"
            >
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  name="nombre"
                  placeholder="Ej: Claudio"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  name="apellido"
                  placeholder="Ej: De Martini"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  required
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputAddress2"
                  name="email"
                  placeholder="Ej: Correo@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Telefono
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="inputAddress"
                  name="telefono"
                  placeholder="Ej: (+598) 097262731"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                />
              </div>
              <div style={{ marginTop: '2.9rem' }} className="col-12 d-flex align-items-center">
                <h4 className="fs-6">
                  Al completar este formulario, uno de nuestros trabajadores se pondrá en contacto a la brevedad. ¡Gracias por tu interés!
                </h4>
                <button className="button-contacto-over ms-2" type="submit">
                  Enviar<span className="ms-2 fs-5" role="img" aria-label="up-right-arrow">
                    &#8599;
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-container-two">
            <div className="image-container-a">
              <img src="/Contacto.jpg" className="rounded img-contact" alt="Contacto" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacto;