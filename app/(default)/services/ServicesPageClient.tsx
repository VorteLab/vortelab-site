"use client";

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 py-20 space-y-24">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
          Our Services
        </h1>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          Scalable, secure, and intelligent automation solutions designed to
          accelerate your digital transformation. From workflow automation to
          AI-powered analytics, we deliver business-ready systems tailored to
          your industry.
        </p>
      </div>

      {/* First services grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: "Data Automation & Integration",
            desc: "Design and implementation of automated data pipelines, ETL processes, and seamless integrations between multiple platforms and APIs.",
            color: "from-indigo-700/20 to-indigo-900/20",
          },
          {
            title: "Dashboards & Reporting",
            desc: "Custom dashboards and real-time reporting systems to track KPIs, financials, and operational data with actionable insights.",
            color: "from-pink-700/20 to-pink-900/20",
          },
          {
            title: "Workflow Automation",
            desc: "Automating repetitive business processes to reduce manual workload, eliminate errors, and improve operational efficiency.",
            color: "from-green-700/20 to-green-900/20",
          },
          {
            title: "API Development & Integration",
            desc: "Development of secure, scalable APIs and integrations to connect your applications, CRMs, and third-party platforms.",
            color: "from-yellow-700/20 to-yellow-900/20",
          },
        ].map((service, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${service.color} rounded-xl p-8 shadow-md border border-gray-700 hover:shadow-lg transition`}
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              {service.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Technologies grid */}
      <div className="text-center space-y-12">
        <h2 className="text-3xl font-semibold text-gray-200">
          Core Technologies
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 justify-items-center">
          {[
            "python",
            "javascript",
            "typescript",
            "react",
            "nextjs",
            "nodejs",
            "tailwind",
            "postgresql",
            "mongodb",
            "redis",
            "docker",
            "kubernetes",
          ].map((tech, i) => (
            <div key={i} className="flex flex-col items-center space-y-3">
              <img
                src={`/icons/${tech}.svg`}
                alt={tech}
                className="w-16 h-16 hover:scale-110 transition-transform"
              />
              <span className="text-base text-gray-300 capitalize">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Second services grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: "Business Intelligence",
            desc: "Advanced analytics, forecasting models, and performance optimization to support strategic decision-making.",
            color: "from-purple-700/20 to-purple-900/20",
          },
          {
            title: "Web Scraping & Data Mining",
            desc: "Accurate, secure, and structured data extraction from websites and external systems for research and automation.",
            color: "from-red-700/20 to-red-900/20",
          },
          {
            title: "Cloud & Scalability",
            desc: "Cloud-native development, serverless apps, and scalable infrastructure deployment on AWS, Azure, and GCP.",
            color: "from-cyan-700/20 to-cyan-900/20",
          },
          {
            title: "Consulting & Advisory",
            desc: "Technical guidance, compliance support, and digital transformation consulting tailored to your business model.",
            color: "from-teal-700/20 to-teal-900/20",
          },
        ].map((service, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${service.color} rounded-xl p-8 shadow-md border border-gray-700 hover:shadow-lg transition`}
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              {service.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* More technologies grid */}
      <div className="text-center space-y-12">
        <h2 className="text-3xl font-semibold text-gray-200">
          Advanced Tooling & Integrations
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 justify-items-center">
          {[
            "aws",
            "gcp",
            "azure",
            "graphql",
            "airflow",
            "pandas",
            "tensorflow",
            "pytorch",
            "selenium",
            "git",
            "github",
            "jira",
          ].map((tech, i) => (
            <div key={i} className="flex flex-col items-center space-y-3">
              <img
                src={`/icons/${tech}.svg`}
                alt={tech}
                className="w-16 h-16 hover:scale-110 transition-transform"
              />
              <span className="text-base text-gray-300 capitalize">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Maintenance & Support */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-gray-700/30 to-gray-900/40 rounded-xl p-8 shadow-md border border-gray-700 hover:shadow-lg transition md:col-span-2">
          <h3 className="text-xl font-semibold text-white mb-3">
            Maintenance & 24/7 Support
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Beyond development, we provide continuous monitoring, system
            optimization, and technical support. Our proactive approach ensures
            that your automation flows, dashboards, and integrations remain
            reliable, secure, and up-to-date at all times.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-semibold text-gray-100 mb-6">
          Ready to transform your business processes?
        </h3>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-8 py-4 rounded-xl shadow hover:opacity-90 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
