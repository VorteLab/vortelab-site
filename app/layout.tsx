import "./css/style.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import Header from "@/components/ui/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    { path: "./fonts/nacelle-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/nacelle-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/nacelle-semibold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/nacelle-semibolditalic.woff2", weight: "600", style: "italic" },
  ],
  variable: "--font-nacelle",
  display: "swap",
});
export const metadata = {
  title: "Vorte.eu – Business Automation & Data Integration",
  description:
    "Vorte.eu delivers business automation, workflow optimization, dashboards, and seamless API integrations. Save time and scale with smart automation.",
  keywords: [
    "business automation",
    "workflow automation",
    "data integration",
    "API integrations",
    "dashboards",
    "automation tools",
    "ETL pipelines",
    "Andrei Sorin Stefan",
  ],
  authors: [{ name: "Andrei Sorin Stefan", url: "https://vorte.eu" }],
  creator: "Andrei Sorin Stefan",
  publisher: "Vorte.eu",
  openGraph: {
    title: "Vorte.eu – Business Automation & Data Integration",
    description: "Automate workflows, dashboards, and integrations for modern companies.",
    url: "https://vorte.eu",
    siteName: "Vorte.eu",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vorte.eu – Smart Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vorte.eu – Business Automation & Data Integration",
    description: "Smart automation & data integration solutions for modern companies.",
    images: ["/images/og-image.png"],
    creator: "@andreisorinstefan",
  },
  metadataBase: new URL("https://vorte.eu"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>

        {/* ✅ Structured Data JSON-LD for SEO */}
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Andrei Sorin Stefan",
                url: "https://vorte.eu",
                email: "mailto:andreisorinstefan@gmail.com",
                sameAs: [
                  "https://github.com/PhoenixZuko",
                  "https://www.linkedin.com/in/andrei-sorin-stefan-8b1682318/",
                  "https://www.upwork.com/freelancers/~01207dc9df982f92c4",
                  "https://stackoverflow.com/users/31050144/andrei-sorin-stefan",
                  "https://www.facebook.com/profile.php?id=61576309096777",
                ],
                worksFor: {
                  "@type": "Organization",
                  name: "Vorte.eu",
                  url: "https://vorte.eu",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Vorte.eu",
                url: "https://vorte.eu",
                logo: "https://vorte.eu/images/logo-vorte.svg",
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    email: "andreisorinstefan@gmail.com",
                    contactType: "customer support",
                    availableLanguage: ["English", "Romanian"],
                  },
                ],
                sameAs: [
                  "https://github.com/PhoenixZuko",
                  "https://www.linkedin.com/in/andrei-sorin-stefan-8b1682318/",
                  "https://www.facebook.com/andrei.sorin.stefan",
                ],
              },
            ]),
          }}
        />
      <Script
  id="ld-json-org"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Vorte.eu",
      url: "https://vorte.eu",
      logo: "https://vorte.eu/images/logo-vorte.svg",
      sameAs: [
        "https://github.com/PhoenixZuko",
        "https://www.linkedin.com/in/andrei-sorin-stefan-8b1682318/",
        "https://www.facebook.com/andrei.sorin.stefan"
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "andreisorinstefan@gmail.com",
          availableLanguage: ["English", "Romanian"],
          hoursAvailable: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              opens: "08:00",
              closes: "22:00"
            }
          ]
        }
      ],
      openingHours: [
        "Mo-Su 08:00-22:00"
      ],
      description: "Available 24/7 for urgent requests"
    })
  }}
/>
  
      </body>
    </html>
  );
}
