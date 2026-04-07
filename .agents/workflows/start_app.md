---
description: Cómo levantar la aplicación localmente
---

# Flujo de Trabajo: Levantar Aplicación Local

Dado que este proyecto es una aplicación estática (Frontend Vanilla), no requiere de la instalación de dependencias `npm` ni de contenedores Docker. Sigue estos pasos para visualizar el proyecto en base a estándares web simples.

1. **Vía Servidor de Desarrollo Rápido (Recomendado):**
   Si posees Python 3 instalado, puedes utilizar el módulo HTTP integrado para montar un servidor local en el directorio del proyecto.
   ```bash
   python3 -m http.server 8080
   ```
   Luego abre tu navegador en `http://localhost:8080`.

2. **Vía Extensiones de IDE:**
   Utiliza la extensión **Live Server** (en VS Code). Haz clic derecho en el archivo `index.html` y selecciona *Open with Live Server*. Esto proporcionará Hot-Reload al editar los archivos de estilos estáticos o JS.

3. **Vía Explorador de Archivos (Pasivo):**
   Si deseas solo revisar la estructura final y no necesitas recargas en vivo (debido a la carencia de compiladores en este proyecto), puedes simplemente arrastrar y soltar `index.html` en tu navegador.
