import { useParams } from "react-router";

export default function BookingPage() {
  const { id } = useParams();

  return (
    <section>
      <h1>Reserva tu alojamiento</h1>
      <p>Estás iniciando la reserva de la propiedad {id}.</p>
      <button type="button" className="btn">Continuar</button>
    </section>
  );
}
