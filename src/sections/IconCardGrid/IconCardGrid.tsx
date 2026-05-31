import {
  ClipboardList,
  Globe,
  Monitor,
  Plane,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/Section/Section";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import IconCard from "@/components/IconCard/IconCard";
import Reveal from "@/components/Reveal/Reveal";
import type { IconCardBlock } from "@/types/blocks";
import type { IconKey } from "@/types/ui";
import styles from "./IconCardGrid.module.css";

const ICON_REGISTRY: Record<IconKey, LucideIcon> = {
  drone: Plane,
  monitor: Monitor,
  clipboard: ClipboardList,
  globe: Globe,
};

type IconCardGridProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  cards: readonly IconCardBlock[];
  tone?: "paper" | "surface";
  id?: string;
};

export default function IconCardGrid({
  eyebrow,
  title,
  lede,
  cards,
  tone = "paper",
  id,
}: IconCardGridProps) {
  const columnsClass =
    cards.length === 1
      ? styles.cols1
      : cards.length >= 3
        ? styles.cols3
        : styles.cols2;

  return (
    <Section tone={tone} id={id}>
      <Reveal>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          lede={lede}
          align="center"
        />
      </Reveal>
      <div className={`${styles.grid} ${columnsClass}`}>
        {cards.map((card, i) => {
          const Icon = ICON_REGISTRY[card.icon as IconKey];
          return (
            <Reveal key={card.title} delay={i * 0.08}>
              <IconCard
                icon={<Icon size={22} strokeWidth={1.5} />}
                title={card.title}
                description={card.description}
                checklist={card.checklist}
              />
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
