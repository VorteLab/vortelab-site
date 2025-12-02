"use client";

import Link from "next/link";
import Mascot from "@/public/images/robotel.png";

export default function PortfolioPageClient() {
  const projects = [
    {
      title: "Data Extractor",
      description:
        "Custom extractor that transforms messy sources into structured, clean datasets ready for analytics. Built with Python, Regex, and PostgreSQL for scalable data automation.",
      tech: ["Python", "Regex", "PostgreSQL"],
      demo: "#",
      code: "#",
    },
    {
      title: "Automation Dashboard",
      description:
        "A unified control center for real-time monitoring, built with React, FastAPI, and Docker. Mobile-friendly dashboards with API orchestration and CI/CD integration.",
      tech: ["React", "FastAPI", "Docker"],
      demo: "#",
      code: "#",
    },
    {
      title: "AI Integration",
      description:
        "Seamless integration of AI models into production pipelines. Includes ONNX-based inference, OpenCV image recognition, and Python APIs for predictive analytics.",
      tech: ["Python", "ONNX", "OpenCV"],
      demo: "#",
      code: "#",
    },
  ];

  const videos = [
    {
      url: "https://www.youtube.com/embed/xMUuRqI5kdM",
      title: "Professional Freelancer Introduction – UpWork Portfolio",
      description:
        "Introductory video presenting my background: 7+ years of Python development, 20+ years in IT, with proven experience in automation, APIs, and secure applications. Focus on results, not words.",
    },
    {
      url: "https://www.youtube.com/embed/r5iQPuOCLUc",
      title: "Complete Automation Workflow with Python & Selenium",
      description:
        "Full local automation project scraping auto listings from Facebook Marketplace. Integrated Flask dashboard, sortable tables, JSON export. Scalable Python workflow ready for business use.",
    },
    {
      url: "https://www.youtube.com/embed/lfGWEwaeCqU",
      title: "Advanced Data Extraction with SVG Parsing & Image Analysis",
      description:
        "Python system for extracting structured weather data from multiple SVG charts. Selenium, screenshots, intelligent SVG parsing, pixel analysis, JSON output. Handles dynamic layouts automatically.",
    },
    {
      url: "https://www.youtube.com/embed/eX9hydLaTK8",
      title: "Bypassing CAPTCHA & Dynamic Content – Airport Parking Scraper",
      description:
        "Scraper for Germany’s airport parking platform. Extracts 200+ parkings per airport, supports 1–14 day ranges, simulates human behavior, avoids CAPTCHA, exports clean JSON. Built with Selenium + undetected-chromedriver.",
    },
    {
      url: "https://www.youtube.com/embed/bMTnO_YP_Go",
      title: "MyAutoFlow – Quick Installation & Setup on Windows",
      description:
        "Complete Flask + Selenium dashboard automation tool. Pre-packaged with Python & Chrome. Unzip, run, login once. Full automation dashboard for Windows 10/11 with persistent sessions.",
    },
    {
      url: "https://www.youtube.com/embed/bZfoTRQVRZk",
      title: "Stage 1 – Multi-Site Product Data Scraper",
      description:
        "Scraping products from 5 e-commerce sites. Exports CSV & JSON. Automated via SSH + CRON jobs. Future stages integrate PostgreSQL, Metabase dashboards, live API via Traefik.",
    },
    {
      url: "https://www.youtube.com/embed/RJLspqNEm1U",
      title: "Stage 2 – PostgreSQL Integration",
      description:
        "Setup PostgreSQL on Ubuntu VPS. Connect Python scraper, save data in real-time. Includes CSV-to-DB pipeline. Optimized for low-memory VPS (2GB RAM). Tools: Python, PostgreSQL, Ubuntu 22.04.",
    },
    {
      url: "https://www.youtube.com/embed/JE_FfJHVhxw",
      title: "Stage 3 – Secure API & Analytics Integration",
      description:
        "Added secure API authentication, PostgreSQL analytics with Metabase, Power BI integration, and auto-cleanup scripts. Full CRON automation for enterprise-ready workflows.",
    },
    {
      url: "https://www.youtube.com/embed/xE-Vgt0T3BY",
      title: "Stage 4 – Client Guide & Customization",
      description:
        "Tutorial for clients: configure cities/states, define price ranges, edit YAML config, avoid duplicates. Step-by-step instructions for non-technical users. Runs Facebook extractor with ease.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-white-300 to-indigo-400 bg-clip-text text-transparent">
          Portfolio  Python Automation, Dashboards & API Integrations
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Explore real-world automation projects covering{" "}
          <strong>
            Python development, Selenium workflows, Flask dashboards, API
            orchestration, PostgreSQL pipelines, and AI integrations
          </strong>
          . These case studies show how I deliver scalable, secure, and
          business-ready solutions.
        </p>
      </div>

      {/* Projects */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl bg-gray-900/60 p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-800"
          >
            <h3 className="text-xl font-semibold text-gray-100 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-indigo-500/20 text-indigo-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Link
                href={project.demo}
                className="text-indigo-400 hover:text-indigo-300 text-sm"
              >
                Live Demo →
              </Link>
              <Link
                href={project.code}
                className="text-gray-400 hover:text-gray-300 text-sm"
              >
                Source Code
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Videos */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-gray-200 mb-6 text-center">
          Video Demonstrations & Tutorials
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 text-center leading-relaxed">
          Watch hands-on demonstrations of{" "}
          <strong>
            automation workflows, scraping projects, dashboards, PostgreSQL
            integration, and API security
          </strong>
          . Each video is designed to explain concepts clearly, for both
          technical and non-technical audiences.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-lg border border-gray-800 bg-gray-900/70"
            >
              <iframe
                className="w-full aspect-video"
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing SEO CTA */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">
          Ready to Automate Your Business?
        </h2>
        <p className="text-gray-400 mb-6">
          Whether it’s <strong>data extraction, API integration, custom
          dashboards, or machine learning pipelines</strong>, I can design
          end-to-end solutions tailored to your needs. Let’s turn your workflows
          into scalable, automated systems.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-8 py-4 rounded-xl shadow hover:opacity-90 transition"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
