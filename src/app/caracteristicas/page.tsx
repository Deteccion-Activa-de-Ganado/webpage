import FeatureBlock from "@/sections/FeatureBlock/FeatureBlock";
import ComparisonTable from "@/sections/ComparisonTable/ComparisonTable";
import Reveal from "@/components/Reveal/Reveal";
import type { ComparisonBlock, FeatureBlockItem, PageHeroBlock } from "@/types/blocks";
import heroStyles from "@/styles/page-hero.module.css";
const pageHero: PageHeroBlock = {
  "eyebrow": "Seis herramientas, un solo sistema",
  "titleLine1": "Todo lo que necesitás para",
  "titleLine2": "conocer tu campo de verdad",
  "lede": "Cada función de DAG fue diseñada para reducir el trabajo manual del productor ganadero y darte información sobre tu ganado sin tener que tocar un solo animal."
};

const items: FeatureBlockItem[] = [
  {
    "slug": "conteo",
    "n": "Función 1 de 6",
    "title": "Conteo automático del ganado",
    "description": "El motor de detección corre cuadro a cuadro sobre el video. Cada animal detectado es identificado, analizado y lo sigue a lo largo del vuelo.",
    "bullets": [
      "Un animal se confirma recién después de aparecer en varios fotogramas consecutivos, lo que reduce falsos positivos por vegetación o sombras.",
      // "El mismo animal no se cuenta dos veces aunque el dron lo sobrevuele en distintas pasadas.",
      "Compatible con cualquier tipo de video, filmado desde cualquier dron que grabe video estabilizado.",
      "El video procesado se descarga con los bounding boxes y el ID de cada animal superpuesto."
    ],
    "badges": [
      // "YOLOv8-seg",
      // "ByteTrack",
      // "OpenCV",
      // "Python 3.11"
    ],
    "image": {
      "src": "/img/caracteristicas-01-conteo-ganado.jpg",
      "alt": "Vacas en una pastura"
    }
  },
  {
    "slug": "peso",
    "n": "Función 2 de 6",
    "title": "Peso estimado sin pesa ni manga",
    "description": "El sistema utiliza la altura del vuelo, el tamaño del sensor y la focal del lente. Con estos datos calcula parámetros biométricos de cada animal para estimar su peso",
    "bullets": [
      "El productor ingresa la altura del vuelo (en metros), el modelo de cámara o el sensor y la focal.",
      "La estimación es más precisa entre 10 y 15 metros de altura.",
      "El resultado permite conocer el peso promedio del lote y el peso individual de cada animal identificado.",
      "Sin estrés innecesario: el animal pasta tranquilo mientras el dron vuela."
    ],
    "badges": [
      // "GSD",
      // "Segmentación de instancias",
      // "Regresión calibrada"
    ],
    "image": {
      "src": "/img/caracteristicas-02-peso-lote.jpeg",
      "alt": "Hacienda bovina en lote — estimación de peso desde dron"
    }
  },
  {
    "slug": "condicion",
    "n": "Función 3 de 6",
    "title": "Clasificación de condición corporal",
    "description": "Cada animal queda clasificado automáticamente en una de cuatro categorías usando análisis estadístico sobre el peso analizado del ganado. Sin revisión manual, sin subjetividad.",
    "bullets": [
      "Normal: peso dentro del rango esperado para su tamaño. Condición óptima de producción.",
      "Ternero: silueta significativamente más pequeña que el promedio. Detectado como ternero o vaquillona.",
      "Bajo peso: silueta inusualmente pequeña respecto al peso estimado. Posible indicador sanitario.",
      "Sobrepeso: silueta significativamente mayor al promedio. Posible indicador sanitario."
    ],
    "badges": [
      // "Z-score",
      // "Clasificación automática"
    ],
    "image": {
      "src": "/img/caracteristicas-03-condicion-dron.jpg",
      "alt": "Dron detectando y clasificando animales en el campo"
    }
  },
  {
    "slug": "dashboard",
    "n": "Función 4 de 6",
    "title": "Dashboard por establecimiento",
    "description": "El dashboard DAG reúne todos los datos de tus vuelos en un solo lugar. Chequeás el estado de cada lote, comparás con vuelos anteriores y descargás informes sin necesidad de abrir una planilla.",
    "bullets": [
      "KPIs actualizados automáticamente después de cada vuelo procesado.",
      "Historial cronológico completo de todos los vuelos del establecimiento.",
      "Mapa de lotes.",
      "Comparación entre lotes y evolución de peso mensual en gráficos."
    ],
    "badges": [
      // "React",
      // "TypeScript",
      // "OpenStreetMap"
    ],
    "image": {
      "src": "/img/caracteristicas-04-dashboard.jpeg",
      "alt": "Captura de pantalla del dashboard DAG"
    }
  },
  {
    "slug": "pdf",
    "n": "Función 5 de 6",
    "title": "Informe PDF por vuelo",
    "description": "Cada vuelo procesado genera un informe PDF automático con el resumen del estado: conteo, peso promedio, distribución de condición corporal y alertas del lote. Ideal para compartir con el veterinario, contador o comprador.",
    "bullets": [
      "Se genera automáticamente al terminar cada procesamiento.",
      "Formato imprimible, listo para adjuntar por email.",
      "Histórico descargable de todos los PDFs del establecimiento."
    ],
    "badges": [
      // "Generación automática",
      // "Listo para imprimir"
    ],
    "image": {
      "src": "/img/caracteristicas-05-informe-pdf.jpeg",
      "alt": "Productor revisando un informe PDF en una tablet"
    }
  },
  {
    "slug": "alertas",
    "n": "Función 6 de 6",
    "title": "Alertas configurables por lote",
    "description": "Definís las condiciones que más te importan para cada lote —umbrales de peso, desvío de cantidades, animales desaparecidos— y el sistema te avisa cuando algo se sale del rango después de cada vuelo procesado.",
    "bullets": [
      "Modificables por el usuario.",
      "Criterios personalizables.",
      "Multiples tipos de alertas, peso, cantidades, tiempos, etc.",
      "Notificaciones por email cuando se dispara una alerta."
    ],
    "badges": [
      // "Reglas por lote",
      // "Notificaciones email"
    ],
    "image": {
      "src": "/img/caracteristicas-06-alertas-campo.jpeg",
      "alt": "Vista aérea del campo mostrando lotes monitoreados"
    }
  }
];

const comparison: ComparisonBlock = {
  "eyebrow": "Comparativa",
  "title": "DAG vs. métodos tradicionales",
  "headers": {
    "activity": "Actividad",
    "traditional": "Método tradicional",
    "withDag": "Con DAG"
  },
  "rows": [
    {
      "activity": "Conteo del rodeo",
      "traditional": "A caballo o en camioneta, 2–4 hs, margen de error alto por error humano",
      "withDag": "10 min de vuelo + procesamiento automático, error reducido y eficiente"
    },
    {
      "activity": "Estimación de peso",
      "traditional": "Manga y balanza: estresa la hacienda, baja el peso y puede dar lugar a accidentes",
      "withDag": "Desde el aire, sin contacto físico con la hacienda y sin estrés para los animales"
    },
    {
      "activity": "Detección de animales con problemas",
      "traditional": "Revisión visual a ojo, subjetiva y dependiente del ojo del operario",
      "withDag": "Clasificación automática en cada vuelo"
    },
    {
      "activity": "Registros históricos",
      "traditional": "Cuadernos de campo o planillas, sin alertas automáticas",
      "withDag": "Dashboard con historial completo, gráficos automáticos y alertas"
    },
    {
      "activity": "Informe para veterinario / comprador",
      "traditional": "Generación manual, horas de trabajo",
      "withDag": "PDF generado automáticamente al terminar el procesamiento"
    }
  ]
};

export default function CaracteristicasPage() {
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

      {items.map((item, index) => (
        <FeatureBlock
          key={item.slug}
          item={item}
          reverse={index % 2 === 1}
          tone={index % 2 === 0 ? "surface" : "paper"}
        />
      ))}

      <ComparisonTable content={comparison} id="comparacion" tone="paper" />
    </>
  );
}
