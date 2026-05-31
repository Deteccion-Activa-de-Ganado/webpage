"use client";

import { useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Bell,
  Clock,
  Cpu,
  Eye,
  FileText,
  Layers,
  LineChart,
  Plane,
  Scale,
  Search,
  UploadCloud,
} from "lucide-react";
import Section from "@/components/Section/Section";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { useState, type FormEvent } from "react";
import { Button, ButtonLink } from "@/components/Button/Button";
import { submitDemoRequest } from "@/lib/demo-request";
import StatCard from "@/components/StatCard/StatCard";
import StepCard from "@/components/StepCard/StepCard";
import IconItem from "@/components/IconItem/IconItem";
import KpiCard from "@/components/KpiCard/KpiCard";
import Meter from "@/components/Meter/Meter";
import Sparkline from "@/components/Sparkline/Sparkline";
import ArrowLink from "@/components/ArrowLink/ArrowLink";
import Reveal from "@/components/Reveal/Reveal";
import type { KpiDirection, MeterTone } from "@/types/ui";
import demoStyles from "@/styles/demo-cta.module.css";
import styles from "./page.module.css";

const HERO_VIDEO_SRC = "/img/video_background.mp4";

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion();
  const [demoEmail, setDemoEmail] = useState("");
  const [demoMessage, setDemoMessage] = useState("");
  const [demoStatus, setDemoStatus] = useState<"idle" | "sending" | "error" | "success">(
    "idle",
  );
  const [demoError, setDemoError] = useState("");

  async function handleDemoSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDemoStatus("sending");
    setDemoError("");
    try {
      await submitDemoRequest({ email: demoEmail, mensaje: demoMessage });
      setDemoStatus("success");
      setDemoEmail("");
      setDemoMessage("");
    } catch (err) {
      setDemoStatus("error");
      setDemoError(
        err instanceof Error ? err.message : "No se pudo enviar. Intentá de nuevo.",
      );
    }
  }

  return (
    <>
      <section className={styles.hero} aria-label="Inicio">
        {!prefersReducedMotion && (
          <video
            className={styles.bgVideo}
            src={HERO_VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
        )}
        <div className={styles.overlay} aria-hidden="true" />

        <div className={styles.heroShell}>
          <div className={styles.heroMain}>
            <Reveal>
              <div className={styles.heroCopy}>
                <h1 className={styles.heroTitle}>
                  <span>Conocé tu rodeo</span>
                  <span className={styles.heroHighlight}>vuelo a vuelo</span>
                </h1>
                <span className={styles.heroRule} aria-hidden="true" />
                <p className={styles.heroLede}>
                  Sobrevolá tus lotes con el dron y obtené conteo, peso estimado y
                  condición corporal de cada animal. Sin arrear, sin manga, sin estrés
                  para el ganado.
                </p>
                <ButtonLink to="/#demo" className={styles.heroCta}>
                  Pedí una demo
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.statsPanel}>
              <ul className={styles.statsGrid}>
                <li>
                  <Reveal delay={0.1}>
                    <StatCard
                      className={styles.heroStatCard}
                      value="0"
                      label="Contacto físico con la hacienda"
                    />
                  </Reveal>
                </li>
                <li>
                  <Reveal delay={0.18}>
                    <StatCard
                      className={styles.heroStatCard}
                      value="360°"
                      label="Cobertura del lote en un solo vuelo"
                    />
                  </Reveal>
                </li>
                <li>
                  <Reveal delay={0.26}>
                    <StatCard
                      className={styles.heroStatCard}
                      value="4"
                      label="Condiciones corporales detectadas"
                    />
                  </Reveal>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Antes vs. con DAG"
            title="El campo siempre tuvo sus formas. Nosotros las mejoramos."
            align="center"
          />
        </Reveal>
        <div className={styles.compareGrid}>
          <div>
            <Reveal>
              <p className={`${styles.compareColTitle} ${styles.compareBeforeTitle}`}>
                Antes
              </p>
            </Reveal>
            {(
              [
                ["Recorrer el campo para contar cabezas", Clock],
                ["Manga + balanza = estrés y pérdida de peso", Scale],
                ["Registros en papel o Excel, sin tendencias", FileText],
                ["El animal flaco se detecta tarde", Search],
              ] as const
            ).map(([text, Icon], i) => (
              <Reveal key={text} delay={i * 0.06}>
                <IconItem
                  tone="before"
                  icon={<Icon size={18} strokeWidth={1.75} />}
                >
                  {text}
                </IconItem>
              </Reveal>
            ))}
          </div>
          <div>
            <Reveal>
              <p className={`${styles.compareColTitle} ${styles.compareAfterTitle}`}>
                Con DAG
              </p>
            </Reveal>
            {(
              [
                ["Recorrida en un vuelo de 10 minutos", Layers],
                ["Peso estimado desde el aire, sin tocar al animal", Eye],
                ["Dashboard con historial automático por vuelo", BarChart3],
                ["Alertas automáticas antes de que sea un problema", Bell],
              ] as const
            ).map(([text, Icon], i) => (
              <Reveal key={text} delay={i * 0.06}>
                <IconItem
                  tone="after"
                  icon={<Icon size={18} strokeWidth={1.75} />}
                >
                  {text}
                </IconItem>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <Reveal>
          <SectionHeading
            eyebrow="Cómo funciona"
            title="De vuelo a resultados en 4 pasos"
            align="center"
          />
        </Reveal>
        <div className={styles.stepsGrid}>
          {(
            [
              { n: "01", title: "Volá el lote", description: "Cualquier dron que grabe video", Icon: Plane },
              { n: "02", title: "Subí el video", description: "Indicá altitud y lote", Icon: UploadCloud },
              { n: "03", title: "La IA procesa", description: "Conteo, peso y condición corporal", Icon: Cpu },
              { n: "04", title: "Revisá resultados", description: "Dashboard, alertas y PDF", Icon: LineChart },
            ] as const
          ).map((step, i) => {
            const Icon = step.Icon;
            return (
              <Reveal key={step.n} delay={i * 0.08}>
                <StepCard
                  n={step.n}
                  icon={<Icon size={22} strokeWidth={1.5} />}
                  title={step.title}
                  description={step.description}
                />
              </Reveal>
            );
          })}
        </div>
        <div className={styles.stepsCta}>
          <ArrowLink to="/como-funciona">Ver el proceso completo</ArrowLink>
        </div>
      </Section>

      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Dashboard"
            title="Tu ganado en una pantalla"
            align="center"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <div className={styles.panel} role="figure" aria-label="Tu ganado en una pantalla">
            <div className={styles.panelBar}>
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.panelTitle}>DAG · Dashboard</span>
            </div>
            <div className={styles.tabs} role="tablist" aria-label="Dashboard">
              {["Inicio", "Vuelos", "Analytics", "Configuración"].map((tab, i) => (
                <span
                  key={tab}
                  role="tab"
                  aria-selected={i === 0}
                  className={`${styles.tab} ${i === 0 ? styles.tabActive : ""}`}
                >
                  {tab}
                </span>
              ))}
            </div>
            <div className={styles.panelBody}>
              <div className={styles.kpiRow}>
                <KpiCard label="Vuelos este mes" value="12" delta="+ 3" direction="up" />
                <KpiCard label="Peso promedio" value="395 kg" delta="+ 11 kg" direction="up" />
                <KpiCard
                  label="Alertas activas"
                  value="2"
                  delta="Revisar lote Norte"
                  direction={"warn" as KpiDirection}
                />
              </div>
              <div className={styles.chartRow}>
                <article className={styles.chartCard}>
                  <header className={styles.chartHeader}>
                    <p className={styles.cardLabel}>Evolución de peso</p>
                    <span className={styles.chartLatest}>395 kg</span>
                  </header>
                  <Sparkline
                    data={[350, 360, 368, 375, 385, 395]}
                    labels={["May", "Jun", "Jul", "Ago", "Sep", "Oct"]}
                  />
                </article>
                <article className={styles.meterCard}>
                  <p className={styles.cardLabel}>Condición corporal</p>
                  <div className={styles.meterList}>
                    <Meter label="Normal" value={78} tone={"primary" as MeterTone} />
                    <Meter label="Terneros" value={14} tone={"brand" as MeterTone} />
                    <Meter label="Bajo peso" value={5} tone={"secondary" as MeterTone} />
                    <Meter label="Sobrepeso" value={3} tone={"brand" as MeterTone} />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </Reveal>
        <div className={styles.dashboardCta}>
          <ArrowLink to="/dashboard">Explorar el dashboard</ArrowLink>
        </div>
      </Section>

      <Section id="demo" tone="surface" className={demoStyles.section}>
        <Reveal>
          <div className={demoStyles.inner}>
            <div className={demoStyles.header}>
              <p className={demoStyles.eyebrow}>Contacto</p>
              <h2 className={demoStyles.title}>
                <span>¿Querés verlo</span>
                <span className={demoStyles.highlight}>con tu campo?</span>
              </h2>
              <p className={demoStyles.lede}>
                Dejanos tu email y un mensaje. Te respondemos con los pasos para
                coordinar una demo en tu establecimiento.
              </p>
            </div>

            {demoStatus === "success" ? (
              <div className={demoStyles.successBlock}>
                <p className={`${demoStyles.feedback} ${demoStyles.feedbackSuccess}`}>
                  ¡Listo! Recibimos tu solicitud. Te vamos a escribir a la brevedad.
                </p>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setDemoStatus("idle")}
                >
                  Enviar otra consulta
                </Button>
              </div>
            ) : (
              <form className={demoStyles.form} onSubmit={handleDemoSubmit} noValidate>
                <div className={demoStyles.field}>
                  <label className={demoStyles.label} htmlFor="demo-email">
                    Email de contacto
                  </label>
                  <input
                    id="demo-email"
                    className={demoStyles.input}
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="tu@correo.com"
                    value={demoEmail}
                    onChange={(e) => setDemoEmail(e.target.value)}
                    disabled={demoStatus === "sending"}
                  />
                </div>

                <div className={demoStyles.field}>
                  <label className={demoStyles.label} htmlFor="demo-message">
                    Mensaje
                  </label>
                  <textarea
                    id="demo-message"
                    className={demoStyles.textarea}
                    name="message"
                    required
                    rows={5}
                    placeholder="Contanos sobre tu establecimiento, cantidad de cabezas, si ya usás dron, etc."
                    value={demoMessage}
                    onChange={(e) => setDemoMessage(e.target.value)}
                    disabled={demoStatus === "sending"}
                  />
                </div>

                {demoStatus === "error" && demoError ? (
                  <p className={`${demoStyles.feedback} ${demoStyles.feedbackError}`}>
                    {demoError}
                  </p>
                ) : null}

                <Button
                  type="submit"
                  variant="primary"
                  className={demoStyles.submit}
                  disabled={demoStatus === "sending"}
                >
                  {demoStatus === "sending" ? "Enviando…" : "Enviar solicitud de demo"}
                </Button>

                <p className={demoStyles.hint}>
                  También podés escribirnos a{" "}
                  <a href="mailto:dag.fiuba@gmail.com">dag.fiuba@gmail.com</a> si preferís.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </Section>
    </>
  );
}
