import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contacto from "./pages/contacto";
import Layout from "./layouts/Layout";
import Acerca from "./pages/acerca";
import Listas from "./pages/listas";
import Pacientes from "./pages/pacientes";
import Signos from "./pages/signos";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="acerca" element={<Acerca />} />
          <Route path="contador" element={<Listas />} />
          <Route path="pacientes" element={<Pacientes />} />
          <Route path="signos" element={<Signos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
