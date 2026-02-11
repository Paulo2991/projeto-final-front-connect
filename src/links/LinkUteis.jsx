import PaginaInicial from "../pages/paginaInicial/PaginaInicial";
import Doacao from "../pages/Doacao/Doacao";
import EventosEP from "../pages/eventosEP/EventosEP";
import Mentoria from "../pages/Mentoria/Mentoria";
import Voluntariado from "../pages/Voluntariado/Voluntariado";
import Usuario from "../pages/Usuario/Usuario";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";

function LinkUteis() {
  return (
    <>
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path="/" element={<PaginaInicial />}/>
          <Route path="/doacao" element={<Doacao />}/>
          <Route path="/voluntariado" element={<Voluntariado/>}/>
          <Route path="/eventosEP" element={<EventosEP/>}/>
          <Route path="/mentoria" element={<Mentoria/>}/>
          <Route path="/usuario" element={<Usuario/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default LinkUteis;
