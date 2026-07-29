import { properties } from "../data/properties";

export function propertyDetailLoader({ params }: { params: { id?: string } }) {
  const property = properties.find((item) => item.id === Number(params.id));

  if (!property) {
    throw new Response("Propiedad no encontrada", { status: 404 });
  }

  return property;
}
