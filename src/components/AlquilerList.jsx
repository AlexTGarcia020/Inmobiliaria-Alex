import React from "react";
import { Link } from "react-router-dom";
import '../assets/DetallesAlquier.css';

function AlquilerList() {
  const alquileres = [
    {
      id: 1,
      nombre: "Casa En Mendoza Intrucciones",
      precio: "$13.000",
      imagen: "/img/Alquiler-1.jpeg",
    },
    {
      id: 2,
      nombre: "Casa En Mendoza Intrucciones",
      precio: "$18.000",
      imagen: "/img/Alquiler-2.jpeg",
    },
  ];

  return (
    <>
      <div className="container-cards mt-5">
        {alquileres.map((alquiler) => (
          <div className="container-card-product-all mb-5 mt-2" key={alquiler.id}>
            <div className="card-product">
              <div className="img-product-all">
                <img
                  className="img-product-all"
                  src={alquiler.imagen}
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="content-product-all">
                <div className="review-container">
                  <div className="stars">
                    <span id="title-reviews" className="ms-2">
                      {alquiler.nombre}
                    </span>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half"></i>
                  </div>
                  <h5 className="price-product-all mt-2">{alquiler.precio}</h5>
                </div>
                <h4 className="name-product-all"></h4>
                <div className="description-all-product">
                  <p className="product-description"></p>
                </div>
                <div className="button-container-product-all">
                  <div className="w-75 d-flex justify-content-center ms-5 mt-2 mb-3 card-button-product-all">
                    <Link style={{textDecoration:"none", color:"white"}} to={`/Alquieres/${alquiler.id}`}>
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

export default AlquilerList;