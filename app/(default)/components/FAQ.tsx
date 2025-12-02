"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is VorteLab?",
    answer:
      "VorteLab is a SaaS platform that delivers real-time, customized data flows with secure APIs and dashboards.",
  },
  {
    question: "How is VorteLab different from static databases?",
    answer:
      "Unlike static databases, VorteLab extracts and reports data live, so you always work with the latest market signals.",
  },
  {
    question: "Can I request custom flows?",
    answer:
      "Yes, every flow can be customized based on your sector, market, or specific requirements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-3xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>

      <div className="mt-8 space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-700 rounded-lg p-4 bg-gray-900/40"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex justify-between w-full text-left text-lg font-medium text-indigo-300"
            >
              {faq.question}
              <span>{openIndex === i ? "−" : "+"}</span>
            </button>
            {openIndex === i && (
              <p className="mt-3 text-gray-300 text-base leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
