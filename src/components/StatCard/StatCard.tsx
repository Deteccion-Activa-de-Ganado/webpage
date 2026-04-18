import styles from "./StatCard.module.css";

type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <article className={styles.card}>
      <p className={styles.value}>{value}</p>
      <span className={styles.rule} aria-hidden="true" />
      <p className={styles.label}>{label}</p>
    </article>
  );
}
