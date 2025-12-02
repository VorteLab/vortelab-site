import type { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";

export const metadata: Metadata = {
  title: "Portfolio – Python Automation, Dashboards & API Integrations | Vorte.eu",
  description:
    "Explore automation projects by Andrei Sorin Stefan: Python workflows, Flask dashboards, Selenium scraping, PostgreSQL pipelines, API integrations, and AI solutions.",
  keywords: [
    "Automation portfolio",
    "Python automation projects",
    "Flask dashboards",
    "Selenium scraping",
    "PostgreSQL pipelines",
    "API integrations",
    "AI automation solutions",
    "Andrei Sorin Stefan portfolio",
  ],
  openGraph: {
    title: "Portfolio  Python Automation, Dashboards & API Integrations",
    description:
      "Case studies and video tutorials: automation workflows, dashboards, APIs, PostgreSQL, and AI projects by Andrei Sorin Stefan.",
    url: "https://vorte.eu/portfolio",
    siteName: "Vorte.eu",
    images: [
      {
        url: "/images/og-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Portfolio – Vorte.eu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
