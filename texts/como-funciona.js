/**
 * Textos de como-funciona.html
 * Editá este archivo para cambiar cualquier texto de la página "Cómo funciona".
 * No hace falta tocar el HTML ni el CSS.
 *
 * Estructura: window.DAG_TEXTS["clave"] = { es: "texto en español", en: "english text" }
 */

window.DAG_TEXTS = window.DAG_TEXTS || {};

/* ════════════════════════════════════════════════════════════
   NAVEGACIÓN — MENÚ MÓVIL
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["nav.mob.caracteristicas"] = { es: "Características", en: "Features" };
window.DAG_TEXTS["nav.mob.como-funciona"]   = { es: "Cómo funciona",   en: "How it works" };
window.DAG_TEXTS["nav.mob.dashboard"]       = { es: "Dashboard",       en: "Dashboard" };
window.DAG_TEXTS["nav.mob.cta"]             = { es: "Contactanos",    en: "Contact us"  };

/* ════════════════════════════════════════════════════════════
   NAVEGACIÓN — BARRA SUPERIOR
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["nav.caracteristicas"]  = { es: "Características", en: "Features" };
window.DAG_TEXTS["nav.como-funciona"]    = { es: "Cómo funciona",   en: "How it works" };
window.DAG_TEXTS["nav.dashboard"]        = { es: "Dashboard",       en: "Dashboard" };

/* ════════════════════════════════════════════════════════════
   BREADCRUMB
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["bc.inicio"]   = { es: "Inicio",         en: "Home" };
window.DAG_TEXTS["bc.current"]  = { es: "Cómo funciona",  en: "How it works" };

/* ════════════════════════════════════════════════════════════
   HERO DE PÁGINA
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["hero.label"]       = { es: "Del campo al dashboard en cuatro pasos", en: "From field to dashboard in four steps" };
window.DAG_TEXTS["hero.title.line1"] = { es: "Del vuelo al informe,",                  en: "From flight to report," };
window.DAG_TEXTS["hero.title.line2"] = { es: "sin complicaciones",                     en: "no complications" };
window.DAG_TEXTS["hero.sub"]         = { es: "Todo el proceso es automático una vez que subís el video. No hace falta ser técnico ni tener conocimientos de IA. Si sabés volar un dron y usar una app, alcanza.", en: "The entire process is automatic once you upload the video. No technical background or AI knowledge needed. If you can fly a drone and use an app, that's enough." };

/* ════════════════════════════════════════════════════════════
   PASOS — ENCABEZADO DE SECCIÓN
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["steps.label"] = { es: "El proceso paso a paso", en: "Step by step process" };
window.DAG_TEXTS["steps.title"] = { es: "Cuatro pasos, un ganado conocido", en: "Four steps, a known cattle" };

/* ════════════════════════════════════════════════════════════
   PASO 1 — VUELO
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["p1.title"]        = { es: "Sobrevolás el ganado con el dron",   en: "Fly the drone over the cattle" };
window.DAG_TEXTS["p1.text"]         = { es: "Tomás el dron, lo despegás y sobrevolás el ganado. El único requisito es que el vuelo sea a una altura constante y que el video quede grabado en el dispositivo. No hace falta ningún hardware adicional ni aplicación especial de vuelo.", en: "You take the drone, take off, and fly over the cattle. The only requirement is that the flight maintains constant altitude and the video is stored on the device. No additional hardware or special flight application is needed." };
window.DAG_TEXTS["p1.drones.label"] = { es: "Drones compatibles",              en: "Compatible drones" };
window.DAG_TEXTS["p1.drone1"]       = { es: "Cualquier dron que grabe video en MP4, AVI o MOV con resolución mínima 1080p.", en: "Any drone recording video in MP4, AVI, or MOV with minimum 1080p resolution." };
window.DAG_TEXTS["p1.drone2"]       = { es: "DJI Mini, DJI Air, DJI Mavic, DJI Phantom: todos compatibles si conocés el tamaño del sensor y la focal de la cámara.", en: "DJI Mini, DJI Air, DJI Mavic, DJI Phantom: all compatible if you know the camera sensor size and focal length." };
window.DAG_TEXTS["p1.drone3"]       = { es: "Autel EVO, Parrot ANAFI y equivalentes: igualmente compatibles.", en: "Autel EVO, Parrot ANAFI and equivalents: equally compatible." };
window.DAG_TEXTS["p1.drone4"]       = { es: "Si no sabés el sensor de tu cámara, lo podés buscar en el manual del equipo o en las especificaciones técnicas del fabricante.", en: "If you don't know your camera sensor, you can look it up in the equipment manual or the manufacturer's technical specs." };
window.DAG_TEXTS["p1.alt.label"]    = { es: "Alturas recomendadas",            en: "Recommended altitudes" };
window.DAG_TEXTS["p1.table.alt"]    = { es: "Altura (metros)",                 en: "Altitude (meters)" };
window.DAG_TEXTS["p1.table.prec"]   = { es: "Precisión estimada",              en: "Estimated accuracy" };
window.DAG_TEXTS["p1.table.vis"]    = { es: "Animales visibles",               en: "Visible animals" };
window.DAG_TEXTS["p1.table.rec"]    = { es: "Recomendado para",                en: "Recommended for" };
window.DAG_TEXTS["p1.r1.prec"]     = { es: "Muy alta",                        en: "Very high" };
window.DAG_TEXTS["p1.r1.vis"]      = { es: "Ganados chicos",          en: "Small cattles" };
window.DAG_TEXTS["p1.r1.rec"]      = { es: "Vuelos mas largos, pero precisos",         en: "Longer, more precise flights" };
// window.DAG_TEXTS["p1.r2.prec"]     = { es: "Alta — óptima",                   en: "High — optimal" };
// window.DAG_TEXTS["p1.r2.vis"]      = { es: "ganados medianos (50–200 ha)",      en: "Medium cattles (50–200 ha)" };
// window.DAG_TEXTS["p1.r2.rec"]      = { es: "La mayoría de los casos",         en: "Most use cases" };
window.DAG_TEXTS["p1.r3.prec"]     = { es: "Media",                           en: "Medium" };
window.DAG_TEXTS["p1.r3.vis"]      = { es: "Ganados grandes en poco tiempo",        en: "Large cattles in little effort" };
window.DAG_TEXTS["p1.r3.rec"]      = { es: "Ganados numerosos",                en: "Larger cattles" };
window.DAG_TEXTS["p1.r4.prec"]     = { es: "Reducida",                        en: "Reduced" };
window.DAG_TEXTS["p1.r4.vis"]      = { es: "Cobertura máxima",                en: "Maximum coverage" };
window.DAG_TEXTS["p1.r4.rec"]      = { es: "Solo conteo, sin peso preciso",   en: "Count only, no precise weight" };

/* ════════════════════════════════════════════════════════════
   PASO 2 — SUBIR VIDEO
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["p2.title"]        = { es: "Subís el video con los datos del vuelo", en: "Upload the video with flight data" };
window.DAG_TEXTS["p2.text"]         = { es: "Con el video descargado del dron, abrís la app de escritorio DAG (Windows, macOS o Linux) o entrás a la web. Seleccionás el video, completás los datos del vuelo y confirmás. Eso es todo por tu parte.", en: "With the video downloaded from your drone, you open the DAG desktop app (Windows, macOS, or Linux) or go to the web. Select the video, fill in the flight data, and confirm. That's all you need to do." };
window.DAG_TEXTS["p2.callout"]      = { es: "El video podés subirlo estando en el campo (si tenés señal) o cuando llegás a la casa. El procesamiento corre en los servidores de DAG, no en tu computadora, así que no necesitás una PC potente.", en: "You can upload the video from the field (if you have signal) or when you get home. Processing runs on DAG's servers, not your computer, so you don't need a powerful PC." };
window.DAG_TEXTS["p2.datos.label"]  = { es: "Datos que ingresás",             en: "Data you enter" };
window.DAG_TEXTS["p2.dato1"]        = { es: "Lote y ganado al que pertenece el vuelo.", en: "Property and cattle the flight belongs to." };
window.DAG_TEXTS["p2.dato2"]        = { es: "Altura de vuelo en metros (podés leerla del log del dron o de la telemetría).", en: "Flight altitude in meters (readable from drone log or telemetry)." };
window.DAG_TEXTS["p2.dato3"]        = { es: "El dron usado o, si no está en la lista, el tamaño del sensor (mm) y la distancia focal de la lente.", en: "Camera model or, if not listed, sensor size (mm) and lens focal length." };
window.DAG_TEXTS["p2.dato4"]        = { es: "Fecha y hora del vuelo (por defecto, el sistema usa la carga).", en: "Date and time (by default the system uses upload time)." };

/* ════════════════════════════════════════════════════════════
   PASO 3 — PROCESAMIENTO IA
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["p3.title"]          = { es: "La IA procesa el video automáticamente",   en: "AI automatically processes the video" };
window.DAG_TEXTS["p3.text"]           = { es: "Una vez que el video llega a los servidores de DAG, el pipeline de Inteligencia Artificial se ejecuta automáticamente. No hace falta hacer nada. El sistema te notifica cuando termina.", en: "Once the video reaches DAG's servers, the Artificial Intelligence pipeline runs automatically. Nothing else needed. The system notifies you when it's done." };
window.DAG_TEXTS["p3.callout.title"]  = { es: "¿Cuánto tarda?",                           en: "How long does it take?" };
window.DAG_TEXTS["p3.callout.text"]   = { es: "El tiempo de procesamiento depende de la duración y resolución del video y de la carga actual de los servidores. Como referencia orientativa: un video de 10 minutos en 1080p tarda entre 15 y 30 minutos en procesarse completamente. Recibís una notificación en la app cuando los resultados están disponibles.", en: "Processing time depends on video duration, resolution, and current server load. As a rough reference: a 10-minute 1080p video takes between 15 and 30 minutes to fully process. You receive an app notification when results are available." };
window.DAG_TEXTS["p3.pipeline.label"] = { es: "Pipeline de procesamiento",                en: "Processing pipeline" };
window.DAG_TEXTS["p3.pipe1.title"]    = { es: "1. Detección",                             en: "1. Detection" };
window.DAG_TEXTS["p3.pipe1.desc"]     = { es: "Se analiza cada fotograma y detecta todos los bovinos visibles en el cuadro, generando una máscara de segmentación para cada animal.", en: "YOLOv8 analyzes each frame and detects all visible cattle, generating a segmentation mask for each animal." };
// window.DAG_TEXTS["p3.pipe2.title"]    = { es: "2. Tracking",                              en: "2. Tracking" };
// window.DAG_TEXTS["p3.pipe2.desc"]     = { es: "ByteTrack asigna un ID único a cada animal y lo rastrea de fotograma en fotograma. Solo confirma un animal cuando aparece en 15 cuadros consecutivos.", en: "ByteTrack assigns a unique ID to each animal and tracks it frame by frame. An animal is only confirmed after 15 consecutive frames." };
window.DAG_TEXTS["p3.pipe3.title"]    = { es: "2. GSD y peso",                            en: "2. GSD & weight" };
window.DAG_TEXTS["p3.pipe3.desc"]     = { es: "Usando la altura del vuelo y los parámetros de la cámara, calcula el GSD y lo usa para obtener el área real de cada silueta, de donde deriva el peso estimado.", en: "Using flight altitude and camera parameters, calculates GSD and uses it to get each silhouette's real area, from which it derives estimated weight." };
window.DAG_TEXTS["p3.pipe4.title"]    = { es: "3. Clasificación",                         en: "3. Classification" };
window.DAG_TEXTS["p3.pipe4.desc"]     = { es: "Aplica análisis estadistico sobre la densidad corporal de toda el ganado para clasificar a cada animal en NORMAL, TERNERO, BAJO PESO o SOBREPESO.", en: "Applies statistical analysis on the entire cattle's body density to classify each animal as NORMAL, CALF, UNDERWEIGHT, or OVERWEIGHT." };
window.DAG_TEXTS["p3.pipe5.title"]    = { es: "4. PDF + video",                           en: "4. PDF + video" };
window.DAG_TEXTS["p3.pipe5.desc"]     = { es: "Genera el informe PDF completo y el video anotado con los IDs y datos de cada animal superpuestos.", en: "Generates the complete PDF report and annotated video with each animal's IDs and data overlaid." };

/* ════════════════════════════════════════════════════════════
   PASO 4 — RESULTADOS
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["p4.title"]   = { es: "Chequeás los resultados y tomás decisiones",     en: "Review results and make decisions" };
window.DAG_TEXTS["p4.text"]    = { es: "El dashboard se actualiza automáticamente con los datos del vuelo procesado. Podés ver el conteo de cabezas, el peso promedio, la distribución de condición corporal y el video anotado. Si algún animal generó una alerta, aparece resaltado. El informe PDF ya está disponible para descargar o compartir.", en: "The dashboard automatically updates with the processed flight data. You can see head count, average weight, body condition distribution, and annotated video. If any animal triggered an alert, it's highlighted. The PDF report is available to download or share." };
window.DAG_TEXTS["p4.bullet1"] = { es: "Si el peso promedio del ganado bajó respecto al vuelo anterior, podés comparar directamente en el gráfico de evolución.", en: "If the cattle average weight dropped compared to the previous flight, you can compare directly on the evolution chart." };
window.DAG_TEXTS["p4.bullet2"] = { es: "Los animales clasificados como BAJO PESO quedan identificados para que puedas ubicarlos en el campo.", en: "Animals classified as UNDERWEIGHT are identified so you can locate them in the field." };
window.DAG_TEXTS["p4.bullet3"] = { es: "El informe PDF se genera listo puede mandar por cualquier medio.", en: "The generated PDF report can be directly sent by any means." };
window.DAG_TEXTS["p4.bullet4"] = { es: "Todo el historial queda guardado. Podés comparar cualquier vuelo con vuelos de meses anteriores.", en: "All history is saved. You can compare any flight with flights from months earlier." };
window.DAG_TEXTS["p4.dash.link"]= { es: "Ver el dashboard en detalle",                  en: "View dashboard in detail" };

/* ════════════════════════════════════════════════════════════
   REQUISITOS
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["req.label"]   = { es: "Requisitos",                       en: "Requirements" };
window.DAG_TEXTS["req.title"]   = { es: "¿Qué necesitás para empezar?",     en: "What do you need to get started?" };
window.DAG_TEXTS["req.sub"]     = { es: "Los mínimos son pocos y accesibles para cualquier productor ganadero moderno.", en: "The requirements are minimal and accessible for any modern livestock producer." };
window.DAG_TEXTS["req.dron.title"]  = { es: "Un dron con cámara",           en: "A drone with camera" };
window.DAG_TEXTS["req.dron.desc"]   = { es: "Cualquier dron que grabe video en MP4, AVI o MOV a mínimo 1080p. DJI, Autel, Parrot o equivalentes. No hace falta un equipo de alta gama.", en: "Any drone recording MP4, AVI, or MOV at minimum 1080p. DJI, Autel, Parrot, or equivalents. No high-end equipment needed." };
window.DAG_TEXTS["req.pc.title"]    = { es: "PC o celular con internet",    en: "PC or phone with internet" };
window.DAG_TEXTS["req.pc.desc"]     = { es: "La app corre en Windows, macOS y Linux. También funciona desde cualquier navegador moderno. Para subir el video solo necesitás conexión de banda ancha estándar.", en: "The app runs on Windows, macOS, and Linux. Also works from any modern browser. To upload the video you only need a standard broadband connection." };
window.DAG_TEXTS["req.datos.title"] = { es: "Datos del vuelo",              en: "Flight data" };
window.DAG_TEXTS["req.datos.desc"]  = { es: "Altura de vuelo en metros y parámetros de la cámara (sensor y focal). Están en el manual del dron o en las especificaciones del fabricante.", en: "Flight altitude in meters and camera parameters (sensor and focal). They're in the drone manual or manufacturer's specifications." };

/* ════════════════════════════════════════════════════════════
   CTA
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["cta.label"]   = { es: "¿Tenés el dron? El resto lo hacemos nosotros.", en: "Got a drone? We'll handle the rest." };
window.DAG_TEXTS["cta.title1"]  = { es: "Empezá a conocer tu ganado",    en: "Start knowing your cattle" };
window.DAG_TEXTS["cta.title2"]  = { es: "en el próximo vuelo",          en: "on the next flight" };
window.DAG_TEXTS["cta.sub"]     = { es: "Escribinos y te mostramos cómo funciona en tu establecimiento, con tus ganados y tu campo.", en: "Reach out and we'll show you how it works on your property, with your cattles and your cattle." };
window.DAG_TEXTS["cta.btn1"]    = { es: "Escribinos",                   en: "Get in touch" };
window.DAG_TEXTS["cta.btn2"]    = { es: "Ver características",          en: "See features" };

/* ════════════════════════════════════════════════════════════
   FOOTER
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["footer.desc"]        = { es: "Detección Activa de Ganado. Plataforma argentina de gestión ganadera con drones e Inteligencia Artificial.", en: "Active Cattle Detection. Argentine livestock management platform using drones and Artificial Intelligence." };
window.DAG_TEXTS["footer.badge"]       = { es: "Proyecto Final FIUBA 2024",  en: "FIUBA Final Project 2024" };
window.DAG_TEXTS["footer.col.product"] = { es: "Producto",                   en: "Product" };
window.DAG_TEXTS["footer.link.caract"] = { es: "Características",            en: "Features" };
window.DAG_TEXTS["footer.link.como"]   = { es: "Cómo funciona",              en: "How it works" };
window.DAG_TEXTS["footer.col.project"] = { es: "Proyecto",                   en: "Project" };
window.DAG_TEXTS["footer.link.contact"]= { es: "Contacto",                   en: "Contact" };
window.DAG_TEXTS["footer.copy"]        = { es: "Detección Activa de Ganado", en: "Active Cattle Detection" };
window.DAG_TEXTS["footer.made"]        = { es: "Hecho en Argentina",         en: "Made in Argentina" };
