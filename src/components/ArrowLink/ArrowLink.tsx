import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import styles from "./ArrowLink.module.css";

type ArrowLinkProps = {
  to: string;
  children: ReactNode;
};

export default function ArrowLink({ to, children }: ArrowLinkProps) {
  return (
    <Link to={to} className={styles.link}>
      <span>{children}</span>
      <ArrowRight size={16} strokeWidth={1.75} className={styles.arrow} />
    </Link>
  );
}
