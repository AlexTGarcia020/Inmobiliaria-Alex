import React, { useState } from "react";
import "../assets/Navbar.css"
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar className="navbar-home" bg="white" variant="white" expand="lg" expanded={expanded} onToggle={handleNavbarToggle}>
      <div className="container-fluid">
        <Navbar.Brand href="">
          <span className="d-flex align-items-center">
           <Link style={{textDecoration:"none"}} to={"/"}>
            <img
              className="img-logo-navbar"
              src="/img/LogoSVG.png"
              alt="Logo-Inmobiliaria"
            />
            </Link>
            <p className="ms-3 mb-0 logo-text">
              Inmobiliaria<br />Acosta Y De Martini
            </p>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto group-links fs-5 text-center">
            <Nav.Link className="text-navbar-links" href="/">Inicio</Nav.Link>
            <Nav.Link className="text-navbar-links" href="/Ventas">Ventas</Nav.Link>
            <Nav.Link className="text-navbar-links" href="/Alquileres">Alquileres</Nav.Link>
            <Nav.Link className="text-navbar-links" href="/Nosotros">Nosotros</Nav.Link>
          </Nav>
          <Link to={"/Contacto"}>
            <div className="responsive-button">
            <button className="button-contacto">Contacto<span className="ms-2 fs-5" role="img" aria-label="up-right-arrow">&#8599;</span></button>
            </div>
          </Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default NavBar;