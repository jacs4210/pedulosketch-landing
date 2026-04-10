---
name: update_project_context
description: Genera o actualiza el archivo PROJECT_CONTEXT.md en la raíz del repositorio con el estado actual y real del proyecto, inspeccionando directamente el codebase. Este archivo es la fuente de verdad del proyecto para las Gemas Especializadas en Gemini.
---

# Update Project Context

## Propósito

Genera o actualiza el archivo `PROJECT_CONTEXT.md` en la raíz del repositorio con el estado actual y real del proyecto, inspeccionando directamente el codebase. Este archivo es la fuente de verdad del proyecto para las Gemas Especializadas en Gemini.

---

## Instrucciones para el agente

Eres un agente de análisis de repositorios. Tu tarea es inspeccionar este proyecto y producir (o actualizar) el archivo `PROJECT_CONTEXT.md` en la raíz con información precisa y actualizada.

**No inventes ni asumas información.** Todo lo que escribas debe estar respaldado por lo que encuentres en el repositorio. Si algo no está claro, marca la sección con `[INFERIDO]` o `[VERIFICAR]`.

---

## Proceso de análisis

Antes de escribir el archivo, realiza estos pasos de inspección en orden:

### 1. Identifica el stack tecnológico
Revisa los siguientes archivos según corresponda al proyecto:
- `package.json` / `package-lock.json` / `yarn.lock` — dependencias Node.js
- `requirements.txt` / `pyproject.toml` / `Pipfile` — dependencias Python
- `pom.xml` / `build.gradle` — dependencias Java/Kotlin
- `Cargo.toml` — dependencias Rust
- `go.mod` — dependencias Go
- `Dockerfile` / `docker-compose.yml` — imagen base, servicios
- Archivos de configuración de frameworks (astro.config.*, vite.config.*, next.config.*, etc.)

### 2. Mapea la arquitectura y estructura
- Recorre la estructura de carpetas del proyecto (máximo 3 niveles de profundidad)
- Identifica el patrón arquitectónico: monolito, microservicios, serverless, JAMstack, etc.
- Identifica las carpetas principales y su responsabilidad (src/, app/, api/, lib/, components/, etc.)

### 3. Detecta el CI/CD y despliegue
- Busca `.gitlab-ci.yml`, `.github/workflows/`, `Jenkinsfile`, `cloudbuild.yaml`
- Busca `netlify.toml`, `vercel.json`, `fly.toml`, `render.yaml`, archivos de Kubernetes
- Identifica los stages del pipeline, los triggers y los entornos (staging, production)

### 4. Identifica funcionalidades implementadas
- Lee el README principal si existe
- Revisa los archivos de rutas (routes/, pages/, app/) para inferir las funcionalidades expuestas
- Revisa los controladores o handlers principales
- Si hay un CHANGELOG o historial de commits reciente, úsalo para identificar lo más nuevo

### 5. Detecta integraciones externas
- Busca en el código llamadas a APIs externas, SDKs de terceros, variables de entorno que apunten a servicios externos
- Revisa archivos `.env.example` o `.env.template` si existen
- Identifica proveedores de auth, storage, email, pagos, analytics, etc.

### 6. Identifica convenciones de código
- Revisa `.eslintrc`, `.prettierrc`, `biome.json`, `pyproject.toml [tool.ruff]` u otros linters/formatters
- Observa el patrón de nombrado de archivos y carpetas en el codebase
- Identifica si hay convenciones de commits (`.commitlintrc`, `CONTRIBUTING.md`)

---

## Estructura del archivo a generar

Genera exactamente el siguiente formato. No omitas ninguna sección aunque esté vacía — en ese caso escribe `N/A` o una nota breve.

```markdown
# PROJECT_CONTEXT.md

> Archivo generado automáticamente por el agente de Antigravity.
> Última actualización: [FECHA ISO 8601]
> No editar manualmente — regenerar con la skill `.agents/update-project-context.md`

---

## Descripción general

[Nombre del proyecto]: [descripción de una o dos oraciones sobre qué hace el proyecto y para quién]

**Repositorio:** [URL si está disponible en el remote origin, o N/A]
**Rama principal:** [main / master / develop]

---

## Stack tecnológico

### Lenguajes
- [lenguaje]: [versión si está especificada]

### Frameworks y librerías principales
- [nombre]: [versión] — [rol en el proyecto]

### Base de datos
- [motor de base de datos, ORM si aplica]

### Herramientas de build y desarrollo
- [bundler, compiler, dev server, etc.]

### Testing
- [framework de testing, cobertura si está configurada]

---

## Arquitectura

**Tipo:** [monolito / microservicios / serverless / JAMstack / otro]

**Estructura de carpetas relevante:**
```
[árbol de carpetas principales, máximo 3 niveles]
```

**Patrones arquitectónicos identificados:**
- [patrón: descripción breve de dónde se aplica]

---

## Funcionalidades implementadas

- [funcionalidad 1]: [descripción breve]
- [funcionalidad 2]: [descripción breve]
[...continuar por cada funcionalidad identificada]

**Últimos cambios detectados:**
- [cambio reciente 1 — inferido del CHANGELOG, commits recientes o archivos modificados recientemente]

---

## Integraciones y servicios externos

| Servicio | Propósito | Cómo se integra |
|----------|-----------|-----------------|
| [nombre] | [para qué se usa] | [SDK / API REST / variable de entorno] |

---

## CI/CD y despliegue

**Herramienta CI/CD:** [GitLab CI / GitHub Actions / Jenkins / N/A]
**Archivo de configuración:** [ruta al archivo]

**Stages del pipeline:**
1. [stage]: [qué hace]

**Triggers:**
- [rama o evento que dispara el pipeline]

**Entornos:**
- [staging / production]: [URL o plataforma de despliegue]

**Plataforma de despliegue:** [Netlify / Vercel / AWS / GCP / Docker / otro]

---

## Entorno de desarrollo local

**Requisitos previos:**
- [runtime, versión]
- [herramientas necesarias]

**Comandos principales:**
```bash
# Instalar dependencias
[comando]

# Correr en desarrollo
[comando]

# Build para producción
[comando]

# Correr tests
[comando]
```

**Variables de entorno requeridas** (sin valores):
```
[VARIABLE_1]=
[VARIABLE_2]=
```

---

## Convenciones y estándares

- **Nombrado de archivos:** [kebab-case / PascalCase / snake_case]
- **Nombrado de componentes:** [convención observada]
- **Linter:** [herramienta y archivo de configuración]
- **Formatter:** [herramienta y archivo de configuración]
- **Commits:** [convención si existe, ej: Conventional Commits]

---

## Restricciones técnicas conocidas

- [restricción 1]: [descripción y razón si es inferible]
- [restricción 2]: [descripción]

---

## Notas del agente

[Cualquier observación relevante que no encaje en las secciones anteriores, inconsistencias encontradas, o secciones marcadas como INFERIDO / VERIFICAR con su justificación]
```

---

## Comportamiento ante un PROJECT_CONTEXT.md existente

Si el archivo ya existe en el repositorio:

1. **No lo sobreescribas completamente.** Actualiza solo las secciones donde encuentres diferencias respecto al estado actual del codebase.
2. **Actualiza siempre** la fecha de "Última actualización".
3. **Agrega a "Últimos cambios detectados"** las diferencias encontradas respecto a la versión anterior.
4. **Preserva** las secciones marcadas como `[VERIFICAR]` que el usuario haya completado manualmente.
5. **Marca como `[DESACTUALIZADO]`** cualquier sección del archivo existente que contradiga lo que encuentras en el codebase actual, en lugar de eliminarla silenciosamente.

---

## Criterios de éxito

La tarea está completa cuando:
- El archivo `PROJECT_CONTEXT.md` existe en la raíz del repositorio
- Todas las secciones tienen contenido o están marcadas explícitamente como `N/A`
- La fecha de última actualización es correcta
- No hay información inventada — todo es verificable en el codebase
- Las secciones con incertidumbre están marcadas como `[INFERIDO]` o `[VERIFICAR]`