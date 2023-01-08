import baners from "../exports/baner";
import "../css/barner.css";

const Barner = () => {
  return (
    <div className='div-barner'>
      <ul className='ul-barner'>
        <li className='li-barner'>
          <img src={baners[0]} alt='' />
        </li>
        <li className='li-barner'>
          <img src={baners[1]} alt='' />
        </li>
        <li className='li-barner'>
          <img src={baners[2]} alt='' />
        </li>
        <li className='li-barner'>
          <img src={baners[3]} alt='' />
        </li>
      </ul>
      <ul className='ul-barner-content'>
        <li className='li-baner-content'>
          <h1>puerto encanto</h1>
          <br />
          <h3>
            Nuestra cultura, tradición y rica biodiversidad son los factores
            principales que hacen única nuestra tierra, si quieres conocer más.
            Te invitamos a recorrer con nosotro estos lugares llenos de paz,
            tranquilada y mágia.
          </h3>
        </li>
        <li className='li-baner-content'>
          <h1>puerto 2</h1>
          <br />
          <h3>
            Nuestra cultura, tradición y rica biodiversidad son los factores
            principales que hacen única nuestra tierra, si quieres conocer más.
            Te invitamos a recorrer con nosotro estos lugares llenos de paz,
            tranquilada y mágia.
          </h3>
        </li>
        <li className='li-baner-content'>
          <h1>puerto 3</h1>
          <br />
          <h3>
            Nuestra cultura, tradición y rica biodiversidad son los factores
            principales que hacen única nuestra tierra, si quieres conocer más.
            Te invitamos a recorrer con nosotro estos lugares llenos de paz,
            tranquilada y mágia.
          </h3>
        </li>
        <li className='li-baner-content'>
          <h1>puerto 4</h1>
          <br />
          <h3>
            Nuestra cultura, tradición y rica biodiversidad son los factores
            principales que hacen única nuestra tierra, si quieres conocer más.
            Te invitamos a recorrer con nosotro estos lugares llenos de paz,
            tranquilada y mágia.
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default Barner;
