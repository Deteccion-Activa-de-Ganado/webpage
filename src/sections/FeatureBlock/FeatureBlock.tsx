import Section from "@/components/Section/Section";
import Reveal from "@/components/Reveal/Reveal";
import Badge from "@/components/Badge/Badge";
import type { FeatureBlockItem } from "@/types/blocks";
import FeatureBlockImage from "@/sections/FeatureBlock/FeatureBlockImage";
import styles from "./FeatureBlock.module.css";

type FeatureBlockProps = {
  item: FeatureBlockItem;
  reverse?: boolean;
  tone?: "paper" | "surface";
};

export default function FeatureBlock({
  item,
  reverse = false,
  tone = "paper",
}: FeatureBlockProps) {
  return (
    <Section
      tone={tone}
      id={item.slug}
      className={styles.featureSection}
      innerClassName={styles.wideInner}
    >
      <div className={`${styles.grid} ${reverse ? styles.reverse : ""}`}>
        <div className={styles.content}>
          <Reveal>
            <p className={styles.eyebrow}>{item.n}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className={styles.title}>{item.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className={styles.description}>{item.description}</div>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className={styles.bullets}>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </Reveal>
          {item.badges.length > 0 ? (
            <Reveal delay={0.2}>
              <div className={styles.badges}>
                {item.badges.map((badge) => (
                  <Badge key={badge}>{badge}</Badge>
                ))}
              </div>
            </Reveal>
          ) : null}
        </div>

        <div className={styles.imageCell}>
          <Reveal delay={0.1}>
            <FeatureBlockImage src={item.image.src} alt={item.image.alt} />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
