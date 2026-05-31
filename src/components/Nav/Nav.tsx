import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ButtonLink } from "@/components/Button/Button";
import styles from "./Nav.module.css";

type NavItem = { to: string; label: string };

export default function Nav() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 8);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  const items: NavItem[] = [
    { to: "/caracteristicas", label: "Características" },
    { to: "/como-funciona", label: "Cómo funciona" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/encuesta", label: "Encuesta" },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} aria-label="DAG · Inicio">
          <span className={styles.logoMark}>DAG</span>
          <span className={styles.logoDot} aria-hidden="true">·</span>
          <span
            className={`${styles.navLink} ${styles.logoSuffix} ${
              location.pathname === "/" ? styles.navLinkActive : ""
            }`}
          >
            Detección Activa de Ganado
          </span>
        </Link>

        <nav className={styles.primaryNav} aria-label="Primary">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <ButtonLink to="/#demo" variant="primary" className={styles.cta}>
            Pedí una demo
          </ButtonLink>
        </div>

        <button
          type="button"
          className={styles.hamburger}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={`${styles.hamLine} ${open ? styles.hamOpen1 : ""}`} />
          <span className={`${styles.hamLine} ${open ? styles.hamOpen2 : ""}`} />
          <span className={`${styles.hamLine} ${open ? styles.hamOpen3 : ""}`} />
        </button>
      </div>

      {open ? (
        <div id="mobile-drawer" className={styles.drawer}>
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className={styles.drawerFoot}>
            <ButtonLink to="/#demo" variant="primary">
              Pedí una demo
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
