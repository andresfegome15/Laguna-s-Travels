import React from "react";
import "../style-pages/servicios.css";
import Barner from "../exports/baner";

const servicios = () => {
  return (
    <div className='container-servicio'>
      <div className='container-ruta'>
        <div className='container-info-servicio'>
          <h1>Retaurante</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            vero unde explicabo veniam itaque voluptates officia rem! Ducimus
            molestiae accusantium cupiditate? Inventore maxime natus modi
            facilis, quia vel! Maiores, quod.
          </p>
          <button type='button'>Reservar</button>
        </div>
        <img src={Barner[3]} alt='' />
        <ol>
          <h3>Incluye</h3>
          <li>Seguro</li>
          <li>Almuerzo</li>
          <li>Kit de hidratación</li>
          <li>tours</li>
        </ol>
      </div>
      <div className='container-ruta'>
        <div className='container-info-servicio'>
          <h1>Nueva Venecia y Buena vista</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            vero unde explicabo veniam itaque voluptates officia rem! Ducimus
            molestiae accusantium cupiditate? Inventore maxime natus modi
            facilis, quia vel! Maiores, quod.
          </p>
          <button type='button'>Reservar</button>
        </div>
        <img src={Barner[2]} alt='' />
        <ol>
          <h3>Incluye</h3>
          <li>Seguro</li>
          <li>Almuerzo</li>
          <li>Kit de hidratación</li>
          <li>tours</li>
        </ol>
      </div>
      <div className='container-ruta'>
        <div className='container-info-servicio'>
          <h1>Avistamiento de aves</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            vero unde explicabo veniam itaque voluptates officia rem! Ducimus
            molestiae accusantium cupiditate? Inventore maxime natus modi
            facilis, quia vel! Maiores, quod.
          </p>
          <button type='button'>Reservar</button>
        </div>
        <img src={Barner[0]} alt='' />
        <ol>
          <h3>Incluye</h3>
          <li>Seguro</li>
          <li>Almuerzo</li>
          <li>Kit de hidratación</li>
          <li>tours</li>
        </ol>
      </div>
      <div className='container-ruta'>
        <div className='container-info-servicio'>
          <h1>Noche palafiteras</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            vero unde explicabo veniam itaque voluptates officia rem! Ducimus
            molestiae accusantium cupiditate? Inventore maxime natus modi
            facilis, quia vel! Maiores, quod.
          </p>
          <button type='button'>Reservar</button>
        </div>
        <img src={Barner[1]} alt='' />
        <ol>
          <h3>Incluye</h3>
          <li>Seguro</li>
          <li>Almuerzo</li>
          <li>Kit de hidratación</li>
          <li>tours</li>
        </ol>
      </div>
      <div className='container-ruta'>
        <div className='container-info-servicio'>
          <h1>Buzeo en arrecifes</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            vero unde explicabo veniam itaque voluptates officia rem! Ducimus
            molestiae accusantium cupiditate? Inventore maxime natus modi
            facilis, quia vel! Maiores, quod.
          </p>
          <button type='button'>Reservar</button>
        </div>
        <img src={Barner[2]} alt='' />
        <ol>
          <h3>Incluye</h3>
          <li>Seguro</li>
          <li>Almuerzo</li>
          <li>Kit de hidratación</li>
          <li>tours</li>
        </ol>
      </div>
    </div>
  );
};

export default servicios;
