"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ZapocniProjekat() {
  const router = useRouter();
  const [service, setService] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/hvala");
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-primary to-primary-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Prijava za projekat
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Digitalne projekte pristupamo selektivno kako bismo svakom klijentu posvetili
            pun fokus i strateški pristup.
          </p>
          <p className="text-cyan-400 text-sm mt-3">
            Molimo vas da pažljivo pročitate informacije pre popunjavanja forme!
          </p>
          <p className="text-slate-500 text-xs mt-4 max-w-lg mx-auto leading-relaxed">
            Ova prijava namenjena je brendovima i biznesima koji žele profesionalno digitalno rešenje bilo da je u pitanju
            web dizajn, app dizajn ili kompletni razvoj. U okviru naše agencije radimo dizajn bez programiranja, kao i
            punu tehničku realizaciju projekata, sa mogućnošću implementacije postojećeg dizajna. Ukoliko ste spremni da
            investirate u kvalitet, dugoročno rešenje i strateški pristup projektu, pozivamo vas da popunite formu ispod.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Osnovni podaci */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-6 text-center">
              Osnovni podaci
            </h2>
            <div className="space-y-4">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Poštni broj*"
                  required
                  className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-400/50 transition-colors placeholder:text-slate-500"
                />
                <input
                  type="tel"
                  placeholder="Broj telefona*"
                  required
                  className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-400/50 transition-colors placeholder:text-slate-500"
                />
              </div>
              <input
                type="text"
                placeholder="Naziv kompanije / brenda*"
                required
                className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-400/50 transition-colors placeholder:text-slate-500"
              />
              <input
                type="text"
                placeholder="Lokacija*"
                required
                className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-400/50 transition-colors placeholder:text-slate-500"
              />
            </div>
          </div>

          {/* Usluga */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-6 text-center">
              Usluga
            </h2>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-cyan-400/50 transition-colors text-slate-400 appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%2394a3b8' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 16px center",
              }}
            >
              <option value="">Koja usluga vas interesuje?*</option>
              <option value="web-dizajn">Web dizajn</option>
              <option value="app-dizajn">App dizajn</option>
              <option value="web-razvoj">Web razvoj</option>
              <option value="app-razvoj">App razvoj</option>
              <option value="komplet">Dizajn + Razvoj</option>
            </select>
          </div>

          {/* Tip usluge */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-6 text-center">
              Tip usluge
            </h2>
            <div className="space-y-4">
              <select
                className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-cyan-400/50 transition-colors text-slate-400 appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%2394a3b8' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 16px center",
                }}
              >
                <option value="">U kojoj fazi je vaš projekat?*</option>
                <option value="idea">Imam ideju, treba mi dizajn od nule</option>
                <option value="redesign">Imam sajt/app, treba mi redizajn</option>
                <option value="design-ready">Imam dizajn, treba mi razvoj</option>
              </select>

              {(service === "web-dizajn" || service === "web-razvoj" || service === "komplet") && (
                <select
                  className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-cyan-400/50 transition-colors text-slate-400 appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%2394a3b8' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                  }}
                >
                  <option value="">Koliko stranica treba da ima vaš web sajt?*</option>
                  <option value="1-5">1-5 stranica</option>
                  <option value="6-10">6-10 stranica</option>
                  <option value="11-20">11-20 stranica</option>
                  <option value="20+">20+ stranica</option>
                </select>
              )}

              {(service === "app-dizajn" || service === "app-razvoj") && (
                <select
                  className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-cyan-400/50 transition-colors text-slate-400 appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%2394a3b8' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                  }}
                >
                  <option value="">Koliko ekrana treba da ima vaša mobilna aplikacija?*</option>
                  <option value="5-10">5-10 ekrana</option>
                  <option value="11-20">11-20 ekrana</option>
                  <option value="20+">20+ ekrana</option>
                </select>
              )}

              <select
                className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-cyan-400/50 transition-colors text-slate-400 appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%2394a3b8' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 16px center",
                }}
              >
                <option value="">Da li su vam potrebne neke od sledećih funkcionalnosti?*</option>
                <option value="ecommerce">E-commerce / Online prodavnica</option>
                <option value="cms">CMS za upravljanje sadržajem</option>
                <option value="booking">Booking / Rezervacije</option>
                <option value="auth">Korisnička autentifikacija</option>
                <option value="other">Drugo</option>
              </select>

              <textarea
                rows={4}
                placeholder="Ukratko opišite projekat i cilj koji želite da postignete.*"
                required
                className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-400/50 transition-colors placeholder:text-slate-500 resize-none"
              />

              <select
                className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-cyan-400/50 transition-colors text-slate-400 appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%2394a3b8' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 16px center",
                }}
              >
                <option value="">Da li imate materijale za projekat?*</option>
                <option value="yes">Da, imam logo, slike i tekstove</option>
                <option value="partial">Imam nešto, ali treba mi pomoć</option>
                <option value="no">Ne, treba mi sve od nule</option>
              </select>
            </div>
          </div>

          {/* Vremenski okvir */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-6 text-center">
              Vremenski okvir
            </h2>
            <div className="space-y-4">
              <select
                className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-cyan-400/50 transition-colors text-slate-400 appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%2394a3b8' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 16px center",
                }}
              >
                <option value="">Kada želite da započnete projekat?*</option>
                <option value="asap">Što pre</option>
                <option value="1month">U roku od mesec dana</option>
                <option value="3months">U roku od 3 meseca</option>
                <option value="flexible">Fleksibilan sam</option>
              </select>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 rounded border-surface-border bg-surface text-cyan-400 focus:ring-cyan-400/50"
                />
                <span className="text-slate-400 text-xs leading-relaxed">
                  Označavanjem potvrđujem da sam upoznat/a sa celokupnim uslugama i da sam
                  spreman/a da investiram u profesionalno digitalno rešenje.
                </span>
              </label>
            </div>
          </div>

          <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
            Pošalji prijavu
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
