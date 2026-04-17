import { useT } from "@/providers/I18nProvider";
import Section from "@/components/Section/Section";
import Reveal from "@/components/Reveal/Reveal";
import { ButtonLink } from "@/components/Button/Button";
import styles from "./DemoCTA.module.css";

export default function DemoCTA() {
  const t = useT();
  const { demo } = t.home;

  return (
    <Section id="demo" tone="surface" className={styles.section}>
      <Reveal>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>{demo.eyebrow}</p>
          <h2 className={styles.title}>
            <span>{demo.titleLine1}</span>
            <span className={styles.highlight}>{demo.titleLine2}</span>
          </h2>
          <p className={styles.lede}>{demo.lede}</p>
          <ButtonLink href={`mailto:${demo.email}`} className={styles.cta}>
            {demo.cta}
          </ButtonLink>
          <p className={styles.email}>{demo.email}</p>
        </div>
      </Reveal>
    </Section>
  );
}
