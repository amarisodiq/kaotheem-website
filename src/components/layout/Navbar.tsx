
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071426]/95 text-white backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-12">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/kaotheem-logo2.png"
            alt="Kaotheem Energy Services Ltd"
            width={150}
            height={100}
            priority
            className="h-16 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <a
          href="tel:+2348160029024"
          className="hidden bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-700 lg:block"
        >
          Call Us
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="text-2xl lg:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#071426] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-blue-400"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="tel:+2348160029024"
              className="bg-blue-600 px-5 py-3 text-center text-sm font-semibold"
            >
              Call +234 816 002 9024
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
