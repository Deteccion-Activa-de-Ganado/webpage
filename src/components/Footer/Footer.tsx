import { Link } from "react-router-dom";
import { useT } from "@/providers/I18nProvider";
import styles from "./Footer.module.css";

export default function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  const navLinks = [
    { to: "/caracteristicas", label: t.nav.features },
    { to: "/como-funciona", label: t.nav.howItWorks },
    { to: "/dashboard", label: t.nav.dashboard },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brandCol}>
          <Link to="/" className={styles.logo}>
            DAG
          </Link>
          <p className={styles.tagline}>{t.footer.tagline}</p>
        </div>

        <nav className={styles.col} aria-label="Footer">
          <p className={styles.colTitle}>{t.footer.navigateLabel}</p>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.col}>
          <p className={styles.colTitle}>{t.footer.contactLabel}</p>
          <a href={`mailto:${t.footer.contactEmail}`} className={styles.link}>
            {t.footer.contactEmail}
          </a>
        </div>
      </div>

      <div className={styles.baseline}>
        <span className={styles.coords}>{t.footer.coordinates}</span>
        <span className={styles.copy}>
          © {year} DAG · {t.footer.copyright}
        </span>
      </div>
    </footer>
  );
}
