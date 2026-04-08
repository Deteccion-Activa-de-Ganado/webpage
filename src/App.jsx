import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ContentPage from './pages/ContentPage'
import { loadAndApplyPalette } from './utils/paletteLoader'
import { homeContent } from './content/homeContent'
import { caracteristicasContent } from './content/caracteristicasContent'
import { comoFuncionaContent } from './content/comoFuncionaContent'
import { dashboardContent } from './content/dashboardContent'
import './index.css'
import './styles/home.css'
import './styles/caracteristicas.css'
import './styles/comoFunciona.css'
import './styles/dashboard.css'

function AppShell() {
  const [lang, setLang] = useState('es')

  useEffect(() => {
    loadAndApplyPalette()
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    requestAnimationFrame(() => {
      document.querySelectorAll('[data-es][data-en]').forEach((node) => {
        const text = node.getAttribute(`data-${lang}`)
        if (text) node.textContent = text
      })
    })
  }, [lang])

  useEffect(() => {
    const nav = document.querySelector('header')
    const onScroll = () => nav?.classList.toggle('sc', window.scrollY > 36)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Layout lang={lang} setLang={setLang}>
      <Routes>
        <Route path="/" element={<ContentPage title="DAG — Detección Activa de Ganado" html={homeContent} />} />
        <Route path="/caracteristicas" element={<ContentPage title="Características — DAG Detección Activa de Ganado" html={caracteristicasContent} />} />
        <Route path="/como-funciona" element={<ContentPage title="Cómo Funciona — DAG Detección Activa de Ganado" html={comoFuncionaContent} />} />
        <Route path="/dashboard" element={<ContentPage title="Dashboard — DAG Detección Activa de Ganado" html={dashboardContent} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
