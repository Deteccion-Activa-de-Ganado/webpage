import Hero from "@/sections/Hero/Hero";
import Stats from "@/sections/Stats/Stats";
import BeforeAfter from "@/sections/BeforeAfter/BeforeAfter";
import StepsTeaser from "@/sections/StepsTeaser/StepsTeaser";
import DashboardPreview from "@/sections/DashboardPreview/DashboardPreview";
import DemoCTA from "@/sections/DemoCTA/DemoCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <BeforeAfter />
      <StepsTeaser />
      <DashboardPreview />
      <DemoCTA />
    </>
  );
}
