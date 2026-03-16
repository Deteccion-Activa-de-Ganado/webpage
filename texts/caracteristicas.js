/**
 * Textos de caracteristicas.html
 * Editá este archivo para cambiar cualquier texto de la página de características.
 * No hace falta tocar el HTML ni el CSS.
 *
 * Estructura: window.DAG_TEXTS["clave"] = { es: "texto en español", en: "english text" }
 */

window.DAG_TEXTS = window.DAG_TEXTS || {};

/* ════════════════════════════════════════════════════════════
   NAVEGACIÓN — MENÚ MÓVIL
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["nav.mob.inicio"]       = { es: "Inicio",          en: "Home" };
window.DAG_TEXTS["nav.mob.caracteristicas"] = { es: "Características", en: "Features" };
window.DAG_TEXTS["nav.mob.como-funciona"]= { es: "Cómo funciona",   en: "How it works" };
window.DAG_TEXTS["nav.mob.dashboard"]    = { es: "Dashboard",       en: "Dashboard" };
window.DAG_TEXTS["nav.mob.cta"]          = { es: "Pedí una demo",   en: "Request a demo" };

/* ════════════════════════════════════════════════════════════
   NAVEGACIÓN — BARRA SUPERIOR
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["nav.caracteristicas"]  = { es: "Características", en: "Features" };
window.DAG_TEXTS["nav.como-funciona"]    = { es: "Cómo funciona",   en: "How it works" };
window.DAG_TEXTS["nav.dashboard"]        = { es: "Dashboard",       en: "Dashboard" };

/* ════════════════════════════════════════════════════════════
   BREADCRUMB
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["bc.inicio"]        = { es: "Inicio",         en: "Home" };
window.DAG_TEXTS["bc.current"]       = { es: "Características", en: "Features" };

/* ════════════════════════════════════════════════════════════
   HERO DE PÁGINA
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["hero.label"]       = { es: "Seis herramientas, un solo sistema",      en: "Six tools, one system" };
window.DAG_TEXTS["hero.title.line1"] = { es: "Todo lo que necesitás para",              en: "Everything you need to" };
window.DAG_TEXTS["hero.title.line2"] = { es: "conocer tu hacienda de verdad",           en: "truly know your herd" };
window.DAG_TEXTS["hero.sub"]         = { es: "Cada función de DAG fue diseñada para reducir el trabajo manual del productor ganadero y darte información exacta sobre tu rodeo sin tener que tocar un solo animal.", en: "Every DAG feature was designed to reduce manual work for the cattle producer and give you precise information about your herd without having to touch a single animal." };

/* ════════════════════════════════════════════════════════════
   FUNCIÓN 1 — CONTEO AUTOMÁTICO
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["f1.label"]   = { es: "Función 1 de 6",                         en: "Feature 1 of 6" };
window.DAG_TEXTS["f1.title"]   = { es: "Conteo automático del rodeo",             en: "Automatic herd counting" };
window.DAG_TEXTS["f1.text"]    = { es: "El motor de detección corre cuadro a cuadro sobre el video del dron usando YOLOv8, el modelo de segmentación de instancias más preciso disponible hoy. Cada animal detectado es rastreado individualmente por ByteTrack, que le asigna un ID único y lo sigue a lo largo de toda la trayectoria del vuelo.", en: "The detection engine runs frame by frame on the drone video using YOLOv8, today's most accurate instance segmentation model. Each detected animal is individually tracked by ByteTrack, which assigns it a unique ID and follows it throughout the entire flight trajectory." };
window.DAG_TEXTS["f1.bullet1"] = { es: "Un animal se confirma recién después de aparecer en 15 fotogramas consecutivos, lo que elimina falsos positivos por vegetación o sombras.", en: "An animal is confirmed only after appearing in 15 consecutive frames, eliminating false positives from vegetation or shadows." };
window.DAG_TEXTS["f1.bullet2"] = { es: "El mismo animal no se cuenta dos veces aunque el dron lo sobrevuele en distintas pasadas.", en: "The same animal is never counted twice even if the drone flies over it on different passes." };
window.DAG_TEXTS["f1.bullet3"] = { es: "Compatible con MP4, AVI y MOV. Funciona con DJI, Autel, Parrot o cualquier dron que grabe video estabilizado.", en: "Compatible with MP4, AVI, and MOV. Works with DJI, Autel, Parrot, or any drone that records stabilized video." };
window.DAG_TEXTS["f1.bullet4"] = { es: "El video procesado se genera con los bounding boxes y el ID de cada animal superpuesto, disponible para descarga.", en: "The processed video is generated with bounding boxes and each animal's ID overlaid, available for download." };

/* ════════════════════════════════════════════════════════════
   FUNCIÓN 2 — PESO ESTIMADO
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["f2.label"]   = { es: "Función 2 de 6",                         en: "Feature 2 of 6" };
window.DAG_TEXTS["f2.title"]   = { es: "Peso estimado sin tolva ni manga",        en: "Estimated weight — no crush, no scale" };
window.DAG_TEXTS["f2.text"]    = { es: "El sistema calcula el GSD (Ground Sample Distance), es decir, cuántos centímetros reales corresponden a cada píxel del video, usando la altura del vuelo, el tamaño del sensor de la cámara y la distancia focal de la lente. Con ese dato, mide el área real de la silueta de cada animal y la correlaciona con una curva de regresión calibrada sobre hacienda bovina argentina para estimar el peso vivo.", en: "The system calculates GSD (Ground Sample Distance) — how many real centimeters correspond to each video pixel — using flight altitude, camera sensor size, and lens focal length. With that value, it measures each animal's real silhouette area and correlates it with a regression curve calibrated on Argentine cattle to estimate live weight." };
window.DAG_TEXTS["f2.bullet1"] = { es: "El productor ingresa al sistema la altura del vuelo (en metros), el modelo de cámara o el tamaño del sensor y la focal.", en: "The producer enters flight altitude (in meters), camera model or sensor size, and focal length into the system." };
window.DAG_TEXTS["f2.bullet2"] = { es: "La estimación es más precisa entre 40 y 60 metros de altura. A mayor altura, el animal ocupa menos píxeles y el margen de error sube levemente.", en: "The estimate is most accurate between 40 and 60 meters altitude. Higher up, the animal covers fewer pixels and the error margin rises slightly." };
window.DAG_TEXTS["f2.bullet3"] = { es: "El resultado es el peso promedio del lote y el peso individual de cada animal identificado por ByteTrack.", en: "The result is the paddock average weight and the individual weight of each animal identified by ByteTrack." };
window.DAG_TEXTS["f2.bullet4"] = { es: "Nada de estrés pre-venta: sin arrear, sin encerrar, sin pesar en manga. El animal pasta tranquilo mientras el dron vuela.", en: "Zero pre-sale stress: no herding, no penning, no scale weighing. The animal grazes calmly while the drone flies." };

/* ════════════════════════════════════════════════════════════
   FUNCIÓN 3 — CONDICIÓN CORPORAL
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["f3.label"]          = { es: "Función 3 de 6",                 en: "Feature 3 of 6" };
window.DAG_TEXTS["f3.title"]          = { es: "Clasificación de condición corporal", en: "Body condition classification" };
window.DAG_TEXTS["f3.sub"]            = { es: "Cada animal del lote queda clasificado automáticamente en una de 4 categorías usando análisis estadístico por z-score sobre la densidad corporal de toda la tropa. Sin revisión manual, sin subjetividad.", en: "Each paddock animal is automatically classified into one of 4 categories using z-score statistical analysis on the entire herd's body density. No manual review, no subjectivity." };
window.DAG_TEXTS["f3.normal.label"]   = { es: "Normal",                         en: "Normal" };
window.DAG_TEXTS["f3.normal.desc"]    = { es: "El animal tiene un peso dentro del rango esperado para su tamaño de silueta. Condición óptima de producción.", en: "The animal's weight is within the expected range for its silhouette size. Optimal production condition." };
window.DAG_TEXTS["f3.normal.action"]  = { es: "✓ Sin acción requerida",         en: "✓ No action required" };
window.DAG_TEXTS["f3.calf.label"]     = { es: "Ternero",                        en: "Calf" };
window.DAG_TEXTS["f3.calf.desc"]      = { es: "Animal con silueta significativamente más pequeña que el promedio del rodeo. Detectado como ternero o vaquillona de año.", en: "Animal with a significantly smaller silhouette than the herd average. Detected as a calf or yearling heifer." };
window.DAG_TEXTS["f3.calf.action"]    = { es: "ℹ Registrar y hacer seguimiento", en: "ℹ Record and follow up" };
window.DAG_TEXTS["f3.thin.label"]     = { es: "Bajo Peso",                      en: "Underweight" };
window.DAG_TEXTS["f3.thin.desc"]      = { es: "El área de silueta es inusualmente pequeña en relación al peso estimado, lo que puede indicar problemas sanitarios, parasitosis o carga genética.", en: "The silhouette area is unusually small relative to the estimated weight, which may indicate health problems, parasites, or genetic issues." };
window.DAG_TEXTS["f3.thin.action"]    = { es: "⚠ Revisar con veterinario",      en: "⚠ Review with vet" };
window.DAG_TEXTS["f3.fat.label"]      = { es: "Sobrepeso",                      en: "Overweight" };
window.DAG_TEXTS["f3.fat.desc"]       = { es: "El animal supera significativamente el peso promedio del rodeo. Puede indicar engorde exitoso o anomalía que merezca revisión.", en: "The animal significantly exceeds the herd average weight. May indicate successful fattening or an anomaly worth reviewing." };
window.DAG_TEXTS["f3.fat.action"]     = { es: "→ Evaluar aptitud para venta",   en: "→ Evaluate sale readiness" };

/* ════════════════════════════════════════════════════════════
   FUNCIÓN 4 — DASHBOARD
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["f4.label"]   = { es: "Función 4 de 6",                         en: "Feature 4 of 6" };
window.DAG_TEXTS["f4.title"]   = { es: "Dashboard por establecimiento",           en: "Dashboard per property" };
window.DAG_TEXTS["f4.text"]    = { es: "Cada vuelo que subís alimenta automáticamente el dashboard de tu establecimiento. Podés ver la evolución del peso promedio del rodeo vuelo a vuelo, la distribución de condición corporal, el área recorrida por el dron sobre el mapa del lote y el listado completo de vuelos con sus resultados.", en: "Every flight you upload automatically feeds your property's dashboard. You can see herd average weight evolution flight by flight, body condition distribution, the drone-covered area on the paddock map, and the complete list of flights with their results." };
window.DAG_TEXTS["f4.bullet1"] = { es: "Soporte para múltiples establecimientos y múltiples lotes en una sola cuenta.", en: "Support for multiple properties and multiple paddocks in a single account." };
window.DAG_TEXTS["f4.bullet2"] = { es: "El mapa del lote usa OpenStreetMap y muestra el área sobrevolada por el dron en cada vuelo.", en: "The paddock map uses OpenStreetMap and shows the drone-covered area per flight." };
window.DAG_TEXTS["f4.bullet3"] = { es: "Los datos de todos tus vuelos están guardados en la nube. No perdés el historial si cambiás de dispositivo.", en: "All your flight data is stored in the cloud. You won't lose history if you change devices." };
window.DAG_TEXTS["f4.bullet4"] = { es: "La app funciona como software de escritorio (Windows, macOS, Linux) y como aplicación web desde cualquier navegador.", en: "The app runs as desktop software (Windows, macOS, Linux) and as a web application from any browser." };
window.DAG_TEXTS["f4.link"]    = { es: "Ver el dashboard en detalle",            en: "See the dashboard in detail" };

/* ════════════════════════════════════════════════════════════
   FUNCIÓN 5 — INFORME PDF
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["f5.label"]   = { es: "Función 5 de 6",                         en: "Feature 5 of 6" };
window.DAG_TEXTS["f5.title"]   = { es: "Informe PDF por vuelo",                  en: "PDF report per flight" };
window.DAG_TEXTS["f5.text"]    = { es: "Una vez que finaliza el procesamiento, el sistema genera automáticamente un informe PDF completo del vuelo. El informe está estructurado para ser entendido por productores, veterinarios y compradores de hacienda sin necesidad de conocimientos técnicos.", en: "Once processing finishes, the system automatically generates a complete PDF flight report. The report is structured to be understood by producers, veterinarians, and livestock buyers without any technical knowledge." };
window.DAG_TEXTS["f5.sublabel"]= { es: "El informe incluye:",                    en: "The report includes:" };
window.DAG_TEXTS["f5.bullet1"] = { es: "Portada con nombre del establecimiento, lote, fecha y hora del vuelo, altura y parámetros de la cámara.", en: "Cover with property name, paddock, flight date and time, altitude, and camera parameters." };
window.DAG_TEXTS["f5.bullet2"] = { es: "Número total de cabezas contadas, peso promedio del lote y gráfico de distribución de pesos.", en: "Total head count, paddock average weight, and weight distribution chart." };
window.DAG_TEXTS["f5.bullet3"] = { es: "Tabla individual con ID de cada animal, peso estimado, condición corporal y estado de alerta.", en: "Individual table with each animal's ID, estimated weight, body condition, and alert status." };
window.DAG_TEXTS["f5.bullet4"] = { es: "Cuadros seleccionados del video anotado con los animales identificados y sus datos.", en: "Selected frames from annotated video with identified animals and their data." };
window.DAG_TEXTS["f5.bullet5"] = { es: "Comparación automática con el vuelo anterior del mismo lote (diferencia de peso promedio y de distribución).", en: "Automatic comparison with the previous flight of the same paddock (average weight and distribution differences)." };

/* ════════════════════════════════════════════════════════════
   FUNCIÓN 6 — ALERTAS
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["f6.label"]   = { es: "Función 6 de 6",                         en: "Feature 6 of 6" };
window.DAG_TEXTS["f6.title"]   = { es: "Alertas configurables por lote",         en: "Configurable alerts per paddock" };
window.DAG_TEXTS["f6.text"]    = { es: "Definís un peso mínimo (y opcionalmente máximo) de referencia para cada lote de tu establecimiento. Cada vez que llega un vuelo procesado, el sistema lo evalúa automáticamente contra esos umbrales y te notifica si algún animal o el promedio del lote sale de los parámetros que vos configuraste.", en: "You define a minimum (and optionally maximum) reference weight for each paddock in your property. Each time a processed flight arrives, the system automatically evaluates it against those thresholds and notifies you if any animal or the paddock average falls outside the parameters you configured." };
window.DAG_TEXTS["f6.bullet1"] = { es: "Umbral configurable por lote y por categoría (terneros, adultos). No es un parámetro global: cada lote tiene su propio criterio.", en: "Configurable threshold per paddock and category (calves, adults). It's not a global parameter: each paddock has its own criteria." };
window.DAG_TEXTS["f6.bullet2"] = { es: "Las alertas aparecen destacadas en el dashboard y en el informe PDF del vuelo que las generó.", en: "Alerts appear highlighted in the dashboard and in the PDF report of the triggering flight." };
window.DAG_TEXTS["f6.bullet3"] = { es: "Podés ver el historial de alertas de cada lote y comparar cómo evolucionó la proporción de animales en alerta vuelo a vuelo.", en: "You can view each paddock's alert history and compare how the proportion of flagged animals evolved flight by flight." };
window.DAG_TEXTS["f6.bullet4"] = { es: "El sistema también genera una alerta automática si la condición corporal BAJO PESO supera el 10 % del total del lote en un vuelo.", en: "The system also auto-generates an alert if the UNDERWEIGHT body condition exceeds 10% of the total paddock in a flight." };

/* ════════════════════════════════════════════════════════════
   TABLA COMPARATIVA
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["cmp.label"]      = { es: "Comparativa",          en: "Comparison" };
window.DAG_TEXTS["cmp.title"]      = { es: "DAG vs. métodos tradicionales", en: "DAG vs. traditional methods" };
window.DAG_TEXTS["cmp.th.actividad"]  = { es: "Actividad",         en: "Activity" };
window.DAG_TEXTS["cmp.th.tradicional"]= { es: "Método tradicional",en: "Traditional method" };
window.DAG_TEXTS["cmp.th.dag"]        = { es: "Con DAG",           en: "With DAG" };
window.DAG_TEXTS["cmp.row1.act"]   = { es: "Conteo del rodeo",     en: "Herd count" };
window.DAG_TEXTS["cmp.row1.bad"]   = { es: "A caballo o en camioneta, 2–4 hs, margen de error 5–10 %", en: "Horseback or truck, 2–4 hrs, 5–10% error margin" };
window.DAG_TEXTS["cmp.row1.good"]  = { es: "10 min de vuelo + procesamiento automático, error < 2 %", en: "10 min flight + automatic processing, error < 2%" };
window.DAG_TEXTS["cmp.row2.act"]   = { es: "Estimación de peso",   en: "Weight estimate" };
window.DAG_TEXTS["cmp.row2.bad"]   = { es: "Manga y balanza: estresa la hacienda, baja 3–5 % el peso pre-venta", en: "Crush and scale: stresses livestock, drops 3–5% pre-sale weight" };
window.DAG_TEXTS["cmp.row2.good"]  = { es: "Desde el aire, sin contacto físico con la hacienda", en: "From the air, zero physical contact with livestock" };
window.DAG_TEXTS["cmp.row3.act"]   = { es: "Detección de animales con problemas", en: "Problem animal detection" };
window.DAG_TEXTS["cmp.row3.bad"]   = { es: "Revisión visual a ojo, subjetiva y dependiente del ojo del operario", en: "Visual inspection by eye, subjective and operator-dependent" };
window.DAG_TEXTS["cmp.row3.good"]  = { es: "Clasificación automática con z-score en cada vuelo", en: "Automatic z-score classification on every flight" };
window.DAG_TEXTS["cmp.row4.act"]   = { es: "Registros históricos", en: "Historical records" };
window.DAG_TEXTS["cmp.row4.bad"]   = { es: "Cuadernos de campo o planillas de Excel, sin alertas automáticas", en: "Field notebooks or Excel sheets, no automatic alerts" };
window.DAG_TEXTS["cmp.row4.good"]  = { es: "Dashboard con historial completo, gráficos automáticos y alertas", en: "Dashboard with full history, automatic charts, and alerts" };
window.DAG_TEXTS["cmp.row5.act"]   = { es: "Informe para veterinario / comprador", en: "Vet / buyer report" };
window.DAG_TEXTS["cmp.row5.bad"]   = { es: "Generación manual, horas de trabajo", en: "Manual generation, hours of work" };
window.DAG_TEXTS["cmp.row5.good"]  = { es: "PDF generado automáticamente al terminar el procesamiento", en: "PDF generated automatically when processing finishes" };

/* ════════════════════════════════════════════════════════════
   CTA
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["cta.label"]   = { es: "¿Querés verlo en tu campo?",  en: "Want to see it on your farm?" };
window.DAG_TEXTS["cta.title1"]  = { es: "Gestioná tu hacienda",        en: "Manage your livestock" };
window.DAG_TEXTS["cta.title2"]  = { es: "de otra manera",              en: "a different way" };
window.DAG_TEXTS["cta.sub"]     = { es: "Somos un equipo de ingenieros argentinos. Escribinos y te mostramos cómo funciona en tu establecimiento.", en: "We're a team of Argentine engineers. Reach out and we'll show you how it works on your property." };
window.DAG_TEXTS["cta.btn1"]    = { es: "Escribinos",                  en: "Get in touch" };
window.DAG_TEXTS["cta.btn2"]    = { es: "Ver cómo funciona",           en: "See how it works" };

/* ════════════════════════════════════════════════════════════
   FOOTER
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["footer.desc"]        = { es: "Detección Activa de Ganado. Plataforma argentina de gestión ganadera con drones e Inteligencia Artificial.", en: "Active Cattle Detection. Argentine livestock management platform using drones and Artificial Intelligence." };
window.DAG_TEXTS["footer.badge"]       = { es: "Proyecto Final FIUBA 2024",  en: "FIUBA Final Project 2024" };
window.DAG_TEXTS["footer.col.product"] = { es: "Producto",                   en: "Product" };
window.DAG_TEXTS["footer.link.caract"] = { es: "Características",            en: "Features" };
window.DAG_TEXTS["footer.link.como"]   = { es: "Cómo funciona",              en: "How it works" };
window.DAG_TEXTS["footer.link.dash"]   = { es: "Dashboard",                  en: "Dashboard" };
window.DAG_TEXTS["footer.col.project"] = { es: "Proyecto",                   en: "Project" };
window.DAG_TEXTS["footer.link.contact"]= { es: "Contacto",                   en: "Contact" };
window.DAG_TEXTS["footer.copy"]        = { es: "Detección Activa de Ganado", en: "Active Cattle Detection" };
window.DAG_TEXTS["footer.made"]        = { es: "Hecho en Argentina",         en: "Made in Argentina" };
