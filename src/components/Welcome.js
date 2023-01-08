import React from "react";
import "../css/welcome.css";
const Welcome = () => {
  return (
    <div className='container-welcome'>
      <div className='welcome-contenido'>
        <h2>Somos...</h2>
        <p>
          Somos una agencia de turismo guiada a través de la ciénaga grande de
          Santa Marta, nuestra labor cosnta de hacer de este lugar lleno de
          mágia, naturalesa y cultura un atrativo turistico para aquellas
          personas que buscan acercarse y conocer de las culturas anfibias, la
          manera de hacerlo es ofreciendo tours acuaticos, teniendo los
          servicios de avistamiento de aves, recorridos por los pueblos
          palafitos, pasadias y restaurante.
        </p>
      </div>
      <div className='welcome-location'>
        <iframe
          className='map'
          src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3916.5495661962314!2d-74.27375616428763!3d10.997331980099956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1672895096903!5m2!1ses-419!2sco'
        ></iframe>
      </div>
    </div>
  );
};

export default Welcome;
