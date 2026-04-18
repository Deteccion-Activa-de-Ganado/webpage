import {
  BarChart3,
  Bell,
  Clock,
  Eye,
  FileText,
  Layers,
  Scale,
  Search,
  type LucideIcon,
} from "lucide-react";
import { useT } from "@/providers/I18nProvider";
import Section from "@/components/Section/Section";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import IconItem from "@/components/IconItem/IconItem";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./BeforeAfter.module.css";

const beforeIcons: LucideIcon[] = [Clock, Scale, FileText, Search];
const afterIcons: LucideIcon[] = [Layers, Eye, BarChart3, Bell];

export default function BeforeAfter() {
  const t = useT();
  const { compare } = t.home;

  return (
    <Section tone="paper">
      <Reveal>
        <SectionHeading
          eyebrow={compare.eyebrow}
          title={compare.title}
          align="center"
        />
      </Reveal>

      <div className={styles.grid}>
        <div>
          <Reveal>
            <p className={`${styles.colTitle} ${styles.beforeTitle}`}>
              {compare.beforeLabel}
            </p>
          </Reveal>
          {compare.before.map((item, i) => {
            const Icon = beforeIcons[i];
            return (
              <Reveal key={item} delay={i * 0.06}>
                <IconItem
                  tone="before"
                  icon={<Icon size={18} strokeWidth={1.75} />}
                >
                  {item}
                </IconItem>
              </Reveal>
            );
          })}
        </div>

        <div>
          <Reveal>
            <p className={`${styles.colTitle} ${styles.afterTitle}`}>
              {compare.withDAGLabel}
            </p>
          </Reveal>
          {compare.withDAG.map((item, i) => {
            const Icon = afterIcons[i];
            return (
              <Reveal key={item} delay={i * 0.06}>
                <IconItem
                  tone="after"
                  icon={<Icon size={18} strokeWidth={1.75} />}
                >
                  {item}
                </IconItem>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
