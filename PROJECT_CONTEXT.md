# PROJECT_CONTEXT.md

> Archivo generado automáticamente por el agente de Antigravity.
> Última actualización: 2026-04-09T16:30:11-05:00
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
- **Live Server**: Recomendado para previsualización local.
- **Netlify**: Plataforma de hosting y CI/CD.

### Testing
- **N/A**: No se encontraron frameworks de testing configurados.

---

## Arquitectura

**Tipo:** JAMstack / Static Web Frontend

**Estructura de carpetas relevante:**
```
.
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

---

## Funcionalidades implementadas

- **Galería Dinámica**: Sistema de modal y lightbox para visualizar el portafolio de ilustraciones.
- **Calculadora de Precios Interactiva**: Selección de adicionales (impresiones) que actualiza el mensaje de conversión en tiempo real.
- **Conversión a Instagram**: Integración directa con mensajes directos de IG mediante enlaces dinámicos.
- **Adaptabilidad (Responsive)**: Diseño adaptado a móviles y tablets sin librerías de terceros.
- **Microanimaciones**: Efectos de scroll reveal y hover premium para mejorar el UX.

**Últimos cambios detectados:**
- **Infraestructura de Agentes**: Creación de skills, rules y workflows para la auditoría y mantenimiento mediante IA.
- **Rediseño Comercial**: Actualización de la sección de planes, precios y pasos del proceso de compra.
- **Correcciones UI**: Ajustes de colores y errores visuales en los contenedores de la galería.

---

## Integraciones y servicios externos

| Servicio | Propósito | Cómo se integra |
|----------|-----------|-----------------|
| Netlify | Hosting y despliegue | Configurado vía `netlify.toml` y git hooks |
| Instagram | Canal de ventas y atención | Enlaces directos a DMs (`ig.me/m/peludosketch`) |

---

## CI/CD y despliegue

**Herramienta CI/CD:** Netlify (vía Git Integration)
**Archivo de configuración:** [netlify.toml](https://github.com/jacs4210/pedulosketch-landing/blob/main/netlify.toml)

**Stages del pipeline:**
1. **Build**: N/A (Despliegue directo de archivos estáticos).
2. **Deploy**: Sincronización automática con la rama `main`.

**Triggers:**
- Push a la rama `main`.

**Entornos:**
- **Production**: Gestionado automáticamente por Netlify.

**Plataforma de despliegue:** Netlify

---

## Entorno de desarrollo local

**Requisitos previos:**
- Navegador moderno.
- Extensión "Live Server" (o similar) recomendada.

**Comandos principales:**
```bash
# El proyecto no usa npm/yarn.
# Se sirve directamente como archivos estáticos.
```

**Variables de entorno requeridas** (sin valores):
```
N/A
```

---

## Convenciones y estándares

- **Nombrado de archivos:** kebab-case para activos y estilos (ej: `styles.css`, `logo.webp`).
- **Nombrado de componentes:** Clases CSS descriptivas en kebab-case.
- **Linter:** No configurado en el código base — [INFERIDO].
- **Formatter:** No configurado en el código base — [INFERIDO].
- **Commits:** Patrón "Type: Description" (ej: `Feat: Rediseño...`, `Fix: Error...`).

---

## Restricciones técnicas conocidas

- **Static Only**: No cuenta con backend dinámico; toda la lógica es client-side.
- **No NPM Workflow**: No hay gestión de dependencias vía package managers, lo que dificulta la integración de utilidades modernas de bundling sin una refactorización previa.

---

## Notas del agente

- El archivo fue creado por primera vez al no existir en el repositorio.
- La sección de `Variables de entorno` se marcó como `N/A` al ser un proyecto 100% estático frontend sin integraciones que consuman secrets (la integración con IG es vía URL pública).
