import { useT } from "@/providers/I18nProvider";
import { ButtonLink } from "@/components/Button/Button";
import Reveal from "@/components/Reveal/Reveal";
import DetectionFrame from "./DetectionFrame";
import styles from "./Hero.module.css";

export default function Hero() {
  const t = useT();
  const { hero } = t.home;

  return (
    <section className={styles.hero}>
      <div className={styles.grid}>
        <Reveal>
          <div className={styles.left}>
            <p className={styles.eyebrow}>{hero.coordinates}</p>
            <h1 className={styles.title}>
              <span>{hero.titleLine1}</span>
              <span className={styles.highlight}>{hero.titleLine2}</span>
            </h1>
            <span className={styles.rule} aria-hidden="true" />
            <p className={styles.lede}>{hero.lede}</p>
            <ButtonLink to="/#demo" className={styles.cta}>
              {hero.cta}
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className={styles.right}>
            <div className={styles.photoWrap}>
              <img
                className={styles.photo}
                src="/img/foto-vaca.jpg"
                alt={hero.detection.photoAlt}
                loading="eager"
              />
              <DetectionFrame
                idTag={hero.detection.idTag}
                statusTag={hero.detection.statusTag}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
