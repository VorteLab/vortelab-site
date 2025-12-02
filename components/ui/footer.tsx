import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Logo & Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/vortelab-logo.svg"
              alt="VorteLab Logo"
              width={48}
              height={48}
              unoptimized
              className="object-contain drop-shadow-lg"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
              VorteLab
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Business Automation & Data Integration Solutions. <br />
            Real-time dashboards, AI-powered insights & secure APIs.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-indigo-400">Home</a></li>
            <li><a href="/about" className="hover:text-indigo-400">About</a></li>
            <li><a href="/services" className="hover:text-indigo-400">Services</a></li>
            <li><a href="/portfolio" className="hover:text-indigo-400">Portfolio</a></li>
            <li><a href="/contact" className="hover:text-indigo-400">Contact</a></li>
            
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="https://wa.me/40770558577" target="_blank" className="hover:text-indigo-400">WhatsApp</a></li>
            <li><a href="https://t.me/PhoenixZuko" target="_blank" className="hover:text-indigo-400">Telegram</a></li>
            <li><a href="https://linkedin.com" target="_blank" className="hover:text-indigo-400">LinkedIn</a></li>
            <li><a href="https://github.com/PhoenixZuko" target="_blank" className="hover:text-indigo-400">GitHub</a></li>
            <li><a href="https://youtube.com/@andreisorinstefan" target="_blank" className="hover:text-indigo-400">YouTube</a></li>
          </ul>
        </div>

        {/* Payments */}
        <div>
          <h3 className="text-white font-semibold mb-4">Payments</h3>
          <p className="text-gray-400 text-sm mb-2">
            We support secure and modern payment methods:
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            {[
              { src: "/icons/payments/stripe.svg", alt: "Stripe", label: "Stripe (Card Payments)" },
              { src: "/icons/payments/visa.svg", alt: "Visa", label: "Visa" },
              { src: "/icons/payments/mastercard.svg", alt: "Mastercard", label: "Mastercard" },
              { src: "/icons/payments/sepa.png", alt: "SEPA", label: "SEPA / SWIFT Bank Transfer" },
              { src: "/icons/payments/revolut.svg", alt: "Revolut", label: "Revolut" },
              { src: "/icons/payments/Bitcoin.svg", alt: "Bitcoin", label: "Bitcoin (Crypto)" },
              { src: "/icons/payments/upwork.svg", alt: "UpWork", label: "UpWork (Milestone Payments)" },
              { src: "/icons/payments/advcash.png", alt: "Advcash", label: "Advcash" },
            ].map((pay, i) => (
              <div key={i} className="group relative">
                <Image
                  src={pay.src}
                  alt={pay.alt}
                  width={33}
                  height={33}
                  unoptimized
                  className="w-12 h-12 object-contain opacity-60 hover:opacity-100 transition"
                />
                {/* Tooltip */}
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  {pay.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 mt-10 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} VorteLab · All rights reserved.
      </div>
    </footer>
  );
}
