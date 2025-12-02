export const metadata = {
  title: "Home - Autoflow",
  description: "Automatic data monitoring, extractors, and alerts.",
};

import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import FAQ from "@/components/ui/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
      <FAQ />
    </>
  );
}
