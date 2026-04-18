import Section from "@/components/Section/Section";
import Reveal from "@/components/Reveal/Reveal";
import Badge from "@/components/Badge/Badge";
import type { FeatureItem } from "@/content/types";
import styles from "./FeatureBlock.module.css";

type FeatureBlockProps = {
  item: FeatureItem;
  reverse?: boolean;
  tone?: "paper" | "surface";
};

export default function FeatureBlock({
  item,
  reverse = false,
  tone = "paper",
}: FeatureBlockProps) {
  return (
    <Section tone={tone} id={item.slug}>
      <div className={`${styles.grid} ${reverse ? styles.reverse : ""}`}>
        <div className={styles.content}>
          <Reveal>
            <p className={styles.eyebrow}>{item.n}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className={styles.title}>{item.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={styles.description}>{item.description}</p>
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

        <Reveal delay={0.1}>
          <figure className={styles.imageWrap}>
            <img
              className={styles.image}
              src={item.image.src}
              alt={item.image.alt}
              loading="lazy"
            />
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
