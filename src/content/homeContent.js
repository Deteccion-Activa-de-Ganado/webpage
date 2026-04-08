export const homeContent = `\n<section id="hero">
  <div class="hero-grid">
    <div class="hero-left fi">
      <h1 class="hero-title">
        <span data-es="Conocé tu rodeo" data-en="Know your herd">Conocé tu rodeo</span><br/>
        <span class="hl" data-es="vuelo a vuelo" data-en="flight by flight">vuelo a vuelo</span>
      </h1>

      <div class="divider--short"></div>

      <p class="hero-sub"
        data-es="Sobrevolá tus lotes con el dron y obtené conteo exacto, peso estimado y condición corporal de cada animal. Sin arrear, sin manga, sin estrés para la hacienda."
        data-en="Fly over your paddocks with a drone and get exact headcount, estimated weight, and body condition for every animal. No herding, no crush, no stress for the cattle.">
        Sobrevolá tus lotes con el dron y obtené conteo exacto, peso estimado y condición corporal de cada animal. Sin arrear, sin manga, sin estrés para la hacienda.
      </p>

      <a href="#cta" class="hero-cta"
        data-es="Pedí una demo" data-en="Request a demo">Pedí una demo</a>
    </div>

    <div class="hero-right">
      <img class="hero-photo" src="/img/foto-vaca.jpg" alt="Vaca detectada por el sistema DAG" />
      <!-- Detection frame overlay (replaces low-res marco.png) -->
      <svg class="hero-marco" viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg">
        <!-- Main border -->
        <rect class="marco-border" x="4" y="4" width="392" height="312" rx="3"/>
        <!-- Corner accents (top-left) -->
        <path class="marco-corner" d="M4 34 L4 4 L44 4"/>
        <!-- Corner accents (top-right) -->
        <path class="marco-corner" d="M356 4 L396 4 L396 34"/>
        <!-- Corner accents (bottom-left) -->
        <path class="marco-corner" d="M4 286 L4 316 L44 316"/>
        <!-- Corner accents (bottom-right) -->
        <path class="marco-corner" d="M356 316 L396 316 L396 286"/>
        <!-- Top-left tag: ID + weight -->
        <rect class="marco-tag" x="4" y="4" width="130" height="24" rx="0"/>
        <text class="marco-tag-text" x="12" y="19">ID:154    416kg</text>
        <!-- Bottom-right tag: status -->
        <rect class="marco-tag" x="270" y="292" width="126" height="24" rx="0"/>
        <text class="marco-tag-text" x="278" y="307">ESTADO: EN PESO</text>
        <!-- Subtle scanlines -->
        <line class="marco-scanline" x1="4" y1="107" x2="396" y2="107"/>
        <line class="marco-scanline" x1="4" y1="213" x2="396" y2="213"/>
        <!-- Crosshair center -->
        <line x1="190" y1="155" x2="210" y2="155" stroke="rgba(27,58,42,.25)" stroke-width="1"/>
        <line x1="200" y1="145" x2="200" y2="165" stroke="rgba(27,58,42,.25)" stroke-width="1"/>
        <circle cx="200" cy="155" r="12" fill="none" stroke="rgba(27,58,42,.15)" stroke-width="1" stroke-dasharray="4 3"/>
      </svg>
    </div>
  </div>
</section>

<!-- ══ LINE ══ -->
<div class="divider"></div>

<!-- ══ STATS ══ -->
<section id="stats">
  <div class="stats-grid fi">
    <div class="stat">
      <div class="stat-val">0</div>
      <div class="stat-lbl" data-es="Contacto físico con la hacienda" data-en="Physical contact with livestock">Contacto físico con la hacienda</div>
    </div>
    <div class="stat">
      <div class="stat-val">&gt;93 %</div>
      <div class="stat-lbl" data-es="Precisión de conteo en condiciones reales" data-en="Counting accuracy in real-world conditions">Precisión de conteo en condiciones reales</div>
    </div>
    <div class="stat">
      <div class="stat-val">360°</div>
      <div class="stat-lbl" data-es="Cobertura del lote en un solo vuelo" data-en="Full paddock coverage in one flight">Cobertura del lote en un solo vuelo</div>
    </div>
    <div class="stat">
      <div class="stat-val">4</div>
      <div class="stat-lbl" data-es="Condiciones corporales detectadas" data-en="Body conditions detected automatically">Condiciones corporales detectadas</div>
    </div>
  </div>
</section>

<!-- ══ LINE ══ -->
<div class="divider"></div>

<!-- ══ BEFORE / AFTER ══ -->
<section id="problem" class="section">
  <div class="sec-head c fi">
    <span class="sec-label" data-es="Antes vs. con DAG" data-en="Before vs. with DAG">Antes vs. con DAG</span>
    <h2 class="section-title" data-es="El campo siempre tuvo sus formas. Nosotros las mejoramos." data-en="Traditional methods work well. We make them better.">
      El campo siempre tuvo sus formas.<br/>Nosotros las mejoramos.
    </h2>
  </div>
  <div class="ps-grid fi">
    <!-- Antes -->
    <div>
      <p class="ps-col-title prob" data-es="Antes" data-en="Before">Antes</p>
      <div class="ps-item prob">
        <svg class="ps-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <div class="ps-txt"><h4 data-es="Recorrer el campo para contar cabezas" data-en="Riding the field to count heads">Recorrer el campo para contar cabezas</h4></div>
      </div>
      <div class="ps-item prob">
        <svg class="ps-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/><line x1="12" y1="3" x2="12" y2="15"/><path d="M4 21h16"/></svg>
        <div class="ps-txt"><h4 data-es="Manga + balanza = estrés y pérdida de peso" data-en="Crush + scale = stress and weight loss">Manga + balanza = estrés y pérdida de peso</h4></div>
      </div>
      <div class="ps-item prob">
        <svg class="ps-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        <div class="ps-txt"><h4 data-es="Registros en papel o Excel, sin tendencias" data-en="Paper or Excel records, no trends">Registros en papel o Excel, sin tendencias</h4></div>
      </div>
      <div class="ps-item prob">
        <svg class="ps-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <div class="ps-txt"><h4 data-es="El animal flaco se detecta tarde" data-en="Underweight animals detected too late">El animal flaco se detecta tarde</h4></div>
      </div>
    </div>

    <!-- Con DAG -->
    <div>
      <p class="ps-col-title sol" data-es="Con DAG" data-en="With DAG">Con DAG</p>
      <div class="ps-item sol">
        <svg class="ps-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        <div class="ps-txt"><h4 data-es="Conteo exacto en un vuelo de 10 minutos" data-en="Exact headcount in a 10-minute flight">Conteo exacto en un vuelo de 10 minutos</h4></div>
      </div>
      <div class="ps-item sol">
        <svg class="ps-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>
        <div class="ps-txt"><h4 data-es="Peso estimado desde el aire, sin tocar al animal" data-en="Weight estimated from the air, no contact">Peso estimado desde el aire, sin tocar al animal</h4></div>
      </div>
      <div class="ps-item sol">
        <svg class="ps-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        <div class="ps-txt"><h4 data-es="Dashboard con historial automático por vuelo" data-en="Dashboard with automatic history per flight">Dashboard con historial automático por vuelo</h4></div>
      </div>
      <div class="ps-item sol">
        <svg class="ps-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        <div class="ps-txt"><h4 data-es="Alertas automáticas antes de que sea un problema" data-en="Automatic alerts before it becomes a problem">Alertas automáticas antes de que sea un problema</h4></div>
      </div>
    </div>
  </div>
</section>

<!-- ══ LINE ══ -->
<div class="divider"></div>

<!-- ══ HOW IT WORKS ══ -->
<section id="how" class="section">
  <div class="sec-head c fi">
    <span class="sec-label" data-es="Cómo funciona" data-en="How it works">Cómo funciona</span>
    <h2 class="section-title" data-es="De vuelo a resultados en 4 pasos" data-en="From flight to results in 4 steps">De vuelo a resultados en 4 pasos</h2>
  </div>
  <div class="steps fi">
    <div class="step">
      <span class="step-n">01</span>
      <svg class="step-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
      <h3 class="step-title" data-es="Volá el lote" data-en="Fly the paddock">Volá el lote</h3>
      <p class="step-desc" data-es="Cualquier dron que grabe video" data-en="Any drone that records video">Cualquier dron que grabe video</p>
    </div>
    <div class="step">
      <span class="step-n">02</span>
      <svg class="step-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>
      <h3 class="step-title" data-es="Subí el video" data-en="Upload the video">Subí el video</h3>
      <p class="step-desc" data-es="Indicá altitud y lote" data-en="Enter altitude and paddock">Indicá altitud y lote</p>
    </div>
    <div class="step">
      <span class="step-n">03</span>
      <svg class="step-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><path d="M7 9l3 3-3 3"/><line x1="13" y1="15" x2="17" y2="15"/></svg>
      <h3 class="step-title" data-es="La IA procesa" data-en="AI processes">La IA procesa</h3>
      <p class="step-desc" data-es="Conteo, peso y condición corporal" data-en="Headcount, weight, and body condition">Conteo, peso y condición corporal</p>
    </div>
    <div class="step">
      <span class="step-n">04</span>
      <svg class="step-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>
      <h3 class="step-title" data-es="Revisá resultados" data-en="Review results">Revisá resultados</h3>
      <p class="step-desc" data-es="Dashboard, alertas y PDF" data-en="Dashboard, alerts, and PDF">Dashboard, alertas y PDF</p>
    </div>
  </div>
  <div class="sec-detail fi">
    <a href="/como-funciona" class="btn-detail">
      <span data-es="Ver el proceso completo" data-en="See the full process">Ver el proceso completo</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    </a>
  </div>
</section>

<!-- ══ LINE ══ -->
<div class="divider"></div>

<!-- ══ DASHBOARD PREVIEW ══ -->
<section id="dashboard-sec" class="section">
  <div class="sec-head c fi">
    <span class="sec-label" data-es="Dashboard" data-en="Dashboard">Dashboard</span>
    <h2 class="section-title" data-es="Tu rodeo en una pantalla" data-en="Your herd on one screen">Tu rodeo en una pantalla</h2>
  </div>
  <div class="dash-wrap fi">
    <div class="dash-top">
      <div class="dash-tab on" data-es="Inicio" data-en="Home">Inicio</div>
      <div class="dash-tab" data-es="Vuelos" data-en="Flights">Vuelos</div>
      <div class="dash-tab" data-es="Analytics" data-en="Analytics">Analytics</div>
      <div class="dash-tab" data-es="Configuración" data-en="Settings">Configuración</div>
    </div>
    <div class="dash-body">
      <div class="kpi">
        <div class="kpi-lbl" data-es="Vuelos este mes" data-en="Flights this month">Vuelos este mes</div>
        <div class="kpi-val">12</div>
        <div class="kpi-delta up">+ 3</div>
      </div>
      <div class="kpi">
        <div class="kpi-lbl" data-es="Peso promedio" data-en="Average weight">Peso promedio</div>
        <div class="kpi-val">395 kg</div>
        <div class="kpi-delta up">+ 11 kg</div>
      </div>
      <div class="kpi">
        <div class="kpi-lbl" data-es="Alertas activas" data-en="Active alerts">Alertas activas</div>
        <div class="kpi-val" style="color:var(--brand)">2</div>
        <div class="kpi-delta warn" data-es="Revisar lote Norte" data-en="Review North paddock">Revisar lote Norte</div>
      </div>
      <!-- Chart -->
      <div class="kpi">
        <div class="kpi-lbl" style="margin-bottom:12px;" data-es="Evolución de peso" data-en="Weight evolution">Evolución de peso</div>
        <svg viewBox="0 0 380 118" style="width:100%;display:block;">
          <defs>
            <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="var(--primary)" stop-opacity="0.1"/>
              <stop offset="100%" stop-color="var(--primary)" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <line x1="40" y1="10" x2="40" y2="100" stroke="var(--border-default)" stroke-width="1"/>
          <line x1="40" y1="100" x2="370" y2="100" stroke="var(--border-default)" stroke-width="1"/>
          <line x1="40" y1="70" x2="370" y2="70" stroke="var(--border-default)" stroke-width=".5" stroke-dasharray="3,3"/>
          <line x1="40" y1="40" x2="370" y2="40" stroke="var(--border-default)" stroke-width=".5" stroke-dasharray="3,3"/>
          <text x="0" y="103" fill="var(--text-muted)" font-size="8" font-family="'Azeret Mono',monospace">350</text>
          <text x="0" y="73" fill="var(--text-muted)" font-size="8" font-family="'Azeret Mono',monospace">375</text>
          <text x="0" y="43" fill="var(--text-muted)" font-size="8" font-family="'Azeret Mono',monospace">400</text>
          <text x="70" y="112" fill="var(--text-muted)" font-size="8" font-family="'Azeret Mono',monospace" text-anchor="middle">May</text>
          <text x="118" y="112" fill="var(--text-muted)" font-size="8" font-family="'Azeret Mono',monospace" text-anchor="middle">Jun</text>
          <text x="166" y="112" fill="var(--text-muted)" font-size="8" font-family="'Azeret Mono',monospace" text-anchor="middle">Jul</text>
          <text x="214" y="112" fill="var(--text-muted)" font-size="8" font-family="'Azeret Mono',monospace" text-anchor="middle">Ago</text>
          <text x="262" y="112" fill="var(--text-muted)" font-size="8" font-family="'Azeret Mono',monospace" text-anchor="middle">Sep</text>
          <text x="310" y="112" fill="var(--text-muted)" font-size="8" font-family="'Azeret Mono',monospace" text-anchor="middle">Oct</text>
          <path d="M70,82 L118,75 L166,68 L214,61 L262,50 L310,38 L310,100 L70,100 Z" fill="url(#cg)"/>
          <polyline points="70,82 118,75 166,68 214,61 262,50 310,38" fill="none" stroke="var(--primary)" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>
          <circle cx="310" cy="38" r="4" fill="var(--primary)" stroke="var(--surface)" stroke-width="2"/>
          <rect x="288" y="20" width="64" height="18" fill="var(--bg-main)" rx="4"/>
          <text x="293" y="30" fill="var(--primary)" font-size="8" font-family="'Azeret Mono',monospace" font-weight="bold">395 kg</text>
        </svg>
      </div>

      <!-- Condición corporal -->
      <div class="kpi">
        <div class="kpi-lbl" style="margin-bottom:14px;" data-es="Condición corporal" data-en="Body condition">Condición corporal</div>
        <div style="display:flex;flex-direction:column;gap:9px;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:.78rem;color:var(--text-muted);" data-es="Normal" data-en="Normal">Normal</span>
            <span class="mono" style="font-size:.75rem;font-weight:700;color:var(--primary)">78 %</span>
          </div>
          <div style="background:var(--border-default);border-radius:3px;height:4px;overflow:hidden;">
            <div style="width:78%;height:100%;background:var(--primary);border-radius:3px;"></div>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:.78rem;color:var(--text-muted);" data-es="Terneros" data-en="Calves">Terneros</span>
            <span class="mono" style="font-size:.75rem;font-weight:700;">14 %</span>
          </div>
          <div style="background:var(--border-default);border-radius:3px;height:4px;overflow:hidden;">
            <div style="width:14%;height:100%;background:var(--brand);border-radius:3px;"></div>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:.78rem;color:var(--text-muted);" data-es="Bajo peso" data-en="Underweight">Bajo peso</span>
            <span class="mono" style="font-size:.75rem;font-weight:700;color:var(--secondary)">5 %</span>
          </div>
          <div style="background:var(--border-default);border-radius:3px;height:4px;overflow:hidden;">
            <div style="width:5%;height:100%;background:var(--secondary);border-radius:3px;"></div>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:.78rem;color:var(--text-muted);" data-es="Sobrepeso" data-en="Overweight">Sobrepeso</span>
            <span class="mono" style="font-size:.75rem;font-weight:700;color:var(--brand)">3 %</span>
          </div>
          <div style="background:var(--border-default);border-radius:3px;height:4px;overflow:hidden;">
            <div style="width:3%;height:100%;background:var(--brand);border-radius:3px;"></div>
          </div>
        </div>
      </div>

      <!-- Últimos vuelos -->
      <div class="kpi" style="grid-column:span 2;">
        <div class="kpi-lbl" style="margin-bottom:12px;" data-es="Últimos vuelos" data-en="Recent flights">Últimos vuelos</div>
        <div style="display:flex;flex-direction:column;gap:0;">
          <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--border-default);">
            <span style="font-size:.82rem;">Lote Norte — <span class="mono" style="font-size:.74rem;">2024-10-15</span></span>
            <span class="mono" style="color:var(--primary);font-size:.68rem;font-weight:600;" data-es="Procesado" data-en="Processed">Procesado</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--border-default);">
            <span style="font-size:.82rem;">Lote Sur — <span class="mono" style="font-size:.74rem;">2024-10-10</span></span>
            <span class="mono" style="color:var(--primary);font-size:.68rem;font-weight:600;" data-es="Procesado" data-en="Processed">Procesado</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;">
            <span style="font-size:.82rem;">Lote Este — <span class="mono" style="font-size:.74rem;">2024-10-05</span></span>
            <span class="mono" style="color:var(--brand);font-size:.68rem;font-weight:600;" data-es="Procesando..." data-en="Processing...">Procesando...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="sec-detail fi">
    <a href="/dashboard" class="btn-detail">
      <span data-es="Explorar el dashboard" data-en="Explore the dashboard">Explorar el dashboard</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    </a>
  </div>
</section>

<!-- ══ LINE ══ -->
<div class="divider"></div>

<!-- ══ CTA ══ -->
<section id="cta">
  <div class="cta-in fi">
    <span class="sec-label" data-es="Contacto" data-en="Contact">Contacto</span>
    <h2 class="cta-title">
      <span data-es="¿Querés verlo" data-en="Want to see it">¿Querés verlo</span><br/>
      <span class="hl" data-es="con tu rodeo?" data-en="with your herd?">con tu rodeo?</span>
    </h2>
    <p class="cta-sub" data-es="Escribinos y te mostramos cómo funciona en tu establecimiento." data-en="Reach out and we'll show you how it works on your property.">
      Escribinos y te mostramos cómo funciona en tu establecimiento.
    </p>
    <a href="mailto:dag@fi.uba.ar" class="hero-cta" style="font-size:.95rem;padding:16px 36px;"
      data-es="Pedí una demo" data-en="Request a demo">Pedí una demo</a>
  </div>
</section>

<!-- ══ FOOTER ══ -->\n`;
