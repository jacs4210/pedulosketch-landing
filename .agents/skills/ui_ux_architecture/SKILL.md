---
name: ui_ux_architecture
description: Lineamientos estéticos, de accesibilidad y de sistema de tokens para proyectos Web Frontend
---
# Arquitectura UI/UX y Sistema de Diseño

## 1. Sistema de Tokens (CSS Variables)
- **Uso estricto de `:root`**: Todo color, tamaño de fuente (tipografía base), espaciado (margins/paddings estandarizados) y duración de animaciones debe estar declarado dentro de la pseudoclase `:root` en tus hojas de estilo base.
- **Ejemplo**: `--color-primary`, `--space-sm`, `--transition-speed-fast`.
- No utilices colores hardcodeados (hex/rgba) fuera del bloque raíz.

## 2. Semántica HTML y Accesibilidad (A11y)
- Emplea etiquetas semánticas (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Todo elemento multimedia (`<img>`, `<video>`) debe contener descriptores en sus atributos `alt`.
- Para controles interactivos creados a la medida, asigna roles `aria-*` adecuados y permite la navegación por teclado (`tabindex="0"`).

## 3. Jerarquía Visual y Microinteracciones
- El espacio negativo o la "respiración" de los elementos (`padding/margin`) es crucial.
- Los botones (`CTAs`) y tarjetas deben proveer animaciones de realimentación (feedback) inmediato al estar en estado `:hover` y `:focus` utilizando `transform` y `transition`. Modifica atributos suaves en vez de saltos crudos.
