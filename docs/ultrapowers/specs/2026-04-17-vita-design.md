# VITA Studios - Diseño Premium Minimalista

**Fecha:** 2026-04-17  
**Versión:** 1.0  
**Estado:** Aprobado  
**Objetivo:** Rediseño elegante y moderno que inspire confianza y atracción de clientes para servicios de consultoría estratégica, IA y crecimiento empresarial.

---

## 1. Visión General

VITA Studios busca posicionarse como marca **premium, elegante y moderna** inspirada en sitios de lujo minimalista como Zara, Nude Project y UVU Club. El diseño debe transmitir:
- **Elegancia extrema** (minimalismo refinado)
- **Confianza** (profesionalismo, limpieza visual)
- **Personalidad** (diversión, dinamismo con clase)
- **Premium** (lujo sin ser ostentoso)

---

## 2. Enfoque de Diseño

**Estilo:** Ultra Premium Minimalista  
**Inspiración:** Zara + Nude Project + UVU Club  
**Características:**
- Mucho whitespace (espacios en blanco generosos)
- Tipografía delgada y refinada
- Colores principalmente neutros con acentos elegantes
- Animaciones dinámicas (no sutiles, pero elegantes)
- Logo prominente y siempre visible

---

## 3. Sistema de Tipografía

### 3.1 Familias Tipográficas

| Uso | Familia | Weight | Letter-spacing | Características |
|-----|---------|--------|-----------------|-----------------|
| Headlines (H1, H2) | Playfair Display | 400 | -1px a -0.5px | Serif elegante, muy refinada, sofisticación |
| Body, Navegación | Inter | 300-400 | 0.3px a 0.5px | Sans moderno, limpia, muy legible |
| Labels, Badges | DM Sans | 500 | 1px (uppercase) | Pequeños detalles, personalidad, dinamismo |

### 3.2 Escala Tipográfica

- **H1 (Hero headline):** 56-72px, Playfair Display 400, line-height 1.1
- **H2 (Section headers):** 48px, Playfair Display 400
- **H3 (Card titles):** 22-24px, Playfair Display 400
- **Body text:** 14-16px, Inter 300-400, line-height 1.6-1.7
- **Small text/labels:** 11-12px, DM Sans 500, letter-spacing 1px
- **Navigation:** 12px, Inter 400, letter-spacing 0.5px

---

## 4. Paleta de Colores

### 4.1 Colores Base

| Color | Hex | Uso |
|-------|-----|-----|
| Negro Puro | #000000 | Fondo principal |
| Blanco | #FFFFFF | Texto principal, elementos |
| Gris Claro | #E8E8E8 | Texto secundario, opciones deshabilitadas |
| Gris Oscuro | #333333 | Borders sutiles, divisores |

### 4.2 Acentos (Elegantes)

| Color | Hex | Uso | Opacidad |
|-------|-----|-----|----------|
| Dorado Premium | #C9A961 | Borders, labels, detalles finos | 40% para más sofisticación |
| Terra Sofisticada | #B8674F | CTAs principales, hover states | 100% |

### 4.3 Ejemplos de Combinaciones

**Para borders sutiles:** `rgba(201, 169, 97, 0.15)` (dorado 15% opacidad)  
**Para acentos notables:** `rgba(201, 169, 97, 0.4)` (dorado 40% opacidad)  
**Para CTAs:** `#B8674F` (terra puro)

---

## 5. Componentes de Diseño

### 5.1 Logo

- **Posición:** Siempre visible en header sticky
- **Header:** 45px altura (responsive)
- **Hero:** 180px altura (grande, prominente)
- **Archivo:** `/VITA studios/logo.png`
- **Efectos:** 
  - Header: `filter: brightness(1.1)`
  - Hero: `filter: brightness(1.2) drop-shadow(0 0 30px rgba(201, 169, 97, 0.3))`

### 5.2 Header/Navegación

**Estructura:**
- Logo a la izquierda
- Navegación a la derecha (INICIO, SERVICIOS, CASOS, CONTACTO)
- Sticky (se mantiene arriba al scroll)
- Border-bottom sutil en dorado 15% opacidad

**Estilos:**
- Background: #000000
- Navigation links: 12px, Inter 400, color blanco
- Link underline animation: Playfair crece en hover con dorado
- Transition: 0.4s ease-in-out

### 5.3 Hero Section

**Estructura:**
1. Logo grande (180px) con glow dorado
2. Subtítulo: "✦ Crecimiento Personalizado" (DM Sans 12px)
3. Headline: "Lleva tu negocio al siguiente nivel" (Playfair 56-72px)
4. Subheadline: "Estrategia, IA y Crecimiento Personalizado" (Inter 300)
5. CTA Button: "EXPLORAR SERVICIOS"

**Dimensiones:**
- Min-height: 100vh (viewport completo)
- Padding: 120px vertical
- Text-align: center

### 5.4 Botones (CTA)

**Estilo Base:**
- Padding: 16px 40px
- Background: transparent
- Border: 1px solid rgba(201, 169, 97, 0.4)
- Color: #FFFFFF
- Font: DM Sans 12px, weight 500, letter-spacing 1px
- Border-radius: 0 (minimal, cuadrado)

**Animaciones:**
- Transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
- On hover:
  - Border-color → #B8674F (terra)
  - Color → #B8674F (terra)
  - Background fill: rgba(184, 103, 79, 0.2)

### 5.5 Divisores

- Altura: 1px
- Color: rgba(201, 169, 97, 0.15) (dorado 15%)
- Margin: 120px vertical
- Separan secciones principales

### 5.6 Cards (Service, Path)

**Estructura:**
- Border: 1px solid rgba(201, 169, 97, 0.2)
- Padding: 40px
- Background: transparent (negro heredado)

**Hover State:**
- Border-color: rgba(201, 169, 97, 0.4) (más opaco)
- Top border animation: Gradient line aparece desde arriba
- Transition: 0.6s cubic-bezier

### 5.7 Espaciado

| Concepto | Valor |
|----------|-------|
| Gap horizontal (grid cards) | 60-80px |
| Padding vertical (secciones) | 120px |
| Padding horizontal (container) | 32px mobile, 32px desktop |
| Margin bottom (headlines) | 80-100px |

---

## 6. Sistema de Animaciones

**Tipo:** Dinámicas (notables pero elegantes)

### 6.1 Animaciones de Entrada

**fadeIn:**
- Duration: 1s
- Easing: ease-in-out
- Opacity: 0 → 1

**slideUp:**
- Duration: 0.8-1s
- Easing: ease-out
- Transform: translateY(30px) → translateY(0)
- Opacity: 0 → 1

### 6.2 Animaciones en Scroll

**Elementos con `.reveal` class:**
- Trigger: Cuando elemento entra en viewport
- Animation: slideUp
- Duration: 1s

### 6.3 Animaciones en Hover

**Links (nav):**
- Underline crece de izquierda a derecha
- Duration: 0.4s
- Color: Dorado #C9A961

**Buttons (CTA):**
- Background fill de izquierda a derecha (terra)
- Duration: 0.5s
- Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)

**Cards:**
- Border color más prominente
- Top border gradient aparece
- Duration: 0.6s

### 6.4 Animaciones Decorativas

**float (background element):**
- Movement: Y axis ±30px
- Duration: 6s
- Easing: ease-in-out
- Effect: Elementos de fondo se mueven lentamente

---

## 7. Estructura de Página (Homepage)

### 7.1 Layout General

```
┌─────────────────────────────────────┐
│ HEADER (Sticky)                     │
│ Logo | Nav                          │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ HERO SECTION                        │
│ Logo (grande) + Headline + CTA      │
│ (100vh min-height)                  │
└─────────────────────────────────────┘

    ─────────── DIVIDER ──────────

┌─────────────────────────────────────┐
│ CHOOSE PATH SECTION                 │
│ "¿Cuál es tu camino?"               │
│ [Médicos] [Negocios]                │
└─────────────────────────────────────┘

    ─────────── DIVIDER ──────────

┌─────────────────────────────────────┐
│ SERVICES SECTION                    │
│ "Nuestros Servicios"                │
│ [Service 1] [Service 2] [Service 3] │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ FOOTER                              │
│ Minimalista, info esencial solo     │
└─────────────────────────────────────┘
```

### 7.2 Secciones Detalladas

**Hero Section:**
- Background: #000000 (puro)
- Decorative element: Radial gradient glow (dorado, muy opaco)
- Animations: Todos los elementos tienen stagger (0.2s, 0.4s, 0.6s)

**Choose Path Section:**
- 2 cards en grid
- Padding: 120px vertical
- Gap: 60px
- On mobile: 1 column

**Services Section:**
- 3 cards en grid auto
- Padding: 120px vertical
- Cards con border-top (underline efecto)
- Gap: 80px

---

## 8. Responsive Design

### 8.1 Breakpoints

| Dispositivo | Width | Layout |
|-------------|-------|--------|
| Mobile | 320px-767px | 1 column, padding 24px |
| Tablet | 768px-1023px | 2 columns donde aplique |
| Desktop | 1024px+ | Full layout con max-width 1200px |

### 8.2 Ajustes Responsive

**Mobile:**
- Font sizes: reducir 10-15%
- Padding vertical (secciones): 80px en lugar de 120px
- Gap (cards): reducir a 40-60px
- Hero height: mantener 100vh o min 80vh

**Tablet:**
- Ajustes menores de font size
- 2 columns para cards donde aplique

---

## 9. Integración Técnica

### 9.1 Tipografía

**Google Fonts imports:**
```
https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@100;300;400;500;600&family=DM+Sans:wght@400;500;600&display=swap
```

### 9.2 Variables CSS

```css
:root {
    --color-bg: #000000;
    --color-white: #FFFFFF;
    --color-gold: #C9A961;
    --color-terra: #B8674F;
    --color-gray-light: #E8E8E8;
    --color-gray-dark: #333333;
    
    --font-serif: 'Playfair Display', serif;
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-accent: 'DM Sans', sans-serif;
    
    --transition-default: 0.4s ease-in-out;
    --transition-slow: 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

### 9.3 Archivos Necesarios

- `styles.css` — Estilos globales (consolidado)
- `script.js` — Animaciones y interactividad (scroll reveal, etc)
- Tipografía: Google Fonts (preload en <head>)

---

## 10. Inspiración Visual

**Referencias:**
- **Zara:** Minimalismo extremo, mucho whitespace, tipografía delgada
- **Nude Project:** Acentos dorados elegantes, tipografía moderna, animaciones dinámicas
- **UVU Club:** Grid limpio, colores tierra, interactividad sutil

---

## 11. Principios de Diseño

1. **Menos es más:** Whitespace es elemento activo de diseño
2. **Tipografía como protagonista:** Muy pocas imágenes, texto gobierna
3. **Elegancia sin frivolidad:** Premium pero no ostentoso
4. **Animaciones propositivas:** Movimiento que comunica, no distrae
5. **Contraste extremo:** Negro + blanco + acentos dorados
6. **Coherencia total:** Logo, tipografía, colores, animaciones trabajan juntas

---

## 12. Próximos Pasos

1. ✅ Diseño aprobado
2. 🔄 Implementación en código (update styles.css + script.js)
3. 🔄 Integración de 6 páginas (index, servicios, casos, etc)
4. 🔄 Testing responsive (320px, 768px, 1440px)
5. 🔄 Optimización de rendimiento (minify, gzip)
6. 🔄 Deploy a GitHub

---

**Documento creado:** 2026-04-17  
**Diseño aprobado por:** Usuario  
**Estado:** Listo para implementación
