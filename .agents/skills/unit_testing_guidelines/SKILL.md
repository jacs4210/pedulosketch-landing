---
name: unit_testing_guidelines
description: Estrategia y convenciones de pruebas unitarias y E2E
---
# Directrices de Pruebas (Testing Guidelines)

## 1. Estrategia Principal
Debido a la naturaleza del proyecto que se basa plenamente en Interacción de DOM e Interfaces de Usuario Vanilla, descartamos temporalmente Jest o unit testing aislado puro, y exigiremos pruebas **End-to-End (E2E) y DOM Testing** mediante herramientas de automatización de navegador como **Playwright** o **Cypress**, de ser integradas en un futuro.

## 2. Regla de Cobertura y Código Frágil
- **Selectores Confiables**: Jamás acoples tus pruebas a clases utilitarias de CSS. En su lugar, usa selectores por atributos de datos (Ej: `data-testid="submit-button"` o `data-test="portfolio-modal"`) o roles de accesibilidad (Ej. `getByRole`).
- **Pruebas de Componentes Lógicos**: Si el `js/` se vuelve más denso, requeriremos aislamiento puro para la lógica que no toque el DOM, previniendo así un DOM acoplado.

*(Nota: En la configuración actual no existen librerías de pruebas, pero cualquier introducción de éstas deberá adherirse a estas métricas).*
