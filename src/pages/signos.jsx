import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Signos() {
  const [searchParams] = useSearchParams();
  const [pacientes, setPacientes] = useState([]);
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState("");
  const [signosActuales, setSignosActuales] = useState(null);
  const [historialSignos, setHistorialSignos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [cargandoPacientes, setCargandoPacientes] = useState(true);
  const [error, setError] = useState(null);

  // Cargar lista de pacientes al montar el componente
  useEffect(() => {
    fetch("https://biomed-api.vercel.app/api/pacientes")
      .then((response) => response.json())
      .then((data) => {
        // La API devuelve directamente un array de pacientes
        const pacientesData = Array.isArray(data) ? data : data.historial || [];
        setPacientes(pacientesData);
        setCargandoPacientes(false);
      })
      .catch((error) => {
        console.error("Error al cargar pacientes:", error);
        setError("Error al cargar la lista de pacientes");
        setCargandoPacientes(false);
      });
  }, []);

  // Detectar parámetro de paciente en la URL y cargar automáticamente
  useEffect(() => {
    const pacienteFromUrl = searchParams.get("paciente");
    if (pacienteFromUrl && pacientes.length > 0) {
      // Verificar que el paciente existe en la lista
      const pacienteExiste = pacientes.find((p) => p._id === pacienteFromUrl);
      if (pacienteExiste) {
        setPacienteSeleccionado(pacienteFromUrl);
        cargarSignosVitales(pacienteFromUrl);
      }
    }
  }, [searchParams, pacientes]);

  // Función para cargar signos vitales de un paciente
  const cargarSignosVitales = async (pacienteId) => {
    if (!pacienteId) return;

    setCargando(true);
    setError(null);

    try {
      const response = await fetch(
        `https://biomed-api.vercel.app/api/signos/${pacienteId}`
      );

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();
      setSignosActuales(data.signosActuales);
      setHistorialSignos(data.historial || []);
    } catch (error) {
      console.error("Error al cargar signos vitales:", error);
      setError("Error al cargar los signos vitales del paciente");
      setSignosActuales(null);
      setHistorialSignos([]);
    } finally {
      setCargando(false);
    }
  };

  // Manejar selección de paciente
  const manejarSeleccionPaciente = (pacienteId) => {
    setPacienteSeleccionado(pacienteId);
    if (pacienteId) {
      cargarSignosVitales(pacienteId);
    } else {
      setSignosActuales(null);
      setHistorialSignos([]);
    }
  };

  // Función para obtener el color del badge según el valor
  const obtenerColorSigno = (tipo, valor) => {
    switch (tipo) {
      case "frecuencia":
        if (valor < 60 || valor > 100) return "danger";
        if (valor < 70 || valor > 90) return "warning";
        return "success";
      case "spo2":
        if (valor < 95) return "danger";
        if (valor < 97) return "warning";
        return "success";
      case "temperatura":
        if (valor < 36 || valor > 37.5) return "danger";
        if (valor < 36.5 || valor > 37) return "warning";
        return "success";
      default:
        return "secondary";
    }
  };

  // Función para formatear fecha
  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleString("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          {/* Header */}
          <div className="mb-4">
            <h2 className="text-primary fw-bold">
              <i className="bi bi-activity me-2"></i>
              Monitoreo de Signos Vitales
            </h2>
            <p className="text-muted">
              Seleccione un paciente para ver sus signos vitales actuales e
              historial médico
            </p>
          </div>

          {/* Selector de paciente */}
          {!searchParams.get("paciente") ? (
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">
                  <i className="bi bi-person-check me-2"></i>
                  Seleccionar Paciente
                </h5>
              </div>
              <div className="card-body">
                {cargandoPacientes ? (
                  <div className="text-center">
                    <div className="spinner-border text-primary me-2"></div>
                    Cargando pacientes...
                  </div>
                ) : (
                  <div className="row">
                    <div className="col-md-6">
                      <label
                        htmlFor="pacienteSelect"
                        className="form-label fw-semibold"
                      >
                        Paciente:
                      </label>
                      <select
                        id="pacienteSelect"
                        className="form-select"
                        value={pacienteSeleccionado}
                        onChange={(e) =>
                          manejarSeleccionPaciente(e.target.value)
                        }
                      >
                        <option value="">-- Seleccione un paciente --</option>
                        {pacientes.map((paciente) => (
                          <option key={paciente._id} value={paciente._id}>
                            {paciente.nombre} ({paciente.edad} años)
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6 d-flex align-items-end">
                      <button
                        className="btn btn-outline-primary"
                        onClick={() =>
                          pacienteSeleccionado &&
                          cargarSignosVitales(pacienteSeleccionado)
                        }
                        disabled={!pacienteSeleccionado || cargando}
                      >
                        <i className="bi bi-arrow-clockwise me-1"></i>
                        Actualizar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Mostrar información del paciente cuando se viene desde URL
            <div className="card mb-4">
              <div className="card-header bg-info text-white">
                <h5 className="mb-0">
                  <i className="bi bi-person-check me-2"></i>
                  Paciente Seleccionado
                </h5>
              </div>
              <div className="card-body">
                {pacientes.length > 0 && pacienteSeleccionado && (
                  <div className="d-flex align-items-center">
                    <div
                      className="avatar-placeholder bg-primary text-white rounded-circle me-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        fontSize: "16px",
                      }}
                    >
                      {pacientes
                        .find((p) => p._id === pacienteSeleccionado)
                        ?.nombre.charAt(0)
                        .toUpperCase()}
                    </div>
                    <div>
                      <h6 className="mb-0">
                        {
                          pacientes.find((p) => p._id === pacienteSeleccionado)
                            ?.nombre
                        }
                      </h6>
                      <small className="text-muted">
                        {
                          pacientes.find((p) => p._id === pacienteSeleccionado)
                            ?.edad
                        }{" "}
                        años • ID: {pacienteSeleccionado.slice(-8)}
                      </small>
                    </div>
                    <div className="ms-auto">
                      <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() =>
                          cargarSignosVitales(pacienteSeleccionado)
                        }
                        disabled={cargando}
                      >
                        <i className="bi bi-arrow-clockwise me-1"></i>
                        Actualizar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="alert alert-danger">
              <i className="bi bi-exclamation-triangle me-2"></i>
              {error}
            </div>
          )}

          {/* Signos vitales actuales */}
          {signosActuales && (
            <div className="card mb-4 shadow">
              <div className="card-header bg-success text-white">
                <h5 className="mb-0">
                  <i className="bi bi-heart-pulse me-2"></i>
                  Signos Vitales Actuales
                  <small className="ms-2">
                    ({formatearFecha(signosActuales.fecha)})
                  </small>
                </h5>
              </div>
              <div className="card-body">
                <div className="row text-center">
                  <div className="col-md-4">
                    <div className="card bg-light border-0 h-100">
                      <div className="card-body">
                        <i className="bi bi-heart-fill text-danger display-4 mb-3"></i>
                        <h6 className="text-muted">Frecuencia Cardíaca</h6>
                        <h2
                          className={`text-${obtenerColorSigno(
                            "frecuencia",
                            signosActuales.frecuencia
                          )} fw-bold`}
                        >
                          {signosActuales.frecuencia}
                        </h2>
                        <small className="text-muted">BPM</small>
                        <div className="mt-2">
                          <span
                            className={`badge bg-${obtenerColorSigno(
                              "frecuencia",
                              signosActuales.frecuencia
                            )}`}
                          >
                            {signosActuales.frecuencia < 60 ||
                            signosActuales.frecuencia > 100
                              ? "Anormal"
                              : "Normal"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card bg-light border-0 h-100">
                      <div className="card-body">
                        <i className="bi bi-lungs-fill text-info display-4 mb-3"></i>
                        <h6 className="text-muted">Saturación de Oxígeno</h6>
                        <h2
                          className={`text-${obtenerColorSigno(
                            "spo2",
                            signosActuales.spo2
                          )} fw-bold`}
                        >
                          {signosActuales.spo2}
                        </h2>
                        <small className="text-muted">%</small>
                        <div className="mt-2">
                          <span
                            className={`badge bg-${obtenerColorSigno(
                              "spo2",
                              signosActuales.spo2
                            )}`}
                          >
                            {signosActuales.spo2 < 95
                              ? "Bajo"
                              : signosActuales.spo2 < 97
                              ? "Aceptable"
                              : "Normal"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card bg-light border-0 h-100">
                      <div className="card-body">
                        <i className="bi bi-thermometer-half text-warning display-4 mb-3"></i>
                        <h6 className="text-muted">Temperatura</h6>
                        <h2
                          className={`text-${obtenerColorSigno(
                            "temperatura",
                            signosActuales.temperatura
                          )} fw-bold`}
                        >
                          {signosActuales.temperatura}
                        </h2>
                        <small className="text-muted">°C</small>
                        <div className="mt-2">
                          <span
                            className={`badge bg-${obtenerColorSigno(
                              "temperatura",
                              signosActuales.temperatura
                            )}`}
                          >
                            {signosActuales.temperatura < 36 ||
                            signosActuales.temperatura > 37.5
                              ? "Anormal"
                              : "Normal"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Historial de signos vitales */}
          {historialSignos.length > 0 && (
            <div className="card shadow">
              <div className="card-header bg-info text-white">
                <h5 className="mb-0">
                  <i className="bi bi-clock-history me-2"></i>
                  Historial de Signos Vitales
                  <span className="badge bg-light text-dark ms-2">
                    {historialSignos.length} registros
                  </span>
                </h5>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">
                          <i className="bi bi-calendar me-1"></i>
                          Fecha y Hora
                        </th>
                        <th scope="col" className="text-center">
                          <i className="bi bi-heart me-1"></i>
                          Frecuencia (BPM)
                        </th>
                        <th scope="col" className="text-center">
                          <i className="bi bi-lungs me-1"></i>
                          SpO2 (%)
                        </th>
                        <th scope="col" className="text-center">
                          <i className="bi bi-thermometer me-1"></i>
                          Temperatura (°C)
                        </th>
                        <th scope="col" className="text-center">
                          Estado
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {historialSignos.slice(0, 20).map((registro) => (
                        <tr key={registro._id}>
                          <td className="fw-semibold">
                            {formatearFecha(registro.fecha)}
                          </td>
                          <td className="text-center">
                            <span
                              className={`badge bg-${obtenerColorSigno(
                                "frecuencia",
                                registro.frecuencia
                              )} fs-6`}
                            >
                              {registro.frecuencia}
                            </span>
                          </td>
                          <td className="text-center">
                            <span
                              className={`badge bg-${obtenerColorSigno(
                                "spo2",
                                registro.spo2
                              )} fs-6`}
                            >
                              {registro.spo2}
                            </span>
                          </td>
                          <td className="text-center">
                            <span
                              className={`badge bg-${obtenerColorSigno(
                                "temperatura",
                                registro.temperatura
                              )} fs-6`}
                            >
                              {registro.temperatura}
                            </span>
                          </td>
                          <td className="text-center">
                            {registro.frecuencia < 60 ||
                            registro.frecuencia > 100 ||
                            registro.spo2 < 95 ||
                            registro.temperatura < 36 ||
                            registro.temperatura > 37.5 ? (
                              <i
                                className="bi bi-exclamation-triangle text-danger"
                                title="Valores anormales"
                              ></i>
                            ) : (
                              <i
                                className="bi bi-check-circle text-success"
                                title="Valores normales"
                              ></i>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {historialSignos.length > 20 && (
                  <div className="text-center p-3 bg-light">
                    <small className="text-muted">
                      Mostrando los últimos 20 registros de{" "}
                      {historialSignos.length} total
                    </small>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Estado cuando no hay paciente seleccionado */}
          {!pacienteSeleccionado && !cargandoPacientes && (
            <div className="card">
              <div className="card-body text-center py-5">
                <i className="bi bi-person-x display-1 text-muted mb-3"></i>
                <h5 className="text-muted">No hay paciente seleccionado</h5>
                <p className="text-muted">
                  Seleccione un paciente de la lista para ver sus signos vitales
                </p>
              </div>
            </div>
          )}

          {/* Loading estado */}
          {cargando && (
            <div className="card">
              <div className="card-body text-center py-5">
                <div className="spinner-border text-primary mb-3"></div>
                <h5 className="text-muted">Cargando signos vitales...</h5>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
