---
name: security_guidelines
description: Directrices de prevención de ataques y seguridad perimetral Web
---
# Directrices de Seguridad para Frontend (Web Faces)

## 1. Protección contra Vulnerabilidades (XSS / CSRF)
- **XSS (Cross-Site Scripting):** En caso de implementar un modal de contacto dinámico o inyección de valores, siempre "sanitiza" el HTML. Jamás asignes código directamente por medio de `innerHTML` o `eval()` sin la previa filtración. Usa `textContent` explícitamente donde sea posible para datos de usuario.
- **Seguridad en Formularios:** Cualquier `form` nativo introducido hacia adelante debe contener protecciones Anti-CSRF provistas por su end-point respectivo o backend sin acoplamiento.

## 2. Protección de Secrets y Variables de Entorno
- **Tolerancia Cero al Hardcoding:** Nunca declares tokens de API, Secretos OAuth, o contraseñas en los archivos `.js` de este proyecto, ya que son completamente visibles al público desde las herramientas de desarrollador del navegador (*DevTools*).

## 3. Headers Endurecidos (Hardened Headers)
- Este proyecto goza de protecciones en despliegue gracias al bloque de headers en `netlify.toml` (`X-Frame-Options`, `X-XSS-Protection`, etc.). Está estrictamente prohibido relajar (downgrade) estas reglas a menos que una dependencia técnica mayor lo justifique (Ej. inserción de un `iframe` seguro en un subdominio permitido).
