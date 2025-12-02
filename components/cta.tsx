import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";


export const metadata = {
  title: "Automation, API Integrations & Dashboards | Vorte.eu",
  description: "Vorte.eu helps European businesses with automation, dashboards, API integrations, ETL pipelines and BI solutions for scalability and clarity.",
  alternates: {
    canonical: "https://vorte.eu/features",
  },
  openGraph: {
    title: "Automation, API Integrations & Dashboards | Vorte.eu",
    description: "Explore Vorte.eu features: automation, API integrations, dashboards, ETL pipelines and BI solutions.",
    url: "https://vorte.eu/features",
    images: ["/images/og-features.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automation, API Integrations & Dashboards | Vorte.eu",
    description: "Automation, dashboards, API integrations, ETL pipelines and BI solutions for European businesses.",
    images: ["/images/og-features.jpg"],
  },
};

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      {/* Background shape */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2 opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl bg-gradient-to-r from-gray-900/70 via-gray-800/70 to-gray-900/70 py-12 md:py-20 shadow-lg">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-6 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Automate Your Business. Save Time. Scale Faster.
            </h2>
            <p
              className="mb-8 text-lg text-indigo-200/70"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Vorte.eu helps companies streamline operations with{" "}
              <span className="font-semibold text-indigo-300">
                automation, dashboards, and API integrations
              </span>.  
              Start building smarter workflows today.
            </p>

            {/* Buttons */}
            <div className="mx-auto flex max-w-xs flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">
              <a
                className="btn group bg-gradient-to-t from-indigo-600 to-indigo-500 text-white hover:opacity-90"
                href="/services"
              >
                <span className="relative inline-flex items-center">
                  Explore Services
                  <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
              <a
                className="btn bg-gradient-to-b from-gray-800 to-gray-800/60 text-gray-300 hover:text-white sm:ml-4"
                href="/contact"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
