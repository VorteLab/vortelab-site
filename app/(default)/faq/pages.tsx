"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What makes VorteLab unique?",
    answer:
      "VorteLab gives you only the data you need, in real time. No static reports, no outdated databases just fresh, relevant insights.",
  },
  {
    question: "How can I access my data?",
    answer:
      "Through secure APIs with JWT authentication or directly in your personal dashboard, ready for analysis.",
  },
  {
    question: "Can VorteLab adapt to my industry?",
    answer:
      "Yes. Whether you work in e-commerce, automotive, healthcare, finance, or any other sector, VorteLab customizes data flows to your exact needs.",
  },
  {
    question: "What kind of insights will I get?",
    answer:
      "VorteLab tracks prices, stock, competitors, ads, and market trends so you can act on what’s happening right now.",
  },
  {
    question: "Is VorteLab available worldwide?",
    answer:
      "Yes. VorteLab works with global data sources, so you can monitor both local and international markets.",
  },
  {
    question: "Do you provide support?",
    answer:
      "Yes. VorteLab includes 24/7 monitoring, updates, and direct support, so your flows are always reliable.",
  },
  {
    question: "Can I receive instant alerts?",
    answer:
      "Yes. Set up alerts via email, SMS, or WhatsApp to stay informed when something important happens.",
  },
  {
    question: "How safe is my data?",
    answer:
      "VorteLab uses encrypted APIs and JWT-secured access, ensuring your data stays private and protected.",
  },
  {
    question: "Does VorteLab work with other tools?",
    answer:
      "Yes. It connects easily with Power BI, Metabase, and other BI platforms, so you can keep your existing workflow.",
  },
  {
    question: "Can I test VorteLab first?",
    answer:
      "Yes. We offer demo access and free trials so you can experience VorteLab before making a decision.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-4xl mx-auto py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>

      <div className="mt-8 space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-lg border border-gray-700 bg-gray-900/40 shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between px-5 py-4 text-left text-lg font-medium text-indigo-300 hover:text-indigo-400 transition"
            >
              {faq.question}
              <span className="ml-4 text-xl">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>
            {openIndex === i && (
              <p className="px-5 pb-5 text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
