/**
 * Textos de dashboard.html
 * Editá este archivo para cambiar cualquier texto de la página del dashboard.
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
window.DAG_TEXTS["bc.inicio"]   = { es: "Inicio", en: "Home" };

/* ════════════════════════════════════════════════════════════
   HERO DE PÁGINA
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["hero.label"]       = { es: "Un comando central para tu establecimiento",  en: "A central command for your property" };
window.DAG_TEXTS["hero.title.line1"] = { es: "Todo el campo,",                              en: "Your whole property," };
window.DAG_TEXTS["hero.title.line2"] = { es: "en una sola pantalla",                        en: "in a single screen" };
window.DAG_TEXTS["hero.sub"]         = { es: "El dashboard DAG reúne todos los datos de tus vuelos en un solo lugar. Chequeás el estado de cada lote, comparás con vuelos anteriores y descargás informes sin necesidad de abrir una planilla.", en: "The DAG dashboard brings all your flight data together in one place. Check the state of each paddock, compare with previous flights, and download reports without opening a spreadsheet." };

/* ════════════════════════════════════════════════════════════
   MÉTRICAS PRINCIPALES
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["metric.cabezas.label"] = { es: "Cabezas detectadas hoy",      en: "Heads detected today" };
window.DAG_TEXTS["metric.cabezas.desc"]  = { es: "Conteo automático del último vuelo procesado. El sistema confirma cada animal con 15 fotogramas consecutivos.", en: "Automatic count from the last processed flight. The system confirms each animal with 15 consecutive frames." };
window.DAG_TEXTS["metric.peso.label"]    = { es: "Peso promedio del rodeo",      en: "Average herd weight" };
window.DAG_TEXTS["metric.peso.desc"]     = { es: "Estimado por visión computacional sobre el área de la silueta de cada animal en el video.", en: "Estimated via computer vision from each animal's silhouette area in the video." };
window.DAG_TEXTS["metric.alertas.label"] = { es: "Alertas activas",              en: "Active alerts" };
window.DAG_TEXTS["metric.alertas.desc"]  = { es: "Animales que están fuera del rango de condición corporal configurado para este lote. Se muestran identificados en el video anotado.", en: "Animals outside the configured body condition range for this paddock. Shown identified in the annotated video." };

/* ════════════════════════════════════════════════════════════
   MÓDULOS DEL DASHBOARD
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["mod.label"]   = { es: "Módulos del dashboard",         en: "Dashboard modules" };
window.DAG_TEXTS["mod.title"]   = { es: "Todo lo que encontrás adentro", en: "Everything you'll find inside" };

/* ════════════════════════════════════════════════════════════
   MÓDULO 1 — KPIs
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["m1.label"]   = { es: "Panel de métricas",             en: "Metrics panel" };
window.DAG_TEXTS["m1.title"]   = { es: "Las cifras clave a simple vista", en: "Key numbers at a glance" };
window.DAG_TEXTS["m1.sub"]     = { es: "En la parte superior del dashboard siempre tenés visible: cantidad de cabezas detectadas en el último vuelo, peso promedio del rodeo, cantidad de alertas activas y cuántos días hace del último vuelo.", en: "At the top of the dashboard you always see: head count from the last flight, average herd weight, number of active alerts, and how many days since the last flight." };
window.DAG_TEXTS["m1.bullet1"] = { es: "Datos actualizados automáticamente después de cada vuelo procesado.", en: "Data automatically updated after each processed flight." };
window.DAG_TEXTS["m1.bullet2"] = { es: "Los KPIs varían por lote seleccionado. Podés navegar entre todos los lotes del establecimiento.", en: "KPIs vary by selected paddock. You can navigate all paddocks on the property." };
window.DAG_TEXTS["m1.bullet3"] = { es: "Si hay una baja de peso respecto al vuelo anterior, la cifra aparece marcada en ámbar para que no pase desapercibida.", en: "If there's a weight drop compared to the previous flight, the figure is marked in amber so it doesn't go unnoticed." };

/* ════════════════════════════════════════════════════════════
   MÓDULO 2 — GRÁFICO DE PESO
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["m2.label"]   = { es: "Evolución histórica",                  en: "Historical evolution" };
window.DAG_TEXTS["m2.title"]   = { es: "Gráfico de peso mensual del rodeo",    en: "Monthly herd weight chart" };
window.DAG_TEXTS["m2.sub"]     = { es: "El gráfico de peso mensual muestra cómo evolucionó el peso promedio de cada lote vuelo a vuelo. Podés detectar caídas de condición antes de que se conviertan en un problema sanitario o productivo.", en: "The monthly weight chart shows how each paddock's average weight evolved flight by flight. You can detect condition drops before they become a health or productivity problem." };
window.DAG_TEXTS["m2.bullet1"] = { es: "Línea de tiempo con todos los vuelos del establecimiento, agrupados por lote.", en: "Timeline with all property flights, grouped by paddock." };
window.DAG_TEXTS["m2.bullet2"] = { es: "Podés superponer dos lotes distintos para comparar el ritmo de engorde.", en: "You can overlay two different paddocks to compare fattening rates." };
window.DAG_TEXTS["m2.bullet3"] = { es: "Anotaciones automáticas en el gráfico cuando ocurrió un cambio de tropilla o una alerta activa.", en: "Automatic annotations on the chart when a herd change or active alert occurred." };

/* ════════════════════════════════════════════════════════════
   MÓDULO 3 — CONDICIÓN CORPORAL
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["m3.label"]   = { es: "Condición corporal",                   en: "Body condition" };
window.DAG_TEXTS["m3.title"]   = { es: "Distribución de la tropa de un vistazo", en: "Herd distribution at a glance" };
window.DAG_TEXTS["m3.sub"]     = { es: "El módulo de condición corporal muestra cuántos animales cayeron en cada categoría: NORMAL, TERNERO, BAJO PESO o SOBREPESO. La proporción se actualiza con cada vuelo y se puede comparar con vuelos anteriores.", en: "The body condition module shows how many animals fell into each category: NORMAL, CALF, UNDERWEIGHT, or OVERWEIGHT. The proportion updates with each flight and can be compared with previous ones." };
window.DAG_TEXTS["m3.bullet1"] = { es: "Desglose visual en torta o barra con porcentajes exactos para cada categoría.", en: "Visual breakdown as pie or bar chart with exact percentages for each category." };
window.DAG_TEXTS["m3.bullet2"] = { es: "Si hay más de un 10% de animales en BAJO PESO, el sistema genera una alerta automática.", en: "If more than 10% of animals are UNDERWEIGHT, the system generates an automatic alert." };
window.DAG_TEXTS["m3.bullet3"] = { es: "Podés ver qué IDs específicos tienen baja condición y buscarlos en el video anotado.", en: "You can see which specific IDs have low condition and find them in the annotated video." };

/* ════════════════════════════════════════════════════════════
   MÓDULO 4 — MAPA DE LOTES
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["m4.label"]   = { es: "Mapa de lotes",                        en: "Paddock map" };
window.DAG_TEXTS["m4.title"]   = { es: "Tu campo dibujado, por lote y estado", en: "Your property mapped, by paddock and status" };
window.DAG_TEXTS["m4.sub"]     = { es: "El mapa muestra el establecimiento con cada lote delineado sobre OpenStreetMap. El color del lote indica si tiene alertas activas (rojo), condición normal (verde) o sin datos recientes (gris).", en: "The map shows the property with each paddock outlined on OpenStreetMap. Paddock color indicates active alerts (red), normal condition (green), or no recent data (gray)." };
window.DAG_TEXTS["m4.bullet1"] = { es: "Clic en un lote abre su panel detallado con métricas del último vuelo.", en: "Clicking a paddock opens its detailed panel with last flight metrics." };
window.DAG_TEXTS["m4.bullet2"] = { es: "Verde: condición normal. Ámbar: atención recomendada. Rojo: alerta activa.", en: "Green: normal condition. Amber: attention recommended. Red: active alert." };
window.DAG_TEXTS["m4.bullet3"] = { es: "Gris: el lote no tiene vuelos en los últimos 30 días.", en: "Gray: the paddock has no flights in the last 30 days." };

/* ════════════════════════════════════════════════════════════
   MÓDULO 5 — HISTORIAL DE VUELOS
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["m5.label"]   = { es: "Historial de vuelos",                  en: "Flight history" };
window.DAG_TEXTS["m5.title"]   = { es: "Cada vuelo queda registrado para siempre", en: "Every flight is permanently recorded" };
window.DAG_TEXTS["m5.sub"]     = { es: "El historial de vuelos muestra todos los relevamientos del establecimiento ordenados por fecha. Podés abrir cualquier vuelo antiguo y ver sus resultados completos como si fuera hoy.", en: "The flight history shows all property surveys ordered by date. You can open any old flight and see its complete results as if it were today." };
window.DAG_TEXTS["m5.bullet1"] = { es: "Filtro por lote, rango de fechas y tipo de alerta para encontrar lo que buscás rápido.", en: "Filter by paddock, date range, and alert type to quickly find what you're looking for." };
window.DAG_TEXTS["m5.bullet2"] = { es: "Cada entrada del historial muestra cabezas detectadas, peso promedio y alertas de ese vuelo.", en: "Each history entry shows detected heads, average weight, and alerts from that flight." };
window.DAG_TEXTS["m5.bullet3"] = { es: "Podés descargar el PDF de cualquier vuelo histórico en cualquier momento.", en: "You can download the PDF of any historical flight at any time." };

/* ════════════════════════════════════════════════════════════
   SISTEMA DE ALERTAS
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["alerta.label"]        = { es: "Sistema de alertas",                      en: "Alert system" };
window.DAG_TEXTS["alerta.title"]        = { es: "Sabés qué pasa antes de que sea tarde",   en: "You know what's happening before it's too late" };
window.DAG_TEXTS["alerta.sub"]          = { es: "El sistema de alertas evalúa cada vuelo procesado y genera notificaciones automáticas cuando se superan los umbrales que vos configuraste para cada lote.", en: "The alert system evaluates each processed flight and generates automatic notifications when the thresholds you configured for each paddock are exceeded." };
window.DAG_TEXTS["alerta.crit.title"]   = { es: "Alerta crítica — Bajo peso masivo",       en: "Critical alert — Mass underweight" };
window.DAG_TEXTS["alerta.crit.desc"]    = { es: "Se activa cuando más del 10% de los animales del lote fue clasificado como BAJO PESO en el último vuelo. Indica posible deficiencia nutricional o sanitaria que requiere intervención inmediata.", en: "Triggered when more than 10% of the paddock's animals were classified as UNDERWEIGHT in the last flight. Indicates possible nutritional or health deficiency requiring immediate intervention." };
window.DAG_TEXTS["alerta.warn.title"]   = { es: "Alerta de atención — Pérdida de peso individual", en: "Attention alert — Individual weight loss" };
window.DAG_TEXTS["alerta.warn.desc"]    = { es: "Se activa cuando un animal individual perdió más del umbral de peso configurado entre dos vuelos consecutivos del mismo lote. El animal queda identificado con su ID en el video anotado.", en: "Triggered when an individual animal lost more than the configured weight threshold between two consecutive flights of the same paddock. The animal is identified by its ID in the annotated video." };
window.DAG_TEXTS["alerta.info1.title"]  = { es: "Información — Cambio de conteo significativo", en: "Info — Significant count change" };
window.DAG_TEXTS["alerta.info1.desc"]   = { es: "Se activa cuando el conteo del último vuelo difiere en más del 5% respecto al vuelo anterior del mismo lote. Puede indicar movimiento de tropas, fallas de detección o un error de vuelo.", en: "Triggered when the last flight count differs by more than 5% from the previous flight of the same paddock. May indicate herd movement, detection failure, or flight error." };
window.DAG_TEXTS["alerta.info2.title"]  = { es: "Información — Lote sin vuelo reciente",   en: "Info — Paddock without recent flight" };
window.DAG_TEXTS["alerta.info2.desc"]   = { es: "Recordatorio automático cuando un lote lleva más de 30 días sin ser relevado, para que no pierdas la continuidad del historial.", en: "Automatic reminder when a paddock hasn't been surveyed for more than 30 days, so you don't lose history continuity." };
window.DAG_TEXTS["alerta.config"]       = { es: "Los umbrales de cada alerta son configurables por lote o por establecimiento. Podés definir que una alerta se dispare a partir del 5%, 10% o cualquier porcentaje de animales en bajo peso que tenga sentido para tu hacienda.", en: "Each alert threshold is configurable per paddock or per property. You can set alerts to trigger at 5%, 10%, or any percentage of underweight animals that makes sense for your herd." };

/* ════════════════════════════════════════════════════════════
   ACCESO — DESKTOP VS WEB
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["acceso.label"]         = { es: "Disponibilidad",                    en: "Availability" };
window.DAG_TEXTS["acceso.title"]         = { es: "Desde la app o desde el navegador", en: "From the app or from the browser" };
window.DAG_TEXTS["acceso.desk.title"]    = { es: "App de escritorio",                 en: "Desktop app" };
window.DAG_TEXTS["acceso.desk.desc"]     = { es: "Disponible para Windows, macOS y Linux. La app de escritorio es la forma recomendada para subir videos y revisar resultados cuando estás en la oficina o en la casa del establecimiento. Funciona sin conexión continua: podés navegar historial en modo offline.", en: "Available for Windows, macOS, and Linux. The desktop app is the recommended way to upload videos and review results when you're in the office or at the property house. Works without continuous connection: you can browse history in offline mode." };
window.DAG_TEXTS["acceso.desk.li1"]      = { es: "Subida de video directa desde el disco",     en: "Direct video upload from disk" };
window.DAG_TEXTS["acceso.desk.li2"]      = { es: "Reproducción del video anotado integrada",   en: "Integrated annotated video playback" };
window.DAG_TEXTS["acceso.desk.li3"]      = { es: "Descarga de informes PDF con un clic",       en: "One-click PDF report download" };
window.DAG_TEXTS["acceso.desk.li4"]      = { es: "Gestión completa de lotes y vuelos offline", en: "Full offline paddock and flight management" };
window.DAG_TEXTS["acceso.web.title"]     = { es: "Versión web",                               en: "Web version" };
window.DAG_TEXTS["acceso.web.desc"]      = { es: "Usable desde cualquier equipo con navegador moderno (Chrome, Firefox, Edge, Safari). La versión web es ideal para consultas rápidas desde el celular en el campo, o para compartir el acceso con el veterinario o el peón de confianza sin instalar nada.", en: "Usable from any device with a modern browser (Chrome, Firefox, Edge, Safari). The web version is ideal for quick queries from your phone in the field, or to share access with the vet or trusted farmhand without installing anything." };
window.DAG_TEXTS["acceso.web.li1"]       = { es: "Sin instalación — abrís el navegador y listo", en: "No install — open the browser and that's it" };
window.DAG_TEXTS["acceso.web.li2"]       = { es: "Acceso desde celular, tablet o PC prestada",   en: "Access from phone, tablet, or borrowed PC" };
window.DAG_TEXTS["acceso.web.li3"]       = { es: "Se puede compartir acceso con terceros",       en: "Access can be shared with third parties" };
window.DAG_TEXTS["acceso.web.li4"]       = { es: "Mismo dashboard y datos que la app de escritorio", en: "Same dashboard and data as the desktop app" };

/* ════════════════════════════════════════════════════════════
   CTA
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["cta.label"]   = { es: "¿Querés ver el dashboard en acción?",  en: "Want to see the dashboard in action?" };
window.DAG_TEXTS["cta.title1"]  = { es: "Pedí una demo con",                    en: "Request a demo with" };
window.DAG_TEXTS["cta.title2"]  = { es: "tus propios lotes",                    en: "your own paddocks" };
window.DAG_TEXTS["cta.sub"]     = { es: "Te mostramos el dashboard funcionando con datos reales de un establecimiento similar al tuyo, o directamente con los datos de tu primer vuelo.", en: "We'll show you the dashboard running with real data from a property similar to yours, or directly with data from your first flight." };
window.DAG_TEXTS["cta.btn1"]    = { es: "Pedí tu demo",                         en: "Request your demo" };
window.DAG_TEXTS["cta.btn2"]    = { es: "Ver cómo funciona",                    en: "See how it works" };

/* ════════════════════════════════════════════════════════════
   FOOTER
════════════════════════════════════════════════════════════ */
window.DAG_TEXTS["footer.desc"]        = { es: "Detección Activa de Ganado. Plataforma argentina de gestión ganadera con drones e IA.", en: "Active Cattle Detection. Argentine livestock management platform using drones and AI." };
window.DAG_TEXTS["footer.badge"]       = { es: "Proyecto Final FIUBA 2024",  en: "FIUBA Final Project 2024" };
window.DAG_TEXTS["footer.col.product"] = { es: "Producto",                   en: "Product" };
window.DAG_TEXTS["footer.link.caract"] = { es: "Características",            en: "Features" };
window.DAG_TEXTS["footer.link.como"]   = { es: "Cómo funciona",              en: "How it works" };
window.DAG_TEXTS["footer.col.project"] = { es: "Proyecto",                   en: "Project" };
window.DAG_TEXTS["footer.link.contact"]= { es: "Contacto",                   en: "Contact" };
window.DAG_TEXTS["footer.col.contact"] = { es: "Contacto",                   en: "Contact" };
window.DAG_TEXTS["footer.copy"]        = { es: "Detección Activa de Ganado", en: "Active Cattle Detection" };
window.DAG_TEXTS["footer.made"]        = { es: "Hecho en Argentina",         en: "Made in Argentina" };
