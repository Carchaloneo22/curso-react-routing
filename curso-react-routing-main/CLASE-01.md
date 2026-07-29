# Clase 1: Introducción al curso y al proyecto

## Objetivo

Entender qué vamos a construir, por qué usaremos un clon estilo Platzi-host y cómo estará organizado el curso.

## ¿Qué construiremos?

Un clon sencillo inspirado en Platzi-host llamado **Platzi-host**. El proyecto tendrá:

- Un **header** principal
- Una **sección hero** de bienvenida
- Una **barra de búsqueda**
- Un **listado de propiedades**
- **Cards reutilizables** para cada alojamiento
- **Filtros simples** por ciudad, tipo de alojamiento o texto
- **Estados** de carga, error y resultados vacíos

## Ruta del curso

### Primera parte: React con JavaScript
1. Crear proyecto
2. Componentes
3. Props
4. Listas
5. Estado local
6. Eventos
7. useEffect
8. Organización del proyecto

### Parte final: Actualización a TypeScript
1. Cambiar extensiones
2. Tipar datos
3. Tipar props
4. Tipar eventos
5. Tipar estados

## Datos mock

El proyecto no tendrá backend. Usaremos datos mock para simular propiedades reales:

```javascript
const properties = [
  {
    id: 1,
    title: "Apartamento moderno en Santiago",
    location: "Santiago, Chile",
    price: 75,
    image: "/images/apartment.jpg",
    type: "Apartamento"
  }
];
```

## Nota

El objetivo no es tener un producto completo, sino entender cómo se construye una interfaz real con React.

## Siguiente clase

En la **Clase 2** vamos a crear el proyecto desde cero con Vite y React.
