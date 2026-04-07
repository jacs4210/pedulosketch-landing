---
name: ci_cd_pipeline
description: Infraestructura de automatización basada en Netlify
---
# Infraestructura CI/CD (Netlify)

## 1. Detección del Ecosistema
El proyecto utiliza **Netlify** para el despliegue automático de un sitio estático. Esto se fundamenta y configura a través del archivo `netlify.toml`.

## 2. Fases Esperadas
Dado que es una arquitectura serverless puramente estática sin herramientas de bundler (Webpack/Vite), el pipeline de CI/CD es llano y consta de:

- **Build:** No existe un comando de construcción explícito. El directorio raíz `/` con `index.html` es el origen directo (indicado por `publish = "."` en el `netlify.toml`).
- **Deploy:** Cualquier empuje (`git push`) a la rama de producción de `master` o `main` activa el worker de Netlify para la ingesta inmediata. Toda versión se procesa tras recibir un Success Check del CDN de Netlify.

## 3. Mantenimiento del TOML
Cualquier modificación o añadidura a los **Headers de Seguridad** u opciones de ruteo como redirects (`_redirects`) se deberá testear empujando primero a un Deploy Preview y validar los headers en el ambiente empaquetado.
