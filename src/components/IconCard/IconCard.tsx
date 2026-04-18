import { Check } from "lucide-react";
import type { ReactNode } from "react";
import styles from "./IconCard.module.css";

type IconCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  checklist?: string[];
};

export default function IconCard({
  icon,
  title,
  description,
  checklist,
}: IconCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles.iconBadge} aria-hidden="true">
        {icon}
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {checklist && checklist.length > 0 ? (
        <ul className={styles.checklist}>
          {checklist.map((item) => (
            <li key={item} className={styles.checkItem}>
              <Check
                size={14}
                strokeWidth={2.25}
                className={styles.checkIcon}
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
