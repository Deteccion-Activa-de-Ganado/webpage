import type { ReactNode } from "react";
import type { CalloutTone } from "@/types/ui";
import styles from "./Callout.module.css";

type CalloutProps = {
  title: string;
  children: ReactNode;
  tone?: CalloutTone;
};

export default function Callout({ title, children, tone = "info" }: CalloutProps) {
  return (
    <aside className={`${styles.callout} ${styles[tone]}`}>
      <p className={styles.title}>{title}</p>
      <div className={styles.body}>{children}</div>
    </aside>
  );
}
