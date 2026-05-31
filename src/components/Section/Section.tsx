import type { ReactNode } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  id?: string;
  tone?: "paper" | "surface";
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export default function Section({
  id,
  tone = "paper",
  children,
  className,
  innerClassName,
}: SectionProps) {
  const classes = [styles.section, styles[tone], className]
    .filter(Boolean)
    .join(" ");
  const innerClasses = [styles.inner, innerClassName].filter(Boolean).join(" ");
  return (
    <section id={id} className={classes}>
      <div className={innerClasses}>{children}</div>
    </section>
  );
}
