import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact – Andrei Sorin Ștefan | Vorte.eu",
  description:
    "Contact Andrei Sorin Ștefan, automation & data integration expert. Available via WhatsApp, Telegram, LinkedIn, GitHub, YouTube, or email.",
  keywords: [
    "contact",
    "automation developer",
    "data integration",
    "API integrations",
    "Andrei Sorin Ștefan",
    "Vorte.eu",
  ],
  alternates: {
    canonical: "https://vorte.eu/contact",
  },
  openGraph: {
    title: "Contact – Andrei Sorin Ștefan | Vorte.eu",
    description:
      "Reach out to discuss automation, data solutions, or collaborations. Available on WhatsApp, Telegram, LinkedIn, GitHub, YouTube, and email.",
    url: "https://vorte.eu/contact",
    siteName: "Vorte.eu",
    images: [
      {
        url: "/images/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Andrei Sorin Ștefan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact – Andrei Sorin Ștefan | Vorte.eu",
    description:
      "Let’s connect – automation, dashboards, and integrations. Contact me via WhatsApp, Telegram, LinkedIn, GitHub, YouTube, or email.",
    images: ["/images/og-contact.jpg"],
  },
};

export default function PartnersPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      {/* Hero */}
      <header className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
            Partnerships & Opportunities
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Seeking trusted partners and investors to scale{" "}
            <strong>automation and data-driven projects</strong>. Let’s build
            technology that matters, together.
          </p>
        </div>
        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/partners.png"
            alt="Professional partnership illustration"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, 50vw" // Ajustează dimensiunea imaginii pe ecrane mici și mari
          />
        </div>
      </header>

      {/* Value Propositions */}
      <section className="grid md:grid-cols-3 gap-8 mb-20">
        {[ 
          {
            title: "Credibility",
            desc: "Years of hands-on experience delivering automation, dashboards, and integrations.",
            color: "from-green-400/20 to-green-600/10",
          },
          {
            title: "Scalability",
            desc: "Solutions designed to adapt and grow with real business needs.",
            color: "from-indigo-400/20 to-indigo-600/10",
          },
          {
            title: "Innovation",
            desc: "Smart, practical tools developed with the latest technologies.",
            color: "from-pink-400/20 to-pink-600/10",
          },
        ].map((item, i) => (
          <article
            key={i}
            className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 shadow-md hover:shadow-xl transition`}
          >
            <h2 className="text-xl font-semibold text-white mb-3">
              {item.title}
            </h2>
            <p className="text-gray-200">{item.desc}</p>
          </article>
        ))}
      </section>

      {/* Quote */}
      <section className="max-w-3xl mx-auto text-center mb-20">
        <blockquote className="text-2xl italic text-gray-200">
          “Great partnerships are built on trust, vision, and execution. That’s
          the foundation I bring.”
        </blockquote>
      </section>

      {/* Contact & Links */}
      <footer className="text-center space-y-10 mt-20">
        <h2 className="text-3xl font-semibold text-gray-200">Let’s Connect</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              href: "https://wa.me/40770558577",
              image: "/images/whatsapp.svg",
              label: "WhatsApp",
              color: "bg-green-600/20 hover:bg-green-600/30",
              text: "Chat instantly on WhatsApp",
            },
            {
              href: "https://t.me/PhoenixZuko",
              image: "/images/telegram.svg",
              label: "Telegram",
              color: "bg-blue-600/20 hover:bg-blue-600/30",
              text: "Reach me on Telegram",
            },
            {
              href: "https://github.com/PhoenixZuko",
              image: "/images/github.svg",
              label: "GitHub",
              color: "bg-gray-700/40 hover:bg-gray-700/60",
              text: "Explore my automation projects on GitHub",
            },
            {
              href: "mailto:andreisorinstefan@gmail.com",
              image: "/images/email.svg",
              label: "Email",
              color: "bg-red-600/20 hover:bg-red-600/30",
              text: "Send me an email directly",
            },
            {
              href: "https://www.linkedin.com/in/andrei-sorin-stefan-8b1682318/",
              image: "/images/linkedin.svg",
              label: "LinkedIn",
              color: "bg-blue-500/20 hover:bg-blue-500/30",
              text: "Connect with me on LinkedIn",
            },
            {
              href: "https://www.youtube.com/@andreisorinstefan",
              image: "/images/youtube.svg",
              label: "YouTube",
              color: "bg-red-500/20 hover:bg-red-500/30",
              text: "Watch tutorials and content on YouTube",
            },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center rounded-xl p-6 transition ${link.color}`}
            >
              <Image
                src={link.image}
                alt={`${link.label} logo`}
                width={40}
                height={40}
                className="mb-3"
              />
              <span className="font-semibold text-white">{link.label}</span>
              <p className="text-sm text-gray-300 mt-2">{link.text}</p>
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
}
