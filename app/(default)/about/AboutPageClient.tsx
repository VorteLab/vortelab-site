"use client";

import Image from "next/image";

export default function AboutPageClient() {
  const skills = [
    { name: "Python", icon: "/icons/python.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "PHP", icon: "/icons/php.svg" },
    { name: "SQL", icon: "/icons/sql.svg" },
    { name: "Bash", icon: "/icons/bash.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Django", icon: "/icons/django.svg" },
    { name: "FastAPI", icon: "/icons/fastapi.svg" },
    { name: "Flask", icon: "/icons/flask.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "Linux", icon: "/icons/linux.svg" },
    { name: "GitHub", icon: "/icons/github.svg" },
    { name: "CI/CD", icon: "/icons/cicd.svg" },
    { name: "Cron", icon: "/icons/cron.svg" },
    { name: "Regex", icon: "/icons/regex.svg" },
    { name: "OpenCV", icon: "/icons/opencv.svg" },
    { name: "FFmpeg", icon: "/icons/ffmpeg.svg" },
    { name: "ONNX", icon: "/icons/onnx.svg" },
    { name: "Machine Learning", icon: "/icons/ml.svg" },
    { name: "SSH", icon: "/icons/ssh.svg" },
    { name: "API Security", icon: "/icons/apisecurity.svg" },
    { name: "Validation", icon: "/icons/validation.svg" },
    { name: "MySQL", icon: "/icons/mysql.svg" },
    { name: "Postgres", icon: "/icons/postgres.svg" },
    { name: "SQLite", icon: "/icons/sqlite.svg" },
    { name: "Scraping", icon: "/icons/scraping.svg" },
    { name: "Automation", icon: "/icons/automation.svg" },
    { name: "APIs", icon: "/icons/apis.svg" },
  ];

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      {/* Hero */}
      <div className="mb-16 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Logo mare în stânga */}
        <div className="relative w-28 h-28 md:w-72 md:h-72 flex-shrink-0">
          <Image
            src="/images/vortelab-logo.svg"
            alt="VorteLab Logo"
            fill
            priority
            className="object-contain drop-shadow-xl"
          />
        </div>

        {/* Titlu + Subtitlu în dreapta */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-pink-300 to-purple-400 bg-clip-text text-transparent leading-tight">
            About · Andrei Sorin Ștefan · Automation · Data Solutions
          </h1>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-2xl">
            Freelance automation developer from Europe, building{" "}
            <span className="text-indigo-300 font-medium">
              practical workflows, dashboards, and API integrations
            </span>{" "}
            with passion and precision.
          </p>
        </div>
      </div>

      {/* Who I Am */}
      <div className="mb-16 text-gray-200 space-y-6 text-lg leading-relaxed max-w-2xl mx-auto">
        <p>
          My programming journey started long before I had access to a computer. 
          We learned with chalk on the blackboard, imagining what the machine 
          would answer if it were in front of us.
        </p>
        <p>
          After four months of practicing only on paper, I finally touched a 
          computer. The first program I wrote drew a simple circle on the screen. 
          That moment showed me that technology is about turning imagination 
          into reality, step by step.
        </p>
        <p>
          Today, with experience in{" "}
          <strong>automation, data integration, and web development</strong>, 
          I focus on creating intelligent solutions that save time and scale 
          for businesses across Europe and worldwide.
        </p>
      </div>

      {/* Skills */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-200 mb-6">
          Skills & Technologies
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          I work with modern programming languages, frameworks, and tools to
          deliver end-to-end solutions in{" "}
          <span className="text-indigo-300">
            Python, JavaScript/TypeScript, automation, dashboards, APIs, and machine learning
          </span>.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
          {skills.map((skill, i) => (
            <div key={i} className="flex flex-col items-center space-y-2">
              <Image
                src={skill.icon}
                alt={`${skill.name} logo`}
                width={48}
                height={48}
                className="object-contain hover:scale-110 transition-transform"
              />
              <span className="text-sm text-gray-300 font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
