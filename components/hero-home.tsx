import Image from "next/image";
import VideoThumb from "@/public/images/vorte_andrei_sorin_stefan.png";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="md:flex md:items-center md:gap-12">
            {/* Stânga: Logo sau imagine */}
            <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 flex-shrink-0 mx-auto md:mx-0 mb-8 md:mb-0">
              <Image
                src="/images/vortelab-logo.svg" // schimbă cu ce vrei (logo / thumb)
                alt="VorteLab Logo"
                fill
                priority
                className="object-contain drop-shadow-xl"
              />
            </div>

            {/* Dreapta: text + butoane */}
            <div className="text-center md:text-left flex-1">
              <h1
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-3xl font-semibold text-transparent md:text-5xl"
                data-aos="fade-up"
              >
                Business Automation & Data Integration for Modern Companies
              </h1>

              <p
                className="mb-8 text-xl text-indigo-200/65 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Practical Data Automation Tools. <br /> <br />
                <span className="font-semibold text-white">Vorte.eu</span> delivers{" "}
                <span className="font-semibold text-indigo-300">business automation</span> and{" "}
                <span className="font-semibold text-indigo-300">data integration solutions</span>.  
                We help companies save time with{" "}
                <span className="font-semibold text-indigo-300">workflow automation</span>, smart{" "}
                <span className="font-semibold text-indigo-300">dashboards</span>, and seamless{" "}
                <span className="font-semibold text-indigo-300">API integrations</span>.
              </p>

              {/* Call to action buttons */}
              <div className="flex flex-col sm:flex-row sm:justify-start gap-4 justify-center">
                <a
                  className="btn group bg-linear-to-t from-indigo-600 to-indigo-500 text-white hover:opacity-90"
                  href="/https://lab.vorte.eu/signin"
                >
                  <span className="relative inline-flex items-center">
                    Sign In
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
                <a
                  className="btn bg-linear-to-b from-emerald-800 to-gray-800/70 text-gray-300"
                  href="/https://lab.vorte.eu/signup"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>

          {/* Subsecțiune opțională: video thumbnail */}
          <div className="mt-12">
            <ModalVideo
              thumb={VideoThumb}
              thumbWidth={1104}
              thumbHeight={576}
              thumbAlt="Vorte.eu automation demo thumbnail"
              video="videos/andrei-sorin-stefan-expert-python-freelancer.mp4"
              videoWidth={1920}
              videoHeight={1080}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
