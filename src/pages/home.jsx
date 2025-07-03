import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      icon: "bi-people",
      title: "Gestión de Pacientes",
      description:
        "Administre y supervise la información de sus pacientes de manera eficiente.",
      link: "/pacientes",
      color: "primary",
    },
    {
      icon: "bi-activity",
      title: "Signos Vitales",
      description: "Monitoree y registre los signos vitales en tiempo real.",
      link: "/signos",
      color: "success",
    },
    {
      icon: "bi-calculator",
      title: "Herramientas",
      description:
        "Acceda a calculadoras y herramientas útiles para el análisis médico.",
      link: "/contador",
      color: "warning",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                <i className="bi bi-heart-pulse-fill me-3"></i>
                Sistemas Biomédicos
              </h1>
              <p className="lead mb-4">
                Plataforma integral para el manejo de datos médicos y monitoreo
                de signos vitales. Diseñada para profesionales de la salud que
                buscan eficiencia y precisión.
              </p>
              <div className="d-flex gap-3">
                <Link to="/pacientes" className="btn btn-light btn-lg">
                  <i className="bi bi-people me-2"></i>
                  Ver Pacientes
                </Link>
                <Link to="/signos" className="btn btn-outline-light btn-lg">
                  <i className="bi bi-activity me-2"></i>
                  Signos Vitales
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Sistemas Biomédicos"
                className="img-fluid rounded shadow-lg"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-3">
              Funcionalidades Principales
            </h2>
            <p className="lead text-muted">
              Explore las herramientas diseñadas para optimizar el cuidado
              médico
            </p>
          </div>

          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 shadow-sm border-0 hover-lift">
                  <div className="card-body text-center p-4">
                    <div className={`text-${feature.color} mb-3`}>
                      <i className={`${feature.icon} display-1`}></i>
                    </div>
                    <h5 className="card-title fw-bold mb-3">{feature.title}</h5>
                    <p className="card-text text-muted mb-4">
                      {feature.description}
                    </p>
                    <Link
                      to={feature.link}
                      className={`btn btn-${feature.color} btn-lg w-100`}
                    >
                      <i className={`${feature.icon} me-2`}></i>
                      Acceder
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-3">
              <div className="card border-0 bg-transparent">
                <div className="card-body">
                  <i className="bi bi-people-fill text-primary display-3 mb-3"></i>
                  <h3 className="fw-bold text-primary">500+</h3>
                  <p className="text-muted">Pacientes Registrados</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 bg-transparent">
                <div className="card-body">
                  <i className="bi bi-heart-pulse text-success display-3 mb-3"></i>
                  <h3 className="fw-bold text-success">1000+</h3>
                  <p className="text-muted">Signos Vitales Monitoreados</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 bg-transparent">
                <div className="card-body">
                  <i className="bi bi-clock-fill text-warning display-3 mb-3"></i>
                  <h3 className="fw-bold text-warning">24/7</h3>
                  <p className="text-muted">Monitoreo Continuo</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 bg-transparent">
                <div className="card-body">
                  <i className="bi bi-shield-check text-info display-3 mb-3"></i>
                  <h3 className="fw-bold text-info">100%</h3>
                  <p className="text-muted">Datos Seguros</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
