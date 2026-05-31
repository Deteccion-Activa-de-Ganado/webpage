import ProcessStep from "@/sections/ProcessStep/ProcessStep";
import IconCardGrid from "@/sections/IconCardGrid/IconCardGrid";
import Section from "@/components/Section/Section";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Reveal from "@/components/Reveal/Reveal";
import heroStyles from "@/styles/page-hero.module.css";
import type { IconCardBlock, PageHeroBlock, ProcessStepBlock } from "@/types/blocks";

const pageHero: PageHeroBlock = {
  "eyebrow": "Del campo al dashboard en cuatro pasos",
  "titleLine1": "Del vuelo al informe,",
  "titleLine2": "sin complicaciones",
  "lede": "Todo el proceso es automático una vez que subís el video. No hace falta ser técnico ni tener conocimientos de IA. Si sabés volar un dron y usar una app, alcanza."
};

const intro = {
  "eyebrow": "El proceso paso a paso",
  "title": "Cuatro pasos, un ganado conocido"
};

const steps: ProcessStepBlock[] = [
  {
    "n": "01",
    "title": "Sobrevolás el lote con el dron",
    "description": "Tomás el dron, lo despegás y sobrevolás el lote. El único requisito es que el vuelo sea a una altura constante y que el video quede grabado en el dispositivo. No hace falta ningún hardware adicional ni aplicación especial de vuelo.",
    "bulletsTitle": "Drones compatibles",
    "bullets": [
      "Cualquier dron que grabe video con resolución mínima 1080p.",
      "Cualqueir dron es compatible si conocés el sensor y la focal.",
      "Si no sabés el sensor de tu cámara, está en el manual o en la web del fabricante."
    ]
  },
  {
    "n": "02",
    "title": "Subís el video con los datos del vuelo",
    "description": "Con el video descargado del dron, abrís DAG, seleccionás el video, completás los datos del vuelo y confirmás. Eso es todo por tu parte.",
    "bulletsTitle": "Datos que ingresás",
    "bullets": [
      "Establecimiento y lote al que pertenece el vuelo.",
      "Altura de vuelo en metros.",
      "Seleccionas el dron que usaste.",
      "Fecha y hora (por defecto, el sistema las lee de los metadatos del video)."
    ],
    "callout": {
      "title": "Dónde subirlo",
      "body": "Podés subir el video desde el campo si tenés señal, o al llegar a la casa. El procesamiento corre en los servidores de DAG, no en tu computadora, así que no necesitás una PC potente."
    }
  },
  {
    "n": "03",
    "title": "La IA procesa el video automáticamente",
    "description": "Una vez que el video llega a los servidores de DAG, el pipeline de Inteligencia Artificial se ejecuta automáticamente. No hace falta hacer nada. El sistema te notifica cuando termina.",
    "bulletsTitle": "Pipeline de procesamiento",
    "bullets": [
      "Detección: se analiza cada fotograma y se genera una máscara por animal.",
      "Tracking: el sistema sigue a cada bovino entre frames.",
      "Peso estimado: se calcula el área de silueta y se convierte en kilos con su tamaño.",
      <>
        Condición corporal: clasificación en{" "}
        <span style={{ color: "var(--secondary)" }}>normal</span>,{" "}
        <span style={{ color: "var(--secondary)" }}>ternero</span>,{" "}
        <span style={{ color: "var(--secondary)" }}>bajo peso</span> o{" "}
        <span style={{ color: "var(--secondary)" }}>sobrepeso</span>.
      </>
    ],
    "callout": {
      "title": "¿Cuánto tarda?",
      "body": "Un video de 10 minutos en 1080p tarda entre 15 y 30 minutos en procesarse. Recibís una notificación cuando los resultados están disponibles."
    }
  },
  {
    "n": "04",
    "title": "Revisás los resultados en el dashboard",
    "description": "Cuando termina el procesamiento, los datos aparecen en el dashboard. Podes ver el video anotado, descargás el informe PDF y comparás con vuelos anteriores.",
    "bulletsTitle": "Qué obtenés",
    "bullets": [
      "Peso estimado individual y promedio del lote.",
      "Distribución de condición corporal con alertas automáticas.",
      "Video anotado con IDs y PDF descargable listo para compartir."
    ]
  }
];

const requirements = {
  "eyebrow": "Requisitos",
  "title": "¿Qué necesitás para empezar?",
  "lede": "Los mínimos son pocos y accesibles para cualquier productor ganadero moderno.",
  "cards": [
    {
      "icon": "drone",
      "title": "Un dron con cámara",
      "description": "Cualquier dron que grabe a mínimo 1080p. No hace falta un equipo de alta gama."
    },
    {
      "icon": "monitor",
      "title": "PC o celular con internet",
      "description": "DAG corre desde cualquier navegador moderno. Conexión a internet estándar alcanza para subir el video."
    },
    {
      "icon": "clipboard",
      "title": "Datos del vuelo",
      "description": "Altura de vuelo en metros y parámetros de la cámara (sensor y focal). Están en el manual del dron o en las especificaciones del fabricante."
    }
  ]
};

const STEP_TONES: Array<"paper" | "surface"> = ["surface", "paper", "surface", "paper"];

export default function ComoFuncionaPage() {
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

      <Section tone="paper">
        <Reveal>
          <SectionHeading eyebrow={intro.eyebrow} title={intro.title} align="center" />
        </Reveal>
      </Section>

      {steps.map((step, index) => (
        <ProcessStep key={step.n} step={step} tone={STEP_TONES[index]} />
      ))}

      <IconCardGrid
        eyebrow={requirements.eyebrow}
        title={requirements.title}
        lede={requirements.lede}
        cards={requirements.cards as IconCardBlock[]}
        tone="surface"
        id="requisitos"
      />
    </>
  );
}
