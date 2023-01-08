import React from "react";
import "../App.css";
import Barner from "../components/Barner";
import Reservas from "../components/Reservas";
import Reseñas from "../components/Reseñas";
import Servicios from "../components/Servicios";
import Welcome from "../components/Welcome";

const Home = () => {
  return (
    <div>
      {/* <Barner /> */}
      <Welcome />
      <Servicios />
      <div className='container-medio'>
        <Reseñas />
        <Reservas />
      </div>
    </div>
  );
};

export default Home;
