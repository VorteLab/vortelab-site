import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services – Automation, Dashboards & Data Solutions | Vorte.eu",
  description:
    "Explore the services offered by Andrei Sorin Ștefan: automation workflows, dashboards, API integrations, cloud scalability, BI, and consulting.",
  keywords: [
    "automation services",
    "data integration",
    "dashboards",
    "API development",
    "business intelligence",
    "cloud scalability",
    "Andrei Sorin Ștefan",
    "Vorte.eu",
  ],
  alternates: {
    canonical: "https://vorte.eu/services",
  },
  openGraph: {
    title: "Services – Automation, Dashboards & Data Solutions | Vorte.eu",
    description:
      "Professional services: automation, dashboards, APIs, BI, cloud solutions, and consulting. Helping businesses grow with scalable technology.",
    url: "https://vorte.eu/services",
    siteName: "Vorte.eu",
    images: [
      {
        url: "/images/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Services – Vorte.eu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services – Automation, Dashboards & Data Solutions | Vorte.eu",
    description:
      "Automation, dashboards, APIs, BI, and cloud scalability. Contact Andrei Sorin Ștefan to scale your business with smart solutions.",
    images: ["/images/og-services.jpg"],
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
