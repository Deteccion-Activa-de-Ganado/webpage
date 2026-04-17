import { useT } from "@/providers/I18nProvider";
import PageHero from "@/sections/PageHero/PageHero";
import FeatureBlock from "@/sections/FeatureBlock/FeatureBlock";
import DemoCTA from "@/sections/DemoCTA/DemoCTA";
import Section from "@/components/Section/Section";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import MetricCard from "@/components/MetricCard/MetricCard";
import Callout from "@/components/Callout/Callout";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const t = useT();
  const { dashboardPage } = t;

  return (
    <>
      <PageHero {...dashboardPage.pageHero} />

      <Section tone="surface">
        <Reveal>
          <SectionHeading
            eyebrow={dashboardPage.metricsPreview.eyebrow}
            title={dashboardPage.metricsPreview.title}
            align="center"
          />
        </Reveal>
        <div className={styles.metricGrid}>
          {dashboardPage.metricsPreview.metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.08}>
              <MetricCard
                value={metric.value}
                label={metric.label}
                description={metric.description}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow={dashboardPage.modulesIntro.eyebrow}
            title={dashboardPage.modulesIntro.title}
            align="center"
          />
        </Reveal>
      </Section>

      {dashboardPage.modules.map((module, i) => (
        <FeatureBlock
          key={module.slug}
          item={module}
          reverse={i % 2 === 1}
          tone={i % 2 === 0 ? "surface" : "paper"}
        />
      ))}

      <Section tone="paper" id="alertas">
        <Reveal>
          <SectionHeading
            eyebrow={dashboardPage.alerts.eyebrow}
            title={dashboardPage.alerts.title}
            lede={dashboardPage.alerts.lede}
            align="center"
          />
        </Reveal>
        <div className={styles.alertList}>
          {dashboardPage.alerts.items.map((alert, i) => (
            <Reveal key={alert.title} delay={i * 0.05}>
              <Callout title={alert.title} tone={alert.severity}>
                <p>{alert.body}</p>
              </Callout>
            </Reveal>
          ))}
        </div>
      </Section>

      <DemoCTA />
    </>
  );
}
