"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: (
      <div>
        <p>We provide custom automation flows, real-time data intelligence, and secure API integrations. Our key services include:</p>
        <ul className="list-inside list-disc">
          <li><strong>Real-Time Data Flows:</strong> Access live data insights, not static reports.</li>
          <li><strong>Customized Automation:</strong> Tailor-made solutions for your business needs.</li>
          <li><strong>Data Dashboards:</strong> Visualize your data with actionable insights.</li>
          <li><strong>AI-Powered Insights:</strong> Leverage AI to process and analyze data in real time.</li>
          <li><strong>API Integrations:</strong> Seamless connections between your existing systems and external data sources.</li>
          <li><strong>24/7 Support & Monitoring:</strong> Constant monitoring to ensure your data flows are always working.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "How does the payment process work?",
    answer: (
      <div>
        <p>We offer a transparent payment model to ensure clarity and trust throughout the project:</p>
        <ul className="list-inside list-disc">
          <li><strong>Upfront Payment:</strong> A small deposit of $20–30 USD is required before starting the project.</li>
          <li><strong>Flexible Payment Options:</strong> You can choose to pay via credit card, bank transfer, Bitcoin, or use platforms like UpWork, which offer secure milestone-based payments.</li>
          <li><strong>Milestone System:</strong> If you choose UpWork, you will have the benefit of their milestone system, ensuring that each stage of the project is completed and approved before proceeding with payment.</li>
          <li><strong>Complete Transparency:</strong> Payments are based on clear milestones and we provide regular updates, so you know exactly what’s being delivered at every stage.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "What is the process for working with you?",
    answer: (
      <div>
        <p>Our working process is designed to be clear, transparent, and highly efficient:</p>
        <ul className="list-inside list-disc">
          <li><strong>Initial Consultation:</strong> We understand your business and your needs.</li>
          <li><strong>Proposal & Agreement:</strong> A clear roadmap with specific milestones.</li>
          <li><strong>Development & Integration:</strong> We build your solution step by step, ensuring constant feedback and transparency.</li>
          <li><strong>Testing:</strong> You can test the program in our SaaS system, or we can arrange a demo via video call.</li>
          <li><strong>Support & Maintenance:</strong> We continue to provide 24/7 support to ensure the system runs smoothly.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can I test the system before committing fully?",
    answer: (
      <div>
        <p>Absolutely! You have the option to:</p>
        <ul className="list-inside list-disc">
          <li><strong>Test the System:</strong> You can test the solution in our SaaS system before committing to any further payments.</li>
          <li><strong>Demo via Video:</strong> We can provide you with a detailed video demo of the platform’s features and capabilities.</li>
          <li><strong>Trial Access:</strong> We offer demo accounts to give you a hands-on experience before making a final decision.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can I customize the automation flows to fit my specific needs?",
    answer: (
      <div>
        <p>Yes! All our automation flows are fully customizable:</p>
        <ul className="list-inside list-disc">
          <li><strong>Tailored to Your Industry:</strong> We create solutions specific to your sector (e.g., eCommerce, Healthcare, Finance).</li>
          <li><strong>Custom Features:</strong> You can request custom features to meet your business’s unique requirements, whether that’s specific reporting, integration with third-party tools, or additional analytics.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "How do I access the data and ensure security?",
    answer: (
      <div>
        <p>We use secure, industry-standard practices to deliver your data safely:</p>
        <ul className="list-inside list-disc">
          <li><strong>Access via API:</strong> Data is accessible via secure APIs protected by JWT authentication.</li>
          <li><strong>Real-Time Data:</strong> Data is updated and delivered in real-time, ensuring you have the latest insights.</li>
          <li><strong>Full Security:</strong> We use encrypted data transmission and provide constant monitoring to ensure that all data is safe.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "What payment methods do you accept?",
    answer: (
      <div>
        <p>We offer various payment options to suit your preferences:</p>
        <ul className="list-inside list-disc">
          <li><strong>Credit Card & Bank Transfer:</strong> Standard and secure methods for easy payments.</li>
          <li><strong>Bitcoin:</strong> For cryptocurrency enthusiasts, we accept Bitcoin payments.</li>
          <li><strong>UpWork:</strong> We also use UpWork’s secure payment platform with Milestones, ensuring you only pay for work that’s been completed and approved.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can I track progress during the project?",
    answer: (
      <div>
        <p>Yes! We believe in full transparency:</p>
        <ul className="list-inside list-disc">
          <li><strong>Milestone Tracking:</strong> With UpWork or direct communication, we’ll provide updates at every stage.</li>
          <li><strong>Regular Reports:</strong> You will receive regular reports, ensuring you're always up to date with progress.</li>
          <li><strong>Testing at Each Stage:</strong> After each milestone, you’ll have the opportunity to test and review the work.</li>
        </ul>
      </div>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

return (
  <section className="max-w-4xl mx-auto py-16">
    <h2 className="text-2xl md:text-5xl font-bold text-center bg-gradient-to-r from-indigo-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent tracking-wide">
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
              aria-expanded={openIndex === i ? "true" : "false"}
              aria-controls={`faq-answer-${i}`}
              className="flex w-full items-center justify-between px-5 py-4 text-left text-lg font-medium text-indigo-300 hover:text-indigo-400 transition"
            >
              {faq.question}
              <span className="ml-4 text-xl">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>
            {openIndex === i && (
              <div
                id={`faq-answer-${i}`}
                className="px-5 pb-5 text-gray-300 leading-relaxed"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
