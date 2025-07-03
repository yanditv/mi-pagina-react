import { useState } from "react";

export default function Listas() {
  const [contador, setContador] = useState(0);
  const [historial, setHistorial] = useState([]);

  function incrementarContador() {
    const nuevoValor = contador + 1;
    setContador(nuevoValor);
    agregarAlHistorial(`Incrementado a ${nuevoValor}`);
  }

  function disminuirContador() {
    if (contador > 0) {
      const nuevoValor = contador - 1;
      setContador(nuevoValor);
      agregarAlHistorial(`Disminuido a ${nuevoValor}`);
    }
  }

  function resetearContador() {
    setContador(0);
    agregarAlHistorial("Contador reseteado a 0");
  }

  function agregarAlHistorial(accion) {
    const nuevaEntrada = {
      id: Date.now(),
      accion,
      timestamp: new Date().toLocaleTimeString(),
    };
    setHistorial((prev) => [nuevaEntrada, ...prev.slice(0, 9)]); // Mantener solo las últimas 10 entradas
  }

  function limpiarHistorial() {
    setHistorial([]);
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* Card principal del contador */}
          <div className="card shadow-lg mb-4">
            <div className="card-header bg-primary text-white text-center">
              <h2 className="card-title mb-0">
                <i className="bi bi-calculator me-2"></i>
                Contador Interactivo
              </h2>
            </div>
            <div className="card-body text-center">
              <div className="mb-4">
                <span className="badge bg-secondary fs-6 mb-3">
                  Valor Actual
                </span>
                <h1 className="display-1 text-primary fw-bold">{contador}</h1>
              </div>

              {/* Botones de control */}
              <div className="btn-group gap-2" role="group">
                <button
                  className="btn btn-success btn-lg"
                  onClick={incrementarContador}
                  title="Incrementar contador"
                >
                  <i className="bi bi-plus-circle me-2"></i>
                  Incrementar
                </button>

                <button
                  className="btn btn-danger btn-lg"
                  onClick={disminuirContador}
                  disabled={contador === 0}
                  title="Disminuir contador"
                >
                  <i className="bi bi-dash-circle me-2"></i>
                  Disminuir
                </button>

                <button
                  className="btn btn-warning btn-lg"
                  onClick={resetearContador}
                  title="Resetear contador"
                >
                  <i className="bi bi-arrow-clockwise me-2"></i>
                  Resetear
                </button>
              </div>
            </div>
          </div>

          {/* Card del historial */}
          <div className="card shadow">
            <div className="card-header bg-info text-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">
                <i className="bi bi-clock-history me-2"></i>
                Historial de Acciones
              </h5>
              {historial.length > 0 && (
                <button
                  className="btn btn-outline-light btn-sm"
                  onClick={limpiarHistorial}
                  title="Limpiar historial"
                >
                  <i className="bi bi-trash me-1"></i>
                  Limpiar
                </button>
              )}
            </div>
            <div className="card-body">
              {historial.length === 0 ? (
                <div className="text-center text-muted py-4">
                  <i className="bi bi-info-circle fs-1 mb-3"></i>
                  <p>No hay acciones registradas aún.</p>
                  <small>
                    Usa los botones del contador para ver el historial aquí.
                  </small>
                </div>
              ) : (
                <div className="list-group list-group-flush">
                  {historial.map((entrada) => (
                    <div
                      key={entrada.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <i className="bi bi-arrow-right text-primary me-2"></i>
                        {entrada.accion}
                      </div>
                      <span className="badge bg-light text-dark">
                        {entrada.timestamp}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
