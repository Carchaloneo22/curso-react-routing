import { Link, isRouteErrorResponse, useRouteError } from "react-router";

export default function RouteErrorPage() {
  const error = useRouteError();
  const status = isRouteErrorResponse(error) ? error.status : null;

  return (
    <main className="main-content not-found">
      <h1>Algo salió mal</h1>
      <p>No pudimos cargar esta página.</p>
      {status && <p>Código: {status}</p>}
      <Link to="/">Volver al inicio</Link>
    </main>
  );
}