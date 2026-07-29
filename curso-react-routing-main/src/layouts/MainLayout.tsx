import { Outlet } from "react-router";
import { Header } from "../components/layout/Header";

export function MainLayout() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <footer className="footer">
        <p>Platzi-host - Proyecto para el curso de React Routing - Profe @ErasmoHernandez</p>
      </footer>
    </div>
  );
}
