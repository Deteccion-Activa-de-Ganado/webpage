import { useT } from "@/providers/I18nProvider";
import Section from "@/components/Section/Section";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import KpiCard from "@/components/KpiCard/KpiCard";
import Meter from "@/components/Meter/Meter";
import Sparkline from "@/components/Sparkline/Sparkline";
import ArrowLink from "@/components/ArrowLink/ArrowLink";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./DashboardPreview.module.css";

export default function DashboardPreview() {
  const t = useT();
  const { dashboard } = t.home;

  return (
    <Section tone="paper">
      <Reveal>
        <SectionHeading
          eyebrow={dashboard.eyebrow}
          title={dashboard.title}
          align="center"
        />
      </Reveal>

      <Reveal delay={0.08}>
        <div className={styles.panel} role="figure" aria-label={dashboard.title}>
          <div className={styles.panelBar}>
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.panelTitle}>DAG · Dashboard</span>
          </div>

          <div className={styles.tabs} role="tablist" aria-label={dashboard.eyebrow}>
            {dashboard.tabs.map((tab, i) => (
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

          <div className={styles.body}>
            <div className={styles.kpiRow}>
              {dashboard.kpis.map((kpi) => (
                <KpiCard
                  key={kpi.label}
                  label={kpi.label}
                  value={kpi.value}
                  delta={kpi.delta}
                  direction={kpi.direction}
                />
              ))}
            </div>

            <div className={styles.chartRow}>
              <article className={styles.chartCard}>
                <header className={styles.chartHeader}>
                  <p className={styles.cardLabel}>{dashboard.chart.label}</p>
                  <span className={styles.chartLatest}>
                    {dashboard.chart.latestValue}
                  </span>
                </header>
                <Sparkline
                  data={dashboard.chart.data}
                  labels={dashboard.chart.axisLabels}
                />
              </article>

              <article className={styles.meterCard}>
                <p className={styles.cardLabel}>
                  {dashboard.bodyCondition.label}
                </p>
                <div className={styles.meterList}>
                  {dashboard.bodyCondition.items.map((item) => (
                    <Meter
                      key={item.label}
                      label={item.label}
                      value={item.value}
                      tone={item.tone}
                    />
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </Reveal>

      <div className={styles.cta}>
        <ArrowLink to="/dashboard">{dashboard.cta}</ArrowLink>
      </div>
    </Section>
  );
}
