import type { MeterTone } from "@/content/types";
import styles from "./Meter.module.css";

type MeterProps = {
  label: string;
  value: number;
  tone?: MeterTone;
};

export default function Meter({ label, value, tone = "primary" }: MeterProps) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className={styles.meter}>
      <div className={styles.row}>
        <span className={styles.label}>{label}</span>
        <span className={`${styles.percent} ${styles[tone]}`}>
          {clamped} %
        </span>
      </div>
      <div className={styles.track}>
        <div
          className={`${styles.fill} ${styles[tone]}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
