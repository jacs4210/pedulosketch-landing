# PROJECT_CONTEXT.md

> Archivo generado automáticamente por el agente de Antigravity.
> Última actualización: 2026-04-10T19:15:00-05:00
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
- **JavaScript**: ES2022 Vanilla (Client-side logic).

### Frameworks y librerías principales
- **Vanilla JS**: Sin frameworks externos.
- **IntersectionObserver API**: Utilizada para animaciones de scroll reveal.

### Base de datos
- **N/A**: Proyecto estático sin persistencia en servidor propio.

### Herramientas de build y desarrollo
- **Node.js 24**: Entorno de ejecución para linters en el pipeline de CI/CD.
- **ESLint 9+**: Linter de JS utilizando el nuevo sistema **Flat Config**.
- **GitHub Actions**: Motor de CI/CD para automatización de tareas.
- **Live Server**: Recomendado para previsualización local.
- **Netlify CLI**: Utilizado en el pipeline para despliegue programático.

### Testing
- **Validación Estática**: Se aplican validaciones de calidad con HTMLHint, Stylelint y ESLint.

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
- **Modernización de ESLint**: Migración a ESLint 9/10 con `eslint.config.mjs` (Flat Config).
- **Actualización de Entorno**: Migración del pipeline a Node.js 24.
- **Optimización de Despliegue**: Ajuste de permisos en GitHub Actions para habilitar comentarios y estados automáticos en Netlify.
- **Mejora de Calidad**: Resolución masiva de errores de linting en HTML, CSS y JS.

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
1. **Lint & Quality**: Validación de HTML, CSS y JS.
2. **Security Scan**: Escaneo de secretos con Gitleaks.
3. **Deploy**: Entrega continua a Netlify (Producción).

**Triggers:**
- Push a la rama `main`.
- Pull Requests hacia `main`.

**Entornos:**
- **Production**: Gestionado por Netlify vía GitHub Actions.

---

## Entorno de desarrollo local

**Requisitos previos:**
- Navegador moderno.
- Node.js 24+ (para ejecutar linters vía `npx`).

**Comandos principales:**
```bash
# Validar HTML
npx htmlhint "**/*.html" --config .htmlhintrc

# Validar CSS
npx stylelint "css/**/*.css" --config .stylelintrc.json

# Validar JS (Modern Flat Config)
npx eslint "js/**/*.js"
```

**Variables de entorno requeridas** (en GitHub Secrets):
```
NETLIFY_AUTH_TOKEN=
NETLIFY_SITE_ID=
```

---

## Convenciones y estándares

- **Nombrado de archivos:** kebab-case para activos y estilos.
- **Nombrado de componentes:** Clases CSS descriptivas en kebab-case.
- **Linter:** ESLint (`eslint.config.mjs`), Stylelint (`.stylelintrc.json`), HTMLHint (`.htmlhintrc`).
- **Commits:** Patrón "Type: Description".

---

## Restricciones técnicas conocidas

- **Static Only**: No cuenta con backend dinámico.
- **No NPM Workflow**: No hay `package.json` en la raíz; se usan herramientas standalone vía `npx`.

---

## Notas del agente

- Se ha actualizado el pipeline para ser compatible con Node.js 24, adelantándose a la depreciación de Node 20 en GitHub Actions.
- La migración a ESLint Flat Config asegura que el proyecto pueda seguir validando su calidad de código independientemente de las actualizaciones de dependencias globales.
- Se han habilitado permisos de escritura para el `GITHUB_TOKEN` en el workflow para permitir que las integraciones de Netlify operen correctamente.
