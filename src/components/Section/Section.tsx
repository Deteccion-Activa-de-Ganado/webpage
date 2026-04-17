import type { ReactNode } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  id?: string;
  tone?: "paper" | "surface";
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  tone = "paper",
  children,
  className,
}: SectionProps) {
  const classes = [styles.section, styles[tone], className]
    .filter(Boolean)
    .join(" ");
  return (
    <section id={id} className={classes}>
      <div className={styles.inner}>{children}</div>
    </section>
  );
}
