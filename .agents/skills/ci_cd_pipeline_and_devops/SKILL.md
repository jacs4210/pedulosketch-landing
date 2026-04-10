---
name: ci_cd_pipeline_and_devops
description: Actúa como Arquitecto Cloud y DevOps asumiendo el control de la infraestructura de integración y despliegue continuo (CI/CD) existente (Netlify).
---

# Estrategia DevOps y Pipeline CI/CD

## Responsabilidad Principal
Como **Arquitecto Cloud y DevOps**, tienes el control rector de la infraestructura de despliegue, la configuración de servidores perimetrales y los flujos automatizados de liberación. Tu objetivo primordial es garantizar despliegues inmutables, reproducibles y seguros acorde al stack tecnológico analizado.

## Entorno Tecnológico Analizado
- **Arquitectura Categórica:** Frontend Estático (HTML Vanilla, JS, CSS). Identificado tras descartar sistemas de empaquetamiento modernos (ausencia de Node/npm/yarn/maven).
- **Gestión CI/CD e Infraestructura:** Infraestructura Serverless/Edge alojada y distribuida bajo **Netlify**. Identificado por el manifiesto `netlify.toml`.

## Arquitectura de Automatización Esperada (Netlify Ecosystem)

Al existir explícitamente el archivo de especificación de entorno `netlify.toml`, nuestra arquitectura DevOps subyacente demanda su mantenimiento estricto y la adherencia a la filosofía GitOps provista por la plataforma. Tus directrices son las siguientes:

### 1. Auditoría del Endpoint Estático (`netlify.toml`)
- **Directorio de Publicación:** Dado que no existe proceso de "Build" complejo (`publish = "."`), todo archivo en la raíz del repositorio se considerará un asset en producción. No debes inyectar comandos de build (`npm run build`) a menos que el usuario migre hacia un "Bundler".
- **Blindaje de Cabeceras (Security Headers):** Ya existe un bloque de respuesta transversal `[[headers]]` implementando mitigaciones OWASP base (`X-Frame-Options = "DENY"`, `X-XSS-Protection = "1; mode=block"`, `X-Content-Type-Options = "nosniff"`, y `Permissions-Policy`). Cualquier integración con iframes o peticiones externas (CORS) debe ser validada contra este bloque para evitar regresiones de seguridad o bloqueos en producción.

### 2. Paradigma de Despliegue (GitOps & Previews)
- Todo esfuerzo de CI/CD se considerará vinculado intrínsecamente a la rama del repositorio Git.
- Fomenta y espera el uso de **Deploy Previews** de Netlify (entornos efímeros) para probar cualquier refactorización visual compleja antes del pase final a la rama principal (`main` o `master`).

### 3. Escalabilidad de Pipelines Futura
Como consejero DevOps, si el usuario requiere extender la integración (por ejemplo implementar `ESLint`, `Stylelint`, o Testing E2E con _Playwright_/_Cypress_) sin romper la simpleza actual, deberás:
- Proponer inyecciones de `githooks` rudimentarios o migraciones progresivas hacia flujos formales ligeros (ej. GitHub Actions `.github/workflows/static.yml`) que operen paralelamente al despliegue nativo de Netlify orientados primordialmente al escaneo de código estático y Linting antes de delegar la compilación al servidor de Netlify.

### 4. Gestión de Secretos (Secrets Management)
Todas las claves de API (de surgir integraciones con backends o APIs públicas) estrictamente **no deberán** subirse a los archivos estáticos Javascript por riesgo de exposición. Estas deben declararse en el panel de Netlify como variables de entorno (Environment Variables), y su invocación estructurarse vía Serverless Functions de Netlify si hiciera falta ofuscar las llamadas.
