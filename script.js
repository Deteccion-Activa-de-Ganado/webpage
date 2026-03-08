/* ===== DAG – Detección Activa de Ganado | Main Script ===== */

/* ---------- Language Data ---------- */
const translations = {
  es: {
    /* nav */
    nav_features:     'Características',
    nav_how:          'Cómo Funciona',
    nav_technology:   'Tecnología',
    nav_benefits:     'Beneficios',
    nav_contact:      'Contacto',
    nav_demo:         'Ver Demo',

    /* hero */
    hero_badge:       '🐄 Sistema de Monitoreo Bovino',
    hero_title:       'Detección <span>Activa</span> de Ganado Inteligente',
    hero_desc:        'Monitorea, localiza y gestiona tu hato ganadero en tiempo real con inteligencia artificial, GPS de precisión y análisis predictivo de salud animal.',
    hero_cta_primary: 'Solicitar Demo',
    hero_cta_secondary:'Ver Características',
    hero_stat_head:   'Cabezas Monitoreadas',
    hero_stat_acc:    'Precisión Detección',
    hero_stat_alert:  'Alertas en Tiempo Real',
    mockup_title:     'DAG · Panel de Control',
    mockup_sat:       '🛰 GPS Activo',
    mockup_animals:   'Animales',
    mockup_healthy:   'Sanos',
    mockup_alerts:    'Alertas',

    /* trusted */
    trusted_label:    'Adoptado por ganaderos líderes en',

    /* features */
    features_tag:     'Características',
    features_title:   'Todo lo que necesitas para gestionar tu ganado',
    features_desc:    'Nuestra plataforma combina las últimas tecnologías para ofrecerte control total sobre tu hato ganadero.',
    feat1_title:      'Rastreo GPS en Tiempo Real',
    feat1_desc:       'Collares IoT con GPS de alta precisión ± 1 m. Visualiza la ubicación exacta de cada animal en el mapa interactivo.',
    feat2_title:      'Detección con IA',
    feat2_desc:       'Algoritmos de visión por computadora identifican automáticamente cada animal, detectan comportamientos inusuales y anomalías de salud.',
    feat3_title:      'Alertas de Salud',
    feat3_desc:       'Sensores biométricos monitorean temperatura, frecuencia cardíaca y actividad. Recibe alertas antes de que un problema se agrave.',
    feat4_title:      'Geocercas Virtuales',
    feat4_desc:       'Define zonas de pastoreo y recibe notificaciones inmediatas cuando un animal abandona el área delimitada.',
    feat5_title:      'Analítica Avanzada',
    feat5_desc:       'Dashboards con datos históricos, tendencias de peso, ciclos reproductivos y proyecciones de productividad por hato.',
    feat6_title:      'App Móvil',
    feat6_desc:       'Gestiona todo desde tu smartphone. Disponible para iOS y Android con modo offline para zonas sin cobertura.',

    /* how it works */
    how_tag:          'Proceso',
    how_title:        'Cómo Funciona DAG',
    how_desc:         'Implementación sencilla en 4 pasos para digitalizar completamente tu operación ganadera.',
    step1_title:      'Instalación de Collares',
    step1_desc:       'Colocamos los collares IoT en cada animal. El proceso toma solo minutos y no causa estrés al animal.',
    step2_title:      'Configuración de Sensores',
    step2_desc:       'Instalamos las cámaras de visión artificial y los nodos de comunicación LoRa en tu rancho.',
    step3_title:      'Activación de la Plataforma',
    step3_desc:       'Tu panel de control personalizado se activa y comienza a recibir datos en tiempo real desde el primer día.',
    step4_title:      'Monitoreo Continuo',
    step4_desc:       'Recibe alertas, reportes automáticos y recomendaciones de gestión basadas en IA 24/7.',

    /* tech */
    tech_tag:         'Tecnología',
    tech_title:       'Tecnología de Punta para tu Ganadería',
    tech_desc:        'Combinamos IoT, inteligencia artificial y comunicaciones de largo alcance para crear la solución más completa del mercado.',
    tech1:            'Collares GPS con batería de hasta 12 meses',
    tech2:            'Redes LoRaWAN con alcance de hasta 15 km',
    tech3:            'Modelos de IA entrenados con más de 500,000 imágenes bovinas',
    tech4:            'Cifrado AES-256 en todas las comunicaciones',
    tech5:            'Servidores en la nube con 99.9 % de disponibilidad',
    tech6:            'Integración con sistemas ERP y de gestión ganadera',
    stat1_num:        '< 5s',
    stat1_lbl:        'Latencia promedio de datos',
    stat2_num:        '98.4%',
    stat2_lbl:        'Precisión de detección',
    stat3_num:        '15 km',
    stat3_lbl:        'Cobertura por nodo LoRa',
    stat4_num:        '12 m',
    stat4_lbl:        'Duración de batería del collar',

    /* benefits */
    ben_tag:          'Beneficios',
    ben_title:        'Transforma tu Operación Ganadera',
    ben_desc:         'Ganaderos que adoptan DAG ven resultados medibles desde los primeros tres meses de operación.',
    ben1_title:       'Reduce Pérdidas',
    ben1_desc:        'Detecta enfermedades en etapas tempranas y evita robo de ganado con alertas en tiempo real. Ahorra hasta 35 % en pérdidas.',
    ben2_title:       'Mayor Productividad',
    ben2_desc:        'Optimiza el pastoreo, mejora la gestión reproductiva y aumenta la ganancia de peso promedio en un 18 %.',
    ben3_title:       'Decisiones Basadas en Datos',
    ben3_desc:        'Accede a reportes detallados e indicadores clave de desempeño para tomar decisiones estratégicas informadas.',
    ben4_title:       'Trazabilidad Completa',
    ben4_desc:        'Cumple con normativas sanitarias y de exportación con el historial completo de cada animal desde nacimiento.',
    ben5_title:       'Ahorro de Tiempo',
    ben5_desc:        'Automatiza conteos, revisiones de salud y reportes. Ahorra más de 4 horas diarias de trabajo operativo.',
    ben6_title:       'Escalable y Flexible',
    ben6_desc:        'Desde 50 hasta 50,000 cabezas. Planes adaptados a cada tamaño de operación, con soporte especializado.',

    /* testimonials */
    test_tag:         'Testimonios',
    test_title:       'Lo que Dicen Nuestros Clientes',
    test1_text:       '"DAG transformó completamente nuestra operación. Detectamos un brote de fiebre aftosa 72 horas antes gracias a las alertas de temperatura. Salvamos casi todo el hato."',
    test1_name:       'Roberto Garza',
    test1_role:       'Ganadero, Sonora · 1,200 cabezas',
    test2_text:       '"El rastreo GPS nos ayudó a recuperar 23 animales que habían cruzado la cerca durante una tormenta. Sin DAG, esos animales se habrían perdido."',
    test2_name:       'María Fernández',
    test2_role:       'Administradora, Jalisco · 650 cabezas',
    test3_text:       '"Los reportes automáticos me ahorran horas de trabajo al mes. Ahora tengo datos precisos para presentar a mis socios y mejorar las decisiones de negocio."',
    test3_name:       'Carlos Mendoza',
    test3_role:       'Director Técnico, Chihuahua · 3,800 cabezas',

    /* cta */
    cta_title:        '¿Listo para Digitalizar tu Ganadería?',
    cta_desc:         'Únete a los ganaderos que ya confían en DAG. Solicita una demostración personalizada sin costo.',
    cta_btn1:         'Solicitar Demo Gratuita',
    cta_btn2:         'Hablar con un Experto',

    /* contact */
    con_tag:          'Contacto',
    con_title:        'Contáctanos',
    con_desc:         'Nuestro equipo de especialistas está listo para ayudarte a implementar DAG en tu operación ganadera.',
    con_phone_label:  'Teléfono',
    con_phone:        '+52 (800) 326-4263',
    con_location:     'Monterrey, Nuevo León, México',
    form_name:        'Nombre Completo',
    form_email:       'Correo Electrónico',
    form_phone:       'Teléfono (opcional)',
    form_herd:        'Tamaño del Hato',
    form_herd_opt0:   'Seleccionar...',
    form_herd_opt1:   '50 – 200 cabezas',
    form_herd_opt2:   '201 – 500 cabezas',
    form_herd_opt3:   '501 – 2,000 cabezas',
    form_herd_opt4:   'Más de 2,000 cabezas',
    form_message:     'Mensaje',
    form_submit:      'Enviar Mensaje',

    /* footer */
    footer_desc:      'Sistema inteligente de monitoreo y rastreo bovino. Tecnología de punta para la ganadería moderna.',
    footer_col1:      'Producto',
    footer_col2:      'Empresa',
    footer_col3:      'Recursos',
    footer_link_features: 'Características',
    footer_link_how:      'Cómo Funciona',
    footer_link_pricing:  'Precios',
    footer_link_integrations: 'Integraciones',
    footer_link_about:    'Nosotros',
    footer_link_blog:     'Blog',
    footer_link_careers:  'Empleos',
    footer_link_press:    'Prensa',
    footer_link_docs:     'Documentación',
    footer_link_api:      'API Reference',
    footer_link_support:  'Soporte',
    footer_link_status:   'Estado del Sistema',
    footer_copy:      '© 2025 Detección Activa de Ganado S.A. de C.V. Todos los derechos reservados.',
    footer_privacy:   'Privacidad',
    footer_terms:     'Términos',
  },

  en: {
    /* nav */
    nav_features:     'Features',
    nav_how:          'How It Works',
    nav_technology:   'Technology',
    nav_benefits:     'Benefits',
    nav_contact:      'Contact',
    nav_demo:         'Get Demo',

    /* hero */
    hero_badge:       '🐄 Livestock Monitoring System',
    hero_title:       '<span>Active</span> Livestock Detection & Management',
    hero_desc:        'Monitor, locate and manage your cattle herd in real time with artificial intelligence, precision GPS and predictive animal health analytics.',
    hero_cta_primary: 'Request Demo',
    hero_cta_secondary:'See Features',
    hero_stat_head:   'Animals Monitored',
    hero_stat_acc:    'Detection Accuracy',
    hero_stat_alert:  'Real-Time Alerts',
    mockup_title:     'DAG · Control Panel',
    mockup_sat:       '🛰 GPS Active',
    mockup_animals:   'Animals',
    mockup_healthy:   'Healthy',
    mockup_alerts:    'Alerts',

    /* trusted */
    trusted_label:    'Trusted by leading ranchers across',

    /* features */
    features_tag:     'Features',
    features_title:   'Everything you need to manage your herd',
    features_desc:    'Our platform combines the latest technologies to give you complete control over your cattle operation.',
    feat1_title:      'Real-Time GPS Tracking',
    feat1_desc:       'IoT collars with high-precision GPS ± 1 m. Visualize the exact location of every animal on the interactive map.',
    feat2_title:      'AI-Powered Detection',
    feat2_desc:       'Computer vision algorithms automatically identify each animal, detect unusual behaviors and health anomalies instantly.',
    feat3_title:      'Health Alerts',
    feat3_desc:       'Biometric sensors monitor temperature, heart rate and activity. Receive alerts before a problem escalates.',
    feat4_title:      'Virtual Geofences',
    feat4_desc:       'Define grazing zones and receive immediate notifications when an animal leaves the designated area.',
    feat5_title:      'Advanced Analytics',
    feat5_desc:       'Dashboards with historical data, weight trends, reproductive cycles and productivity projections per herd.',
    feat6_title:      'Mobile App',
    feat6_desc:       'Manage everything from your smartphone. Available for iOS & Android with offline mode for areas without coverage.',

    /* how it works */
    how_tag:          'Process',
    how_title:        'How DAG Works',
    how_desc:         'Simple 4-step implementation to completely digitize your cattle operation.',
    step1_title:      'Collar Installation',
    step1_desc:       'We fit IoT collars on each animal. The process takes only minutes and causes no stress to the animal.',
    step2_title:      'Sensor Setup',
    step2_desc:       'We install computer vision cameras and LoRa communication nodes across your ranch.',
    step3_title:      'Platform Activation',
    step3_desc:       'Your custom control panel goes live and begins receiving real-time data from day one.',
    step4_title:      'Continuous Monitoring',
    step4_desc:       'Receive alerts, automatic reports and AI-based management recommendations 24/7.',

    /* tech */
    tech_tag:         'Technology',
    tech_title:       'Cutting-Edge Technology for Your Ranch',
    tech_desc:        'We combine IoT, artificial intelligence and long-range communications to build the most complete solution on the market.',
    tech1:            'GPS collars with up to 12-month battery life',
    tech2:            'LoRaWAN networks with coverage up to 15 km',
    tech3:            'AI models trained on over 500,000 bovine images',
    tech4:            'AES-256 encryption on all communications',
    tech5:            'Cloud servers with 99.9% uptime',
    tech6:            'Integration with ERP and farm management systems',
    stat1_num:        '< 5s',
    stat1_lbl:        'Average data latency',
    stat2_num:        '98.4%',
    stat2_lbl:        'Detection accuracy',
    stat3_num:        '15 km',
    stat3_lbl:        'Coverage per LoRa node',
    stat4_num:        '12 mo',
    stat4_lbl:        'Collar battery life',

    /* benefits */
    ben_tag:          'Benefits',
    ben_title:        'Transform Your Cattle Operation',
    ben_desc:         'Ranchers who adopt DAG see measurable results within the first three months of operation.',
    ben1_title:       'Reduce Losses',
    ben1_desc:        'Detect diseases early and prevent cattle theft with real-time alerts. Save up to 35% in losses.',
    ben2_title:       'Higher Productivity',
    ben2_desc:        'Optimize grazing, improve reproductive management and increase average weight gain by 18%.',
    ben3_title:       'Data-Driven Decisions',
    ben3_desc:        'Access detailed reports and key performance indicators to make informed strategic decisions.',
    ben4_title:       'Full Traceability',
    ben4_desc:        'Meet health and export regulations with the complete history of every animal from birth.',
    ben5_title:       'Save Time',
    ben5_desc:        'Automate counts, health checks and reports. Save more than 4 hours of operational work daily.',
    ben6_title:       'Scalable & Flexible',
    ben6_desc:        'From 50 to 50,000 head. Plans adapted to every operation size, with dedicated support.',

    /* testimonials */
    test_tag:         'Testimonials',
    test_title:       'What Our Clients Say',
    test1_text:       '"DAG completely transformed our operation. We detected a foot-and-mouth outbreak 72 hours early thanks to temperature alerts. We saved almost the entire herd."',
    test1_name:       'Roberto Garza',
    test1_role:       'Rancher, Sonora · 1,200 head',
    test2_text:       '"The GPS tracking helped us recover 23 animals that had crossed the fence during a storm. Without DAG, those animals would have been lost."',
    test2_name:       'María Fernández',
    test2_role:       'Ranch Manager, Jalisco · 650 head',
    test3_text:       '"Automated reports save me hours of work each month. Now I have precise data to present to my partners and improve business decisions."',
    test3_name:       'Carlos Mendoza',
    test3_role:       'Technical Director, Chihuahua · 3,800 head',

    /* cta */
    cta_title:        'Ready to Digitize Your Cattle Operation?',
    cta_desc:         'Join the ranchers who already trust DAG. Request a free personalized demonstration.',
    cta_btn1:         'Get Free Demo',
    cta_btn2:         'Talk to an Expert',

    /* contact */
    con_tag:          'Contact',
    con_title:        'Get in Touch',
    con_desc:         'Our team of specialists is ready to help you implement DAG in your cattle operation.',
    con_phone_label:  'Phone',
    con_phone:        '+1 (800) DAG-HERD',
    con_location:     'Monterrey, Nuevo León, Mexico',
    form_name:        'Full Name',
    form_email:       'Email Address',
    form_phone:       'Phone (optional)',
    form_herd:        'Herd Size',
    form_herd_opt0:   'Select...',
    form_herd_opt1:   '50 – 200 head',
    form_herd_opt2:   '201 – 500 head',
    form_herd_opt3:   '501 – 2,000 head',
    form_herd_opt4:   'More than 2,000 head',
    form_message:     'Message',
    form_submit:      'Send Message',

    /* footer */
    footer_desc:      'Smart livestock monitoring and tracking system. Cutting-edge technology for modern ranching.',
    footer_col1:      'Product',
    footer_col2:      'Company',
    footer_col3:      'Resources',
    footer_link_features: 'Features',
    footer_link_how:      'How It Works',
    footer_link_pricing:  'Pricing',
    footer_link_integrations: 'Integrations',
    footer_link_about:    'About Us',
    footer_link_blog:     'Blog',
    footer_link_careers:  'Careers',
    footer_link_press:    'Press',
    footer_link_docs:     'Documentation',
    footer_link_api:      'API Reference',
    footer_link_support:  'Support',
    footer_link_status:   'System Status',
    footer_copy:      '© 2025 Detección Activa de Ganado S.A. de C.V. All rights reserved.',
    footer_privacy:   'Privacy',
    footer_terms:     'Terms',
  }
};

/* ---------- State ---------- */
function getStoredLang() {
  try { return localStorage.getItem('dag-lang'); } catch (e) { return null; }
}
function setStoredLang(lang) {
  try { localStorage.setItem('dag-lang', lang); } catch (e) { /* ignore */ }
}
let currentLang = getStoredLang() || 'es';

/* ---------- Apply Translations ---------- */
function applyLang(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!t[key]) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t[key];
    } else {
      el.innerHTML = t[key];
    }
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const parts = el.getAttribute('data-i18n-attr').split(':');
    const attr  = parts[0];
    const key   = parts[1];
    if (t[key]) el.setAttribute(attr, t[key]);
  });
  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
  currentLang = lang;
  setStoredLang(lang);
}

/* ---------- Navbar Scroll Effect ---------- */
const navbar = document.querySelector('.navbar');
function onScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Mobile Menu ---------- */
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburger?.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  const open = mobileMenu.classList.contains('open');
  hamburger.setAttribute('aria-expanded', open);
});
mobileMenu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ---------- Scroll Reveal ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---------- Counter Animation ---------- */
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * ease * 10) / 10;
    el.textContent = prefix + (target % 1 === 0 ? Math.round(value) : value.toFixed(1)) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

/* ---------- Contact Form ---------- */
const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('.form-submit');
  const originalText = btn.textContent;
  btn.textContent = currentLang === 'es' ? '✓ Enviado' : '✓ Sent';
  btn.style.background = 'var(--primary-light)';
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
    contactForm.reset();
  }, 3000);
});

/* ---------- Language Switcher ---------- */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

/* ---------- Smooth Scroll for anchor links ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ---------- Init ---------- */
applyLang(currentLang);
