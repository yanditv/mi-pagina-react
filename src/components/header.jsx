import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          <i className="bi bi-heart-pulse-fill me-2"></i>
          Sistemas Biomédicos
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/") ? "active fw-bold" : ""}`}
                to="/"
              >
                <i className="bi bi-house-door me-1"></i>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive("/pacientes") ? "active fw-bold" : ""
                }`}
                to="/pacientes"
              >
                <i className="bi bi-people me-1"></i>
                Pacientes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive("/signos") ? "active fw-bold" : ""
                }`}
                to="/signos"
              >
                <i className="bi bi-activity me-1"></i>
                Signos Vitales
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive("/contador") ? "active fw-bold" : ""
                }`}
                to="/contador"
              >
                <i className="bi bi-calculator me-1"></i>
                Contador
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive("/acerca") ? "active fw-bold" : ""
                }`}
                to="/acerca"
              >
                <i className="bi bi-info-circle me-1"></i>
                Acerca de
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive("/contacto") ? "active fw-bold" : ""
                }`}
                to="/contacto"
              >
                <i className="bi bi-envelope me-1"></i>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
