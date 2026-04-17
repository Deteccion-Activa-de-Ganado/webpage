import type { Content } from "./types";

export const es: Content = {
  nav: {
    home: "Inicio",
    features: "Características",
    howItWorks: "Cómo funciona",
    dashboard: "Dashboard",
    requestDemo: "Pedí una demo",
  },
  routes: {
    home: "Inicio",
    features: "Características",
    howItWorks: "Cómo funciona",
    dashboard: "Dashboard",
  },
  home: {
    hero: {
      coordinates: "34°36′S · 58°22′O",
      titleLine1: "Conocé tu rodeo",
      titleLine2: "vuelo a vuelo",
      lede: "Sobrevolá tus lotes con el dron y obtené conteo exacto, peso estimado y condición corporal de cada animal. Sin arrear, sin manga, sin estrés para la hacienda.",
      cta: "Pedí una demo",
      detection: {
        idTag: "ID:154    416kg",
        statusTag: "ESTADO: EN PESO",
        photoAlt: "Vaca detectada por el sistema DAG",
      },
    },
    stats: [
      { value: "0", label: "Contacto físico con la hacienda" },
      { value: ">93 %", label: "Precisión de conteo en condiciones reales" },
      { value: "360°", label: "Cobertura del lote en un solo vuelo" },
      { value: "4", label: "Condiciones corporales detectadas" },
    ],
    compare: {
      eyebrow: "Antes vs. con DAG",
      title: "El campo siempre tuvo sus formas. Nosotros las mejoramos.",
      beforeLabel: "Antes",
      withDAGLabel: "Con DAG",
      before: [
        "Recorrer el campo para contar cabezas",
        "Manga + balanza = estrés y pérdida de peso",
        "Registros en papel o Excel, sin tendencias",
        "El animal flaco se detecta tarde",
      ],
      withDAG: [
        "Conteo exacto en un vuelo de 10 minutos",
        "Peso estimado desde el aire, sin tocar al animal",
        "Dashboard con historial automático por vuelo",
        "Alertas automáticas antes de que sea un problema",
      ],
    },
    steps: {
      eyebrow: "Cómo funciona",
      title: "De vuelo a resultados en 4 pasos",
      cta: "Ver el proceso completo",
      items: [
        { n: "01", title: "Volá el lote", description: "Cualquier dron que grabe video" },
        { n: "02", title: "Subí el video", description: "Indicá altitud y lote" },
        { n: "03", title: "La IA procesa", description: "Conteo, peso y condición corporal" },
        { n: "04", title: "Revisá resultados", description: "Dashboard, alertas y PDF" },
      ],
    },
    dashboard: {
      eyebrow: "Dashboard",
      title: "Tu rodeo en una pantalla",
      cta: "Explorar el dashboard",
      tabs: ["Inicio", "Vuelos", "Analytics", "Configuración"],
      kpis: [
        { label: "Vuelos este mes", value: "12", delta: "+ 3", direction: "up" },
        { label: "Peso promedio", value: "395 kg", delta: "+ 11 kg", direction: "up" },
        { label: "Alertas activas", value: "2", delta: "Revisar lote Norte", direction: "warn" },
      ],
      chart: {
        label: "Evolución de peso",
        latestValue: "395 kg",
        data: [350, 360, 368, 375, 385, 395],
        axisLabels: ["May", "Jun", "Jul", "Ago", "Sep", "Oct"],
      },
      bodyCondition: {
        label: "Condición corporal",
        items: [
          { label: "Normal", value: 78, tone: "primary" },
          { label: "Terneros", value: 14, tone: "brand" },
          { label: "Bajo peso", value: 5, tone: "secondary" },
          { label: "Sobrepeso", value: 3, tone: "brand" },
        ],
      },
    },
    demo: {
      eyebrow: "Contacto",
      titleLine1: "¿Querés verlo",
      titleLine2: "con tu rodeo?",
      lede: "Escribinos y te mostramos cómo funciona en tu establecimiento.",
      cta: "Pedí una demo",
      email: "dag@fi.uba.ar",
    },
  },
  howItWorks: {
    pageHero: {
      eyebrow: "Del campo al dashboard en cuatro pasos",
      titleLine1: "Del vuelo al informe,",
      titleLine2: "sin complicaciones",
      lede: "Todo el proceso es automático una vez que subís el video. No hace falta ser técnico ni tener conocimientos de IA. Si sabés volar un dron y usar una app, alcanza.",
    },
    intro: {
      eyebrow: "El proceso paso a paso",
      title: "Cuatro pasos, un rodeo conocido",
    },
    steps: [
      {
        n: "01",
        title: "Sobrevolás el lote con el dron",
        description:
          "Tomás el dron, lo despegás y sobrevolás el lote en modo manual o automático (grid mission). El único requisito es que el vuelo sea a una altura constante y que el video quede grabado en el dispositivo. No hace falta ningún hardware adicional ni aplicación especial de vuelo.",
        bulletsTitle: "Drones compatibles",
        bullets: [
          "Cualquier dron que grabe video en MP4, AVI o MOV con resolución mínima 1080p.",
          "DJI Mini, Air, Mavic, Phantom — compatibles si conocés el sensor y la focal.",
          "Autel EVO, Parrot ANAFI y equivalentes.",
          "Si no sabés el sensor de tu cámara, está en el manual o en la web del fabricante.",
        ],
      },
      {
        n: "02",
        title: "Subís el video con los datos del vuelo",
        description:
          "Con el video descargado del dron, abrís la app de escritorio DAG o entrás a la web. Seleccionás el video, completás los datos del vuelo y confirmás. Eso es todo por tu parte.",
        bulletsTitle: "Datos que ingresás",
        bullets: [
          "Establecimiento y lote al que pertenece el vuelo.",
          "Altura de vuelo en metros (del log del dron o de la telemetría).",
          "Modelo de cámara, o tamaño del sensor (mm) y focal de la lente.",
          "Fecha y hora (por defecto, el sistema las lee de los metadatos del video).",
        ],
        callout: {
          title: "Dónde subirlo",
          body: "Podés subir el video desde el campo si tenés señal, o al llegar a la casa. El procesamiento corre en los servidores de DAG, no en tu computadora, así que no necesitás una PC potente.",
        },
      },
      {
        n: "03",
        title: "La IA procesa el video automáticamente",
        description:
          "Una vez que el video llega a los servidores de DAG, el pipeline de Inteligencia Artificial se ejecuta automáticamente. No hace falta hacer nada. El sistema te notifica cuando termina.",
        bulletsTitle: "Pipeline de procesamiento",
        bullets: [
          "Detección: YOLOv8 analiza cada fotograma y genera una máscara de segmentación por animal.",
          "Tracking: el sistema sigue a cada bovino entre frames para evitar contar dos veces.",
          "Peso estimado: se calcula el área de silueta y se convierte en kilos con el GSD del vuelo.",
          "Condición corporal: clasificación en NORMAL, TERNERO, BAJO PESO o SOBREPESO.",
        ],
        callout: {
          title: "¿Cuánto tarda?",
          body: "Un video de 10 minutos en 1080p tarda entre 15 y 30 minutos en procesarse. Recibís una notificación en la app cuando los resultados están disponibles.",
        },
      },
      {
        n: "04",
        title: "Revisás los resultados en el dashboard",
        description:
          "Cuando termina el procesamiento, los datos aparecen en el dashboard. Ves el video anotado, descargás el informe PDF y comparás con vuelos anteriores.",
        bulletsTitle: "Qué obtenés",
        bullets: [
          "Conteo exacto de cabezas confirmadas (15 fotogramas consecutivos por animal).",
          "Peso estimado individual y promedio del lote.",
          "Distribución de condición corporal con alertas automáticas.",
          "Video anotado con IDs y PDF descargable listo para compartir.",
        ],
      },
    ],
  },
  features: {
    pageHero: {
      eyebrow: "Seis herramientas, un solo sistema",
      titleLine1: "Todo lo que necesitás para",
      titleLine2: "conocer tu hacienda de verdad",
      lede: "Cada función de DAG fue diseñada para reducir el trabajo manual del productor ganadero y darte información exacta sobre tu rodeo sin tener que tocar un solo animal.",
    },
    items: [
      {
        slug: "conteo",
        n: "Función 1 de 6",
        title: "Conteo automático del rodeo",
        description:
          "El motor de detección corre cuadro a cuadro sobre el video del dron usando YOLOv8, el modelo de segmentación de instancias más preciso disponible hoy. Cada animal detectado es rastreado individualmente por ByteTrack, que le asigna un ID único y lo sigue a lo largo de toda la trayectoria del vuelo.",
        bullets: [
          "Un animal se confirma recién después de aparecer en 15 fotogramas consecutivos, lo que elimina falsos positivos por vegetación o sombras.",
          "El mismo animal no se cuenta dos veces aunque el dron lo sobrevuele en distintas pasadas.",
          "Compatible con MP4, AVI y MOV. Funciona con DJI, Autel, Parrot o cualquier dron que grabe video estabilizado.",
          "El video procesado se descarga con los bounding boxes y el ID de cada animal superpuesto.",
        ],
        badges: ["YOLOv8-seg", "ByteTrack", "OpenCV", "Python 3.11"],
        image: {
          src: "/img/muchasvacas.jpg",
          alt: "Vacas detectadas por el sistema DAG en un lote",
        },
      },
      {
        slug: "peso",
        n: "Función 2 de 6",
        title: "Peso estimado sin tolva ni manga",
        description:
          "El sistema calcula el GSD (Ground Sample Distance) usando la altura del vuelo, el tamaño del sensor y la focal de la lente. Con ese dato, mide el área real de la silueta de cada animal y la correlaciona con una curva de regresión calibrada sobre hacienda bovina argentina para estimar el peso vivo.",
        bullets: [
          "El productor ingresa la altura del vuelo (en metros), el modelo de cámara o el sensor y la focal.",
          "La estimación es más precisa entre 40 y 60 metros de altura.",
          "El resultado es el peso promedio del lote y el peso individual de cada animal identificado.",
          "Sin estrés pre-venta: el animal pasta tranquilo mientras el dron vuela.",
        ],
        badges: ["GSD", "Segmentación de instancias", "Regresión calibrada"],
        image: {
          src: "/img/foto-hacienda-lote.svg",
          alt: "Hacienda bovina en lote — estimación de peso desde dron",
        },
      },
      {
        slug: "condicion",
        n: "Función 3 de 6",
        title: "Clasificación de condición corporal",
        description:
          "Cada animal queda clasificado automáticamente en una de cuatro categorías usando análisis estadístico por z-score sobre la densidad corporal de toda la tropa. Sin revisión manual, sin subjetividad.",
        bullets: [
          "Normal: peso dentro del rango esperado para su tamaño de silueta. Condición óptima de producción.",
          "Ternero: silueta significativamente más pequeña que el promedio. Detectado como ternero o vaquillona.",
          "Bajo peso: silueta inusualmente pequeña respecto al peso estimado. Posible indicador sanitario.",
          "Sobrepeso: silueta significativamente mayor al promedio. Riesgo de enfermedad metabólica en ciertas razas.",
        ],
        badges: ["Z-score", "Clasificación automática"],
        image: {
          src: "/img/hero-drone-deteccion.svg",
          alt: "Dron detectando y clasificando animales en el campo",
        },
      },
      {
        slug: "dashboard",
        n: "Función 4 de 6",
        title: "Dashboard por establecimiento",
        description:
          "El dashboard DAG reúne todos los datos de tus vuelos en un solo lugar. Chequeás el estado de cada lote, comparás con vuelos anteriores y descargás informes sin necesidad de abrir una planilla.",
        bullets: [
          "KPIs actualizados automáticamente después de cada vuelo procesado.",
          "Historial cronológico completo de todos los vuelos del establecimiento.",
          "Mapa de lotes sobre OpenStreetMap con código de colores por estado.",
          "Comparación entre lotes y evolución de peso mensual en gráficos.",
        ],
        badges: ["React", "TypeScript", "OpenStreetMap"],
        image: {
          src: "/img/captura-pantalla-app.svg",
          alt: "Captura de pantalla del dashboard DAG",
        },
      },
      {
        slug: "pdf",
        n: "Función 5 de 6",
        title: "Informe PDF por vuelo",
        description:
          "Cada vuelo procesado genera un informe PDF automático con el resumen ejecutivo: conteo, peso promedio, distribución de condición corporal y alertas del lote. Ideal para compartir con veterinario, contador o comprador.",
        bullets: [
          "Se genera automáticamente al terminar cada procesamiento.",
          "Incluye de tres a cinco fotogramas anotados del video como referencia visual.",
          "Formato imprimible, listo para adjuntar por email.",
          "Histórico descargable de todos los PDFs del establecimiento.",
        ],
        badges: ["Generación automática", "Listo para imprimir"],
        image: {
          src: "/img/foto-productor-tablet.svg",
          alt: "Productor revisando un informe PDF en una tablet",
        },
      },
      {
        slug: "alertas",
        n: "Función 6 de 6",
        title: "Alertas configurables por lote",
        description:
          "Definís las condiciones que más te importan para cada lote —umbrales de peso, proporción mínima de Normal, animales desaparecidos— y el sistema te avisa cuando algo se sale del rango después de cada vuelo procesado.",
        bullets: [
          "Umbrales de peso promedio por lote (mínimo y máximo).",
          "Alertas automáticas por baja condición corporal (más del 10% en Bajo Peso).",
          "Detección de animales que no aparecen en vuelos consecutivos.",
          "Notificaciones por email cuando se dispara una alerta.",
        ],
        badges: ["Reglas por lote", "Notificaciones email"],
        image: {
          src: "/img/foto-campo-aereo.svg",
          alt: "Vista aérea del campo mostrando lotes monitoreados",
        },
      },
    ],
  },
  dashboardPage: {
    pageHero: {
      eyebrow: "Un comando central para tu establecimiento",
      titleLine1: "Todo el campo,",
      titleLine2: "en una sola pantalla",
      lede: "El dashboard DAG reúne todos los datos de tus vuelos en un solo lugar. Chequeás el estado de cada lote, comparás con vuelos anteriores y descargás informes sin necesidad de abrir una planilla.",
    },
    metricsPreview: {
      eyebrow: "Vista general",
      title: "Lo primero que ves al abrir",
      metrics: [
        {
          value: "487",
          label: "Cabezas detectadas hoy",
          description:
            "Conteo automático del último vuelo procesado. Confirmación por 15 fotogramas consecutivos.",
        },
        {
          value: "412 kg",
          label: "Peso promedio del rodeo",
          description:
            "Estimado por área de silueta y GSD del vuelo. Sin manga, sin balanza.",
        },
        {
          value: "3",
          label: "Alertas activas",
          description:
            "Animales fuera del rango de condición corporal configurado para este lote.",
        },
      ],
    },
    modulesIntro: {
      eyebrow: "Módulos del dashboard",
      title: "Todo lo que encontrás adentro",
    },
    modules: [
      {
        slug: "panel",
        n: "Panel de métricas",
        title: "Las cifras clave a simple vista",
        description:
          "En la parte superior del dashboard siempre tenés visible: cabezas detectadas, peso promedio, alertas activas y días desde el último vuelo del lote.",
        bullets: [
          "Actualización automática después de cada vuelo procesado.",
          "Varían por lote. Podés navegar entre todos los lotes del establecimiento.",
          "Si hay baja de peso respecto al vuelo anterior, la cifra aparece en ámbar.",
        ],
        badges: [],
        image: {
          src: "/img/captura-pantalla-app.svg",
          alt: "Panel de métricas clave del dashboard DAG",
        },
      },
      {
        slug: "evolucion",
        n: "Evolución histórica",
        title: "Gráfico de peso mensual del rodeo",
        description:
          "El gráfico muestra cómo evolucionó el peso promedio de cada lote vuelo a vuelo. Detectás caídas de condición antes de que se conviertan en un problema sanitario o productivo.",
        bullets: [
          "Línea de tiempo con todos los vuelos del establecimiento, agrupados por lote.",
          "Podés superponer dos lotes para comparar el ritmo de engorde.",
          "Anotaciones automáticas cuando hubo un cambio de tropilla o una alerta.",
        ],
        badges: [],
        image: {
          src: "/img/diagrama-arquitectura.svg",
          alt: "Gráfico de evolución de peso mensual en el dashboard DAG",
        },
      },
      {
        slug: "condicion-dashboard",
        n: "Condición corporal",
        title: "Distribución de la tropa de un vistazo",
        description:
          "El módulo muestra cuántos animales cayeron en cada categoría: NORMAL, TERNERO, BAJO PESO o SOBREPESO. La proporción se actualiza con cada vuelo procesado.",
        bullets: [
          "Desglose visual con porcentajes exactos por categoría.",
          "Si más del 10% está en BAJO PESO, el sistema genera una alerta automática.",
          "Podés ver los IDs con baja condición y buscarlos en el video anotado.",
        ],
        badges: [],
        image: {
          src: "/img/hero-drone-deteccion.svg",
          alt: "Módulo de condición corporal del dashboard DAG",
        },
      },
      {
        slug: "mapa",
        n: "Mapa de lotes",
        title: "Tu campo dibujado, por lote y estado",
        description:
          "El mapa muestra el establecimiento con cada lote delineado sobre OpenStreetMap. El color indica si el lote tiene alertas activas, condición normal o datos desactualizados.",
        bullets: [
          "Clic en un lote abre su panel detallado con métricas del último vuelo.",
          "Verde: condición normal. Ámbar: atención recomendada. Rojo: alerta activa.",
          "Gris: el lote no tiene vuelos en los últimos 30 días.",
        ],
        badges: [],
        image: {
          src: "/img/foto-campo-aereo.svg",
          alt: "Mapa del establecimiento con lotes delineados",
        },
      },
      {
        slug: "historial",
        n: "Historial de vuelos",
        title: "Cada vuelo queda registrado para siempre",
        description:
          "El historial muestra todos los relevamientos del establecimiento ordenados por fecha. Podés abrir cualquier vuelo antiguo y ver sus resultados completos como si fuera hoy.",
        bullets: [
          "Filtro por lote, rango de fechas y tipo de alerta.",
          "Cada entrada muestra cabezas, peso promedio y alertas de ese vuelo.",
          "Descargá el PDF de cualquier vuelo histórico cuando lo necesitás.",
        ],
        badges: [],
        image: {
          src: "/img/captura-pantalla-app.svg",
          alt: "Historial de vuelos del establecimiento en DAG",
        },
      },
    ],
    alerts: {
      eyebrow: "Sistema de alertas",
      title: "Sabés qué pasa antes de que sea tarde",
      lede: "Cada vuelo procesado se evalúa automáticamente. Si algo sale de los rangos que vos definiste, recibís una notificación.",
      items: [
        {
          title: "Alerta crítica — Bajo peso masivo",
          body: "Se activa cuando más del 10% de los animales del lote fue clasificado como BAJO PESO en el último vuelo. Posible deficiencia nutricional o sanitaria que requiere intervención inmediata.",
          severity: "critical",
        },
        {
          title: "Alerta de atención — Pérdida de peso individual",
          body: "Se activa cuando un animal perdió más del umbral configurado entre dos vuelos consecutivos del mismo lote. Queda identificado con su ID en el video anotado.",
          severity: "warn",
        },
        {
          title: "Información — Cambio de conteo significativo",
          body: "El conteo del último vuelo difiere en más del 5% respecto al anterior del mismo lote. Puede indicar movimiento de tropas, fallas de detección o un error de vuelo.",
          severity: "info",
        },
        {
          title: "Información — Lote sin vuelo reciente",
          body: "Recordatorio automático cuando un lote lleva más de 30 días sin relevamiento, para que no pierdas la continuidad del historial.",
          severity: "info",
        },
      ],
    },
  },
  footer: {
    tagline:
      "Conteo, peso y condición corporal desde el aire. Sin arrear, sin manga, sin errores.",
    navigateLabel: "Navegar",
    contactLabel: "Contacto",
    contactEmail: "hola@dag.ar",
    coordinates: "34°36′S · 58°22′O — Buenos Aires, Argentina",
    copyright: "Detección Activa de Ganado",
  },
  common: {
    stepLabel: "Paso",
    placeholder: "Contenido próximamente.",
  },
};
