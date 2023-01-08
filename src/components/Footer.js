import React from "react";
import "../css/footer.css";
import Baners from "../exports/baner";

const footer = () => {
  return (
    <footer>
      <div className='container-foot'>
        <div className='items-foot'>
          <h2>ASOPROPESTUR (Asociación promotora de pesca y turismo) </h2>
        </div>
        <div className='items-foot'>
          <p>
            Laguna's travel es una agencia de turismo ecólogico sobre la Ciénaga
            Grande de Santa Marta de puebloviejo - Magdalena.
          </p>
        </div>
        <div className='items-foot'>
          <img src={Baners[4]} alt='' />
        </div>
        <div className='items-foot'>
          <h5>Laguna's traveling Copyright © 2022</h5>
        </div>
      </div>

      <div className='container-foot'>
        <div className='items-foot'>
          <h2>Contactos:</h2>
        </div>
        <div className='items-foot'>
          <h3>asopropestur@gmail.com</h3>
        </div>
        <div className='items-foot'>
          <h3>3042827183</h3>
        </div>
        <div className='items-foot'>
          <i class='fa-brands fa-facebook'></i>
          <i class='fa-brands fa-instagram'></i>
        </div>
      </div>
    </footer>
  );
};

export default footer;
