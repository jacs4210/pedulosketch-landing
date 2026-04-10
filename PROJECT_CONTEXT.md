# PROJECT_CONTEXT.md

> Archivo generado automáticamente por el agente de Antigravity.
> Última actualización: 2026-04-10T23:07:30-05:00
> No editar manualmente — regenerar con la skill `.agents/update-project-context.md`

---

## Descripción general

**PeludoSketch**: Landing page para la marca de ilustraciones personalizadas de mascotas. El sitio actúa como portafolio y canal de ventas directo, conectando con clientes interesados en retratos digitales y físicos.

**Repositorio:** [https://github.com/jacs4210/pedulosketch-landing](https://github.com/jacs4210/pedulosketch-landing)
**Rama principal:** main

---

## Stack tecnológico

### Lenguajes
- **HTML5**: Estándar semántico para la estructura.
- **CSS3**: Estilos modernos con Flexbox y Variables CSS.
- **JavaScript**: ES6+ Vanilla para interactividad.

### Frameworks y librerías principales
- **Vanilla JS**: Sin frameworks externos.
- **IntersectionObserver API**: Utilizada para animaciones de scroll reveal.

### Base de datos
- **N/A**: Proyecto estático sin persistencia en servidor propio.

### Herramientas de build y desarrollo
- **GitHub Actions**: Motor de CI/CD para automatización de tareas.
- **Live Server**: Recomendado para previsualización local.
- **Netlify CLI**: Utilizado en el pipeline para despliegue programático.

### Testing
- **Especializado**: No se encontraron frameworks de unit testing tradicionales, pero se aplican validaciones estáticas de calidad.

---

## Arquitectura

**Tipo:** JAMstack / Static Web Frontend

**Estructura de carpetas relevante:**
```
.
├── .github/          # Workflows de GitHub Actions
├── .agents/          # Configuraciones del Agente IA (reglas, skills, workflows)
├── assets/           # Recursos estáticos (brand, gallery)
├── css/              # Estilos (styles.css)
├── js/               # Lógica (scripts.js)
├── index.html        # Punto de entrada principal
└── netlify.toml      # Configuración de despliegue en Netlify
```

**Patrones arquitectónicos identificados:**
- **Static Assets Orchestration**: Separación limpia entre estructura, diseño y comportamiento.
- **Event-Driven UI**: Uso de listeners en el DOM para manejar la lógica de modales, galería y cálculos de precios.
- **Automated Quality Pipeline**: Integración de linters en el flujo de entrega para asegurar consistencia.

---

## Funcionalidades implementadas

- **Galería Dinámica**: Sistema de modal y lightbox para visualizar el portafolio de ilustraciones.
- **Calculadora de Precios Interactiva**: Selección de adicionales (impresiones) que actualiza el mensaje de conversión en tiempo real.
- **Conversión a Instagram**: Integración directa con mensajes directos de IG mediante enlaces dinámicos.
- **Adaptabilidad (Responsive)**: Diseño adaptado a móviles y tablets sin librerías de terceros.
- **Microanimaciones**: Efectos de scroll reveal y hover premium para mejorar el UX.

**Últimos cambios detectados:**
- **Pipeline CI/CD Robusto**: Implementación de GitHub Actions para validación automática de código y despliegue.
- **Validación Estática de Código**: Configuración de ESLint, Stylelint y HTMLHint.
- **Secret Scanning**: Integración de Gitleaks para seguridad del repositorio.
- **Documentación de DevOps**: Creación de `CHANGELOG.md` y `CICD_GUIDE.md`.

---

## Integraciones y servicios externos

| Servicio | Propósito | Cómo se integra |
|----------|-----------|-----------------|
| Netlify | Hosting y despliegue | Configurado vía `netlify.toml` y GitHub Actions |
| GitHub | Gestión de código y automatización | GitHub Actions |
| Instagram | Canal de ventas y atención | Enlaces directos a DMs (`ig.me/m/peludosketch`) |

---

## CI/CD y despliegue

**Herramienta CI/CD:** GitHub Actions
**Archivo de configuración:** [.github/workflows/main.yml](https://github.com/jacs4210/pedulosketch-landing/.github/workflows/main.yml)

**Stages del pipeline:**
1. **Lint & Quality**: Validación de HTML, CSS y JS con herramientas dedicadas.
2. **Security Scan**: Escaneo de secretos en el historial de Git con Gitleaks.
3. **Deploy**: Despliegue automático a producción en Netlify tras pasar validaciones.

**Triggers:**
- Push a la rama `main`.
- Pull Requests hacia `main`.

**Entornos:**
- **Production**: Gestionado por Netlify vía GitHub Actions.

**Plataforma de despliegue:** Netlify

---

## Entorno de desarrollo local

**Requisitos previos:**
- Navegador moderno.
- Node.js (opcional, para ejecutar linters vía `npx`).

**Comandos principales:**
```bash
# Validar HTML
npx htmlhint "**/*.html"

# Validar CSS
npx stylelint "css/**/*.css"

# Validar JS
npx eslint "js/**/*.js"
```

**Variables de entorno requeridas** (en GitHub Secrets):
```
NETLIFY_AUTH_TOKEN=
NETLIFY_SITE_ID=
```

---

## Convenciones y estándares

- **Nombrado de archivos:** kebab-case para activos y estilos (ej: `styles.css`, `logo.webp`).
- **Nombrado de componentes:** Clases CSS descriptivas en kebab-case.
- **Linter:** ESLint (`.eslintrc.json`), Stylelint (`.stylelintrc.json`), HTMLHint (`.htmlhintrc`).
- **Commits:** Patrón "Type: Description" (ej: `Feat: Rediseño...`, `Fix: Error...`).

---

## Restricciones técnicas conocidas

- **Static Only**: No cuenta con backend dinámico; toda la lógica es client-side.
- **No NPM Workflow**: No hay gestión de dependencias vía package managers localmente, se utilizan vía `npx` en el pipeline.

---

## Notas del agente

- Se ha profesionalizado el flujo de entrega sustituyendo (o complementando) la integración nativa de Netlify por un pipeline más seguro y controlado en GitHub Actions.
- El archivo `CHANGELOG.md` ha sido inicializado para mantener la trazabilidad de los cambios según el estándar "Keep a Changelog".
