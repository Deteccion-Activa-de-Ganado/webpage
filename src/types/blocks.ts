import type { CalloutTone, IconKey, KpiDirection, MeterTone } from "./ui";

export type FeatureBlockItem = {
  slug: string;
  n: string;
  title: string;
  description: string;
  bullets: readonly string[];
  badges: readonly string[];
  image: { src: string; alt: string };
};

export type ProcessStepBlock = {
  n: string;
  title: string;
  description: string;
  bulletsTitle: string;
  bullets: readonly string[];
  callout?: { title: string; body: string };
};

export type ComparisonBlock = {
  eyebrow: string;
  title: string;
  headers: { activity: string; traditional: string; withDag: string };
  rows: readonly { activity: string; traditional: string; withDag: string }[];
};

export type IconCardBlock = {
  icon: IconKey | string;
  title: string;
  description: string;
  checklist?: readonly string[];
};

export type PageHeroBlock = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  lede: string;
};

export type KpiBlock = {
  label: string;
  value: string;
  delta: string;
  direction: KpiDirection;
};

export type MeterBlock = {
  label: string;
  value: number;
  tone: MeterTone;
};

export type AlertBlock = {
  title: string;
  body: string;
  severity: CalloutTone;
};
