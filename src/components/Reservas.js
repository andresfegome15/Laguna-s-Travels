import React, { useEffect, useState } from "react";
import "../css/reservas.css";

const Reservas = () => {
  const [total, setTotal] = useState(0);

  const obtenerTotal = n => {
    setTotal(n * 80000);
    console.log(total);
  };
  return (
    <div className='container-reservas'>
      <form className='reservas-form' action=''>
        <h2 className='titulo-form-reservas'>Cotiza y reserva</h2>

        <input className='txtinput' placeholder=' ' type='text' id='txtname' />
        <label htmlFor='txtname' className='titulo-campo'>
          Nombre
        </label>

        <input className='txtinput' placeholder=' ' type='text' id='txtid' />
        <label htmlFor='txtid' className='titulo-campo'>
          Identificación
        </label>

        <input
          className='txtinput'
          placeholder=' '
          type='text'
          id='txtcelular'
        />
        <label htmlFor='txtcelular' className='titulo-campo'>
          N° celular
        </label>
        <label htmlFor='txtfecha' className='titulo-fecha'>
          Fecha del servicio
        </label>
        <input className='txtinput' type='date' id='txtfecha' />

        <label htmlFor='txtpersonas' className='titulo-numero-personas'>
          N° Personas
        </label>
        <div className='valor-persona'>
          <input
            className='txtinput'
            type='number'
            id='txtpersonas'
            min={1}
            defaultValue={1}
            onChange={e => obtenerTotal(e.target.value)}
          />
          <label htmlFor='' className='titulo-valor-persona'>
            Valor por persona <span>$80.000</span>
          </label>
        </div>
        <label htmlFor='' id='titulo-total' className='titulo-campo'>
          Costo del servicio <span>${total}</span>
        </label>
        <button type='submit' className='btnreserva'>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Reservas;
