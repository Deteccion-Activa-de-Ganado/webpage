import {
  Cpu,
  LineChart,
  Plane,
  UploadCloud,
  type LucideIcon,
} from "lucide-react";
import { useT } from "@/providers/I18nProvider";
import Section from "@/components/Section/Section";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import StepCard from "@/components/StepCard/StepCard";
import ArrowLink from "@/components/ArrowLink/ArrowLink";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./StepsTeaser.module.css";

const stepIcons: LucideIcon[] = [Plane, UploadCloud, Cpu, LineChart];

export default function StepsTeaser() {
  const t = useT();
  const { steps } = t.home;

  return (
    <Section tone="surface">
      <Reveal>
        <SectionHeading
          eyebrow={steps.eyebrow}
          title={steps.title}
          align="center"
        />
      </Reveal>

      <div className={styles.grid}>
        {steps.items.map((step, i) => {
          const Icon = stepIcons[i];
          return (
            <Reveal key={step.n} delay={i * 0.08}>
              <StepCard
                n={step.n}
                icon={<Icon size={22} strokeWidth={1.5} />}
                title={step.title}
                description={step.description}
              />
            </Reveal>
          );
        })}
      </div>

      <div className={styles.cta}>
        <ArrowLink to="/como-funciona">{steps.cta}</ArrowLink>
      </div>
    </Section>
  );
}
