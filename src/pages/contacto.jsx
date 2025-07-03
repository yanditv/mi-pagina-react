export default function Contacto() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="display-4 text-primary fw-bold mb-4">
              <i className="bi bi-envelope me-3"></i>
              Contactanos
            </h1>
            <p className="lead text-muted">
              Estamos aquí para ayudarte. Envíanos tu consulta y te
              responderemos pronto.
            </p>
          </div>

          <div className="row justify-content-center">
            {/* Información de contacto principal */}
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center p-4">
                      <div
                        className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <i className="bi bi-geo-alt-fill text-primary fs-3"></i>
                      </div>
                      <h5 className="fw-bold mb-3">Ubicación</h5>
                      <p className="text-muted mb-0">
                        Universidad Católica de Cuenca
                        <br />
                        Av. de las Américas y Humboldt
                        <br />
                        Cuenca, Ecuador
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center p-4">
                      <div
                        className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <i className="bi bi-telephone-fill text-success fs-3"></i>
                      </div>
                      <h5 className="fw-bold mb-3">Teléfono</h5>
                      <p className="text-muted mb-2">+593 7 283-0751</p>
                      <small className="text-muted">
                        Lunes a Viernes: 8:00 AM - 5:00 PM
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center p-4">
                      <div
                        className="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <i className="bi bi-envelope-fill text-info fs-3"></i>
                      </div>
                      <h5 className="fw-bold mb-3">Email</h5>
                      <p className="text-muted mb-0">
                        <a
                          href="mailto:biomedicos@ucacue.edu.ec"
                          className="text-decoration-none"
                        >
                          biomedicos@ucacue.edu.ec
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center p-4">
                      <div
                        className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <i className="bi bi-clock-fill text-warning fs-3"></i>
                      </div>
                      <h5 className="fw-bold mb-3">Horario</h5>
                      <p className="text-muted mb-0">
                        Lunes a Viernes
                        <br />
                        8:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sección de redes sociales */}
              <div className="card border-0 shadow-sm mt-4">
                <div className="card-body text-center p-4">
                  <h5 className="fw-bold text-primary mb-3">
                    <i className="bi bi-share me-2"></i>
                    Síguenos en nuestras redes sociales
                  </h5>
                  <p className="text-muted mb-4">
                    Mantente actualizado con las últimas noticias y avances en
                    sistemas biomédicos
                  </p>
                  <div className="d-flex justify-content-center gap-3">
                    <a href="#" className="btn btn-outline-primary btn-lg">
                      <i className="bi bi-facebook me-2"></i>
                      Facebook
                    </a>
                    <a href="#" className="btn btn-outline-info btn-lg">
                      <i className="bi bi-twitter me-2"></i>
                      Twitter
                    </a>
                    <a href="#" className="btn btn-outline-danger btn-lg">
                      <i className="bi bi-instagram me-2"></i>
                      Instagram
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-lg">
                      <i className="bi bi-linkedin me-2"></i>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sección adicional de información */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="card border-0 bg-light">
                <div className="card-body p-5 text-center">
                  <h3 className="text-primary fw-bold mb-4">
                    <i className="bi bi-heart-pulse me-2"></i>
                    Sistema de Monitoreo Biomédico
                  </h3>
                  <p className="lead text-muted mb-4">
                    Nuestro sistema permite el monitoreo continuo y análisis de
                    signos vitales, proporcionando herramientas avanzadas para
                    el cuidado de la salud.
                  </p>
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <div className="d-flex flex-column align-items-center">
                        <div className="bg-primary bg-opacity-10 rounded-circle p-3 mb-2">
                          <i className="bi bi-activity text-primary fs-4"></i>
                        </div>
                        <h6 className="fw-bold">Monitoreo en Tiempo Real</h6>
                        <small className="text-muted">
                          Seguimiento continuo de signos vitales
                        </small>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="d-flex flex-column align-items-center">
                        <div className="bg-success bg-opacity-10 rounded-circle p-3 mb-2">
                          <i className="bi bi-shield-check text-success fs-4"></i>
                        </div>
                        <h6 className="fw-bold">Datos Seguros</h6>
                        <small className="text-muted">
                          Información protegida y confidencial
                        </small>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="d-flex flex-column align-items-center">
                        <div className="bg-info bg-opacity-10 rounded-circle p-3 mb-2">
                          <i className="bi bi-graph-up text-info fs-4"></i>
                        </div>
                        <h6 className="fw-bold">Análisis Avanzado</h6>
                        <small className="text-muted">
                          Reportes y tendencias detalladas
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="text-center text-primary fw-bold mb-4">
                Preguntas Frecuentes
              </h3>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                    >
                      ¿Cómo funciona el sistema de monitoreo?
                    </button>
                  </h2>
                  <div
                    id="faq1"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      El sistema recopila datos de signos vitales en tiempo real
                      y los presenta de manera organizada para facilitar el
                      monitoreo médico continuo.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                    >
                      ¿Es segura la información de los pacientes?
                    </button>
                  </h2>
                  <div
                    id="faq2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Sí, implementamos las mejores prácticas de seguridad para
                      proteger la información médica sensible de acuerdo con
                      estándares internacionales.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                    >
                      ¿Qué dispositivos son compatibles?
                    </button>
                  </h2>
                  <div
                    id="faq3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      El sistema es compatible con navegadores web modernos y
                      dispositivos móviles, ofreciendo una experiencia
                      responsive.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
