import { useT } from "@/providers/I18nProvider";
import PageHero from "@/sections/PageHero/PageHero";
import ProcessStep from "@/sections/ProcessStep/ProcessStep";
import IconCardGrid from "@/sections/IconCardGrid/IconCardGrid";
import DemoCTA from "@/sections/DemoCTA/DemoCTA";
import Section from "@/components/Section/Section";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Reveal from "@/components/Reveal/Reveal";

const STEP_TONES: Array<"paper" | "surface"> = [
  "surface",
  "paper",
  "surface",
  "paper",
];

export default function HowItWorks() {
  const t = useT();
  const { howItWorks } = t;

  return (
    <>
      <PageHero {...howItWorks.pageHero} />

      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow={howItWorks.intro.eyebrow}
            title={howItWorks.intro.title}
            align="center"
          />
        </Reveal>
      </Section>

      {howItWorks.steps.map((step, index) => (
        <ProcessStep key={step.n} step={step} tone={STEP_TONES[index]} />
      ))}

      <IconCardGrid
        eyebrow={howItWorks.requirements.eyebrow}
        title={howItWorks.requirements.title}
        lede={howItWorks.requirements.lede}
        cards={howItWorks.requirements.cards}
        tone="surface"
        id="requisitos"
      />

      <DemoCTA />
    </>
  );
}
