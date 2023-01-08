import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Barner from "./components/Barner";
import Footer from "./components/Footer";
import Menu from "./components/menu";
// import Reservas from "./pages/";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/servicios";

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <Menu />
        <Barner />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />} />
          {/* <Route path='/reservas' element={<Reservas />} /> */}
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
