import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <main className="main-content not-found">
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>La página que buscas no existe o fue movida.</p>
      <Link to="/">Volver al inicio</Link>
    </main>
  );
}
