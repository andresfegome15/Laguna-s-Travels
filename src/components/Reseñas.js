import React, { useState } from "react";
import "../css/reseña.css";

const Reseñas = () => {
  const comentarios = [
    {
      name: "Andres felipe gonzalez",
      comentario:
        "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
    },
    {
      name: "Felipe",
      comentario:
        "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
    },
    {
      name: "González",
      comentario:
        "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
    },
    {
      name: "Mejía",
      comentario:
        "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
    },
  ];
  const [stateFormComen, setStateFormComen] = useState();
  const changemodal = () => {
    setStateFormComen(!stateFormComen);
  };
  return (
    <div className='reseña-container'>
      <div className='container-review'>
        <div className='puntaje'>
          <div className='calificaciones'>
            <h3>Últimas calificaciones</h3>
            <progress value={90} max='100' color='black'></progress>
            <progress value={80} max='100'></progress>
            <progress value={50} max='100'></progress>
          </div>
          <div className='promedio-calificacion'>
            <h1>☆4.4</h1>
            <h3>54 Review</h3>
          </div>
        </div>
        <div className='comentarios'>
          {comentarios.length <= 0 ? (
            <h1>No hay comentarios</h1>
          ) : (
            comentarios.map(comentario => (
              <div key={comentario.name} className='container-comentario'>
                <span>{comentario.name.slice(0, 1)}</span>
                <h3>{comentario.name}</h3>
                <p className='contenido-comentario'>{comentario.comentario}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <div className='opcion-comentario'>
        <h6>Déjanos un comentario o haz una pregunta</h6>
        <button
          className='add-question'
          type='button'
          onClick={() => changemodal()}
        >
          +
        </button>
      </div>
      {stateFormComen ? (
        <div className='modal'>
          <div className='modal-form'>
            <form className='form-reseña' action=''>
              <h3>Laguna travel's</h3>
              <label htmlFor='name'>Name</label>
              <br />
              <input type='text' id='name' />
              <br />
              <div className='container-stark'>
                <input type='radio' name='rate' id='rate-5' />
                <label
                  htmlFor='rate-5'
                  id='ratel-5'
                  className='fa-regular fa-star'
                ></label>
                <input type='radio' name='rate' id='rate-4' />
                <label
                  htmlFor='rate-4'
                  id='ratel-4'
                  className='fa-regular fa-star'
                ></label>
                <input type='radio' name='rate' id='rate-3' />
                <label
                  htmlFor='rate-3'
                  id='ratel-3'
                  className='fa-regular fa-star'
                ></label>
                <input type='radio' name='rate' id='rate-2' />
                <label
                  htmlFor='rate-2'
                  id='ratel-2'
                  className='fa-regular fa-star'
                ></label>
                <input type='radio' name='rate' id='rate-1' />
                <label
                  htmlFor='rate-1'
                  id='ratel-1'
                  className='fa-regular fa-star'
                ></label>
              </div>

              <textarea
                name='txtpost'
                id='review'
                cols='97'
                rows='12'
              ></textarea>
              <button type='submit'>Enviar</button>
            </form>
          </div>
          <div className='overload' onClick={() => changemodal()}></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Reseñas;
