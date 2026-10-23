# Calderón Peluquería — sitio web

Sitio web responsive creado con React, Vite y GSAP, con contenido en español, inglés y francés.

## Requisitos

- Node.js 20 o superior recomendado
- npm

## Instalación

```bash
npm install
npm run dev
```

Vite mostrará la dirección local en la terminal, normalmente `http://localhost:5173`.

## Compilar para producción

```bash
npm run build
npm run preview
```

El sitio compilado se genera en `dist/`. Puedes desplegar esa carpeta en Netlify, Vercel, Cloudflare Pages o cualquier hosting estático.

## Qué incluye

- Diseño responsive para móvil, tablet y escritorio.
- Selector de idioma español / inglés / francés.
- Animaciones de entrada y de scroll con GSAP + ScrollTrigger.
- Servicios sin precios inventados.
- Botones de llamada con `tel:+34954212275`.
- Dirección, horarios publicados y mapa Google Maps.
- Metadatos SEO básicos.
- Respeto de la preferencia de movimiento reducido del sistema.

## Datos públicos usados

- Calderón Peluquería
- C. Acetres, 1, Casco Antiguo, 41004 Sevilla, España
- Teléfono: +34 954 21 22 75
- Horario publicado: lunes a viernes 09:00–19:00; sábado 09:00–14:00; domingo cerrado.

Confirma los datos con el salón antes de publicar: los horarios peuvent changer.

## Imágenes

Las fotografías del diseño son imágenes ilustrativas alojadas en Unsplash. No son fotografías oficiales ni trabajos confirmados de Calderón Peluquería. Antes de publicar, reemplázalas por fotos propias autorizadas por el salón o conserva la nota aclaratoria en la galería.

## Personalización

- Contenido y traducciones: `src/App.jsx`, objeto `copy`.
- Imágenes: constante `photos` y URL del hero en `src/App.jsx`.
- Estilos: `src/styles.css`.
- SEO y fuentes: `index.html`.

No se han añadido precios porque no se dispone de una tarifa oficial verificada.
