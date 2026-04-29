"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Newsletter() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-primary to-primary-light flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Započni svoj projekat uz{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            10% popusta!
          </span>
        </h1>
        <p className="text-slate-400 text-sm max-w-lg mx-auto mb-10 leading-relaxed">
          Prijavi se na naš newsletter i ostvari 10% popusta na svoj prvi UI/UX ili
          development projekat. Dobijaj korisne savete, trendove i ekskluzivne ponude
          direktno u inbox.
        </p>

        <form className="space-y-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Ime i prezime*"
            required
            className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-400/50 transition-colors placeholder:text-slate-500"
          />
          <input
            type="email"
            placeholder="Email adresa*"
            required
            className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-400/50 transition-colors placeholder:text-slate-500"
          />
          <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
            Osvoji popust
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-16">
          <Link href="/" className="flex items-center justify-center gap-1">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">agency</span>
            <span className="text-3xl font-bold text-white">gajic.</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
