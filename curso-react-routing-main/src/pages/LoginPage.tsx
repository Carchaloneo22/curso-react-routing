import { useLocation, useNavigate } from "react-router";
import { login } from "../utils/auth";

type LocationState = {
  from?: string;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | null;
  const from = state?.from || "/profile";

  const handleLogin = () => {
    login();
    navigate(from, { replace: true });
  };

  return (
    <main className="main-content">
      <h1>Iniciar sesión</h1>
      <p>Usaremos un login simulado para continuar el flujo.</p>
      <button type="button" className="btn" onClick={handleLogin}>
        Entrar
      </button>
    </main>
  );
}
