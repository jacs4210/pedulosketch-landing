# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- **Modernización de ESLint**: Migración de `.eslintrc.json` (Legacy) a `eslint.config.mjs` (Flat Config) para soporte nativo en entornos ESM y Node.js 24.
- **Actualización de Entorno de CI/CD**: Migración de Node.js 20 a Node.js 24 en GitHub Actions para cumplir con las políticas de soporte de GitHub.
- **Optimización de Despliegue**: Corrección de parámetros de la API de Netlify y reestructuración de permisos (`write-access`) en el pipeline para habilitar comentarios y estados de commit automatizados.

### Fixed
- **Validación de Calidad (Linting)**: Resolución de 237 errores de JS, 81 de CSS y errores de validación de HTML detected por el pipeline.
- **Especificidad CSS**: Reordenamiento de selectores de imágenes y logos para eliminar advertencias de `no-descending-specificity`.
- **Placeholder HTML**: Corrección de atributo `src` vacío en el lightbox para cumplimiento de estándares semánticos.

### Security
- **Ajuste de Permisos de GitHub Actions**: Implementación de permisos granulares (`contents: write`, `deployments: write`) para mejorar la seguridad y funcionalidad de las integraciones de terceros.

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
