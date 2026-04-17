import Reveal from "@/components/Reveal/Reveal";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  lede: string;
};

export default function PageHero({
  eyebrow,
  titleLine1,
  titleLine2,
  lede,
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <Reveal>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>
            <span>{titleLine1}</span>
            <span className={styles.highlight}>{titleLine2}</span>
          </h1>
          <p className={styles.lede}>{lede}</p>
        </div>
      </Reveal>
    </section>
  );
}
