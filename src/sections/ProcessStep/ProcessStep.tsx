import Section from "@/components/Section/Section";
import Reveal from "@/components/Reveal/Reveal";
import Callout from "@/components/Callout/Callout";
import type { ProcessStepBlock } from "@/types/blocks";
import styles from "./ProcessStep.module.css";

type ProcessStepProps = {
  step: ProcessStepBlock;
  tone?: "paper" | "surface";
};

export default function ProcessStep({ step, tone = "paper" }: ProcessStepProps) {
  return (
    <Section tone={tone} id={`step-${step.n}`}>
      <div className={styles.grid}>
        <Reveal>
          <header className={styles.header}>
            <p className={styles.number}>{step.n}</p>
            <span className={styles.rule} aria-hidden="true" />
            <h2 className={styles.title}>{step.title}</h2>
          </header>
        </Reveal>

        <div className={styles.body}>
          <Reveal delay={0.08}>
            <p className={styles.description}>{step.description}</p>
          </Reveal>

          {step.callout ? (
            <Reveal delay={0.12}>
              <Callout title={step.callout.title}>
                <p>{step.callout.body}</p>
              </Callout>
            </Reveal>
          ) : null}

          <Reveal delay={0.16}>
            <div className={styles.listWrap}>
              <p className={styles.listTitle}>{step.bulletsTitle}</p>
              <ul className={styles.bullets}>
                {step.bullets.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
