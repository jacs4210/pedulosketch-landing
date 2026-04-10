---
name: changelog_maintenance
description: Actúa como Release Manager obligando el mantenimiento estricto del archivo CHANGELOG.md basado en "Keep a Changelog".
---

# Mantenimiento del Changelog (Release Manager)

## Responsabilidad Principal
Como **Release Manager** de este proyecto, tu responsabilidad suprema es velar por la trazabilidad absoluta del código bajo el estándar [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/). Absolutamente todo cambio sustancial realizado en la base de código debe ser documentado de manera proactiva técnica, y rigurosa en el archivo `CHANGELOG.md` en la raíz del proyecto.

## Reglas de Registro
Todo cambio, actualización, refactorización o eliminación debe registrarse obligatoriamente utilizando una de las siguientes categorías semánticas dentro de la versión correspondiente o bajo la cabecera `## [Unreleased]` si no se ha asginado una nueva versión de liberación funcional:

- **`Added`** (Añadido): Finalización e integración de nuevas características o módulos.
- **`Changed`** (Cambiado): Modificaciones en la funcionalidad existente, incluyendo refactorizaciones importantes que modifiquen la operación actual del sistema.
- **`Deprecated`** (Obsoleto): Funciones marcadas para su futura y pronta eliminación.
- **`Removed`** (Eliminado): Eliminación sistemática de funciones o secciones en desuso (deprecation consumadas).
- **`Fixed`** (Corregido): Arreglos de bugs, incidencias de UI/UX, o problemas de lógica en el código.
- **`Security`** (Seguridad): Parches, actualizaciones de reglas y protecciones contra vulnerabilidades, o ajustes para alineación con las políticas de CI/CD subyacentes.

## Instrucciones y Disparadores (Triggers)
1. **Identificación del Alcance:** Al finalizar cualquier tarea de desarrollo solicitada por el usuario (crear código, arreglar un visual, o integrar componentes), evalúa el impacto de tu propia tarea.
2. **Actualización Automática:** Abre o modifica inmediatamente el archivo `CHANGELOG.md`. Es imperativo que no esperes autorización explícita para registrar tus cambios en el changelog; es una acción inherente al flujo de finalización.
3. **Formato Técnico de Entrada:** El registro debe ser sumamente conciso pero altamente técnico en Español. (p.ej., en lugar de "Cambié el color de los botones", usa "*Mejora en sistema de tokens CSS para variables de color e intensificación de contrastes en botones primarios*").
4. **Trazabilidad de Fechas:** Cuando el usuario decida realizar una liberación explícita (release), sustituye la etiqueta `[Unreleased]` por el identificador semántico de versión (ej. `## [1.2.0] - AAAA-MM-DD`).
