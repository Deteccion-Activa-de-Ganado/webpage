import styles from "./Divider.module.css";

type DividerProps = {
  label?: string;
};

export default function Divider({ label }: DividerProps) {
  if (!label) {
    return <hr className={styles.plain} />;
  }
  return (
    <div className={styles.wrap} role="separator" aria-label={label}>
      <span className={styles.line} aria-hidden="true" />
      <span className={styles.label}>{label}</span>
      <span className={styles.line} aria-hidden="true" />
    </div>
  );
}
