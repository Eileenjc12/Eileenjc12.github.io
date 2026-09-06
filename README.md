# Portfolio Web - QA Automation Engineer

Sitio web personal y portafolio profesional para **QA Automation Engineer**, desarrollado 100% con tecnologías web estándar (**HTML5 semántico, CSS3 moderno y JavaScript vanilla**) sin necesidad de frameworks, compiladores o dependencias pesadas.

Optimizado para GitHub Pages, mobile-first, accesible (WCAG AA), SEO-friendly y con un peso total ultraligero (< 90 KB).

---

## 🎨 Paleta de Diseño y Estética

- **Fondo principal**: `#07110B` (Dark green profundo)
- **Fondo secundario / Tarjetas**: `#0D1C13` con efectos de desenfoque (*glassmorphism*)
- **Acento interactivo**: `#01C96E` (Verde esmeralda vibrante)
- **Tipografía**: [Montserrat](https://fonts.google.com/specimen/Montserrat) de Google Fonts
- **Insignia de disponibilidad**: Indicador interactivo con animación de pulso luminoso verde (*"🟢 Disponibilidad inmediata"*).

---

## 🚀 Secciones Incluidas

1. **Header / Navbar**:
   - Logotipo con estilo terminal `> Eileen.qa`.
   - Navegación interactiva con detección automática de sección activa (*IntersectionObserver*).
   - Botón directo de **"Descargar CV"** en PDF.
   - Menú responsive para dispositivos móviles.

2. **Hero**:
   - Presentación con nombre y tagline enfocado en automatización de software.
   - Insignia de estado laboral activo (*Open to Work*).
   - Terminal interactiva simulada con ejecución de suites en **Playwright** (`142 passed, 0 failed`).
   - Botones de llamada a la acción (Proyectos, Contacto y CV).

3. **Sobre Mí**:
   - Filosofía de calidad de software (*Shift-Left Testing*, Page Object Model y prevención de anomalías).
   - Tarjetas de impacto con métricas de rendimiento (estabilidad de pipelines, reducción de tiempos de regresión y cobertura).

4. **Habilidades / Skills**:
   - Insignias interactivas con iconos SVG vectoriales:
     - **Playwright** (E2E testing & POM)
     - **Docker** (Entornos de prueba y contenedores)
     - **Git** (Flujos GitFlow, branching y PRs)
     - **CI/CD** (GitHub Actions, pipelines automatizados)
     - **Postman / Newman** (Pruebas de APIs REST y schemas)
     - TypeScript, Python, Cypress, BDD/Cucumber y Allure Test Reporting.

5. **Proyectos de QA**:
   - 4 proyectos completos de automatización con detalles de arquitectura, retos técnicos y métricas de impacto:
     - *E2E Test Automation Framework (Playwright + TypeScript)*
     - *Suite de Validación de API REST (Postman + Newman + Docker)*
     - *Pipeline CI/CD Quality Gate (GitHub Actions + Docker)*
     - *Framework BDD (Playwright + Cucumber + Gherkin)*

6. **Contacto**:
   - Tarjeta con botón de **Copiar Email** al portapapeles con confirmación visual (*toast*).
   - Enlaces directos a **LinkedIn** y **GitHub** (`https://github.com/Eileenjc12`).
   - Formulario de contacto interactivo con validación accesible.

7. **Footer & Utilidades**:
   - Botón flotante para volver arriba (*Back to Top*).
   - Año dinámico y créditos.

---

## 📂 Estructura del Repositorio

```
.
├── index.html              # Estructura semántica, accesibilidad y SEO
├── css/
│   └── style.css           # Estilos puros, CSS variables, mobile-first
├── js/
│   └── main.js             # Lógica e interactividad en JS vanilla
├── assets/
│   ├── favicon.svg         # Favicon vectorial
│   └── cv-eileen-qa.pdf    # Currículum vitae en PDF descargable
└── README.md               # Documentación
```

---

## ⚡ Cómo Visualizar Localmente

No requiere instalar Node.js ni paquetes npm. Simplemente abre `index.html` en tu navegador favorito, o ejecuta un servidor local liviano si lo prefieres:

```bash
# Con Python (opcional):
python -m http.server 8000

# Con Node (opcional):
npx serve
```
Y visita `http://localhost:8000` en tu navegador.