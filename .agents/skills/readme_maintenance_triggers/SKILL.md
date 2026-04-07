---
name: readme_maintenance_triggers
description: Disparadores normativos (Triggers) para impedir un archivo README obsoleto
---
# Reglas y Triggers para Mantenimiento de README.md

Al documentar, deberás actuar automáticamente como agente o solicitar su actualización a este archivo de documentación cuando suceda cualquiera de las siguientes operaciones lógicas ("Disparadores"):

1. **Alteración del Entorno (Despliegues / CI/CD):**
   - Si se re-crea la estructura del `netlify.toml` o de repente el proyecto muta para adoptar flujos mediante `.github/workflows`.

2. **Inclusión de Stack (Tech Stack Shift):**
   - Si introduces explícitamente y bajo permiso un bundler o pre-procesador (ej., un entorno simple con Webpack, Rollup o Vite), el apartado de `Tecnologías Empleadas` y de `Despliegue (Local)` debe detallar los nuevos comandos como `npm install` y `npm run dev`.

3. **Arquitectura y Adición Externa:**
   - Si sumas APIs de terceros en JavaScript, o integras librerías mayores que antes no existían (Ej. Un carrusel masivo como SwiperJS), debe plasmarse en las características.

*Un `README` abandonado no se le perdona a ningún Arquitecto.*
