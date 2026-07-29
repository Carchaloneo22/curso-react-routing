import { Link, useLoaderData } from "react-router";
import type { Property } from "../types/property";

export default function PropertyDetailPage() {
  const property = useLoaderData<Property>();

  return (
    <main className="main-content property-detail">
      <div className="property-detail-image">
        <img src={property.image} alt={property.title} />
        <span>{property.type}</span>
      </div>
      <section className="property-detail-content">
        <p className="eyebrow">Alojamiento destacado</p>
        <h1>{property.title}</h1>
        <p className="property-detail-location">{property.location}</p>
        <div className="property-detail-booking">
          <strong>${property.price} / noche</strong>
          <Link to={`/booking/${property.id}`}>Reservar ahora</Link>
        </div>
      </section>
    </main>
  );
}
