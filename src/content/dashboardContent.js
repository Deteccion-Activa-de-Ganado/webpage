export const dashboardContent = `\n<div class="breadcrumb">
  <div class="bc-in fi">
    <a href="/" data-es="Inicio" data-en="Home">Inicio</a>
    <span class="sep">›</span>
    <span>Dashboard</span>
  </div>
</div>

<!-- ══ PAGE HERO ══ -->
<section class="page-hero">
  <div class="ph-inner fi">
    <span class="sec-label" data-es="Un comando central para tu establecimiento" data-en="A central command for your property">Un comando central para tu establecimiento</span>
    <h1 class="page-hero-title">
      <span data-es="Todo el campo," data-en="Your whole property,">Todo el campo,</span><br/>
      <span class="hl" data-es="en una sola pantalla" data-en="in a single screen">en una sola pantalla</span>
    </h1>
    <div class="divider--short"></div>
    <p class="page-hero-sub"
      data-es="El dashboard DAG reúne todos los datos de tus vuelos en un solo lugar. Chequeás el estado de cada lote, comparás con vuelos anteriores y descargás informes sin necesidad de abrir una planilla."
      data-en="The DAG dashboard brings all your flight data together in one place. Check the state of each paddock, compare with previous flights, and download reports without opening a spreadsheet.">
      El dashboard DAG reúne todos los datos de tus vuelos en un solo lugar. Chequeás el estado de cada lote, comparás con vuelos anteriores y descargás informes sin necesidad de abrir una planilla.
    </p>
  </div>
</section>

<!-- ══ DIVIDER ══ -->
<div class="divider"></div>

<!-- ══ CAPTURA PRINCIPAL ══ -->
<section class="section" id="vista-general">
  <div class="fi" style="text-align:center;margin-bottom:48px;">
    <div style="border-radius:6px;overflow:hidden;border:1px solid var(--border-default);max-width:1000px;margin:0 auto;">
      <!-- Reemplazá con screenshot real del dashboard principal -->
      <img src="/img/captura-pantalla-app.svg" alt="Vista completa del dashboard DAG con todos los módulos" style="width:100%;display:block;"/>
    </div>
  </div>
  <div class="metric-grid fi">
    <div class="metric-card">
      <div class="metric-val">487</div>
      <div class="metric-label" data-es="Cabezas detectadas hoy" data-en="Heads detected today">Cabezas detectadas hoy</div>
      <div class="metric-desc" data-es="Conteo automático del último vuelo procesado. El sistema confirma cada animal con 15 fotogramas consecutivos." data-en="Automatic count from the last processed flight. The system confirms each animal with 15 consecutive frames.">Conteo automático del último vuelo. Confirmación por 15 fotogramas consecutivos.</div>
    </div>
    <div class="metric-card">
      <div class="metric-val">412 kg</div>
      <div class="metric-label" data-es="Peso promedio del rodeo" data-en="Average herd weight">Peso promedio del rodeo</div>
      <div class="metric-desc" data-es="Estimado por visión computacional sobre el área de la silueta de cada animal en el video." data-en="Estimated via computer vision from each animal's silhouette area in the video.">Estimado por área de silueta + GSD. Sin manga, sin balanza.</div>
    </div>
    <div class="metric-card">
      <div class="metric-val" style="color:var(--brand);">3</div>
      <div class="metric-label" data-es="Alertas activas" data-en="Active alerts">Alertas activas</div>
      <div class="metric-desc" data-es="Animales que están fuera del rango de condición corporal configurado para este lote. Se muestran identificados en el video anotado." data-en="Animals outside the configured body condition range for this paddock. Shown identified in the annotated video.">Animales fuera del rango configurado para este lote.</div>
    </div>
  </div>
</section>

<!-- ══ DIVIDER ══ -->
<div class="divider"></div>

<!-- ══ FUNCIONALIDADES DEL DASHBOARD ══ -->
<section class="section alt" id="funciones">
  <div class="sec-head fi">
    <span class="sec-label" data-es="Módulos del dashboard" data-en="Dashboard modules">Módulos del dashboard</span>
    <h2 class="section-title" data-es="Todo lo que encontrás adentro" data-en="Everything you'll find inside">Todo lo que encontrás adentro</h2>
  </div>

  <!-- Módulo 1: KPIs -->
  <div class="feat-panel fi">
    <div class="fp-text">
      <span class="sec-label" data-es="Panel de métricas" data-en="Metrics panel">Panel de métricas</span>
      <h3 class="fp-title" data-es="Las cifras clave a simple vista" data-en="Key numbers at a glance">Las cifras clave a simple vista</h3>
      <p class="fp-sub"
        data-es="En la parte superior del dashboard siempre tenés visible: cantidad de cabezas detectadas en el último vuelo, peso promedio del rodeo, cantidad de alertas activas y cuántos días hace del último vuelo."
        data-en="At the top of the dashboard you always see: head count from the last flight, average herd weight, number of active alerts, and how many days since the last flight.">
        En la parte superior del dashboard siempre tenés visible: cabezas detectadas, peso promedio, alertas activas y días desde el último vuelo del lote.
      </p>
      <ul class="fp-bullets">
        <li data-es="Datos actualizados automáticamente después de cada vuelo procesado." data-en="Data automatically updated after each processed flight.">Actualización automática después de cada vuelo procesado.</li>
        <li data-es="Los KPIs varían por lote seleccionado. Podés navegar entre todos los lotes del establecimiento." data-en="KPIs vary by selected paddock. You can navigate all paddocks on the property.">Varían por lote. Podés navegar entre todos los lotes del establecimiento.</li>
        <li data-es="Si hay una baja de peso respecto al vuelo anterior, la cifra aparece marcada en ámbar para que no pase desapercibida." data-en="If there's a weight drop compared to the previous flight, the figure is marked in amber so it doesn't go unnoticed.">Si hay baja de peso respecto al vuelo anterior, la cifra aparece en ámbar.</li>
      </ul>
    </div>
    <div class="fp-img">
      <!-- Reemplazá con screenshot real de los KPI cards del dashboard -->
      <img src="/img/captura-pantalla-app.svg" alt="Panel de métricas clave del dashboard DAG" loading="lazy"/>
    </div>
  </div>

  <!-- Módulo 2: Gráfico de evolución de peso -->
  <div class="feat-panel rev fi">
    <div class="fp-text">
      <span class="sec-label" data-es="Evolución histórica" data-en="Historical evolution">Evolución histórica</span>
      <h3 class="fp-title" data-es="Gráfico de peso mensual del rodeo" data-en="Monthly herd weight chart">Gráfico de peso mensual del rodeo</h3>
      <p class="fp-sub"
        data-es="El gráfico de peso mensual muestra cómo evolucionó el peso promedio de cada lote vuelo a vuelo. Podés detectar caídas de condición antes de que se conviertan en un problema sanitario o productivo."
        data-en="The monthly weight chart shows how each paddock's average weight evolved flight by flight. You can detect condition drops before they become a health or productivity problem.">
        El gráfico de peso mensual muestra la evolución del peso promedio de cada lote vuelo a vuelo. Detectás caídas antes de que se conviertan en un problema.
      </p>
      <ul class="fp-bullets">
        <li data-es="Línea de tiempo con todos los vuelos del establecimiento, agrupados por lote." data-en="Timeline with all property flights, grouped by paddock.">Línea de tiempo con todos los vuelos del establecimiento, por lote.</li>
        <li data-es="Podés superponer dos lotes distintos para comparar el ritmo de engorde." data-en="You can overlay two different paddocks to compare fattening rates.">Podés superponer dos lotes para comparar el ritmo de engorde.</li>
        <li data-es="Anotaciones automáticas en el gráfico cuando ocurrió un cambio de tropilla o una alerta activa." data-en="Automatic annotations on the chart when a herd change or active alert occurred.">Anotaciones automáticas cuando ocurrió un cambio de tropilla o alerta.</li>
      </ul>
    </div>
    <div class="fp-img">
      <!-- Reemplazá con screenshot del gráfico de evolución de peso -->
      <img src="/img/captura-pantalla-app.svg" alt="Gráfico de evolución de peso mensual del rodeo en el dashboard DAG" loading="lazy"/>
    </div>
  </div>

  <!-- Módulo 3: Condición corporal -->
  <div class="feat-panel fi">
    <div class="fp-text">
      <span class="sec-label" data-es="Condición corporal" data-en="Body condition">Condición corporal</span>
      <h3 class="fp-title" data-es="Distribución de la tropa de un vistazo" data-en="Herd distribution at a glance">Distribución de la tropa de un vistazo</h3>
      <p class="fp-sub"
        data-es="El módulo de condición corporal muestra cuántos animales cayeron en cada categoría: NORMAL, TERNERO, BAJO PESO o SOBREPESO. La proporción se actualiza con cada vuelo y se puede comparar con vuelos anteriores."
        data-en="The body condition module shows how many animals fell into each category: NORMAL, CALF, UNDERWEIGHT, or OVERWEIGHT. The proportion updates with each flight and can be compared with previous ones.">
        Muestra cuántos animales cayeron en cada categoría el último vuelo. La proporción se actualiza automáticamente.
      </p>
      <ul class="fp-bullets">
        <li data-es="Desglose visual en torta o barra con porcentajes exactos para cada categoría." data-en="Visual breakdown as pie or bar chart with exact percentages for each category.">Desglose visual con porcentajes exactos por categoría.</li>
        <li data-es="Si hay más de un 10% de animales en BAJO PESO, el sistema genera una alerta automática." data-en="If more than 10% of animals are UNDERWEIGHT, the system generates an automatic alert.">Si &gt;10% está en BAJO PESO, el sistema genera una alerta automática.</li>
        <li data-es="Podés ver qué IDs específicos tienen baja condición y buscarlos en el video anotado." data-en="You can see which specific IDs have low condition and find them in the annotated video.">Podés ver los IDs con baja condición y buscarlos en el video anotado.</li>
      </ul>
    </div>
    <div class="fp-img">
      <!-- Reemplazá con screenshot del módulo de condición corporal -->
      <img src="/img/captura-pantalla-app.svg" alt="Módulo de condición corporal del dashboard DAG" loading="lazy"/>
    </div>
  </div>

  <!-- Módulo 4: Mapa de lotes -->
  <div class="feat-panel rev fi">
    <div class="fp-text">
      <span class="sec-label" data-es="Mapa de lotes" data-en="Paddock map">Mapa de lotes</span>
      <h3 class="fp-title" data-es="Tu campo dibujado, por lote y estado" data-en="Your property mapped, by paddock and status">Tu campo dibujado, por lote y estado</h3>
      <p class="fp-sub"
        data-es="El mapa muestra el establecimiento con cada lote delineado sobre OpenStreetMap. El color del lote indica si tiene alertas activas (rojo), condición normal (verde) o sin datos recientes (gris)."
        data-en="The map shows the property with each paddock outlined on OpenStreetMap. Paddock color indicates active alerts (red), normal condition (green), or no recent data (gray).">
        El mapa muestra el establecimiento con cada lote delineado sobre OpenStreetMap. El color de cada lote indica su estado actual.
      </p>
      <ul class="fp-bullets">
        <li data-es="Clic en un lote abre su panel detallado con métricas del último vuelo." data-en="Clicking a paddock opens its detailed panel with last flight metrics.">Clic en un lote abre su panel con métricas del último vuelo.</li>
        <li data-es="Verde: condición normal. Ámbar: atención recomendada. Rojo: alerta activa." data-en="Green: normal condition. Amber: attention recommended. Red: active alert.">Verde: normal. Ámbar: atención recomendada. Rojo: alerta activa.</li>
        <li data-es="Gris: el lote no tiene vuelos en los últimos 30 días." data-en="Gray: the paddock has no flights in the last 30 days.">Gris: sin vuelos en los últimos 30 días.</li>
      </ul>
    </div>
    <div class="fp-img">
      <!-- Reemplazá con screenshot del mapa de lotes -->
      <img src="/img/foto-campo-aereo.svg" alt="Mapa del establecimiento con lotes delineados en DAG" loading="lazy"/>
    </div>
  </div>

  <!-- Módulo 5: Historial de vuelos -->
  <div class="feat-panel fi">
    <div class="fp-text">
      <span class="sec-label" data-es="Historial de vuelos" data-en="Flight history">Historial de vuelos</span>
      <h3 class="fp-title" data-es="Cada vuelo queda registrado para siempre" data-en="Every flight is permanently recorded">Cada vuelo queda registrado para siempre</h3>
      <p class="fp-sub"
        data-es="El historial de vuelos muestra todos los relevamientos del establecimiento ordenados por fecha. Podés abrir cualquier vuelo antiguo y ver sus resultados completos como si fuera hoy."
        data-en="The flight history shows all property surveys ordered by date. You can open any old flight and see its complete results as if it were today.">
        Accedés a todos los vuelos del establecimiento, ordenados por fecha. Cualquier vuelo anterior se puede abrir completo.
      </p>
      <ul class="fp-bullets">
        <li data-es="Filtro por lote, rango de fechas y tipo de alerta para encontrar lo que buscás rápido." data-en="Filter by paddock, date range, and alert type to quickly find what you're looking for.">Filtro por lote, fechas y tipo de alerta.</li>
        <li data-es="Cada entrada del historial muestra cabezas detectadas, peso promedio y alertas de ese vuelo." data-en="Each history entry shows detected heads, average weight, and alerts from that flight.">Cada entrada muestra cabezas, peso promedio y alertas de ese vuelo.</li>
        <li data-es="Podés descargar el PDF de cualquier vuelo histórico en cualquier momento." data-en="You can download the PDF of any historical flight at any time.">Descargá el PDF de cualquier vuelo histórico cuando lo necesitás.</li>
      </ul>
    </div>
    <div class="fp-img">
      <!-- Reemplazá con screenshot del listado de vuelos históricos -->
      <img src="/img/captura-pantalla-app.svg" alt="Historial de vuelos del establecimiento en DAG" loading="lazy"/>
    </div>
  </div>
</section>

<!-- ══ DIVIDER ══ -->
<div class="divider"></div>

<!-- ══ SISTEMA DE ALERTAS ══ -->
<section class="section" id="alertas">
  <div class="sec-head fi">
    <span class="sec-label" data-es="Sistema de alertas" data-en="Alert system">Sistema de alertas</span>
    <h2 class="section-title" data-es="Sabés qué pasa antes de que sea tarde" data-en="You know what's happening before it's too late">Sabés qué pasa antes de que sea tarde</h2>
    <p class="section-sub"
      data-es="El sistema de alertas evalúa cada vuelo procesado y genera notificaciones automáticas cuando se superan los umbrales que vos configuraste para cada lote."
      data-en="The alert system evaluates each processed flight and generates automatic notifications when the thresholds you configured for each paddock are exceeded.">
      Cada vuelo procesado se evalúa automáticamente. Si algo sale de los rangos que vos definiste, recibís una notificación.
    </p>
  </div>
  <div class="fi" style="max-width:780px;">
    <div class="alert-type crit">
      <h4 data-es="Alerta crítica — Bajo peso masivo" data-en="Critical alert — Mass underweight">Alerta crítica — Bajo peso masivo</h4>
      <p data-es="Se activa cuando más del 10% de los animales del lote fue clasificado como BAJO PESO en el último vuelo. Indica posible deficiencia nutricional o sanitaria que requiere intervención inmediata." data-en="Triggered when more than 10% of the paddock's animals were classified as UNDERWEIGHT in the last flight. Indicates possible nutritional or health deficiency requiring immediate intervention.">Se activa cuando &gt;10% de los animales del lote fue clasificado como BAJO PESO. Posible deficiencia nutricional o sanitaria.</p>
    </div>
    <div class="alert-type warn">
      <h4 data-es="Alerta de atención — Pérdida de peso individual" data-en="Attention alert — Individual weight loss">Alerta de atención — Pérdida de peso individual</h4>
      <p data-es="Se activa cuando un animal individual perdió más del umbral de peso configurado entre dos vuelos consecutivos del mismo lote. El animal queda identificado con su ID en el video anotado." data-en="Triggered when an individual animal lost more than the configured weight threshold between two consecutive flights of the same paddock. The animal is identified by its ID in the annotated video.">Animal individual que perdió más del umbral configurado entre dos vuelos. Queda identificado con su ID.</p>
    </div>
    <div class="alert-type">
      <h4 data-es="Información — Cambio de conteo significativo" data-en="Info — Significant count change">Información — Cambio de conteo significativo</h4>
      <p data-es="Se activa cuando el conteo del último vuelo difiere en más del 5% respecto al vuelo anterior del mismo lote. Puede indicar movimiento de tropas, fallas de detección o un error de vuelo." data-en="Triggered when the last flight count differs by more than 5% from the previous flight of the same paddock. May indicate herd movement, detection failure, or flight error.">El conteo difiere &gt;5% respecto al vuelo anterior. Puede indicar movimiento de tropas o falla de detección.</p>
    </div>
    <div class="alert-type">
      <h4 data-es="Información — Lote sin vuelo reciente" data-en="Info — Paddock without recent flight">Información — Lote sin vuelo reciente</h4>
      <p data-es="Recordatorio automático cuando un lote lleva más de 30 días sin ser relevado, para que no pierdas la continuidad del historial." data-en="Automatic reminder when a paddock hasn't been surveyed for more than 30 days, so you don't lose history continuity.">Recordatorio automático cuando un lote lleva más de 30 días sin relevamiento.</p>
    </div>
  </div>
  <div class="fi config-box" style="margin-top:32px;">
    <p data-es="Los umbrales de cada alerta son configurables por lote o por establecimiento. Podés definir que una alerta se dispare a partir del 5%, 10% o cualquier porcentaje de animales en bajo peso que tenga sentido para tu hacienda."
      data-en="Each alert threshold is configurable per paddock or per property. You can set alerts to trigger at 5%, 10%, or any percentage of underweight animals that makes sense for your herd.">
      Los umbrales de cada alerta son configurables por lote o por establecimiento. Definís vos el porcentaje que dispara la alerta.
    </p>
  </div>
</section>

<!-- ══ DIVIDER ══ -->
<div class="divider"></div>

<!-- ══ ACCESO — DESKTOP vs WEB ══ -->
<section class="section alt" id="acceso">
  <div class="sec-head c fi">
    <span class="sec-label" data-es="Disponibilidad" data-en="Availability">Disponibilidad</span>
    <h2 class="section-title" data-es="Desde la app o desde el navegador" data-en="From the app or from the browser">Desde la app o desde el navegador</h2>
  </div>
  <div class="access-grid fi">
    <div class="access-card">
      <div class="access-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
      </div>
      <h3 data-es="App de escritorio" data-en="Desktop app">App de escritorio</h3>
      <p data-es="Disponible para Windows, macOS y Linux. La app de escritorio es la forma recomendada para subir videos y revisar resultados cuando estás en la oficina o en la casa del establecimiento. Funciona sin conexión continua: podés navegar historial en modo offline."
        data-en="Available for Windows, macOS, and Linux. The desktop app is the recommended way to upload videos and review results when you're in the office or at the property house. Works without continuous connection: you can browse history in offline mode.">
        Windows, macOS y Linux. Recomendada para subir videos pesados y revisar resultados en detalle. Puede navegar historial en modo offline.
      </p>
      <ul class="access-list">
        <li><span class="check">✓</span><span data-es="Subida de video directa desde el disco" data-en="Direct video upload from disk">Subida de video directa desde el disco</span></li>
        <li><span class="check">✓</span><span data-es="Reproducción del video anotado integrada" data-en="Integrated annotated video playback">Reproducción del video anotado integrada</span></li>
        <li><span class="check">✓</span><span data-es="Descarga de informes PDF con un clic" data-en="One-click PDF report download">Descarga de informes PDF con un clic</span></li>
        <li><span class="check">✓</span><span data-es="Gestión completa de lotes y vuelos offline" data-en="Full offline paddock and flight management">Gestión de lotes y vuelos sin conexión</span></li>
      </ul>
    </div>
    <div class="access-card">
      <div class="access-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      </div>
      <h3 data-es="Versión web" data-en="Web version">Versión web</h3>
      <p data-es="Usable desde cualquier equipo con navegador moderno (Chrome, Firefox, Edge, Safari). La versión web es ideal para consultas rápidas desde el celular en el campo, o para compartir el acceso con el veterinario o el peón de confianza sin instalar nada."
        data-en="Usable from any device with a modern browser (Chrome, Firefox, Edge, Safari). The web version is ideal for quick queries from your phone in the field, or to share access with the vet or trusted farmhand without installing anything.">
        Acceso desde cualquier navegador moderno. Ideal para consultas rápidas desde el celular en el campo o para compartir acceso con el veterinario.
      </p>
      <ul class="access-list">
        <li><span class="check">✓</span><span data-es="Sin instalación — abrís el navegador y listo" data-en="No install — open the browser and that's it">Sin instalación — abrís el navegador y listo</span></li>
        <li><span class="check">✓</span><span data-es="Acceso desde celular, tablet o PC prestada" data-en="Access from phone, tablet, or borrowed PC">Acceso desde celular, tablet o PC prestada</span></li>
        <li><span class="check">✓</span><span data-es="Se puede compartir acceso con terceros" data-en="Access can be shared with third parties">Se puede compartir con el veterinario o capataz</span></li>
        <li><span class="check">✓</span><span data-es="Mismo dashboard y datos que la app de escritorio" data-en="Same dashboard and data as the desktop app">Mismo dashboard y datos que la app de escritorio</span></li>
      </ul>
    </div>
  </div>
</section>

<!-- ══ DIVIDER ══ -->
<div class="divider"></div>

<!-- ══ CTA ══ -->
<section id="cta">
  <div class="cta-in fi">
    <span class="sec-label" data-es="¿Querés ver el dashboard en acción?" data-en="Want to see the dashboard in action?">¿Querés ver el dashboard en acción?</span>
    <h2 class="section-title" style="text-align:center;">
      <span data-es="Pedí una demo con" data-en="Request a demo with">Pedí una demo con</span><br/>
      <span class="hl" data-es="tus propios lotes" data-en="your own paddocks">tus propios lotes</span>
    </h2>
    <p class="section-sub" style="text-align:center;"
      data-es="Te mostramos el dashboard funcionando con datos reales de un establecimiento similar al tuyo, o directamente con los datos de tu primer vuelo."
      data-en="We'll show you the dashboard running with real data from a property similar to yours, or directly with data from your first flight.">
      Te mostramos el dashboard con datos reales de un establecimiento similar, o con los datos de tu primer vuelo.
    </p>
    <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;">
      <a href="mailto:dag@fi.uba.ar" class="hero-cta" style="font-size:1rem;padding:14px 32px;" data-es="Pedí tu demo" data-en="Request your demo">Pedí tu demo</a>
      <a href="/como-funciona" class="btn-secondary" style="font-size:1rem;padding:14px 32px;" data-es="Ver cómo funciona" data-en="See how it works">Ver cómo funciona</a>
    </div>
  </div>
</section>

<!-- ══ FOOTER ══ -->\n`;
