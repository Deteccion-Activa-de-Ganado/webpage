import styles from "./StatCard.module.css";

type StatCardProps = {
  value: string;
  label: string;
  className?: string;
};

export default function StatCard({ value, label, className }: StatCardProps) {
  const cardClass = className ? `${styles.card} ${className}` : styles.card;

  return (
    <article className={cardClass}>
      <p className={styles.value}>{value}</p>
      <span className={styles.rule} aria-hidden="true" />
      <p className={styles.label}>{label}</p>
    </article>
  );
}
