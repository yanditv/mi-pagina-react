import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/header.jsx";

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 bg-light">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
