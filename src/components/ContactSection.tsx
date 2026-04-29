"use client";

import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="kontakt" className="py-20 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="section-label">Kontakt</span>
            <h2 className="section-title mt-3 mb-4">
              Nisi siguran/na koja usluga ti je potrebna?
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Ako nisi siguran/na da li ti je potreban dizajn, razvoj ili kompletno rešenje, pošalji nam poruku i pomoći ćemo ti da pronađeš pravo rešenje.
            </p>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-surface to-surface-light flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 flex items-center justify-center">
                  <span className="text-3xl">💬</span>
                </div>
                <p className="text-slate-300 text-sm">Slobodno nas kontaktirajte</p>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-slate-400 text-sm mb-1.5 block">Ime</label>
                  <input
                    type="text"
                    className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-sm mb-1.5 block">Prezime</label>
                  <input
                    type="text"
                    className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-slate-400 text-sm mb-1.5 block">Email</label>
                <input
                  type="email"
                  className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-slate-400 text-sm mb-1.5 block">Ime kompanije</label>
                <input
                  type="text"
                  className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-slate-400 text-sm mb-1.5 block">Poruka</label>
                <textarea
                  rows={5}
                  className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400/50 transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center py-4">
                Pošalji ponuku
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
