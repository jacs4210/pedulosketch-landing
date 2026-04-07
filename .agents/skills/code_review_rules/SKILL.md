---
name: code_review_rules
description: Checklist de aprobación de código para pull requests y cambios en vivo
---
# Reglas de Code Review & Checklist

## 1. Deuda Técnica e Higiene del Código
- **Sin inline-styles:** Ningún elemento HTML puede mantener el atributo `style="..."`. Todo estilo debe ser procesado de manera clasificada en los archivos `.css`.
- **Limpieza de Consola y Objetos:** Ningún `console.log` debe colarse en el código base.
- **Desobstrucción de Memoria:** Al utilizar observadores avanzados en Vanilla JS como `IntersectionObserver`, asegúrate de ejecutar `observer.unobserve()` cuando sea un evento "One-off" (animaciones de revelado que solo suceden una vez).

## 2. Formato de Estilo (Formatters)
- Los archivos deben obedecer el espaciado y formato propio de **Prettier** estandarizado globalmente (2 espacios de alineación para HTML/CSS/JS).
- Respeta la indentación semántica, para que la lectura e inmersión de nodos HTML se entienda desde un abanico visual.

## 3. Condiciones de Aprobación
El código sólo pasa si:
- Es Responsive sin rupturas (`breakings`) desde 320px hacia arriba.
- Pasa una validación Lighthouse en su espectro base > 90 de performance en Local y en Netlify.
