import type { ReactNode } from "react";
import styles from "./StepCard.module.css";

type StepCardProps = {
  n: string;
  icon: ReactNode;
  title: string;
  description: string;
};

export default function StepCard({ n, icon, title, description }: StepCardProps) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <span className={styles.number}>{n}</span>
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      </header>
      <span className={styles.rule} aria-hidden="true" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
