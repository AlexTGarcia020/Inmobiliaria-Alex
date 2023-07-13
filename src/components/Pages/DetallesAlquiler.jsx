import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Navbar';
import Footer from '../Footer';
import { MdLocalHotel, MdBathtub, MdKitchen, MdWeekend, MdLocalLaundryService, MdAttachMoney, MdLandscape } from 'react-icons/md';
import '../../assets/DetallesAlquier.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function DetallesAlquiler() {
  const { id } = useParams();

  const alquileres = [
    {
      id: 1,
      nombre: 'Casa En Mendoza Intrucciones',
      precio: '$13.000',
      imagen: '/img/Alquiler-1.jpeg',
      imagenesAdicionales: ['/img/Alquiler-1-2.jpeg', '/img/Alquiler-1-3.jpeg', '/img/Alquiler-1-4.jpeg'],
      detalles: 'Excelente opción para inversores...',
      gastos: 'Sin Gastos Comunes',
      dormitorios: '1 Dormitorios',
      baños: '1 Baño',
      cocinas: '1 Cocina',
      patios: '-',
      livings: '1 Living Comedor',
      salas: '1 Sala',
    },
    {
      id: 2,
      nombre: 'Casa En Mendoza Intrucciones',
      precio: '$18.000',
      imagen: '/img/Alquiler-2.jpeg',
      detalles:
        'Es un apto tipo casita, con mucha luz, con una preciosa estufa a leña tradicional Todo el apto con piso flotante y aberturas de aluminio.',
      imagenesAdicionales: ['/img/Alquiler-2-2.jpeg'],
      dormitorios: '2 Dormitorios',
      baños: '1 Baño',
      cocinas: '1 Cocina',
      livings: '1 Living Comedor',
      patios: '-',
      gastos: 'Sin Gastos Comunes',
      salas: '-',
    },
  ];

  const alquiler = alquileres.find((alquiler) => alquiler.id.toString() === id);

  if (!alquiler) {
    return <div>Alquiler no encontrado</div>;
  }

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
            <div className="detalles-alquiler-image rounded">
                <img className="rounded alquiler-image" src={alquiler.imagen} alt="" />
            </div>
            {alquiler.imagenesAdicionales.map((imagen, index) => (
                <div key={index} className="detalles-alquiler-image rounded">
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
      <Footer />
    </>
  );
}

export default DetallesAlquiler;