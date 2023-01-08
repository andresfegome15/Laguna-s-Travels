import React, { useState } from "react";
import Barner from "../exports/baner";
import "../css/servicios.css";
const Servicios = () => {
  const [reservaState, setreservaState] = useState(0);
  const [total, setTotal] = useState(0);

  const calcularTotal = p => {
    let valor = 0;
    if (reservaState === 1) {
      valor = 80000;
    } else if (reservaState === 2) {
      valor = 70000;
    } else if (reservaState === 3) {
      valor = 4000;
    }
    setTotal(p * valor);
  };
  const changeState = n => {
    setreservaState(n);
  };
  return (
    <div className='container-servicios'>
      <h1>¿Qué quieres hacer?</h1>
      <ul className='ul-servicios'>
        <li className='li-servicios' data-name='Nueva venecia y Buena vista'>
          <img src={Barner[2]} alt='palafitos' />
          <p>
            Recorrido lleno de tranquilidad, cultura y contacto con la
            naturaleza, ven y conoce los palafitos del magdalena.
          </p>
          <button type='button' onClick={() => changeState(1)}>
            Reservar
          </button>
          <a href='' className='a-servicios'>
            Ver más
          </a>
        </li>
        <li className='li-servicios' data-name='Manglares y aves'>
          <img src={Barner[1]} alt='palafitos' />
          <p>
            sacia tus ganas de aventura natural, divisando las rutas entre los
            caños de manglare a la vez que divisas las aves que alberga el
            ecosistema de la cienaga grande de Santa marta
          </p>
          <button type='button' onClick={() => changeState(2)}>
            Reservar
          </button>
          <a href='' className='a-servicios'>
            Ver más
          </a>
        </li>
        <li className='li-servicios' data-name='Noches palafiteras'>
          <img src={Barner[3]} alt='palafitos' />
          <p>
            disfruta la experiancia de vivir una noche en este mágico lugar,
            donde la paz tranquilida y naturaleza son los mejores anfitriones.
          </p>
          <button type='button' onClick={() => changeState(3)}>
            Reservar
          </button>
          <a href='' className='a-servicios'>
            Ver más
          </a>
        </li>
      </ul>
      {reservaState !== 0 ? (
        <div className='container-model'>
          <div className='model'>
            <form className='form-reserva' action=''>
              <h3>
                {reservaState === 1
                  ? "Nueva venecia y Buena vista"
                  : reservaState === 2
                  ? "Manglares y aves"
                  : "Noches palafiteras"}
              </h3>

              <input
                placeholder=' '
                className='txtinput'
                type='text'
                id='txtname'
              />
              <label className='titulo-campo' htmlFor='txtname'>
                Nombre
              </label>

              <input
                placeholder=' '
                className='txtinput'
                type='text'
                id='txtid'
              />
              <label className='titulo-campo' htmlFor='txtid'>
                identificación
              </label>

              <input
                placeholder=' '
                className='txtinput'
                type='text'
                id='txtcelular'
              />
              <label className='titulo-campo' htmlFor='txtcelular'>
                Celular
              </label>

              <input
                placeholder=' '
                className='txtinput'
                type='text'
                id='txtservicio'
                readOnly
                value={
                  reservaState === 1
                    ? "Nueva venecia y Buena vista"
                    : reservaState === 2
                    ? "Manglares y aves"
                    : "Noche palafiteras"
                }
              />
              <label className='titulo-campo' htmlFor='txtservicio'>
                Servicio
              </label>

              <input
                placeholder=' '
                className='txtinput'
                type='number'
                id='txtpersona'
                onChange={e => calcularTotal(e.target.value)}
              />
              <label className='titulo-campo' htmlFor='txtpersona'>
                Personas
              </label>

              <input
                className='txtinput'
                type='date'
                // defaultValue={Date.now()}
              />
              <br />

              <input
                placeholder=' '
                className='txtinput'
                type='number'
                id='txtpreciopersona'
                readOnly
                value={
                  reservaState === 1
                    ? "80000"
                    : reservaState === 2
                    ? "70000"
                    : "40000"
                }
              />
              <label className='titulo-campo' htmlFor='txtpreciopersona'>
                Precio por persona
              </label>
              <label htmlFor=''>
                Total $ <span>{total}</span>
              </label>
              <button>Enviar</button>
            </form>
          </div>
          <div className='overlay' onClick={() => changeState(0)}></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Servicios;
