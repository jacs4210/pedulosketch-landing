# Guía de Configuración CI/CD - PeludoSketch

Este proyecto utiliza **GitHub Actions** para automatizar la validación de código, seguridad y despliegue a **Netlify**.

## Requisitos Previos

Para que el pipeline funcione correctamente, debes configurar los siguientes **Secrets** en tu repositorio de GitHub.

### 1. Obtener Netlify Auth Token
1. Inicia sesión en [Netlify](https://app.netlify.com/).
2. Ve a **User Settings** > **Applications** > **Personal access tokens**.
3. Haz clic en **New access token** y dale un nombre (ej. `github-actions-token`).
4. Copia el token generado.

### 2. Obtener Netlify Site ID
1. En Netlify, ve a la página de tu sitio (**Site Configuration**).
2. En la sección **General** > **Site details**, busca el **Site ID** (un UUID como `12345678-abcd-1234-abcd-1234567890ab`).
3. Copia el Site ID.

### 3. Configurar Secrets en GitHub
1. Ve a tu repositorio en GitHub.
2. Haz clic en **Settings** > **Secrets and variables** > **Actions**.
3. Haz clic en **New repository secret** y añade:
   - `NETLIFY_AUTH_TOKEN`: Pega el token de acceso personal.
   - `NETLIFY_SITE_ID`: Pega el Site ID de tu sitio.

## Funcionamiento del Pipeline

El workflow se activa en cada `push` a la rama `main` o en cada `pull_request` dirigido a `main`.

### Fases:
1. **Lint & Quality:** 
   - Valida HTML (`htmlhint`).
   - Valida CSS (`stylelint`).
   - Valida JS (`eslint`).
2. **Security Scan:**
   - Escanea el historial de Git en busca de secretos expuestos (API keys, tokens, etc.) usando `Gitleaks`.
3. **Deploy:**
   - Si las fases anteriores pasan con éxito y el cambio es en la rama `main`, se despliega automáticamente a producción en Netlify.

---
*Nota: Si el deploy automático de Netlify por integración de Git está activo, se recomienda desactivarlo en el panel de Netlify para evitar despliegues duplicados y asegurar que solo se despliegue si los tests pasan.*
