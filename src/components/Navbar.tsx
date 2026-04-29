"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Početna" },
    { href: "/usluge/web-dizajn", label: "Usluge" },
    { href: "/projekti", label: "Projekti" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex flex-col items-start leading-none">
            <span className="text-[8px] text-slate-400 uppercase tracking-[0.25em]">agency</span>
            <span className="text-2xl font-bold text-white -mt-1">gajic.</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link href="/zapocni-projekat" className="btn-primary text-sm">
              Započni posao
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-primary border-t border-white/5">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-300 hover:text-white py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/zapocni-projekat"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-sm w-full justify-center mt-4"
            >
              Započni posao
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
