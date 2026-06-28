"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur border-b border-divider">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo/logo.jpg" alt="LEHETRE" width={140} height={50} className="h-9 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-white transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-orange hover:bg-orange-dark text-white text-sm font-semibold px-5 py-2 rounded transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface border-t border-divider px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-muted hover:text-white" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="bg-orange text-white text-sm font-semibold px-5 py-2 rounded text-center" onClick={() => setOpen(false)}>
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}
