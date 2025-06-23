import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/header.jsx";
export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
