import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useT } from "@/providers/I18nProvider";
import { ButtonLink } from "@/components/Button/Button";
import LangToggle from "@/components/LangToggle/LangToggle";
import styles from "./Nav.module.css";

type NavItem = { to: string; label: string };

export default function Nav() {
  const t = useT();
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
    { to: "/caracteristicas", label: t.nav.features },
    { to: "/como-funciona", label: t.nav.howItWorks },
    { to: "/dashboard", label: t.nav.dashboard },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} aria-label={`DAG · ${t.nav.home}`}>
          <span className={styles.logoMark}>DAG</span>
          <span className={styles.logoDot} aria-hidden="true">·</span>
          <span className={styles.logoSuffix}>Detección Activa de Ganado</span>
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
          <LangToggle />
          <ButtonLink
            to="/#demo"
            variant="primary"
            className={styles.cta}
          >
            {t.nav.requestDemo}
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
            <LangToggle />
            <ButtonLink to="/#demo" variant="primary">
              {t.nav.requestDemo}
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
