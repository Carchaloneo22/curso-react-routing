import { Outlet } from "react-router";

export function BookingLayout() {
  return (
    <main className="main-content booking-layout">
      <section className="booking-flow">
        <p className="eyebrow">Flujo de reserva</p>
        <Outlet />
      </section>
      <aside className="booking-summary">
        <h2>Resumen</h2>
        <p>Revisa la información antes de confirmar tu reserva.</p>
      </aside>
    </main>
  );
}
