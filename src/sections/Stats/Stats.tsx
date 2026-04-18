import { useT } from "@/providers/I18nProvider";
import Section from "@/components/Section/Section";
import StatCard from "@/components/StatCard/StatCard";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Stats.module.css";

export default function Stats() {
  const t = useT();
  return (
    <Section tone="surface" className={styles.section}>
      <div className={styles.grid}>
        {t.home.stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.08}>
            <StatCard value={stat.value} label={stat.label} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
