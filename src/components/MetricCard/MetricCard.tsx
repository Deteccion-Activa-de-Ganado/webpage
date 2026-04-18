import styles from "./MetricCard.module.css";

type MetricCardProps = {
  value: string;
  label: string;
  description: string;
};

export default function MetricCard({
  value,
  label,
  description,
}: MetricCardProps) {
  return (
    <article className={styles.card}>
      <p className={styles.value}>{value}</p>
      <p className={styles.label}>{label}</p>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
