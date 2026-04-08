import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const navItems = [
  { to: '/caracteristicas', es: 'Características', en: 'Features' },
  { to: '/como-funciona', es: 'Cómo funciona', en: 'How it works' },
  { to: '/dashboard', es: 'Dashboard', en: 'Dashboard' },
]

const getActiveClass = ({ isActive }) => (isActive ? 'active' : undefined)

export default function Layout({ children, lang, setLang }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <div id="mobMenu" className={`mob-menu ${mobileOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setMobileOpen(false)} aria-label="Cerrar menú">×</button>
        <NavLink to="/" onClick={() => setMobileOpen(false)} data-es="Inicio" data-en="Home">Inicio</NavLink>
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} onClick={() => setMobileOpen(false)} data-es={item.es} data-en={item.en}>
            {item.es}
          </NavLink>
        ))}
        <a href="/#cta" onClick={() => setMobileOpen(false)} className="hero-cta" data-es="Pedí una demo" data-en="Request a demo">
          Pedí una demo
        </a>
      </div>

      <header>
        <div className="nav-in">
          <NavLink to="/" className="nav-logo"><img src="/img/logo-dag.svg" alt="DAG logo" />DAG</NavLink>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={getActiveClass} data-es={item.es} data-en={item.en}>{item.es}</NavLink>
              </li>
            ))}
          </ul>
          <div className="nav-right">
            <div className="lang-toggle">
              <button className={`lang-btn ${lang === 'es' ? 'on' : ''}`} onClick={() => setLang('es')}>ES</button>
              <button className={`lang-btn ${lang === 'en' ? 'on' : ''}`} onClick={() => setLang('en')}>EN</button>
            </div>
            <a href="/#cta" className="hero-cta" data-es="Pedí una demo" data-en="Request a demo">Pedí una demo</a>
            <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {children}

      <footer>
        <div className="foot-inner foot-grid">
          <div>
            <a href="/" className="foot-logo">DAG</a>
            <p data-es="Detección Activa de Ganado. Plataforma argentina de gestión ganadera con drones e Inteligencia Artificial." data-en="Active Cattle Detection. Argentine livestock management platform using drones and Artificial Intelligence.">
              Detección Activa de Ganado. Plataforma argentina de gestión ganadera con drones e Inteligencia Artificial.
            </p>
          </div>
          <div>
            <h4 data-es="Navegación" data-en="Navigation">Navegación</h4>
            <ul>
              <li><a href="/caracteristicas" data-es="Características" data-en="Features">Características</a></li>
              <li><a href="/como-funciona" data-es="Cómo funciona" data-en="How it works">Cómo funciona</a></li>
              <li><a href="/dashboard" data-es="Dashboard" data-en="Dashboard">Dashboard</a></li>
            </ul>
          </div>
          <div>
            <h4 data-es="Proyecto" data-en="Project">Proyecto</h4>
            <ul>
              <li><a href="https://fi.uba.ar" target="_blank" rel="noreferrer">FIUBA</a></li>
              <li><a href="mailto:dag@fi.uba.ar" data-es="Contacto" data-en="Contact">Contacto</a></li>
              <li><a href="https://github.com/fiuba-dag" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
