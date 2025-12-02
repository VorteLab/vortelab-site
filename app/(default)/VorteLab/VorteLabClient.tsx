"use client";

import Image from "next/image";
import FAQ from "@/app/(default)/faq/pages"; // Căi corecte în funcție de structura ta de foldere


export default function VorteLabClient() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 space-y-24">
     {/* HERO */}
     <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8">
       {/* Logo */}
     {/* Logo */}
<div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 flex-shrink-0">
  <Image
    src="/images/vortelab-logo.svg"
    alt="VorteLab Logo"
    fill
    priority
    className="object-contain drop-shadow-xl"
  />
</div>

       {/* Text */}
       <div className="max-w-2xl">
         <h1
           className="text-3xl md:text-4xl font-bold 
                      animate-[gradient_6s_linear_infinite] 
                      bg-gradient-to-r from-indigo-400 via-pink-300 to-purple-400 
                      bg-[length:200%_auto] bg-clip-text text-transparent leading-tight"
         >
           VorteLab – Real-Time Custom Data Flows
         </h1>
     
         <p className="mt-4 text-base md:text-lg text-gray-300 leading-relaxed">
           Stay connected to what matters in your industry. VorteLab personalizes 
           automation flows and delivers global, real-time signals you can trust.
         </p>
     
         <div className="mt-6 flex gap-4 justify-center md:justify-start">
           <a
             href="/demo"
             className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition"
           >
             Book a Demo
           </a>
           <a
             href="#industries"
             className="px-6 py-3 rounded-lg bg-gray-800 text-gray-300 hover:text-white transition"
           >
             Learn More
           </a>
         </div>
       </div>
     </div> 
    
      {/* ABOUT */}
      <div>
<section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
  {/* Title & description */}
  <div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-pink-300 to-purple-400 bg-clip-text text-transparent text-center">
  What is VorteLab?
</h2>

<div className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed space-y-4 text-center">
  <p>
    VorteLab is more than just a SaaS platform it’s a project created to bring 
    <span className="text-indigo-300 font-medium"> clarity and precision </span> 
    into the way businesses use data.
  </p>

  <p>
    Unlike static databases, VorteLab delivers 
    <span className="text-indigo-300 font-medium"> real-time data flows </span>, 
    ensuring that every signal you receive reflects the present moment.
  </p>

  <p>
    Each flow is <span className="text-indigo-300 font-medium"> fully customizable </span>, 
    tailored to your industry and specific business needs.
  </p>

  <p>
    Secure API integrations, intuitive dashboards, and 
    <span className="text-indigo-300 font-medium"> 24/7 monitoring </span> 
    guarantee that you always stay connected to what truly matters.
  </p>
</div>

  </div>

  {/* Key strengths grid */}
  <div className="grid md:grid-cols-3 gap-8 mb-12">
    {[
      {
        title: "Real-Time Intelligence",
        desc: "Get live data flows, not outdated static reports.",
        color: "from-indigo-500/20 to-indigo-600/10",
      },
      {
        title: "Customized Flows",
        desc: "Every setup is tailored to your sector and business needs.",
        color: "from-blue-500/20 to-blue-600/10",
      },
      {
        title: "Global Coverage",
        desc: "Insights across industries and regions worldwide.",
        color: "from-green-500/20 to-green-600/10",
      },
      {
        title: "Secure API Access",
        desc: "Data delivery protected with JWT authentication.",
        color: "from-purple-500/20 to-purple-600/10",
      },
      {
        title: "Actionable Dashboards",
        desc: "Direct analysis and visualization inside VorteLab.",
        color: "from-pink-500/20 to-pink-600/10",
      },
      {
        title: "24/7 Support & Maintenance",
        desc: "Continuous monitoring, updates, and reliability.",
        color: "from-yellow-500/20 to-yellow-600/10",
      },
    ].map((item, i) => (
      <div
        key={i}
        className={`bg-gradient-to-br ${item.color} rounded-xl p-6 shadow-md hover:shadow-xl transition`}
      >
        <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
        <p className="text-gray-300">{item.desc}</p>
      </div>
    ))}
  </div>

  {/* Concluzie / Cartonaș mare */}
{/* Concluzie / Card final */}
<div className="bg-gradient-to-r from-indigo-600/30 via-purple-600/20 to-pink-600/30 rounded-xl p-6 shadow-md text-center md:col-span-3">
  <p className="text-lg font-semibold text-gray-100 leading-snug">
    VorteLab offers both ready made flows and fully customized solutions. <br />
    Every request is tailored in real time to your specific needs.
  </p>
</div>

</section>

      </div>

      {/* STRENGTHS */}
      <div>
<section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
  <header className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
      Powered by Reliable Technologies
    </h2>
    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
      VorteLab combines secure APIs, advanced analytics, and real-time
      automation to deliver reliable insights, wherever you are.
    </p>
  </header>

  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        title: "Secure APIs (JWT Authentication)",
        desc: "All data flows protected with JWT-secured APIs for safe integration.",
        color: "from-indigo-500/20 to-indigo-600/10",
      },
      {
        title: "Business Intelligence Tools",
        desc: "Power BI and Metabase for dashboards, visualization, and deep analysis.",
        color: "from-blue-500/20 to-blue-600/10",
      },
      {
        title: "AI-Powered Data Processing",
        desc: "Pre-trained AI models used for real-time data analysis and anomaly detection.",
        color: "from-green-500/20 to-green-600/10",
      },
      {
        title: "Programmable Automation",
        desc: "Custom workflows and API orchestration tailored to client needs.",
        color: "from-purple-500/20 to-purple-600/10",
      },
      {
        title: "Mobile-Ready Functionality",
        desc: "Optimized for monitoring and decision-making directly from your phone.",
        color: "from-pink-500/20 to-pink-600/10",
      },
      {
        title: "Scalable Infrastructure",
        desc: "Cloud-native setup for high performance and global coverage.",
        color: "from-yellow-500/20 to-yellow-600/10",
      },
      {
        title: "Smart Alerts",
        desc: "Email, SMS, or WhatsApp notifications tailored to your business events.",
        color: "from-emerald-500/20 to-emerald-600/10",
      },
      {
        title: "Custom Requests",
        desc: "Every feature can be extended or customized to match unique workflows.",
        color: "from-cyan-500/20 to-cyan-600/10",
      },
      {
        title: "ROI-Driven Analytics",
        desc: "Collect and analyze data to track performance and maximize ROI.",
        color: "from-rose-500/20 to-rose-600/10",
      },
    ].map((item, i) => (
      <div
        key={i}
        className={`bg-gradient-to-br ${item.color} rounded-xl p-6 shadow-md hover:shadow-xl transition`}
      >
        <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
        <p className="text-gray-300">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

      </div>

 <section id="industries" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
  <header className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
      Industries We Empower
    </h2>
    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
      VorteLab delivers real-time, customized data flows designed to meet the
      unique needs of every sector. Here are some industries we transform with
      actionable intelligence.
    </p>
  </header>

  {/* Grid of industries */}
  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        title: "E-Commerce",
        desc: "Real-time monitoring of prices, stock, and consumer trends across platforms.",
        color: "from-indigo-500/10 to-indigo-600/5",
      },
      {
        title: "Automotive",
        desc: "Track global vehicle sales, ads, and competitor strategies with actionable insights.",
        color: "from-blue-500/10 to-blue-600/5",
      },
      {
        title: "Healthcare",
        desc: "Analyze innovation, demand signals, and pricing shifts worldwide in real time.",
        color: "from-green-500/10 to-green-600/5",
      },
      {
        title: "Finance & Banking",
        desc: "Monitor market trends, fintech adoption, and global investment opportunities.",
        color: "from-yellow-500/10 to-yellow-600/5",
      },
      {
        title: "Retail",
        desc: "Follow product launches, promotional strategies, and shifting consumer demand.",
        color: "from-pink-500/10 to-pink-600/5",
      },
      {
        title: "Technology & SaaS",
        desc: "Stay ahead of competitor features, adoption rates, and market positioning.",
        color: "from-purple-500/10 to-purple-600/5",
      },
      {
        title: "Logistics & Supply Chain",
        desc: "Track inventory levels, shipment flows, and global supply chain disruptions.",
        color: "from-emerald-500/10 to-emerald-600/5",
      },
      {
        title: "Travel & Hospitality",
        desc: "Monitor booking trends, pricing models, and seasonal customer behavior.",
        color: "from-cyan-500/10 to-cyan-600/5",
      },
      {
        title: "Energy & Utilities",
        desc: "Access real-time signals on prices, consumption, and infrastructure projects.",
        color: "from-orange-500/10 to-orange-600/5",
      },
      {
        title: "Education",
        desc: "Understand adoption of e-learning, training platforms, and student trends.",
        color: "from-teal-500/10 to-teal-600/5",
      },
      {
        title: "Media & Entertainment",
        desc: "Track audience engagement, streaming trends, and content performance metrics.",
        color: "from-fuchsia-500/10 to-fuchsia-600/5",
      },
      {
        title: "Real Estate",
        desc: "Monitor housing demand, price movements, and investment opportunities.",
        color: "from-rose-500/10 to-rose-600/5",
      },
      {
        title: "Telecommunications",
        desc: "Track customer adoption, pricing, and global infrastructure rollouts.",
        color: "from-sky-500/10 to-sky-600/5",
      },
      {
        title: "Consumer Goods (FMCG)",
        desc: "Analyze demand signals, distribution strategies, and product performance.",
        color: "from-lime-500/10 to-lime-600/5",
      },
      {
        title: "Public Sector & NGOs",
        desc: "Gain real-time insights into social trends, funding, and policy adoption.",
        color: "from-violet-500/10 to-violet-600/5",
      },
    ].map((item, i) => (
      <article
        key={i}
        className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 shadow-md hover:shadow-xl transition`}
      >
        <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
        <p className="text-gray-300">{item.desc}</p>
      </article>
    ))}
  </div>
</section>


<section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-300 mb-10">
  </h2>
  <FAQ />
</section>
      {/* CTA */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-semibold text-indigo-300 mb-6">Ready to see VorteLab in action?</h2>
        <a href="/signin" className="px-8 py-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition">Request Early Access</a>
      </div>

    </section>
  );
}
