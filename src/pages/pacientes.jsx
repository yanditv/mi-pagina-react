import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Pacientes() {
  const navigate = useNavigate();
  const [pacientes, setPacientes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [filtro, setFiltro] = useState("");
  const [pacientesOriginales, setPacientesOriginales] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [creandoPaciente, setCreandoPaciente] = useState(false);
  const [mensajeExito, setMensajeExito] = useState("");
  const [nuevoPaciente, setNuevoPaciente] = useState({
    nombre: "",
    edad: "",
  });

  useEffect(() => {
    fetch("https://biomed-api.vercel.app/api/pacientes")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // La API devuelve directamente un array de pacientes
        const pacientesData = Array.isArray(data) ? data : data.historial || [];
        setPacientes(pacientesData);
        setPacientesOriginales(pacientesData);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar los pacientes:", error);
        setError(error.message);
        setCargando(false);
      });
  }, []);

  const filtrarPacientes = (termino) => {
    setFiltro(termino);
    if (termino === "") {
      setPacientes(pacientesOriginales);
    } else {
      const pacientesFiltrados = pacientesOriginales.filter(
        (paciente) =>
          paciente.nombre.toLowerCase().includes(termino.toLowerCase()) ||
          paciente._id.toLowerCase().includes(termino.toLowerCase())
      );
      setPacientes(pacientesFiltrados);
    }
  };

  const manejarCrearPaciente = async (e) => {
    e.preventDefault();
    setCreandoPaciente(true);

    try {
      const response = await fetch(
        "https://biomed-api.vercel.app/api/pacientes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: nuevoPaciente.nombre,
            edad: parseInt(nuevoPaciente.edad),
          }),
        }
      );

      if (response.ok) {
        // Recargar la lista de pacientes
        const data = await fetch(
          "https://biomed-api.vercel.app/api/pacientes"
        ).then((res) => res.json());
        // La API devuelve directamente un array de pacientes
        const pacientesData = Array.isArray(data) ? data : data.historial || [];
        setPacientes(pacientesData);
        setPacientesOriginales(pacientesData);

        // Limpiar formulario y cerrar modal
        setNuevoPaciente({
          nombre: "",
          edad: "",
        });
        setMostrarModal(false);

        // Mostrar mensaje de éxito (opcional)
        setMensajeExito("Paciente creado exitosamente");
        setTimeout(() => setMensajeExito(""), 3000); // Ocultar mensaje después de 3 segundos
      } else {
        throw new Error("Error al crear el paciente");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al crear el paciente. Inténtalo de nuevo.");
    } finally {
      setCreandoPaciente(false);
    }
  };

  const manejarCambioInput = (campo, valor) => {
    setNuevoPaciente((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const verSignosVitales = (pacienteId) => {
    navigate(`/signos?paciente=${pacienteId}`);
  };

  if (cargando) {
    return (
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <h4 className="mt-3 text-muted">Cargando pacientes...</h4>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger" role="alert">
          <i className="bi bi-exclamation-triangle me-2"></i>
          Error al cargar los pacientes: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      {/* Mensaje de éxito */}
      {mensajeExito && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <i className="bi bi-check-circle me-2"></i>
          {mensajeExito}
          <button
            type="button"
            className="btn-close"
            onClick={() => setMensajeExito("")}
          ></button>
        </div>
      )}

      <div className="row">
        <div className="col-12">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="text-primary fw-bold">
                <i className="bi bi-people-fill me-2"></i>
                Gestión de Pacientes
              </h2>
              <p className="text-muted mb-0">
                Total de pacientes registrados:{" "}
                <span className="badge bg-primary">{pacientes.length}</span>
              </p>
            </div>
            <button
              className="btn btn-success btn-lg"
              onClick={() => setMostrarModal(true)}
            >
              <i className="bi bi-plus-circle me-2"></i>
              Nuevo Paciente
            </button>
          </div>

          {/* Filtros */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="filtro" className="form-label fw-semibold">
                    <i className="bi bi-search me-1"></i>
                    Buscar paciente
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="filtro"
                    placeholder="Buscar por nombre o ID..."
                    value={filtro}
                    onChange={(e) => filtrarPacientes(e.target.value)}
                  />
                </div>
                <div className="col-md-6 d-flex align-items-end">
                  <button
                    className="btn btn-outline-secondary me-2"
                    onClick={() => filtrarPacientes("")}
                  >
                    <i className="bi bi-arrow-clockwise me-1"></i>
                    Limpiar
                  </button>
                  <button className="btn btn-outline-primary">
                    <i className="bi bi-funnel me-1"></i>
                    Filtros Avanzados
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabla de pacientes */}
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">
                <i className="bi bi-table me-2"></i>
                Lista de Pacientes
              </h5>
            </div>
            <div className="card-body p-0">
              {pacientes.length === 0 ? (
                <div className="text-center py-5">
                  <i className="bi bi-inbox display-1 text-muted mb-3"></i>
                  <h5 className="text-muted">No se encontraron pacientes</h5>
                  <p className="text-muted mb-0">
                    {filtro
                      ? "Prueba con otros términos de búsqueda"
                      : "Aún no hay pacientes registrados"}
                  </p>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead className="table-light">
                      <tr>
                        <th scope="col" className="fw-semibold">
                          <i className="bi bi-hash me-1"></i>
                          ID
                        </th>
                        <th scope="col" className="fw-semibold">
                          <i className="bi bi-person me-1"></i>
                          Nombre Completo
                        </th>
                        <th scope="col" className="fw-semibold">
                          <i className="bi bi-calendar me-1"></i>
                          Edad
                        </th>
                        <th scope="col" className="fw-semibold">
                          <i className="bi bi-clock me-1"></i>
                          Fecha Registro
                        </th>
                        <th scope="col" className="fw-semibold">
                          <i className="bi bi-gear me-1"></i>
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {pacientes.map((paciente) => (
                        <tr key={paciente._id}>
                          <td className="font-monospace text-muted">
                            {paciente._id.slice(-8)}
                          </td>
                          <td className="fw-semibold">
                            <div className="d-flex align-items-center">
                              <div
                                className="avatar-placeholder bg-primary text-white rounded-circle me-2 d-flex align-items-center justify-content-center"
                                style={{
                                  width: "32px",
                                  height: "32px",
                                  fontSize: "14px",
                                }}
                              >
                                {paciente.nombre.charAt(0).toUpperCase()}
                              </div>
                              {paciente.nombre}
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-light text-dark">
                              {paciente.edad} años
                            </span>
                          </td>
                          <td>
                            <small className="text-muted">
                              {paciente.createdAt
                                ? new Date(
                                    paciente.createdAt
                                  ).toLocaleDateString("es-ES", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  })
                                : "N/A"}
                            </small>
                          </td>
                          <td>
                            <div
                              className="btn-group btn-group-sm"
                              role="group"
                            >
                              <button
                                className="btn btn-outline-info"
                                title="Ver signos vitales"
                                onClick={() => verSignosVitales(paciente._id)}
                              >
                                <i className="bi bi-activity"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Información adicional */}
          {pacientes.length > 0 && (
            <div className="row mt-4">
              <div className="col-md-4">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <i className="bi bi-people text-primary display-4 mb-2"></i>
                    <h6 className="text-muted">Total Pacientes</h6>
                    <h3 className="text-primary fw-bold">{pacientes.length}</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <i className="bi bi-graph-up text-success display-4 mb-2"></i>
                    <h6 className="text-muted">Promedio Edad</h6>
                    <h3 className="text-success fw-bold">
                      {Math.round(
                        pacientes.reduce((sum, p) => sum + p.edad, 0) /
                          pacientes.length
                      )}{" "}
                      años
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <i className="bi bi-activity text-warning display-4 mb-2"></i>
                    <h6 className="text-muted">Estado</h6>
                    <h3 className="text-warning fw-bold">Activo</h3>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal para crear nuevo paciente */}
      {mostrarModal && (
        <div
          className="modal show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-md">
            <div className="modal-content">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">
                  <i className="bi bi-person-plus me-2"></i>
                  Nuevo Paciente
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setMostrarModal(false)}
                ></button>
              </div>
              <form onSubmit={manejarCrearPaciente}>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="nombre"
                          className="form-label fw-semibold"
                        >
                          <i className="bi bi-person me-1"></i>
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="nombre"
                          value={nuevoPaciente.nombre}
                          onChange={(e) =>
                            manejarCambioInput("nombre", e.target.value)
                          }
                          required
                          placeholder="Ingrese el nombre completo"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="edad"
                          className="form-label fw-semibold"
                        >
                          <i className="bi bi-calendar me-1"></i>
                          Edad *
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="edad"
                          value={nuevoPaciente.edad}
                          onChange={(e) =>
                            manejarCambioInput("edad", e.target.value)
                          }
                          required
                          min="0"
                          max="120"
                          placeholder="Edad en años"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="alert alert-info">
                    <i className="bi bi-info-circle me-2"></i>
                    Complete los campos obligatorios para crear el paciente.
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setMostrarModal(false)}
                    disabled={creandoPaciente}
                  >
                    <i className="bi bi-x-circle me-1"></i>
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success"
                    disabled={
                      creandoPaciente ||
                      !nuevoPaciente.nombre ||
                      !nuevoPaciente.edad
                    }
                  >
                    {creandoPaciente ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Creando...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-check-circle me-1"></i>
                        Crear Paciente
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
