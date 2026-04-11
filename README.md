# PeludoSketch - Ilustraciones Personalizadas de Peluditos

¡Bienvenido a PeludoSketch! Este es el repositorio principal de la *Landing Page* oficial de la marca: un sitio web portafolio, limpio, y con una estética en colores pastel diseñado para convertir visitantes en clientes al mostrar amor, calidad artística y transparencia en el proceso creativo.

[![CI/CD Pipeline](https://github.com/jacs4210/pedulosketch-landing/actions/workflows/main.yml/badge.svg)](https://github.com/jacs4210/pedulosketch-landing/actions/workflows/main.yml)

## 🐶 Acerca del Proyecto
PeludoSketch transforma a los "peluditos" de compañía en recuerdos especiales ilustrados a mano. Esta página web está enfocada en mostrar un escaparate nativo que consolida la biografía de Aleja (la autora), un amplio portafolio, una tabla de tarifas, e interacciones premium de interfaz diseñadas en un embudo de conversión para llevarte a apartar comisiones a través de los mensajes privados de Instagram.

## ✨ Características Principales
- **Galería Dinámica Responsiva:** Visualización de portafolio sin saturar la pantalla principal, aglutinando categorías en un modal masivo y dinámico con la magia de JavaScript.
- **Microinteracciones y Animaciones:** Efectos interactivos de *Hover* de las cápsulas sociales, sistema de *Scroll Reveal* fluido que acompaña el desplazamiento de lectura, y animaciones delicadas flotantes.
- **Responsive Web Design:** Adaptación total y fluida del 100% de los elementos desde pantallas de escritorio ultra panorámicas hasta resoluciones móviles de iPhone/Android.
- **Flujo de Conversión sin fricción:** Múltiples CTAs (Calls to Action) optimizados (`https://ig.me/m/peludosketch`) que derivan de inmediato sin saltos raros a conversaciones personalizadas en IG.
- **Performance Web Optimizada:** Integración de videografía fluida y comprimida de manera nativa sin el peso abusivo que exigiría la codificación convencional en formato *.gif*.

## 🛠️ Tecnologías Empleadas
- **Core:** HTML5 Semántico, Vanilla CSS3 (Flexbox, Variables CSS) y JavaScript ES6+.
- **Interacción:** `IntersectionObserver API` para efectos de scroll suave y revelación.
- **Calidad de Código (Linting):** 
  - `htmlhint` para validación de estructura HTML.
  - `stylelint` para consistencia en estilos CSS.
  - `eslint` para buenas prácticas y errores en JavaScript.
- **Seguridad:** `Gitleaks` para la detección proactiva de secretos expuestos en el historial de Git.

## 🚀 Pipeline de CI/CD
El proyecto cuenta con un flujo de **Integración y Entrega Continua** a través de **GitHub Actions**:

1.  **Lint & Quality:** Cada cambio es validado automáticamente para asegurar que el código cumple con los estándares de calidad.
2.  **Security Scan:** Se realiza un escaneo de seguridad en cada commit para proteger la integridad del repositorio.
3.  **Automated Deploy:** El sitio se despliega automáticamente en **Netlify** solo si todas las pruebas de calidad y seguridad han sido superadas con éxito.

> [!IMPORTANT]
> Para configurar el pipeline en un nuevo entorno, consulta la [Guía de Configuración CI/CD](CICD_GUIDE.md).

## 💻 Desarrollo Local
1. Clona este repositorio: `git clone https://github.com/jacs4210/pedulosketch-landing.git`
2. Abre `index.html` en tu navegador o usa una extensión como **Live Server**.
3. (Opcional) Para ejecutar las validaciones locales de código:
   ```bash
   npx htmlhint "**/*.html"
   npx stylelint "css/**/*.css"
   npx eslint "js/**/*.js"
   ```

---
Hecho con 🩵 para quienes aman a sus peluditos.
