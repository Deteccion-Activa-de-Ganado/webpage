/**
 * Textos de caracteristicas.html
 * Editá este archivo para cambiar cualquier texto de la página.
 */

window.TEXTS = window.TEXTS || {};

/* ════════════════════════════════════════════════════════════
   NAVEGACIÓN
════════════════════════════════════════════════════════════ */
window.TEXTS["nav.caracteristicas"] = { es: "Características", en: "Features" };
window.TEXTS["nav.como_funciona"] = { es: "Cómo funciona", en: "How it works" };
window.TEXTS["nav.dashboard"] = { es: "Dashboard", en: "Dashboard" };
window.TEXTS["nav.pedi_una_demo"] = { es: "Pedí una demo", en: "Request a demo" };
window.TEXTS["nav.inicio"] = { es: "Inicio", en: "Home" };
/* ════════════════════════════════════════════════════════════
   SECCIÓN HERO
════════════════════════════════════════════════════════════ */
window.TEXTS["hero.seis_herramientas_un_solo_sist"] = { es: "Seis herramientas, un solo sistema", en: "Six tools, one system" };
window.TEXTS["hero.todo_lo_que_necesitas_para"] = { es: "Todo lo que necesitás para", en: "Everything you need to" };
window.TEXTS["hero.conocer_tu_hacienda_de_verdad"] = { es: "conocer tu hacienda de verdad", en: "truly know your herd" };
window.TEXTS["hero.cada_funcion_de_dag_fue_disena"] = { es: "Cada función de DAG fue diseñada para reducir el trabajo manual del productor ganadero y darte información exacta sobre tu rodeo sin tener que tocar un solo animal.", en: "Every DAG feature was designed to reduce manual work for the cattle producer and give you precise information about your herd without having to touch a single animal." };
window.TEXTS["hero.ver_como_funciona"] = { es: "Ver cómo funciona", en: "See how it works" };
window.TEXTS["hero.funcion_1_de_6"] = { es: "Función 1 de 6", en: "Feature 1 of 6" };
/* ════════════════════════════════════════════════════════════
   CARACTERÍSTICAS
════════════════════════════════════════════════════════════ */
window.TEXTS["features.conteo_automatico_del_rodeo"] = { es: "Conteo automático del rodeo", en: "Automatic herd counting" };
window.TEXTS["features.el_motor_de_deteccion_corre_cu"] = { es: "El motor de detección corre cuadro a cuadro sobre el video del dron usando YOLOv8, el modelo de segmentación de instancias más preciso disponible hoy. Cada animal detectado es rastreado individualmente por ByteTrack, que le asigna un ID único y lo sigue a lo largo de toda la trayectoria del vuelo.", en: "The detection engine runs frame by frame on the drone video using YOLOv8, today's most accurate instance segmentation model. Each detected animal is individually tracked by ByteTrack, which assigns it a unique ID and follows it throughout the entire flight trajectory." };
window.TEXTS["features.un_animal_se_confirma_recien_d"] = { es: "Un animal se confirma recién después de aparecer en 15 fotogramas consecutivos, lo que elimina falsos positivos por vegetación o sombras.", en: "An animal is confirmed only after appearing in 15 consecutive frames, eliminating false positives from vegetation or shadows." };
window.TEXTS["features.el_mismo_animal_no_se_cuenta_d"] = { es: "El mismo animal no se cuenta dos veces aunque el dron lo sobrevuele en distintas pasadas.", en: "The same animal is never counted twice even if the drone flies over it on different passes." };
window.TEXTS["features.compatible_con_mp4_avi_y_mov_f"] = { es: "Compatible con MP4, AVI y MOV. Funciona con DJI, Autel, Parrot o cualquier dron que grabe video estabilizado.", en: "Compatible with MP4, AVI, and MOV. Works with DJI, Autel, Parrot, or any drone that records stabilized video." };
window.TEXTS["features.el_video_procesado_se_genera_c"] = { es: "El video procesado se genera con los bounding boxes y el ID de cada animal superpuesto, disponible para descarga.", en: "The processed video is generated with bounding boxes and each animal's ID overlaid, available for download." };
window.TEXTS["features.funcion_2_de_6"] = { es: "Función 2 de 6", en: "Feature 2 of 6" };
window.TEXTS["features.peso_estimado_sin_tolva_ni_man"] = { es: "Peso estimado sin tolva ni manga", en: "Estimated weight — no crush, no scale" };
window.TEXTS["features.el_sistema_calcula_el_gsd_grou"] = { es: "El sistema calcula el GSD (Ground Sample Distance), es decir, cuántos centímetros reales corresponden a cada píxel del video, usando la altura del vuelo, el tamaño del sensor de la cámara y la distancia focal de la lente. Con ese dato, mide el área real de la silueta de cada animal y la correlaciona con una curva de regresión calibrada sobre hacienda bovina argentina para estimar el peso vivo.", en: "The system calculates GSD (Ground Sample Distance) — how many real centimeters correspond to each video pixel — using flight altitude, camera sensor size, and lens focal length. With that value, it measures each animal's real silhouette area and correlates it with a regression curve calibrated on Argentine cattle to estimate live weight." };
window.TEXTS["features.el_productor_ingresa_al_sistem"] = { es: "El productor ingresa al sistema la altura del vuelo (en metros), el modelo de cámara o el tamaño del sensor y la focal.", en: "The producer enters flight altitude (in meters), camera model or sensor size, and focal length into the system." };
window.TEXTS["features.la_estimacion_es_mas_precisa_e"] = { es: "La estimación es más precisa entre 40 y 60 metros de altura. A mayor altura, el animal ocupa menos píxeles y el margen de error sube levemente.", en: "The estimate is most accurate between 40 and 60 meters altitude. Higher up, the animal covers fewer pixels and the error margin rises slightly." };
window.TEXTS["features.el_resultado_es_el_peso_promed"] = { es: "El resultado es el peso promedio del lote y el peso individual de cada animal identificado por ByteTrack.", en: "The result is the paddock average weight and the individual weight of each animal identified by ByteTrack." };
window.TEXTS["features.nada_de_estres_preventa_sin_ar"] = { es: "Nada de estrés pre-venta: sin arrear, sin encerrar, sin pesar en manga. El animal pasta tranquilo mientras el dron vuela.", en: "Zero pre-sale stress: no herding, no penning, no scale weighing. The animal grazes calmly while the drone flies." };
window.TEXTS["features.funcion_3_de_6"] = { es: "Función 3 de 6", en: "Feature 3 of 6" };
window.TEXTS["features.clasificacion_de_condicion_cor"] = { es: "Clasificación de condición corporal", en: "Body condition classification" };
window.TEXTS["features.cada_animal_del_lote_queda_cla"] = { es: "Cada animal del lote queda clasificado automáticamente en una de 4 categorías usando análisis estadístico por z-score sobre la densidad corporal de toda la tropa. Sin revisión manual, sin subjetividad.", en: "Each paddock animal is automatically classified into one of 4 categories using z-score statistical analysis on the entire herd's body density. No manual review, no subjectivity." };
window.TEXTS["features.normal"] = { es: "Normal", en: "Normal" };
window.TEXTS["features.el_animal_tiene_un_peso_dentro"] = { es: "El animal tiene un peso dentro del rango esperado para su tamaño de silueta. Condición óptima de producción.", en: "The animal's weight is within the expected range for its silhouette size. Optimal production condition." };
window.TEXTS["features.sin_accion_requerida"] = { es: "✓ Sin acción requerida", en: "✓ No action required" };
window.TEXTS["features.ternero"] = { es: "Ternero", en: "Calf" };
window.TEXTS["features.animal_con_silueta_significati"] = { es: "Animal con silueta significativamente más pequeña que el promedio del rodeo. Detectado como ternero o vaquillona de año.", en: "Animal with a significantly smaller silhouette than the herd average. Detected as a calf or yearling heifer." };
window.TEXTS["features.registrar_y_hacer_seguimiento"] = { es: "ℹ Registrar y hacer seguimiento", en: "ℹ Record and follow up" };
window.TEXTS["features.bajo_peso"] = { es: "Bajo Peso", en: "Underweight" };
window.TEXTS["features.el_area_de_silueta_es_inusualm"] = { es: "El área de silueta es inusualmente pequeña en relación al peso estimado, lo que puede indicar problemas sanitarios, parasitosis o carga genética.", en: "The silhouette area is unusually small relative to the estimated weight, which may indicate health problems, parasites, or genetic issues." };
window.TEXTS["features.revisar_con_veterinario"] = { es: "⚠ Revisar con veterinario", en: "⚠ Review with vet" };
window.TEXTS["features.sobrepeso"] = { es: "Sobrepeso", en: "Overweight" };
window.TEXTS["features.el_animal_supera_significativa"] = { es: "El animal supera significativamente el peso promedio del rodeo. Puede indicar engorde exitoso o anomalía que merezca revisión.", en: "The animal significantly exceeds the herd average weight. May indicate successful fattening or an anomaly worth reviewing." };
window.TEXTS["features.evaluar_aptitud_para_venta"] = { es: "→ Evaluar aptitud para venta", en: "→ Evaluate sale readiness" };
window.TEXTS["features.como_funciona_el_zscore"] = { es: "¿Cómo funciona el z-score?", en: "How does z-score work?" };
window.TEXTS["features.para_cada_vuelo_el_sistema_cal"] = { es: "Para cada vuelo, el sistema calcula la densidad corporal de cada animal (peso estimado dividido por el área de su silueta). Luego obtiene la media y el desvío estándar de esa distribución dentro del lote. Los animales con un z-score menor a -1.5 son marcados como BAJO PESO; los que superan +1.5 como SOBREPESO; los que tienen un área de silueta muy pequeña en términos absolutos son clasificados como TERNERO. El resto es NORMAL.", en: "For each flight, the system calculates each animal's body density (estimated weight divided by silhouette area). It then gets the mean and standard deviation of that distribution within the paddock. Animals with z-score below -1.5 are flagged UNDERWEIGHT; those above +1.5 as OVERWEIGHT; those with an absolutely very small silhouette area are classified as CALF. The rest are NORMAL." };
window.TEXTS["features.funcion_4_de_6"] = { es: "Función 4 de 6", en: "Feature 4 of 6" };
window.TEXTS["features.dashboard_por_establecimiento"] = { es: "Dashboard por establecimiento", en: "Dashboard per property" };
window.TEXTS["features.cada_vuelo_que_subis_alimenta"] = { es: "Cada vuelo que subís alimenta automáticamente el dashboard de tu establecimiento. Podés ver la evolución del peso promedio del rodeo vuelo a vuelo, la distribución de condición corporal, el área recorrida por el dron sobre el mapa del lote y el listado completo de vuelos con sus resultados.", en: "Every flight you upload automatically feeds your property's dashboard. You can see herd average weight evolution flight by flight, body condition distribution, the drone-covered area on the paddock map, and the complete list of flights with their results." };
window.TEXTS["features.soporte_para_multiples_estable"] = { es: "Soporte para múltiples establecimientos y múltiples lotes en una sola cuenta.", en: "Support for multiple properties and multiple paddocks in a single account." };
window.TEXTS["features.el_mapa_del_lote_usa_openstree"] = { es: "El mapa del lote usa OpenStreetMap y muestra el área sobrevolada por el dron en cada vuelo.", en: "The paddock map uses OpenStreetMap and shows the drone-covered area per flight." };
window.TEXTS["features.los_datos_de_todos_tus_vuelos"] = { es: "Los datos de todos tus vuelos están guardados en la nube. No perdés el historial si cambiás de dispositivo.", en: "All your flight data is stored in the cloud. You won't lose history if you change devices." };
window.TEXTS["features.la_app_funciona_como_software"] = { es: "La app funciona como software de escritorio (Windows, macOS, Linux) y como aplicación web desde cualquier navegador.", en: "The app runs as desktop software (Windows, macOS, Linux) and as a web application from any browser." };
window.TEXTS["features.ver_el_dashboard_en_detalle"] = { es: "Ver el dashboard en detalle", en: "See the dashboard in detail" };
window.TEXTS["features.funcion_5_de_6"] = { es: "Función 5 de 6", en: "Feature 5 of 6" };
window.TEXTS["features.informe_pdf_por_vuelo"] = { es: "Informe PDF por vuelo", en: "PDF report per flight" };
window.TEXTS["features.una_vez_que_finaliza_el_proces"] = { es: "Una vez que finaliza el procesamiento, el sistema genera automáticamente un informe PDF completo del vuelo. El informe está estructurado para ser entendido por productores, veterinarios y compradores de hacienda sin necesidad de conocimientos técnicos.", en: "Once processing finishes, the system automatically generates a complete PDF flight report. The report is structured to be understood by producers, veterinarians, and livestock buyers without any technical knowledge." };
window.TEXTS["features.el_informe_incluye"] = { es: "El informe incluye:", en: "The report includes:" };
window.TEXTS["features.portada_con_nombre_del_estable"] = { es: "Portada con nombre del establecimiento, lote, fecha y hora del vuelo, altura y parámetros de la cámara.", en: "Cover with property name, paddock, flight date and time, altitude, and camera parameters." };
window.TEXTS["features.numero_total_de_cabezas_contad"] = { es: "Número total de cabezas contadas, peso promedio del lote y gráfico de distribución de pesos.", en: "Total head count, paddock average weight, and weight distribution chart." };
window.TEXTS["features.tabla_individual_con_id_de_cad"] = { es: "Tabla individual con ID de cada animal, peso estimado, condición corporal y estado de alerta.", en: "Individual table with each animal's ID, estimated weight, body condition, and alert status." };
window.TEXTS["features.cuadros_seleccionados_del_vide"] = { es: "Cuadros seleccionados del video anotado con los animales identificados y sus datos.", en: "Selected frames from annotated video with identified animals and their data." };
window.TEXTS["features.comparacion_automatica_con_el"] = { es: "Comparación automática con el vuelo anterior del mismo lote (diferencia de peso promedio y de distribución).", en: "Automatic comparison with the previous flight of the same paddock (average weight and distribution differences)." };
window.TEXTS["features.funcion_6_de_6"] = { es: "Función 6 de 6", en: "Feature 6 of 6" };
window.TEXTS["features.alertas_configurables_por_lote"] = { es: "Alertas configurables por lote", en: "Configurable alerts per paddock" };
window.TEXTS["features.definis_un_peso_minimo_y_opcio"] = { es: "Definís un peso mínimo (y opcionalmente máximo) de referencia para cada lote de tu establecimiento. Cada vez que llega un vuelo procesado, el sistema lo evalúa automáticamente contra esos umbrales y te notifica si algún animal o el promedio del lote sale de los parámetros que vos configuraste.", en: "You define a minimum (and optionally maximum) reference weight for each paddock in your property. Each time a processed flight arrives, the system automatically evaluates it against those thresholds and notifies you if any animal or the paddock average falls outside the parameters you configured." };
window.TEXTS["features.umbral_configurable_por_lote_y"] = { es: "Umbral configurable por lote y por categoría (terneros, adultos). No es un parámetro global: cada lote tiene su propio criterio.", en: "Configurable threshold per paddock and category (calves, adults). It's not a global parameter: each paddock has its own criteria." };
window.TEXTS["features.las_alertas_aparecen_destacada"] = { es: "Las alertas aparecen destacadas en el dashboard y en el informe PDF del vuelo que las generó.", en: "Alerts appear highlighted in the dashboard and in the PDF report of the triggering flight." };
window.TEXTS["features.podes_ver_el_historial_de_aler"] = { es: "Podés ver el historial de alertas de cada lote y comparar cómo evolucionó la proporción de animales en alerta vuelo a vuelo.", en: "You can view each paddock's alert history and compare how the proportion of flagged animals evolved flight by flight." };
window.TEXTS["features.el_sistema_tambien_genera_una"] = { es: "El sistema también genera una alerta automática si la condición corporal BAJO PESO supera el 10 % del total del lote en un vuelo.", en: "The system also auto-generates an alert if the UNDERWEIGHT body condition exceeds 10% of the total paddock in a flight." };
/* ════════════════════════════════════════════════════════════
   COMPARATIVA
════════════════════════════════════════════════════════════ */
window.TEXTS["comparison.comparativa"] = { es: "Comparativa", en: "Comparison" };
window.TEXTS["comparison.dag_vs_metodos_tradicionales"] = { es: "DAG vs. métodos tradicionales", en: "DAG vs. traditional methods" };
window.TEXTS["comparison.actividad"] = { es: "Actividad", en: "Activity" };
window.TEXTS["comparison.metodo_tradicional"] = { es: "Método tradicional", en: "Traditional method" };
window.TEXTS["comparison.con_dag"] = { es: "Con DAG", en: "With DAG" };
window.TEXTS["comparison.conteo_del_rodeo"] = { es: "Conteo del rodeo", en: "Herd count" };
window.TEXTS["comparison.a_caballo_o_en_camioneta_24_hs"] = { es: "A caballo o en camioneta, 2–4 hs, margen de error 5–10 %", en: "Horseback or truck, 2–4 hrs, 5–10% error margin" };
window.TEXTS["comparison.10_min_de_vuelo_procesamiento"] = { es: "10 min de vuelo + procesamiento automático, error &lt; 2 %", en: "10 min flight + automatic processing, error &lt; 2%" };
window.TEXTS["comparison.estimacion_de_peso"] = { es: "Estimación de peso", en: "Weight estimate" };
window.TEXTS["comparison.manga_y_balanza_estresa_la_hac"] = { es: "Manga y balanza: estresa la hacienda, baja 3–5 % el peso pre-venta", en: "Crush and scale: stresses livestock, drops 3–5% pre-sale weight" };
window.TEXTS["comparison.desde_el_aire_sin_contacto_fis"] = { es: "Desde el aire, sin contacto físico con la hacienda", en: "From the air, zero physical contact with livestock" };
window.TEXTS["comparison.deteccion_de_animales_con_prob"] = { es: "Detección de animales con problemas", en: "Problem animal detection" };
window.TEXTS["comparison.revision_visual_a_ojo_subjetiv"] = { es: "Revisión visual a ojo, subjetiva y dependiente del ojo del operario", en: "Visual inspection by eye, subjective and operator-dependent" };
window.TEXTS["comparison.clasificacion_automatica_con_z"] = { es: "Clasificación automática con z-score en cada vuelo", en: "Automatic z-score classification on every flight" };
window.TEXTS["comparison.registros_historicos"] = { es: "Registros históricos", en: "Historical records" };
window.TEXTS["comparison.cuadernos_de_campo_o_planillas"] = { es: "Cuadernos de campo o planillas de Excel, sin alertas automáticas", en: "Field notebooks or Excel sheets, no automatic alerts" };
window.TEXTS["comparison.dashboard_con_historial_comple"] = { es: "Dashboard con historial completo, gráficos automáticos y alertas", en: "Dashboard with full history, automatic charts, and alerts" };
window.TEXTS["comparison.informe_para_veterinario_compr"] = { es: "Informe para veterinario / comprador", en: "Vet / buyer report" };
window.TEXTS["comparison.generacion_manual_horas_de_tra"] = { es: "Generación manual, horas de trabajo", en: "Manual generation, hours of work" };
window.TEXTS["comparison.pdf_generado_automaticamente_a"] = { es: "PDF generado automáticamente al terminar el procesamiento", en: "PDF generated automatically when processing finishes" };
/* ════════════════════════════════════════════════════════════
   LLAMADA A LA ACCIÓN
════════════════════════════════════════════════════════════ */
window.TEXTS["cta.queres_verlo_en_tu_campo"] = { es: "¿Querés verlo en tu campo?", en: "Want to see it on your farm?" };
window.TEXTS["cta.gestiona_tu_hacienda"] = { es: "Gestioná tu hacienda", en: "Manage your livestock" };
window.TEXTS["cta.de_otra_manera"] = { es: "de otra manera", en: "a different way" };
window.TEXTS["cta.somos_un_equipo_de_ingenieros"] = { es: "Somos un equipo de ingenieros argentinos. Escribinos y te mostramos cómo funciona en tu establecimiento.", en: "We're a team of Argentine engineers. Reach out and we'll show you how it works on your property." };
window.TEXTS["cta.escribinos"] = { es: "Escribinos", en: "Get in touch" };
/* ════════════════════════════════════════════════════════════
   PIE DE PÁGINA
════════════════════════════════════════════════════════════ */
window.TEXTS["footer.deteccion_activa_de_ganado_pla"] = { es: "Detección Activa de Ganado. Plataforma argentina de gestión ganadera con drones e Inteligencia Artificial.", en: "Active Cattle Detection. Argentine livestock management platform using drones and Artificial Intelligence." };
window.TEXTS["footer.proyecto_final_fiuba_2024"] = { es: "Proyecto Final FIUBA 2024", en: "FIUBA Final Project 2024" };
window.TEXTS["footer.producto"] = { es: "Producto", en: "Product" };
window.TEXTS["footer.proyecto"] = { es: "Proyecto", en: "Project" };
window.TEXTS["footer.contacto"] = { es: "Contacto", en: "Contact" };
window.TEXTS["footer.deteccion_activa_de_ganado"] = { es: "Detección Activa de Ganado", en: "Active Cattle Detection" };
window.TEXTS["footer.hecho_en_argentina"] = { es: "Hecho en Argentina", en: "Made in Argentina" };
