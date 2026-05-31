import type { CalloutTone } from "@/types/ui";
import type { FeatureBlockItem, IconCardBlock, PageHeroBlock } from "@/types/blocks";
import FeatureBlock from "@/sections/FeatureBlock/FeatureBlock";
import IconCardGrid from "@/sections/IconCardGrid/IconCardGrid";
import Section from "@/components/Section/Section";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import MetricCard from "@/components/MetricCard/MetricCard";
import Callout from "@/components/Callout/Callout";
import Reveal from "@/components/Reveal/Reveal";
import heroStyles from "@/styles/page-hero.module.css";
import styles from "./page.module.css";

const pageHero: PageHeroBlock = {
  "eyebrow": "Un comando central para tu establecimiento",
  "titleLine1": "Todo el campo,",
  "titleLine2": "en una sola pantalla",
  "lede": "El dashboard DAG reúne todos los datos de tus vuelos en un solo lugar. Chequeás el estado de cada lote, comparás con vuelos anteriores y descargás informes sin necesidad de abrir una planilla."
};

const metricsPreview = {
  "eyebrow": "Vista general",
  "title": "Lo primero que ves al abrir",
  "metrics": [
    {
      "value": "487",
      "label": "Cabezas detectadas hoy",
      "description": "Conteo automático del último vuelo procesado."
    },
    {
      "value": "412 kg",
      "label": "Peso promedio del rodeo",
      "description": "Estimado por área de silueta, sin manga, sin balanza."
    },
    {
      "value": "3",
      "label": "Alertas activas",
      "description": "Animales fuera del rango de condición corporal configurado para este lote."
    }
  ]
};

const modulesIntro = {
  "eyebrow": "Módulos del dashboard",
  "title": "Todo lo que encontrás adentro"
};

const modules: FeatureBlockItem[] = [
  {
    "slug": "panel",
    "n": "Panel de métricas",
    "title": "Las cifras clave a simple vista",
    "description": "En la parte superior del dashboard siempre tenés visible: cabezas detectadas, peso promedio, alertas activas y días desde el último vuelo del lote.",
    "bullets": [
      "Actualización automática después de cada vuelo procesado.",
      "Varían por lote. Podés navegar entre todos los lotes del establecimiento.",
      "Si hay baja de peso respecto al vuelo anterior, la cifra aparece en ámbar."
    ],
    "badges": [],
    "image": {
      "src": "/img/captura-pantalla-app.jpeg",
      "alt": "Panel de métricas clave del dashboard DAG"
    }
  },
  {
    "slug": "evolucion",
    "n": "Evolución histórica",
    "title": "Gráfico de peso mensual del rodeo",
    "description": "El gráfico muestra cómo evolucionó el peso promedio de cada lote vuelo a vuelo. Detectás caídas de condición antes de que se conviertan en un problema sanitario o productivo.",
    "bullets": [
      "Línea de tiempo con todos los vuelos del establecimiento, agrupados por lote.",
      "Podés superponer dos lotes para comparar el ritmo de engorde.",
      "Anotaciones automáticas cuando hubo un cambio de tropilla o una alerta."
    ],
    "badges": [],
    "image": {
      "src": "/img/diagrama-arquitectura.jpeg",
      "alt": "Gráfico de evolución de peso mensual en el dashboard DAG"
    }
  },
  {
    "slug": "condicion-dashboard",
    "n": "Condición corporal",
    "title": "Distribución de la tropa de un vistazo",
    "description": "El módulo muestra cuántos animales cayeron en cada categoría: NORMAL, TERNERO, BAJO PESO o SOBREPESO. La proporción se actualiza con cada vuelo procesado.",
    "bullets": [
      "Desglose visual con porcentajes exactos por categoría.",
      "Si más del 10% está en BAJO PESO, el sistema genera una alerta automática.",
      "Podés ver los IDs con baja condición y buscarlos en el video anotado."
    ],
    "badges": [],
    "image": {
      "src": "/img/hero-drone-deteccion.jpg",
      "alt": "Módulo de condición corporal del dashboard DAG"
    }
  },
  {
    "slug": "mapa",
    "n": "Mapa de lotes",
    "title": "Tu campo dibujado, por lote y estado",
    "description": "El mapa muestra el establecimiento con cada lote delineado sobre OpenStreetMap. El color indica si el lote tiene alertas activas, condición normal o datos desactualizados.",
    "bullets": [
      "Clic en un lote abre su panel detallado con métricas del último vuelo.",
      "Verde: condición normal. Ámbar: atención recomendada. Rojo: alerta activa.",
      "Gris: el lote no tiene vuelos en los últimos 30 días."
    ],
    "badges": [],
    "image": {
      "src": "/img/foto-campo-aereo.jpeg",
      "alt": "Mapa del establecimiento con lotes delineados"
    }
  },
  {
    "slug": "historial",
    "n": "Historial de vuelos",
    "title": "Cada vuelo queda registrado para siempre",
    "description": "El historial muestra todos los relevamientos del establecimiento ordenados por fecha. Podés abrir cualquier vuelo antiguo y ver sus resultados completos como si fuera hoy.",
    "bullets": [
      "Filtro por lote, rango de fechas y tipo de alerta.",
      "Cada entrada muestra cabezas, peso promedio y alertas de ese vuelo.",
      "Descargá el PDF de cualquier vuelo histórico cuando lo necesitás."
    ],
    "badges": [],
    "image": {
      "src": "/img/captura-pantalla-app.jpeg",
      "alt": "Historial de vuelos del establecimiento en DAG"
    }
  }
];

const alerts = {
  "eyebrow": "Sistema de alertas",
  "title": "Sabés qué pasa antes de que sea tarde",
  "lede": "Cada vuelo procesado se evalúa automáticamente. Si algo sale de los rangos que vos definiste, recibís una notificación.",
  "items": [
    {
      "title": "Alerta crítica — Bajo peso masivo",
      "body": "Se activa cuando más del 10% de los animales del lote fue clasificado como BAJO PESO en el último vuelo. Posible deficiencia nutricional o sanitaria que requiere intervención inmediata.",
      "severity": "critical"
    },
    {
      "title": "Alerta de atención — Pérdida de peso individual",
      "body": "Se activa cuando un animal perdió más del umbral configurado entre dos vuelos consecutivos del mismo lote. Queda identificado con su ID en el video anotado.",
      "severity": "warn"
    },
    {
      "title": "Información — Cambio de conteo significativo",
      "body": "El conteo del último vuelo difiere en más del 5% respecto al anterior del mismo lote. Puede indicar movimiento de tropas, fallas de detección o un error de vuelo.",
      "severity": "info"
    },
    {
      "title": "Información — Lote sin vuelo reciente",
      "body": "Recordatorio automático cuando un lote lleva más de 30 días sin relevamiento, para que no pierdas la continuidad del historial.",
      "severity": "info"
    }
  ]
};

const access = {
  "eyebrow": "Disponibilidad",
  "title": "Desde el navegador",
  "cards": [
    {
      "icon": "globe",
      "title": "Versión web",
      "description": "Acceso desde cualquier equipo con navegador e internet. Ideal para consultas rápidas desde el celular en el campo o para compartir el acceso con el veterinario sin instalar nada.",
      "checklist": [
        "Sin instalación — abrís el navegador y listo.",
        "Acceso desde celular, tablet o PC prestada.",
        "Se puede compartir con el veterinario o capataz."
      ]
    }
  ]
};

export default function DashboardPage() {
  return (
    <>
      <section className={heroStyles.hero}>
        <Reveal>
          <div className={heroStyles.inner}>
            <p className={heroStyles.eyebrow}>{pageHero.eyebrow}</p>
            <h1 className={heroStyles.title}>
              <span>{pageHero.titleLine1}</span>
              <span className={heroStyles.highlight}>{pageHero.titleLine2}</span>
            </h1>
            <p className={heroStyles.lede}>{pageHero.lede}</p>
          </div>
        </Reveal>
      </section>

      <Section tone="surface">
        <Reveal>
          <SectionHeading
            eyebrow={metricsPreview.eyebrow}
            title={metricsPreview.title}
            align="center"
          />
        </Reveal>
        <div className={styles.metricGrid}>
          {metricsPreview.metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.08}>
              <MetricCard
                value={metric.value}
                label={metric.label}
                description={metric.description}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow={modulesIntro.eyebrow}
            title={modulesIntro.title}
            align="center"
          />
        </Reveal>
      </Section>

      {modules.map((module, i) => (
        <FeatureBlock
          key={module.slug}
          item={module}
          reverse={i % 2 === 1}
          tone={i % 2 === 0 ? "surface" : "paper"}
        />
      ))}

      <Section tone="paper" id="alertas">
        <Reveal>
          <SectionHeading
            eyebrow={alerts.eyebrow}
            title={alerts.title}
            lede={alerts.lede}
            align="center"
          />
        </Reveal>
        <div className={styles.alertList}>
          {alerts.items.map((alert, i) => (
            <Reveal key={alert.title} delay={i * 0.05}>
              <Callout title={alert.title} tone={alert.severity as CalloutTone}>
                <p>{alert.body}</p>
              </Callout>
            </Reveal>
          ))}
        </div>
      </Section>

      <IconCardGrid
        eyebrow={access.eyebrow}
        title={access.title}
        cards={access.cards as IconCardBlock[]}
        tone="surface"
        id="acceso"
      />

    </>
  );
}
