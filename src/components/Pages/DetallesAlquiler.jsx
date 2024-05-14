import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Navbar';
import Footer from '../Footer';
import { MdLocalHotel, MdBathtub, MdKitchen, MdWeekend, MdLocalLaundryService, MdAttachMoney, MdLandscape } from 'react-icons/md';
import '../../assets/DetallesAlquier.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

function DetallesAlquiler() {
  const { id } = useParams();
  const [showImage, setShowImage] = useState(false);
  const [clickedImage, setClickedImage] = useState('');

  const alquileres = [
    {
      id: 6,
      nombre: 'Alquiler Casa Apartamento Nuevo En Mendoza Y Linneo Metros De Perimetral 102',
      precio: '$18.000',
      imagen: '/img/Alquiler-6.jpg',
      detalles:
        'Disfruta del Verde de Montevideo a Pasos de la Ciudad Casa de 5 ambientes tipo "duplex" recién construida.',
      imagenesAdicionales: ['/img/Alquiler-6.1.jpg', '/img/Alquiler-6.2.jpg', '/img/Alquiler-6.3.jpg', '/img/Alquiler-6.4.jpg', '/img/Alquiler-6.5.jpg', '/img/Alquiler-6.6.jpg', '/img/Alquiler-6.7.jpg', '/img/Alquiler-6.8.jpg',],
      dormitorios: '2 Dormitorios',
      baños: '1 Baño',
      cocinas: '1 Cocina',
      livings: '1 Comedor',
      patios: '1 Jardin',
      gastos: 'Sin Gastos Comunes',
      salas: '-',
    },
    {
      id: 7,
      nombre: 'Alquiler Apartamento A Estrenar 2 Dormitorios En Mendoza Y Capitan Tula',
      precio: '$20.000',
      imagen: '/img/Alquiler-7.jpg',
      detalles:
        '¡¡¡ A ESTRENAR !!! Alquiler Apartamento En Mendoza y Capitan Tula',
      imagenesAdicionales: ['/img/Alquiler-7.jpg', '/img/Alquiler-7.1.jpg', '/img/Alquiler-7.2.jpg', '/img/Alquiler-7.3.jpg', '/img/Alquiler-7.4.jpg', '/img/Alquiler-7.5.jpg', '/img/Alquiler-7.6.jpg'],
      dormitorios: '2 Dormitorios',
      baños: '1 Baño',
      cocinas: '1 Cocina',
      livings: '-',
      patios: 'Patio Semi Techado',
      gastos: 'Sin Gastos Comunes',
      salas: 'Entrada para Vehiculos',
    },
  ];

  const alquiler = alquileres.find((alquiler) => alquiler.id.toString() === id);

  if (!alquiler) {
    return <div>Alquiler no encontrado</div>;
  }

  const openImage = (image) => {
    setClickedImage(image);
    setShowImage(true);
  };

  const closeImage = () => {
    setShowImage(false);
  };

  return (
    <>
      <NavBar />
      <div className="detalles-alquiler-container">
        <div className="detalles-alquiler-card shadow-lg">
          <div className="detalles-alquiler-header">
            <h2 className='fs-3'>{alquiler.nombre}</h2>
            <p className='fs-5'>{alquiler.precio}</p>
          </div>
          <div className="detalles-alquiler-body">
            <Carousel
              className='Carrousel-Details'
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow carousel-prev-arrow">
                    <span className="carousel-arrow-icon">&lt;</span>
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow carousel-next-arrow">
                    <span className="carousel-arrow-icon">&gt;</span>
                  </button>
                )
              }
              infiniteLoop={true}
              renderThumbs={() => null}
            >
              <div className="detalles-alquiler-image rounded" onClick={() => openImage(alquiler.imagen)}>
                <img className="rounded alquiler-image" src={alquiler.imagen} alt="" />
              </div>
              {alquiler.imagenesAdicionales.map((imagen, index) => (
                <div key={index} className="detalles-alquiler-image rounded" onClick={() => openImage(imagen)}>
                  <img className="rounded alquiler-image" src={imagen} alt="" />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="detalles-alquiler-details">
            <span className='fs-3 mt-3 d-flex justify-content-center'>Detalles</span>
            <hr/>
            <ul className="detail-list ms-3">
              <li className="detail-item">
                <MdAttachMoney className="detail-icon" />
                <span>{alquiler.gastos}</span>
              </li>
              <li className="detail-item">
                <MdLocalHotel className="detail-icon" />
                <span>{alquiler.dormitorios}</span>
              </li>
              <li className="detail-item">
                <MdBathtub className="detail-icon" />
                <span>{alquiler.baños}</span>
              </li>
              <li className="detail-item">
                <MdKitchen className="detail-icon" />
                <span>{alquiler.cocinas}</span>
              </li>
              <li className="detail-item">
                <MdWeekend className="detail-icon" />
                <span>{alquiler.livings}</span>
              </li>
              <li className="detail-item">
                <MdLocalLaundryService className="detail-icon" />
                <span>{alquiler.salas}</span>
              </li>
              <li className="detail-item">
                <MdLandscape className="detail-icon" />
                <span>{alquiler.patios}</span>
              </li>
            </ul>
            <hr className='mt-3 mb-4'/>
            <div className='d-flex justify-content-center'>
              <Link to="/Contacto">
                <button className="button-contacto-over w-100 ms-2">Más Información!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {showImage && (
        <div className="image-overlay" onClick={closeImage}>
          <img className="fullscreen-image" src={clickedImage} alt="" />
        </div>
      )}
      <Footer />
      <style>
        {`
        .image-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }

        .fullscreen-image {
          max-width: 90%;
          max-height: 90%;
        }
        `}
      </style>
    </>
  );
}

export default DetallesAlquiler;