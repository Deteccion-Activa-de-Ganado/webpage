import type { KpiDirection } from "@/content/types";
import styles from "./KpiCard.module.css";

type KpiCardProps = {
  label: string;
  value: string;
  delta?: string;
  direction?: KpiDirection;
};

export default function KpiCard({
  label,
  value,
  delta,
  direction = "up",
}: KpiCardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
      {delta ? (
        <p className={`${styles.delta} ${styles[direction]}`}>{delta}</p>
      ) : null}
    </div>
  );
}
