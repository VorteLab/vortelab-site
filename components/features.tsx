import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      {/* Background shapes */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Abstract blurred background shape in gray"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Abstract blurred background shape in indigo"
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 md:py-20 border-indigo-500/20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3">
              <span className="inline-flex bg-gradient-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent font-medium">
                Why Choose Vorte.eu
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Automation, API Integrations & Dashboards for European Businesses
            </h2>
            <p className="text-lg text-indigo-200/65">
              We help companies save time and scale faster through{" "}
              <span className="text-indigo-300 font-medium">
                automation solutions, dashboards, and custom API integrations
              </span>
              . Vorte.eu delivers practical tools that simplify workflows and
              boost productivity.
            </p>
          </div>

          {/* Center image */}
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="rounded-xl shadow-lg"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Vorte.eu features: automation, API integrations, dashboards, business intelligence"
            />
          </div>

          {/* Feature cards */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M0 0h14v17H0V0Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-lg font-semibold text-gray-200">
                Workflow Automation Solutions
              </h3>
              <p className="text-indigo-200/65">
                Eliminate repetitive tasks and automate end-to-end workflows for
                maximum efficiency.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M19 6H0v2h19v-2Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-lg font-semibold text-gray-200">
                Custom API Integrations
              </h3>
              <p className="text-indigo-200/65">
                Connect your business tools seamlessly with reliable and
                scalable API integrations.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M12 8.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-lg font-semibold text-gray-200">
                Dashboards & Reporting Tools
              </h3>
              <p className="text-indigo-200/65">
                Clear, real-time dashboards to visualize KPIs and track progress
                instantly.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M7 8V0H5v8h2Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-lg font-semibold text-gray-200">
                Data Integration Services
              </h3>
              <p className="text-indigo-200/65">
                Merge and structure data from multiple sources into one clean
                system.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M23.414 6 18 .586 16.586 2Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-lg font-semibold text-gray-200">
                Automated ETL Pipelines
              </h3>
              <p className="text-indigo-200/65">
                Automate extraction, transformation, and loading for
                ready-to-use, clean data.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M19 8h5v2h-5V8Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-lg font-semibold text-gray-200">
                Business Intelligence (BI) Solutions
              </h3>
              <p className="text-indigo-200/65">
                Turn raw data into insights that drive smarter decisions and
                sustainable growth.
              </p>
            </article>
          </div>

          {/* SEO-friendly paragraph */}
          <p className="mt-12 text-center text-indigo-200/65 max-w-3xl mx-auto">
            Vorte.eu provides European companies with automation solutions that
            connect tools, integrate data, and build clear dashboards. From API
            integrations to business intelligence, our focus is on clarity,
            speed, and scalability.
          </p>
        </div>
      </div>
    </section>
  );
}
