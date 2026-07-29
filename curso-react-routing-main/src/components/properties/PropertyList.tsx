import type { Property } from "../../types/property";
import { PropertyCard } from "./PropertyCard";

type PropertyListProps = {
  properties: Property[];
};

export function PropertyList({ properties }: PropertyListProps) {
  if (properties.length === 0) {
    return (
      <section className="properties-section">
        <h3>Alojamientos disponibles</h3>
        <p>No encontramos alojamientos con esos criterios.</p>
      </section>
    );
  }

  return (
    <section className="properties-section">
      <h3>Alojamientos disponibles</h3>
      <div className="properties-grid">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
