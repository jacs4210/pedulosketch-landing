# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Pipeline de CI/CD con GitHub Actions**: Automatización completa del flujo de validación, seguridad y despliegue.
- **Validación de Código (Linting)**: Integración de `htmlhint`, `stylelint` y `eslint` para asegurar la calidad de HTML, CSS y JS sin dependencias locales pesadas.
- **Seguridad (Secret Scanning)**: Implementación de Gitleaks en el pipeline para detectar posibles credenciales expuestas en el historial de commits.
- **Despliegue Automatizado**: Configuración de entrega continua hacia **Netlify** vinculada al éxito de las pruebas de calidad.
- **Documentación Técnica de DevOps**: Creación de `CICD_GUIDE.md` y actualización del `README.md` para reflejar el nuevo stack de automatización.
- **Mantenimiento de Contexto**: Actualización de `PROJECT_CONTEXT.md` para mantener la sincronización entre el codebase y el agente.

## [1.1.0] - 2026-04-09

### Added
- **Infraestructura de Agentes IA**: Configuración del directorio `.agents/` con reglas, habilidades (skills) y flujos de trabajo (workflows) para estandarizar el desarrollo.
- **Rediseño Comercial**: Nueva estructura en la sección de planes y precios, optimizando el copy para conversión.
- **Calculadora Interactiva**: Lógica de selección de adicionales que actualiza el CTA de Instagram en tiempo real.

### Changed
- **Optimización de UX/UI**: Refactorización de estilos en la galería y mejora de la jerarquía visual de los componentes.

### Fixed
- **Jerarquía de Z-Index**: Corrección de problemas de visibilidad en los elementos interactivos de la galería "Peluditos Ilustrados".
- **Responsive Design**: Ajustes menores en contenedores para asegurar la adaptabilidad en dispositivos móviles.

## [1.0.0] - 2026-04-07

### Added
- Versión inicial de la landing page de **PeludoSketch**.
- Integración de galería dinámica con modal y lightbox.
- Sistema de navegación suave (Smooth Scrolling).
- Formulario de contacto redirigido a Instagram DM.
- Despliegue inicial en Netlify.
