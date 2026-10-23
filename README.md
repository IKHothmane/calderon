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

## Ressources GitHub — design UI/UX

Guide des meilleurs dépôts à utiliser pour enrichir le site Calderón (React + Vite + GSAP).

### 1. Les meilleurs dépôts pour le design UI/UX

| # | Projet | Pourquoi | Lien |
|---|--------|----------|------|
| 1 | **shadcn/ui** | Indispensable. Boutons, formulaires, menus, cartes et composants accessibles. Compatible React + Vite. | [GitHub — shadcn/ui](https://github.com/shadcn-ui/ui) |
| 2 | **Aceternity UI** | Animations premium : parallaxe, cartes 3D, effets de texte et sections d’accueil animées. | [Aceternity UI](https://ui.aceternity.com) · [composants](https://ui.aceternity.com/components) |
| 3 | **Magic UI** | Composants animés open source : boutons lumineux, dégradés, textes animés et effets interactifs. | [GitHub — Magic UI](https://github.com/magicuidesign/magicui) |
| 4 | **Animate UI** | Composants React animés et personnalisables, construits avec Motion et Tailwind CSS. | [GitHub — Animate UI](https://github.com/animate-ui/animate-ui) |

### 2. Lesquels choisir pour ce site de coiffure

| Besoin | Ressource recommandée |
|--------|------------------------|
| Design professionnel et propre | **shadcn/ui** |
| Accueil spectaculaire et parallaxe | **Aceternity UI** |
| Boutons et effets animés | **Magic UI** |
| Menus et transitions | **Animate UI** |
| Animations complexes au défilement | **GSAP** *(déjà intégré dans ce projet)* |

### 3. Stack actuelle vs prochaines étapes

- **Déjà en place** : React, Vite, GSAP + ScrollTrigger, Lucide, CSS custom.
- Pour brancher shadcn / Magic UI / Animate UI / Aceternity, il faudra en général ajouter **Tailwind CSS** (et souvent Motion / Framer Motion selon le kit).
- Priorité suggérée pour Calderón : garder GSAP pour le scroll, puis shadcn/ui pour la base UI, et n’emprunter à Aceternity / Magic UI que des effets ciblés (hero, CTA) pour ne pas alourdir le site.
