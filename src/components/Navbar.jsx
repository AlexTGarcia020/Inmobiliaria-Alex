import React from "react";
import "../assets/Navbar.css"
import { Navbar, Nav, } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <div>
            <Navbar className="navbar-home" bg="white" variant="white">
                <div className="d-flex justify-content-between align-items-center w-100">
                <Navbar.Brand href="#">
                <span className="d-flex align-items-center">
                    <img
                    className="img-logo-navbar"
                    src="/img/LogoSVG.png"
                    alt="Logo-Inmobiliaria"
                    />
                    <p className="ms-3 mb-0 logo-text">
                    Inmobiliaria<br />Acosta Y De Martini
                    </p>
                </span>
                </Navbar.Brand>
                <Nav className="mx-auto group-links fs-5 text-center">
                    <Nav.Link className="text-navbar-links" href="/">Inicio</Nav.Link>
                    <Nav.Link className="text-navbar-links" href="/Ventas">Ventas</Nav.Link>
                    <Nav.Link className="text-navbar-links" href="/Alquileres">Alquileres</Nav.Link>
                    <Nav.Link className="text-navbar-links" href="/Nosotros">Nosotros</Nav.Link>
                </Nav>
                <Link to={"/Contacto"}>
                 <button className="button-contacto" >Contacto<span className="ms-2 fs-5" role="img" aria-label="up-right-arrow">&#8599;</span></button>
                </Link>
                </div>
            </Navbar>
        </div>
  )
}

export default NavBar;