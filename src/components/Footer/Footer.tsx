import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brandCol}>
          <Link to="/" className={styles.logo}>
            DAG
          </Link>
          <p className={styles.tagline}>
            Conteo, peso y condición corporal desde el aire. Sin arrear, sin manga.
          </p>
        </div>

        <nav className={styles.col} aria-label="Footer">
          <p className={styles.colTitle}>Navegar</p>
          <Link to="/caracteristicas" className={styles.link}>
            Características
          </Link>
          <Link to="/como-funciona" className={styles.link}>
            Cómo funciona
          </Link>
          <Link to="/dashboard" className={styles.link}>
            Dashboard
          </Link>
        </nav>

        <div className={styles.col}>
          <p className={styles.colTitle}>Contacto</p>
          <a href="mailto:dag.fiuba@gmail.com" className={styles.link}>
            dag.fiuba@gmail.com
          </a>
        </div>
      </div>

      <div className={styles.baseline}>
        <span className={styles.copy}>
          © {year} DAG · Detección Activa de Ganado
        </span>
      </div>
    </footer>
  );
}
