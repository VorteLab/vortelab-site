import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Andrei Sorin Stefan – Automation & Data Solutions | Vorte.eu",
  description:
    "Learn more about Andrei Sorin Stefan, freelance automation and data integration expert. 20+ years in IT, 7+ years Python. Specialized in automation, dashboards, APIs, and scalable workflows.",
  keywords: [
    "About Andrei Sorin Stefan",
    "Automation expert",
    "Python developer Europe",
    "Data integration specialist",
    "Freelance automation developer",
    "Workflow automation",
    "Dashboards and APIs",
  ],
  openGraph: {
    title: "About Andrei Sorin Stefan – Automation & Data Solutions",
    description:
      "20+ years in IT, 7+ years Python development. Freelance automation & data integration specialist. Helping businesses scale with smart automation.",
    url: "https://vorte.eu/about",
    siteName: "Vorte.eu",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Andrei Sorin Stefan – Vorte.eu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
