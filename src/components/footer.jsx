export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h6 className="text-warning mb-3">
              <i className="bi bi-heart-pulse-fill me-2"></i>
              Sistemas Biomédicos
            </h6>
            <p className="text-muted mb-0">
              Aplicación para el manejo de datos médicos y signos vitales.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="mb-2">
              <small className="text-muted">
                <i className="bi bi-geo-alt me-1"></i>
                Universidad Católica de Cuenca
              </small>
            </div>
            <div className="text-muted">
              <small>
                &copy; {new Date().getFullYear()} - Todos los derechos
                reservados
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
