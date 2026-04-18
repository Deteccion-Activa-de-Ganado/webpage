import Section from "@/components/Section/Section";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Reveal from "@/components/Reveal/Reveal";
import type { ComparisonContent } from "@/content/types";
import styles from "./ComparisonTable.module.css";

type ComparisonTableProps = {
  content: ComparisonContent;
  tone?: "paper" | "surface";
  id?: string;
};

export default function ComparisonTable({
  content,
  tone = "paper",
  id,
}: ComparisonTableProps) {
  return (
    <Section tone={tone} id={id}>
      <Reveal>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          align="center"
        />
      </Reveal>
      <Reveal delay={0.1}>
        <div className={styles.wrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">{content.headers.activity}</th>
                <th scope="col">{content.headers.traditional}</th>
                <th scope="col">{content.headers.withDag}</th>
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row) => (
                <tr key={row.activity}>
                  <th scope="row" className={styles.activity}>
                    {row.activity}
                  </th>
                  <td className={styles.bad}>{row.traditional}</td>
                  <td className={styles.good}>{row.withDag}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}
