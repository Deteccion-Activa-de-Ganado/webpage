export type Language = "es" | "en";

export type MeterTone = "primary" | "secondary" | "brand";
export type KpiDirection = "up" | "down" | "warn";
export type CalloutTone = "info" | "warn" | "critical";

export type Stat = {
  value: string;
  label: string;
};

export type Step = {
  n: string;
  title: string;
  description: string;
};

export type Kpi = {
  label: string;
  value: string;
  delta: string;
  direction: KpiDirection;
};

export type MeterItem = {
  label: string;
  value: number;
  tone: MeterTone;
};

export type ProcessStepData = {
  n: string;
  title: string;
  description: string;
  bulletsTitle: string;
  bullets: string[];
  callout?: {
    title: string;
    body: string;
  };
};

export type PageHeroContent = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  lede: string;
};

export type FeatureItem = {
  slug: string;
  n: string;
  title: string;
  description: string;
  bullets: string[];
  badges: string[];
  image: {
    src: string;
    alt: string;
  };
};

export type Content = {
  nav: {
    home: string;
    features: string;
    howItWorks: string;
    dashboard: string;
    requestDemo: string;
  };
  routes: {
    home: string;
    features: string;
    howItWorks: string;
    dashboard: string;
  };
  home: {
    hero: {
      coordinates: string;
      titleLine1: string;
      titleLine2: string;
      lede: string;
      cta: string;
      detection: {
        idTag: string;
        statusTag: string;
        photoAlt: string;
      };
    };
    stats: Stat[];
    compare: {
      eyebrow: string;
      title: string;
      beforeLabel: string;
      withDAGLabel: string;
      before: string[];
      withDAG: string[];
    };
    steps: {
      eyebrow: string;
      title: string;
      cta: string;
      items: Step[];
    };
    dashboard: {
      eyebrow: string;
      title: string;
      cta: string;
      tabs: string[];
      kpis: Kpi[];
      chart: {
        label: string;
        latestValue: string;
        data: number[];
        axisLabels: string[];
      };
      bodyCondition: {
        label: string;
        items: MeterItem[];
      };
    };
    demo: {
      eyebrow: string;
      titleLine1: string;
      titleLine2: string;
      lede: string;
      cta: string;
      email: string;
    };
  };
  howItWorks: {
    pageHero: PageHeroContent;
    intro: {
      eyebrow: string;
      title: string;
    };
    steps: ProcessStepData[];
  };
  features: {
    pageHero: PageHeroContent;
    items: FeatureItem[];
  };
  dashboardPage: {
    pageHero: PageHeroContent;
    metricsPreview: {
      eyebrow: string;
      title: string;
      metrics: Array<{
        value: string;
        label: string;
        description: string;
      }>;
    };
    modulesIntro: {
      eyebrow: string;
      title: string;
    };
    modules: FeatureItem[];
    alerts: {
      eyebrow: string;
      title: string;
      lede: string;
      items: Array<{
        title: string;
        body: string;
        severity: CalloutTone;
      }>;
    };
  };
  footer: {
    tagline: string;
    navigateLabel: string;
    contactLabel: string;
    contactEmail: string;
    coordinates: string;
    copyright: string;
  };
  common: {
    stepLabel: string;
    placeholder: string;
  };
};
