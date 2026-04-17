# VITA Studios Redesign — Landing de Consultoría y Crecimiento

**Date:** 2026-04-17  
**Status:** Spec  
**Owner:** Jair Maldonador  

---

## Objetivo

Transformar VITA Studios en un **landing minimalista (estilo Zara)** enfocado en servicios de consultoría, optimización con IA y prospección de oportunidades. Diseño para venta directa, landing estático sin backend.

---

## Visión

Un sitio elegante, aesthetic, minimalista que comunique profesionalismo y crecimiento. Dirigido a:
- Marcas personales
- Pequeños y medianos negocios
- Emprendedores que buscan optimización y crecimiento

---

## Modelo de Negocio: Dos Tracks Especializados

El sitio tiene **una presencia unificada pero bifurcada**, dirigida a dos nichos clave:

### **Track 1: Profesionales Médicos**
- Doctores, cirujanos, especialistas en salud
- Necesidades: Crecimiento de práctica, branding médico, captura de pacientes
- Servicios: Optimización web médica, campañas de salud, branding profesional con IA

### **Track 2: Comercio y Retail**
- Negocios en centros comerciales, retail, comercio local
- Necesidades: Visibilidad, atracción de clientes, crecimiento de ventas
- Servicios: Optimización de presencia, campañas de marketing, branding con IA

---

## Servicios Principales (Adaptables a Ambos Tracks)

### 1. Optimización Integral con IA
Automatización y mejora de procesos mediante IA. Incluye:
- Desarrollo de software personalizado
- Diseño/optimización de web
- Campañas de branding inteligentes
- Estrategias de marketing con IA

### 2. Consultoría Estratégica
Análisis personalizado y prospección de oportunidades:
- Diagnóstico de negocio
- Identificación de áreas de crecimiento
- Recomendaciones tácticas específicas
- Acompañamiento en transformación

---

## Arquitectura Técnica

### Stack
- **HTML5** — estructura semántica
- **CSS3** — diseño minimalista, responsive
- **JavaScript** — interacciones suaves, animaciones, manejo de formulario

### Archivos
- `index.html` — landing completo (una sola página)
- `styles.css` — estilos minimalistas, palette Zara-like (neutrales + accent colors)
- `script.js` — scroll suave, interacciones, validación de formulario

### Dominio
- Mantiene **vitastudios.com** (no migra)
- Desplegado en Vercel (infraestructura actual)

---

## Estructura del Landing (Dos Tracks)

### 1. Header / Navigation
- Logo minimalista VITA Studios
- Nav links: Inicio | Servicios | Casos | Contacto
- Diseño sticky en scroll
- Tipografía limpia, espacios en blanco

### 2. Hero Section
- Headline: "Crecimiento y Optimización para tu Negocio"
- Subheadline: "Potenciado con IA y Estrategia Personalizada"
- **Bifurcación clara (CTA doble):**
  - Botón 1: "Soy Profesional Médico"
  - Botón 2: "Tengo Negocio de Retail/Comercio"
- Diseño: Dos botones lado a lado (desktop), stack (móvil)

### 3. Contenido Dinámico (Cambia según Track seleccionado)

#### **Track Médicos:**
- Headline secundario: "Crecimiento para tu Práctica Médica"
- Servicios enfocados: Branding médico, captura de pacientes, web médica
- Casos: Cirujanos, doctores, especialistas

#### **Track Retail:**
- Headline secundario: "Visibilidad y Crecimiento para tu Comercio"
- Servicios enfocados: Marketing local, presencia digital, campañas retail
- Casos: Negocios en centros comerciales, retail, comercio

### 4. Servicios (Cartas Minimalistas)
- **Grid de 2 servicios principales** (responsive)
- Cada servicio: ícono + título + descripción + beneficios específicos
- Hover suave
- Copy adaptado a cada track

### 5. Casos de Éxito (Filtrados por Track)
- **Grid/carousel** con casos relevantes al track seleccionado
- Datos: logo cliente, resultado cuantificable, industria
- Diseño modular
- Opción: Mostrar "Otros casos en distintas industrias" (para demostrar versatilidad)

### 6. Formulario de Contacto
- Campos: Nombre, Email, Teléfono, Track (pre-seleccionado), Tipo de Servicio, Mensaje
- Integración: Email simple (Formspree MVP)
- Validación frontend
- Feedback visual

### 7. Footer
- Logo, links, redes sociales
- CTA secundario
- Año/copyright

---

## Estética y Diseño

### Principios
- **Minimalista:** máximo espacio en blanco, menos es más
- **Elegante:** tipografía sofisticada, colores neutrales
- **Aesthetic:** coherencia visual, detalles cuidados
- **Referencia:** Zara, Apple, marcas premium modernas

### Paleta de Colores
- **Base:** Blanco/Off-white, grises claros (#f9f9f9, #f0f0f0)
- **Texto:** Negro profundo (#1a1a1a)
- **Accent:** Un color principal (azul oscuro, terracota o similar) + secundario sutil
- **Neutro:** Grises para bordes, separadores

### Tipografía
- **Headings:** Fuente moderna, limpia (e.g., Inter, Poppins, Montserrat)
- **Body:** Fuente legible (e.g., Inter, Source Sans Pro)
- **Sizes:** Jerarquía clara (h1 > h2 > h3 > p)

### Espaciado
- Generoso padding/margin para "respiro visual"
- Secciones con gaps claros
- Responsive: ajusta tamaños en móvil

---

## Flujo de Usuario

1. Llega al hero → lee propuesta → entiende servicios
2. Navega a casos → valida experiencia y resultados
3. Completa formulario de contacto → envía consulta
4. Recibe confirmación y Jair responde manualmente

---

## MVP Scope (Hoy)

**In Scope:**
- ✅ Header + Nav
- ✅ Hero section con **bifurcación clara (dos botones CTA)**
- ✅ Contenido dinámico (cambia según track seleccionado)
  - ✅ Copy específico para médicos
  - ✅ Copy específico para retail
- ✅ Servicios adaptados a cada track
- ✅ Grid de casos (5-8 casos divididos por track)
- ✅ Formulario de contacto (track pre-seleccionado)
- ✅ Footer
- ✅ Responsive mobile/tablet/desktop
- ✅ Animaciones suaves (transiciones entre tracks)

**Out of Scope (v2/después):**
- Blog/recursos específicos por sector
- Precios dinámicos
- Sistema de booking integrado
- Testimonios/reviews complejos
- Multilanguage
- Subdomains separados (por ahora todo en un sitio)

---

## Casos de Éxito — Contenido Requerido

Jair debe proporcionar (para cargar hoy):
- Logo/nombre cliente
- Servicio utilizado
- Resultado (métrica: % aumento, dinero ahorrado, tiempo reducido, etc.)
- Breve descripción (1-2 líneas)
- Opcional: imagen/screenshot

**Mínimo para MVP:** 3-5 casos

---

## Integraciones

### Formulario de Contacto
- **MVP:** Formspree o email simple
- **Producción futura:** Zapier a CRM, notificaciones a Slack

### Analytics
- Google Analytics básico (tracking de conversiones)
- Opcional: Hotjar para heatmaps

---

## Performance y SEO

- **Mobile-first** responsive design
- **Core Web Vitals:** LCP, FID, CLS optimizados
- **Meta tags:** título, descripción, og:image
- **Keywords:** "consultoría", "optimización IA", "crecimiento negocio", etc.
- **Structured data:** Schema.org para servicio

---

## Próximos Pasos

1. **Hoy:** Crear index.html + styles.css + script.js (MVP)
2. **Mañana/semana:** Pulir diseño, agregar más casos, mejorar animaciones
3. **Después:** Blog, testimonios, integración CRM completa, múltiples idiomas

---

## Criterios de Éxito

- ✅ Landing funcional y visualmente minimalista hoy
- ✅ Formulario de contacto operativo
- ✅ Responsive en todos los dispositivos
- ✅ Jair puede comenzar prospección hoy
- ✅ Carga rápido (< 2s)
- ✅ Comunica clara y elegantemente los 3 servicios
