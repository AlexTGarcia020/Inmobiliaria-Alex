import React from "react";
import { Link } from "react-router-dom";
import "../assets/Ventas.css";

function VentasList() {
  const ventas = [
    {
      id: 1,
      nombre: "Campo Forestal Próximo Tupambaé",
      precio: "$0",
      imagen: "/img/Casa-1.jpeg",
      detalles: "Descripción del producto 1",
    },
    {
      id: 2,
      nombre: "Apartamento Buceo",
      precio: "U$S98.000",
      imagen: "/img/Casa-2.jpeg",
      detalles: "Descripción del producto 2",
    },
    {
      id: 3,
      nombre: "Casa Piedras Blancas",
      precio: "U$S79.000",
      imagen: "/img/Casa-3-1.jpeg",
      detalles: "Descripción del producto 3",
    },
  ];

  return (
    <>
      <div className="container-cards mt-5">
        {ventas.map((venta) => (
          <div key={venta.id} className="container-card-product-all col-md-6 col-lg-4 mb-5 mt-2">
            <div className="card-product scale-in-right">
              <div className="img-product-all">
                <img
                  className="img-product-all"
                  src={venta.imagen}
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="content-product-all">
                <div className="review-container">
                  <div className="stars">
                    <span id="title-reviews" className="ms-2" style={{ whiteSpace: "nowrap" }}>
                      {venta.nombre}
                    </span>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half"></i>
                  </div>
                  <h5 className="price-product-all mt-2">{venta.precio}</h5>
                </div>
                <h4 className="name-product-all"></h4>
                <div className="button-container-product-all">
                  <div className="w-75 d-flex justify-content-center ms-5 mt-2 mb-3 card-button-product-all">
                  <Link style={{textDecoration:"none", color:"white"}} to={`/Ventas/${venta.id}`}>
                    <p className="product-shop-cart">Ver Detalles</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default VentasList;