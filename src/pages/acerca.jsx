export default function Acerca() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          {/* Hero Section */}
          <div className="text-center mb-5">
            <h1 className="display-4 text-primary fw-bold mb-4">
              <i className="bi bi-info-circle me-3"></i>
              Acerca de Sistemas Biomédicos
            </h1>
            <p className="lead text-muted">
              Innovación tecnológica al servicio de la salud
            </p>
          </div>

          {/* Información principal */}
          <div className="row mb-5">
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow">
                <div className="card-body p-4">
                  <h3 className="text-primary mb-4">
                    <i className="bi bi-bullseye me-2"></i>
                    Nuestra Misión
                  </h3>
                  <p className="text-muted mb-4">
                    Desarrollar soluciones tecnológicas innovadoras que
                    faciliten el monitoreo y gestión de datos médicos, mejorando
                    la calidad de atención sanitaria y optimizando los procesos
                    clínicos.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-check-circle text-success me-2"></i>
                      Monitoreo en tiempo real de signos vitales
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle text-success me-2"></i>
                      Gestión eficiente de datos de pacientes
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle text-success me-2"></i>
                      Interfaz intuitiva y fácil de usar
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow">
                <div className="card-body p-4">
                  <h3 className="text-primary mb-4">
                    <i className="bi bi-eye me-2"></i>
                    Nuestra Visión
                  </h3>
                  <p className="text-muted mb-4">
                    Ser la plataforma líder en sistemas biomédicos digitales,
                    contribuyendo al avance de la medicina moderna mediante
                    tecnología accesible y confiable.
                  </p>
                  <div className="bg-light p-3 rounded">
                    <h6 className="fw-bold text-dark mb-2">
                      Valores Fundamentales:
                    </h6>
                    <div className="row">
                      <div className="col-6">
                        <small className="text-muted d-block">
                          <i className="bi bi-shield-check text-info me-1"></i>
                          Seguridad
                        </small>
                        <small className="text-muted d-block">
                          <i className="bi bi-lightning text-warning me-1"></i>
                          Innovación
                        </small>
                      </div>
                      <div className="col-6">
                        <small className="text-muted d-block">
                          <i className="bi bi-heart text-danger me-1"></i>
                          Compromiso
                        </small>
                        <small className="text-muted d-block">
                          <i className="bi bi-people text-success me-1"></i>
                          Colaboración
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Características */}
          <div className="mb-5">
            <h2 className="text-center text-primary fw-bold mb-4">
              Características Principales
            </h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="text-center">
                  <div
                    className="bg-primary bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="bi bi-speedometer2 text-primary fs-1"></i>
                  </div>
                  <h5 className="fw-bold">Monitoreo en Tiempo Real</h5>
                  <p className="text-muted">
                    Seguimiento continuo de signos vitales con alertas
                    automáticas
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <div
                    className="bg-success bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="bi bi-database text-success fs-1"></i>
                  </div>
                  <h5 className="fw-bold">Gestión de Datos</h5>
                  <p className="text-muted">
                    Almacenamiento seguro y organizado de información médica
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <div
                    className="bg-info bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="bi bi-graph-up text-info fs-1"></i>
                  </div>
                  <h5 className="fw-bold">Análisis Avanzado</h5>
                  <p className="text-muted">
                    Herramientas de análisis para tomar decisiones informadas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Información técnica */}
          <div className="card border-0 bg-light">
            <div className="card-body p-4">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h4 className="text-primary fw-bold mb-3">
                    <i className="bi bi-mortarboard me-2"></i>
                    Proyecto Académico
                  </h4>
                  <p className="text-muted mb-3">
                    Este sistema fue desarrollado como parte del programa de
                    Ingeniería Biomédica de la Universidad Católica de Cuenca,
                    integrando conocimientos de ingeniería, medicina y
                    tecnología.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="fw-bold text-dark">
                        Tecnologías Utilizadas:
                      </h6>
                      <ul className="list-unstyled small text-muted">
                        <li>
                          <i className="bi bi-code-square me-1"></i> React.js
                        </li>
                        <li>
                          <i className="bi bi-bootstrap me-1"></i> Bootstrap 5
                        </li>
                        <li>
                          <i className="bi bi-cloud me-1"></i> API RESTful
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h6 className="fw-bold text-dark">Funcionalidades:</h6>
                      <ul className="list-unstyled small text-muted">
                        <li>
                          <i className="bi bi-people me-1"></i> Gestión de
                          pacientes
                        </li>
                        <li>
                          <i className="bi bi-activity me-1"></i> Monitoreo
                          vital
                        </li>
                        <li>
                          <i className="bi bi-graph-up me-1"></i> Reportes
                          médicos
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-center">
                  <img
                    src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Universidad"
                    className="img-fluid rounded shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
