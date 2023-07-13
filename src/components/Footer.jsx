import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import "../assets/Footer.css"
import { Link } from "react-router-dom";

function Footer () {
    return (
        <footer className="footer bg-white text-white">
      <div className="">
        <div className="row">
          
          <div className="col-lg-4">
            <img src="/img/Footer-Logo.png" alt="Logo" className="footer-logo" />
          </div>
          
          <div className="col-lg-4 contact-footer">
            <span className="material-symbols-outlined mb-1">
              contacts
            <Link to="https://www.instagram.com/inmobiliariaacostaydemartini/" style={{ color: "white", textDecoration: "none" }}>
              <FontAwesomeIcon className="px-2 fs-4 ms-1 icons-footer-2" icon={faInstagram} />
            </Link>
            <Link to="https://api.whatsapp.com/send?phone=97262731" style={{ color: "white", textDecoration: "none" }}>
              <FontAwesomeIcon className="px-2 fs-4 icons-footer" icon={faWhatsapp} />
            </Link>
            </span>
            <h5>Contacto</h5>
            <p>Teléfono: (+598) 097262731</p>
            <p>Email: acostademartinipropiedades@gmail.com</p>
            {/* <p className="mb-0 mt-0 p-0">Instagram: @inmobiliariaacostaydemartini</p> */}
          </div>
          <div className="col-lg-4 contact-footer">
          <span className="material-symbols-outlined">
            location_on
            </span>
            <h5>Ubicación</h5>
            <p>Dirección: Av. Don Pedro de Mendoza 5361</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <hr className="dividor-footer-contact"/>
            <p className="footer-text fs-6 d-flex justify-content-center">
              © 2023 Tomas Alex Garcia. Todos los derechos reservados. 
              <Link to="https://www.linkedin.com/in/alex-garcia20" style={{color:"white",textDecoration:"none"}} ><FontAwesomeIcon className="px-2  fs-4" icon={faLinkedin}/> </Link> 
              <Link to="https://github.com/AlexTGarcia020" style={{color:"white", textDecoration:"none"}} ><FontAwesomeIcon className="px-2  fs-4" icon={faGithub}/> </Link>
              <Link to="https://www.instagram.com/tomas.garcia_1" style={{color:"white",textDecoration:"none"}} ><FontAwesomeIcon className="px-2  fs-4" icon={faInstagram}/></Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer;