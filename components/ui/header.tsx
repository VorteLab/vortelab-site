"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="z-30 mt-2 w-full md:mt-9">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
     <div className="relative flex h-12 items-center justify-between gap-4 rounded-3xl bg-gray-300/900 px-4 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">

          
          {/* Desktop navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex gap-6 text-base font-light tracking-wide">
              <li><Link href="/" className="text-indigo-300 hover:text-indigo-600 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-indigo-300 hover:text-yellow-500 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-indigo-300 hover:text-emerald-500 transition-colors">Contact</Link></li>
              <li><Link href="/portfolio" className="text-indigo-300 hover:text-purple-500 transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="text-indigo-300 hover:text-blue-500 transition-colors">Services</Link></li>
              <li><Link href="/partners" className="text-indigo-300 hover:text-pink-500 transition-colors">Partners</Link></li>
              <li><Link href="/#" className="text-indigo-300 hover:text-orange-600 transition-colors">Clients</Link></li>
              <li><Link href="/VorteLab" className="transition-colors focus:text-green-400"style={{ animation: "glow 4s ease-in-out infinite", textShadow: "0 0 6px #a1e423ff, 0 0 12px #a14b0aff" }}>Vorte Lab</Link></li>
            </ul>
          </nav>

          {/* Burger button (mobile) */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 px-6 py-4">
          <ul className="flex flex-col gap-4 text-base font-light tracking-wide">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
            <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li><Link href="/partners" onClick={() => setIsOpen(false)}>Partners</Link></li>
          </ul>

          {/* Button section for Sign In and Register */}
          <div className="mt-2 flex gap-5 justify-center">
            <Link
              href="/signin"
              className="px-9 py-2 text-sm rounded-md bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600 transition w-auto"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-9 py-2 text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition w-auto"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
