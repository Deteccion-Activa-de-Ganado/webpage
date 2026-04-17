import type { ReactNode } from "react";
import styles from "./IconItem.module.css";

type IconItemProps = {
  icon: ReactNode;
  children: ReactNode;
  tone?: "before" | "after" | "neutral";
};

export default function IconItem({
  icon,
  children,
  tone = "neutral",
}: IconItemProps) {
  return (
    <div className={`${styles.item} ${styles[tone]}`}>
      <span className={styles.iconWrap} aria-hidden="true">
        {icon}
      </span>
      <p className={styles.text}>{children}</p>
    </div>
  );
}
