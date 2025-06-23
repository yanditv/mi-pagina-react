import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contacto from "./pages/contacto";
import Layout from "./layouts/Layout";
import Acerca from "./pages/acerca";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="acerca" element={<Acerca />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
