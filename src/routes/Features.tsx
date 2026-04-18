import { useT } from "@/providers/I18nProvider";
import PageHero from "@/sections/PageHero/PageHero";
import FeatureBlock from "@/sections/FeatureBlock/FeatureBlock";
import ComparisonTable from "@/sections/ComparisonTable/ComparisonTable";
import DemoCTA from "@/sections/DemoCTA/DemoCTA";

export default function Features() {
  const t = useT();
  const { features } = t;

  return (
    <>
      <PageHero {...features.pageHero} />

      {features.items.map((item, index) => (
        <FeatureBlock
          key={item.slug}
          item={item}
          reverse={index % 2 === 1}
          tone={index % 2 === 0 ? "surface" : "paper"}
        />
      ))}

      <ComparisonTable content={features.comparison} id="comparacion" tone="paper" />

      <DemoCTA />
    </>
  );
}
