import React from "react";
import "../css/menu.css";

const menu = () => {
  return (
    <div className='div-menu'>
      <nav>
        <a href='/' className='a-menu' id='imglogo'></a>
        <ul className='ul-menu'>
          <li className='li-menu'>
            <a href='/#/' className='a-menu'>
              Inicio
            </a>
          </li>
          <li className='li-menu'>
            <a href='/#/servicios' className='a-menu'>
              Servicios
            </a>
          </li>
          <li className='li-menu'>
            <a href='/#/nosotros' className='a-menu'>
              Nosotros
            </a>
          </li>
          <li className='li-menu'>
            <a href='/#/contacto' className='a-menu'>
              Contacto
            </a>
          </li>
          <li className='li-menu'>
            <a href='' className='a-menu'>
              Reservas
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default menu;
