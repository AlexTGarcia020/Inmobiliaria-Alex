import React from "react";
import { Link } from "react-router-dom";
import '../assets/DetallesAlquier.css';

function AlquilerList() {
  const alquileres = [
    {
      id: 6,
      nombre: "Alquiler Casa Apartamento A Estrenar En Mendoza Y Linneo A Metros De La Perimetral 102",
      precio: "$18.000",
      imagen: "/img/Alquiler-6.jpg",
    },
    {
      id: 7,
      nombre: "Alquiler Apartamento A Estrenar 2 Dormitorios En Mendoza Y Capitan Tula",
      precio: "$20.000",
      imagen: "/img/Alquiler-7.jpg",
    },
  ];

  return (
    <>
      <div className="container-cards mt-5">
        {alquileres.map((alquiler) => (
          <div className="container-card-product-all
          mb-5 mt-2" key={alquiler.id}>
            <div className="card-product scale-in-right">
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