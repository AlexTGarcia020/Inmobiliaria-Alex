import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Navbar';
import Footer from '../Footer';
import { MdLocalHotel, MdBathtub, MdKitchen, MdWeekend, MdLocalLaundryService, MdAttachMoney, MdLandscape } from 'react-icons/md';
import '../../assets/DetallesAlquier.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

function DetallesVentas() {
  const { id } = useParams();
  const [showImage, setShowImage] = useState(false);
  const [clickedImage, setClickedImage] = useState('');

  const ventas = [
    {
      id: 1,
      nombre: 'Campo Forestal Próximo Tupambaé',
      precio: '$0',
      imagen: '/img/Casa-1.jpeg',
      imagenesAdicionales: ['/img/Casa-1-2.jpeg', '/img/Casa-1-3.jpeg', '/img/Casa-1-4.jpeg','/img/Casa-1-5.jpeg'],
      detalles: '-',
      gastos: '-',
      dormitorios: '-',
      baños: '-',
      cocinas: '-',
      patios: '-',
      livings: '-',
      salas: '-',
    },
    {
      id: 2,
      nombre: 'Apartamento Buceo',
      precio: 'U$S98.000',
      imagen: '/img/Casa-2.jpeg',
      imagenesAdicionales: ['/img/Casa-2-3.jpg',"/img/Casa-2-4.jpg","/img/Casa-2-5.jpg","/img/Casa-2-6.jpg","/img/Casa-2-8.jpg","/img/Casa-2-9.jpg"],
      detalles: 'Descripción del producto 2',
      dormitorios: '2 Dormitorios',
      baños: '1 Baño',
      cocinas: '1 Cocina',
      livings: '1 Living Comedor',
      patios: 'Patio Pequeño',
      gastos: 'Sin Gastos Comunes',
      salas: '-',
    },
    {
      id: 3,
      nombre: 'Casa Gran Esquina Brazo Oriental Cerca De Av. Luis Alberto De Herrera Y Av. San Martín',
      precio: 'U$S259.000',
      imagen: '/img/Casa-4-1.jpg',
      imagenesAdicionales: ['/img/Casa-4-2.jpg',"/img/Casa-4-3.jpg","/img/Casa-4-4.jpg","/img/Casa-4-5.jpg","/img/Casa-4-6.jpg","/img/Casa-4-7.jpg","/img/Casa-4-8.jpg","/img/Casa-4-9.jpg","/img/Casa-4-10.jpg","/img/Casa-4-11.jpg","/img/Casa-4-12.jpg","/img/Casa-4-13.jpg","/img/Casa-4-14.jpg","/img/Casa-4-15.jpg"],
      detalles: 'Casa En Venta Gran Esquina Brazo Oriental a 1 Cuadra de Av. Luis Alberto De Herrera y 2 Cuadras de Av. San Martín      ',
      dormitorios: '3 Dormitorios',
      baños: '2 Baño',
      cocinas: '1 Cocina',
      livings: '1 Living Comedor',
      patios: 'Jardin',
      gastos: 'Sin Gastos Comunes',
      salas: '1 Parillero',
    },
  ];

  const venta = ventas.find((venta) => venta.id.toString() === id);

  if (!venta) {
    return <div>Venta no encontrada</div>;
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
            <h2 className='fs-3'>{venta.nombre}</h2>
            <p className='fs-5'>{venta.precio}</p>
          </div>
          <div className="detalles-alquiler-body">
            <Carousel
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
              <div className="detalles-alquiler-image rounded" onClick={() => openImage(venta.imagen)}>
                <img className="rounded alquiler-image" src={venta.imagen} alt="" />
              </div>
              {venta.imagenesAdicionales.map((imagen, index) => (
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
                <span>{venta.gastos}</span>
              </li>
              <li className="detail-item">
                <MdLocalHotel className="detail-icon" />
                <span>{venta.dormitorios}</span>
              </li>
              <li className="detail-item">
                <MdBathtub className="detail-icon" />
                <span>{venta.baños}</span>
              </li>
              <li className="detail-item">
                <MdKitchen className="detail-icon" />
                <span>{venta.cocinas}</span>
              </li>
              <li className="detail-item">
                <MdWeekend className="detail-icon" />
                <span>{venta.livings}</span>
              </li>
              <li className="detail-item">
                <MdLocalLaundryService className="detail-icon" />
                <span>{venta.salas}</span>
              </li>
              <li className="detail-item">
                <MdLandscape className="detail-icon" />
                <span>{venta.patios}</span>
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
          margin-top: 20px;
        }

        .fullscreen-image {
          max-width: auto;
          max-height: 225px;
        }
        `}
      </style>
    </>
  );
}

export default DetallesVentas;