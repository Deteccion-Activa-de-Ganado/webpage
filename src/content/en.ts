import type { Content } from "./types";

export const en: Content = {
  nav: {
    home: "Home",
    features: "Features",
    howItWorks: "How it works",
    dashboard: "Dashboard",
    requestDemo: "Request a demo",
  },
  routes: {
    home: "Home",
    features: "Features",
    howItWorks: "How it works",
    dashboard: "Dashboard",
  },
  home: {
    hero: {
      coordinates: "34°36′S · 58°22′W",
      titleLine1: "Know your herd",
      titleLine2: "flight by flight",
      lede: "Fly over your paddocks with a drone and get exact headcount, estimated weight, and body condition for every animal. No herding, no crush, no stress for the cattle.",
      cta: "Request a demo",
      detection: {
        idTag: "ID:154    416kg",
        statusTag: "STATUS: ON WEIGHT",
        photoAlt: "Cow detected by the DAG system",
      },
    },
    stats: [
      { value: "0", label: "Physical contact with livestock" },
      { value: ">93 %", label: "Counting accuracy in real-world conditions" },
      { value: "360°", label: "Full paddock coverage in a single flight" },
      { value: "4", label: "Body conditions detected automatically" },
    ],
    compare: {
      eyebrow: "Before vs. with DAG",
      title: "Traditional methods work well. We make them better.",
      beforeLabel: "Before",
      withDAGLabel: "With DAG",
      before: [
        "Riding the field to count heads",
        "Crush + scale = stress and weight loss",
        "Paper or Excel records, no trends",
        "Underweight animals detected too late",
      ],
      withDAG: [
        "Exact headcount in a 10-minute flight",
        "Weight estimated from the air, no contact",
        "Dashboard with automatic history per flight",
        "Automatic alerts before it becomes a problem",
      ],
    },
    steps: {
      eyebrow: "How it works",
      title: "From flight to results in 4 steps",
      cta: "See the full process",
      items: [
        { n: "01", title: "Fly the paddock", description: "Any drone that records video" },
        { n: "02", title: "Upload the video", description: "Enter altitude and paddock" },
        { n: "03", title: "AI processes", description: "Headcount, weight, and body condition" },
        { n: "04", title: "Review results", description: "Dashboard, alerts, and PDF" },
      ],
    },
    dashboard: {
      eyebrow: "Dashboard",
      title: "Your herd on one screen",
      cta: "Explore the dashboard",
      tabs: ["Home", "Flights", "Analytics", "Settings"],
      kpis: [
        { label: "Flights this month", value: "12", delta: "+ 3", direction: "up" },
        { label: "Average weight", value: "395 kg", delta: "+ 11 kg", direction: "up" },
        { label: "Active alerts", value: "2", delta: "Review North paddock", direction: "warn" },
      ],
      chart: {
        label: "Weight evolution",
        latestValue: "395 kg",
        data: [350, 360, 368, 375, 385, 395],
        axisLabels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      },
      bodyCondition: {
        label: "Body condition",
        items: [
          { label: "Normal", value: 78, tone: "primary" },
          { label: "Calves", value: 14, tone: "brand" },
          { label: "Underweight", value: 5, tone: "secondary" },
          { label: "Overweight", value: 3, tone: "brand" },
        ],
      },
    },
    demo: {
      eyebrow: "Contact",
      titleLine1: "Want to see it",
      titleLine2: "with your herd?",
      lede: "Reach out and we'll show you how it works on your property.",
      cta: "Request a demo",
      email: "dag.fiuba@gmail.com",
    },
  },
  howItWorks: {
    pageHero: {
      eyebrow: "From field to dashboard in four steps",
      titleLine1: "From flight to report,",
      titleLine2: "no complications",
      lede: "The whole process is automatic once you upload the video. You don't need to be a technician or understand AI. If you can fly a drone and use an app, that's enough.",
    },
    intro: {
      eyebrow: "The step-by-step process",
      title: "Four steps, a known herd",
    },
    steps: [
      {
        n: "01",
        title: "Fly the drone over the paddock",
        description:
          "Take off and fly over the paddock in manual mode or as a grid mission. The only requirement is a constant altitude and that the video is recorded on the device. No extra hardware or special flight app is needed.",
        bulletsTitle: "Compatible drones",
        bullets: [
          "Any drone recording MP4, AVI, or MOV video at 1080p or higher.",
          "DJI Mini, Air, Mavic, Phantom — compatible if you know the sensor and focal length.",
          "Autel EVO, Parrot ANAFI, and equivalents.",
          "If you don't know your camera sensor, it's in the manual or on the manufacturer's site.",
        ],
      },
      {
        n: "02",
        title: "Upload the video with flight data",
        description:
          "Open the DAG desktop app (Windows, macOS, or Linux) or go to the web. Pick the video file, fill in the flight data, and confirm. That's all on your end.",
        bulletsTitle: "Data you enter",
        bullets: [
          "Property and paddock the flight belongs to.",
          "Flight altitude in meters (from the drone log or telemetry).",
          "Camera model, or sensor size (mm) and lens focal length.",
          "Date and time (by default the system reads them from the video metadata).",
        ],
        callout: {
          title: "Where to upload",
          body: "You can upload in the field if you have signal, or later at home. Processing runs on DAG servers, not on your computer, so a powerful PC isn't needed.",
        },
      },
      {
        n: "03",
        title: "AI processes the video automatically",
        description:
          "Once the video reaches DAG servers, the AI pipeline runs end-to-end without manual intervention. The system notifies you when it finishes.",
        bulletsTitle: "Processing pipeline",
        bullets: [
          "Detection: YOLOv8 analyzes every frame and generates a per-animal segmentation mask.",
          "Tracking: the system follows each animal across frames to avoid double counting.",
          "Weight estimation: silhouette area is converted to kilograms using the flight GSD.",
          "Body condition: each animal is classified as NORMAL, CALF, UNDERWEIGHT, or OVERWEIGHT.",
        ],
        callout: {
          title: "How long does it take?",
          body: "A 10-minute 1080p video takes 15 to 30 minutes to process. You get an in-app notification as soon as results are ready.",
        },
      },
      {
        n: "04",
        title: "Review results in the dashboard",
        description:
          "When processing finishes, the data lands in your dashboard. Watch the annotated video, download the PDF report, and compare with previous flights.",
        bulletsTitle: "What you get",
        bullets: [
          "Exact count of confirmed heads (15 consecutive frames per animal).",
          "Individual estimated weight and paddock average.",
          "Body condition distribution with automatic alerts.",
          "Annotated video with animal IDs and a shareable PDF report.",
        ],
      },
    ],
    requirements: {
      eyebrow: "Requirements",
      title: "What do you need to get started?",
      lede: "The minimums are few and accessible to any modern cattle producer.",
      cards: [
        {
          icon: "drone",
          title: "A drone with camera",
          description:
            "Any drone recording MP4, AVI, or MOV at 1080p or higher. DJI, Autel, Parrot, or equivalents. No high-end equipment needed.",
        },
        {
          icon: "monitor",
          title: "PC or phone with internet",
          description:
            "The app runs on Windows, macOS, and Linux, or from any modern browser. A standard broadband connection is enough to upload the video.",
        },
        {
          icon: "clipboard",
          title: "Flight data",
          description:
            "Flight altitude in meters and camera parameters (sensor and focal length). They're in the drone manual or the manufacturer's specifications.",
        },
      ],
    },
  },
  features: {
    pageHero: {
      eyebrow: "Six tools, one system",
      titleLine1: "Everything you need to",
      titleLine2: "truly know your herd",
      lede: "Every DAG feature was designed to reduce manual work for the cattle producer and give you precise information about your herd without touching a single animal.",
    },
    items: [
      {
        slug: "conteo",
        n: "Feature 1 of 6",
        title: "Automatic herd counting",
        description:
          "The detection engine runs frame by frame on the drone video using YOLOv8, today's most accurate instance segmentation model. Each detected animal is individually tracked by ByteTrack, which assigns it a unique ID and follows it throughout the entire flight trajectory.",
        bullets: [
          "An animal is confirmed only after appearing in 15 consecutive frames, eliminating false positives from vegetation or shadows.",
          "The same animal is never counted twice even if the drone flies over it on different passes.",
          "Compatible with MP4, AVI, and MOV. Works with DJI, Autel, Parrot, or any drone recording stabilized video.",
          "The processed video is downloadable with bounding boxes and each animal's ID overlaid.",
        ],
        badges: ["YOLOv8-seg", "ByteTrack", "OpenCV", "Python 3.11"],
        image: {
          src: "/img/muchasvacas.jpg",
          alt: "Cows detected by the DAG system on a paddock",
        },
      },
      {
        slug: "peso",
        n: "Feature 2 of 6",
        title: "Estimated weight — no crush, no scale",
        description:
          "The system calculates GSD (Ground Sample Distance) using flight altitude, camera sensor size, and lens focal length. With that value, it measures each animal's real silhouette area and correlates it with a regression curve calibrated on Argentine cattle to estimate live weight.",
        bullets: [
          "The producer enters flight altitude (in meters), camera model or sensor size, and focal length.",
          "The estimate is most accurate between 40 and 60 meters of altitude.",
          "The result is the paddock average weight and each individual animal's weight.",
          "Zero pre-sale stress: the animal grazes calmly while the drone flies.",
        ],
        badges: ["GSD", "Instance segmentation", "Calibrated regression"],
        image: {
          src: "/img/foto-hacienda-lote.jpeg",
          alt: "Cattle in paddock — weight estimated from drone",
        },
      },
      {
        slug: "condicion",
        n: "Feature 3 of 6",
        title: "Body condition classification",
        description:
          "Each animal is automatically classified into one of four categories using z-score statistical analysis on the entire herd's body density. No manual review, no subjectivity.",
        bullets: [
          "Normal: weight within the expected range for silhouette size. Optimal production condition.",
          "Calf: silhouette significantly smaller than the herd average. Detected as a calf or yearling heifer.",
          "Underweight: silhouette unusually small relative to estimated weight. Potential health indicator.",
          "Overweight: silhouette significantly larger than average. Risk of metabolic disease in certain breeds.",
        ],
        badges: ["Z-score", "Automatic classification"],
        image: {
          src: "/img/hero-drone-deteccion.jpg",
          alt: "Drone detecting and classifying animals in the field",
        },
      },
      {
        slug: "dashboard",
        n: "Feature 4 of 6",
        title: "Dashboard per property",
        description:
          "The DAG dashboard brings every flight's data into one place. Check the status of each paddock, compare with previous flights, and download reports without opening a spreadsheet.",
        bullets: [
          "KPIs update automatically after every processed flight.",
          "Complete chronological history of every flight on the property.",
          "Paddock map on OpenStreetMap with color-coded status.",
          "Side-by-side paddock comparison and monthly weight evolution charts.",
        ],
        badges: ["React", "TypeScript", "OpenStreetMap"],
        image: {
          src: "/img/captura-pantalla-app.jpeg",
          alt: "Screenshot of the DAG dashboard",
        },
      },
      {
        slug: "pdf",
        n: "Feature 5 of 6",
        title: "PDF report per flight",
        description:
          "Every processed flight generates an automatic PDF with the executive summary: head count, average weight, body condition distribution, and paddock alerts. Ideal for sharing with a vet, accountant, or buyer.",
        bullets: [
          "Generated automatically once processing completes.",
          "Includes three to five annotated frames from the video as visual reference.",
          "Print-ready format, drop it into an email.",
          "Downloadable history of every PDF from the property.",
        ],
        badges: ["Auto-generated", "Print-ready"],
        image: {
          src: "/img/foto-productor-tablet.jpeg",
          alt: "Producer reviewing a PDF report on a tablet",
        },
      },
      {
        slug: "alertas",
        n: "Feature 6 of 6",
        title: "Configurable alerts per paddock",
        description:
          "Define the conditions that matter most for each paddock — weight thresholds, minimum Normal proportion, missing animals — and the system notifies you when something steps outside the range after each processed flight.",
        bullets: [
          "Average-weight thresholds per paddock (minimum and maximum).",
          "Automatic alerts for poor body condition (more than 10% Underweight).",
          "Detection of animals that don't appear across consecutive flights.",
          "Email notifications when an alert fires.",
        ],
        badges: ["Per-paddock rules", "Email notifications"],
        image: {
          src: "/img/foto-campo-aereo.jpeg",
          alt: "Aerial view of paddocks being monitored",
        },
      },
    ],
    comparison: {
      eyebrow: "Comparison",
      title: "DAG vs. traditional methods",
      headers: {
        activity: "Activity",
        traditional: "Traditional method",
        withDag: "With DAG",
      },
      rows: [
        {
          activity: "Herd count",
          traditional: "Horseback or truck, 2–4 hrs, 5–10% error margin",
          withDag: "10-min flight + automatic processing, error < 2%",
        },
        {
          activity: "Weight estimate",
          traditional: "Crush and scale: stresses livestock, drops 3–5% pre-sale weight",
          withDag: "From the air, zero physical contact with livestock",
        },
        {
          activity: "Problem animal detection",
          traditional: "Visual inspection by eye, subjective and operator-dependent",
          withDag: "Automatic z-score classification on every flight",
        },
        {
          activity: "Historical records",
          traditional: "Field notebooks or Excel sheets, no automatic alerts",
          withDag: "Dashboard with full history, automatic charts, and alerts",
        },
        {
          activity: "Vet / buyer report",
          traditional: "Manual generation, hours of work",
          withDag: "PDF generated automatically when processing finishes",
        },
      ],
    },
  },
  dashboardPage: {
    pageHero: {
      eyebrow: "A central command for your property",
      titleLine1: "Your whole property,",
      titleLine2: "in a single screen",
      lede: "The DAG dashboard brings every flight's data into one place. Check each paddock's state, compare with previous flights, and download reports without opening a spreadsheet.",
    },
    metricsPreview: {
      eyebrow: "Overview",
      title: "The first thing you see",
      metrics: [
        {
          value: "487",
          label: "Heads detected today",
          description:
            "Automatic count from the last processed flight. Each animal confirmed across 15 consecutive frames.",
        },
        {
          value: "412 kg",
          label: "Average herd weight",
          description:
            "Estimated from silhouette area and flight GSD. No crush, no scale.",
        },
        {
          value: "3",
          label: "Active alerts",
          description:
            "Animals outside the configured body-condition range for this paddock.",
        },
      ],
    },
    modulesIntro: {
      eyebrow: "Dashboard modules",
      title: "Everything you'll find inside",
    },
    modules: [
      {
        slug: "panel",
        n: "Metrics panel",
        title: "Key numbers at a glance",
        description:
          "The top of the dashboard always surfaces: heads detected, average weight, active alerts, and days since the last paddock flight.",
        bullets: [
          "Automatic update after every processed flight.",
          "KPIs vary by paddock. You can navigate every paddock on the property.",
          "If weight drops versus the previous flight, the figure turns amber so it can't be missed.",
        ],
        badges: [],
        image: {
          src: "/img/captura-pantalla-app.jpeg",
          alt: "DAG dashboard key metrics panel",
        },
      },
      {
        slug: "evolucion",
        n: "Historical evolution",
        title: "Monthly herd weight chart",
        description:
          "The chart shows how each paddock's average weight evolved flight by flight. Catch condition drops before they become a health or productivity issue.",
        bullets: [
          "Timeline of every flight on the property, grouped by paddock.",
          "Overlay two paddocks to compare fattening rates.",
          "Automatic annotations when a herd change or alert occurred.",
        ],
        badges: [],
        image: {
          src: "/img/diagrama-arquitectura.jpeg",
          alt: "Monthly weight evolution chart in the DAG dashboard",
        },
      },
      {
        slug: "condicion-dashboard",
        n: "Body condition",
        title: "Herd distribution at a glance",
        description:
          "The module shows how many animals fell into each category: NORMAL, CALF, UNDERWEIGHT, or OVERWEIGHT. The proportion updates with every processed flight.",
        bullets: [
          "Visual breakdown with exact percentages per category.",
          "If more than 10% falls under UNDERWEIGHT, an automatic alert is raised.",
          "See exactly which IDs have low condition and find them in the annotated video.",
        ],
        badges: [],
        image: {
          src: "/img/hero-drone-deteccion.jpg",
          alt: "Body condition module of the DAG dashboard",
        },
      },
      {
        slug: "mapa",
        n: "Paddock map",
        title: "Your property mapped, by paddock and status",
        description:
          "The map renders the property with each paddock outlined on OpenStreetMap. Paddock color indicates active alerts, normal condition, or stale data.",
        bullets: [
          "Click a paddock to open its detailed panel with last-flight metrics.",
          "Green: normal. Amber: attention recommended. Red: active alert.",
          "Gray: paddock has no flights in the last 30 days.",
        ],
        badges: [],
        image: {
          src: "/img/foto-campo-aereo.jpeg",
          alt: "Property map with paddocks outlined",
        },
      },
      {
        slug: "historial",
        n: "Flight history",
        title: "Every flight is permanently recorded",
        description:
          "The flight history shows every property survey ordered by date. Open any old flight and see its complete results as if it ran today.",
        bullets: [
          "Filter by paddock, date range, and alert type.",
          "Every entry shows heads, average weight, and alerts from that flight.",
          "Download the PDF of any historical flight whenever you need it.",
        ],
        badges: [],
        image: {
          src: "/img/captura-pantalla-app.jpeg",
          alt: "Property flight history in the DAG dashboard",
        },
      },
    ],
    alerts: {
      eyebrow: "Alert system",
      title: "You know what's happening before it's too late",
      lede: "Every processed flight is evaluated automatically. If something drifts outside the thresholds you defined, you get notified.",
      items: [
        {
          title: "Critical alert — Mass underweight",
          body: "Triggered when more than 10% of the paddock's animals were classified as UNDERWEIGHT in the last flight. Indicates possible nutritional or health deficiency requiring immediate intervention.",
          severity: "critical",
        },
        {
          title: "Attention alert — Individual weight loss",
          body: "Triggered when an individual animal lost more than the configured weight threshold between two consecutive flights of the same paddock. The animal is identified by its ID in the annotated video.",
          severity: "warn",
        },
        {
          title: "Info — Significant count change",
          body: "The last flight count differs by more than 5% from the previous flight of the same paddock. May indicate herd movement, detection failure, or a flight error.",
          severity: "info",
        },
        {
          title: "Info — Paddock without recent flight",
          body: "Automatic reminder when a paddock hasn't been surveyed for more than 30 days, so you don't lose history continuity.",
          severity: "info",
        },
      ],
    },
    access: {
      eyebrow: "Availability",
      title: "From the app or from the browser",
      cards: [
        {
          icon: "monitor",
          title: "Desktop app",
          description:
            "Available for Windows, macOS, and Linux. The recommended way to upload heavy videos and review results in detail. Works offline — you can browse history without a continuous connection.",
          checklist: [
            "Direct video upload from disk.",
            "Integrated annotated-video playback.",
            "One-click PDF report download.",
            "Full offline paddock and flight management.",
          ],
        },
        {
          icon: "globe",
          title: "Web version",
          description:
            "Usable from any device with a modern browser (Chrome, Firefox, Edge, Safari). Ideal for quick queries from your phone in the field, or to share access with a vet without installing anything.",
          checklist: [
            "No install — open the browser and you're in.",
            "Access from phone, tablet, or borrowed PC.",
            "Share access with the vet or foreman.",
            "Same dashboard and data as the desktop app.",
          ],
        },
      ],
    },
  },
  footer: {
    tagline:
      "Head count, weight, and body condition — from the air. No herding, no chute, no guesswork.",
    navigateLabel: "Navigate",
    contactLabel: "Contact",
    contactEmail: "dag.fiuba@gmail.com",
    coordinates: "34°36′S · 58°22′W — Buenos Aires, Argentina",
    copyright: "Active Cattle Detection",
  },
  common: {
    stepLabel: "Step",
    placeholder: "Content coming soon.",
  },
};
