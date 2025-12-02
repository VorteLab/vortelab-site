import type { Metadata } from "next";
import Script from "next/script";
import VorteLabClient from "./VorteLabClient";

export const metadata: Metadata = {
  title: "VorteLab – Real-Time Custom Data Flows & Market Intelligence | Vorte.eu",
  description:
    "VorteLab delivers real-time custom data flows, secure APIs, and global insights. Track prices, trends & competitors in any industry.",
  alternates: {
    canonical: "https://vorte.eu/vortelab",
  },
  openGraph: {
    title: "VorteLab  Real-Time Custom Data Flows",
    description:
      "Discover VorteLab: personalized flows, competitor insights, and real-time market signals.",
    url: "https://vorte.eu/vortelab",
    siteName: "Vorte.eu",
    images: [
      {
        url: "/images/og-vortelab.jpg",
        width: 1200,
        height: 630,
        alt: "VorteLab SaaS Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VorteLab  Real-Time Custom Data Flows",
    description:
      "Track trends, prices, and competitors in real time with VorteLab.",
    images: ["/images/og-vortelab.jpg"],
  },
};

export default function VorteLabPage() {
  return (
    <>
      {/* JSON-LD Schema aici */}
      <Script id="vortelab-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "VorteLab",
          url: "https://vorte.eu/vortelab",
        })}
      </Script>

      {/* Afișăm conținutul vizual */}
      <VorteLabClient />
    </>
  );
}
<Script id="vortelab-schema" type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "VorteLab",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://vorte.eu/vortelab",
    image: "https://vorte.eu/images/og-vortelab.jpg",
    publisher: {
      "@type": "Organization",
      name: "Vorte.eu",
      url: "https://vorte.eu",
      logo: "https://vorte.eu/_next/static/media/logo-vorte.1a529f44.svg",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      category: "FreeTrial",
    },
    description:
      "VorteLab provides real-time automation flows, competitor monitoring, and global data intelligence tailored to your sector.",
  })}
</Script>
