import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact – Andrei Sorin Ștefan | Vorte.eu",
  description:
    "Get in touch with Andrei Sorin Ștefan, automation and data integration specialist. Connect via WhatsApp, Telegram, LinkedIn, GitHub, YouTube, or email.",
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

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      {/* Header with photo */}
      <header className="flex flex-col items-center text-center mb-16 md:flex-row md:text-left md:justify-center md:gap-10">
        {/* Photo */}
        <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg ring-4 ring-indigo-500/30">
             <Image
            src="/images/andrei-profile.png"
            alt="Andrei Sorin Ștefan portrait"
            width={300} // Dimensiunea fixă
            height={300}
            className="object-cover"
            priority
           />

        </div>

        {/* Text */}
        <div className="mt-6 md:mt-0 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
            Contact Andrei Sorin Ștefan
          </h1>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Developer specializing in{" "}
            <span className="text-indigo-300 font-medium">
              automation, dashboards, and data integration
            </span>
            . Reach out directly via your preferred platform.
          </p>
        </div>
      </header>

      {/* Contact Methods */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          {
            href: "https://wa.me/40770558577",
            image: "/images/whatsapp.svg",
            label: "WhatsApp",
            text: "Chat instantly on WhatsApp",
            color: "bg-green-600/20 hover:bg-green-600/30",
          },
          {
            href: "https://t.me/PhoenixZuko",
            image: "/images/telegram.svg",
            label: "Telegram",
            text: "Send me a quick message",
            color: "bg-blue-600/20 hover:bg-blue-600/30",
          },
          {
            href: "mailto:andreisorinstefan@gmail.com",
            image: "/images/email.svg",
            label: "Email",
            text: "Send me details directly",
            color: "bg-red-600/20 hover:bg-red-600/30",
          },
          {
            href: "https://www.linkedin.com/in/andrei-sorin-stefan-8b1682318/",
            image: "/images/linkedin.svg",
            label: "LinkedIn",
            text: "Connect professionally",
            color: "bg-blue-500/20 hover:bg-blue-500/30",
          },
          {
            href: "https://github.com/PhoenixZuko",
            image: "/images/github.svg",
            label: "GitHub",
            text: "Explore my projects",
            color: "bg-gray-700/40 hover:bg-gray-700/60",
          },
          {
            href: "https://www.youtube.com/@andreisorinstefan",
            image: "/images/youtube.svg",
            label: "YouTube",
            text: "Watch my content",
            color: "bg-red-500/20 hover:bg-red-500/30",
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
              alt={`${link.label} icon`}
              width={40}
              height={40}
              className="mb-3"
            />
            <span className="font-semibold text-white">{link.label}</span>
            <p className="text-sm text-gray-300 mt-2 text-center">{link.text}</p>
          </a>
        ))}
      </div>

      {/* Business Hours bar */}
      <div className="mt-10 w-full max-w-4xl mx-auto bg-gray-900/50 border border-gray-700 rounded-lg p-4 text-center shadow-md">
        <p className="text-sm sm:text-base text-gray-300">
          <span className="font-semibold text-indigo-300">Business Hours:</span>{" "}
          Monday – Sunday · 08:00 – 22:00 (UTC) ·{" "}
          <span className="italic text-indigo-200/80">Available 24/7 for urgent requests</span>
        </p>
      </div>
    </section>
  );
}
