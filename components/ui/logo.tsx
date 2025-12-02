"use client";

import Image from "next/image";
import LogoVorte from "@/public/images/logo-vorte.svg";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <a
      href="/"
      aria-label="Go to Vorte.eu homepage"
      itemProp="url"
      className={`flex items-center gap-2 ${className || ""}`}
    >
      <Image
        src={LogoVorte}
        alt="Vorte.eu Logo"
        width={140}
        height={50}
        priority
        itemProp="logo"
        className="h-auto w-28 sm:w-36 md:w-40"
      />
    </a>
  );
}
