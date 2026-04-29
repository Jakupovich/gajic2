"use client";

import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Kako da započnem saradnju?",
    answer:
      "Jednostavno! Popunite formu za projekat ili nam pošaljite poruku sa osnovnim informacijama o vašoj ideji. Kontaktiraćemo vas u najkraćem roku.",
  },
  {
    question: "Koliko traje izrada sajta ili aplikacije?",
    answer:
      "Vreme izrade zavisi od obima projekta. Jednostavniji web sajtovi se završavaju za 2-4 nedelje, dok složeniji projekti mogu trajati 2-3 meseca.",
  },
  {
    question: "Da li radite redizajn sajtova i aplikacija?",
    answer:
      "Da, radimo kompletne redizajne postojećih web sajtova i aplikacija, uključujući UX analizu, novi vizuelni identitet i implementaciju.",
  },
  {
    question: "Da li nudite održavanje?",
    answer:
      "Da, nudimo pakete za tehničko održavanje koji uključuju ažuriranja, bezbednosne zakrpe, backup i tehničku podršku.",
  },
  {
    question: "Kolika je cena projekta?",
    answer:
      "Cena zavisi od tipa i obima projekta. Kontaktirajte nas za besplatnu procenu - rado ćemo vam pripremiti detaljnu ponudu.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-20 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="section-label">Pitanja i odgovori</span>
            <h2 className="section-title mt-3 mb-4">
              Imate pitanja?
              <br />
              Imamo odgovore.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Sve što treba da znate pre nego što započnemo saradnju jasno, konkretno i bez skrivenih detalja.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Verujemo u jasnu komunikaciju i dobro definisani proces. Ako razmišljate o saradnji, ovde počinje prvi korak.
            </p>
            <Link href="/zapocni-projekat" className="btn-primary text-sm">
              Započni projekat
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "bg-cyan-400/5 border-cyan-400/20"
                    : "bg-surface border-surface-border hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-cyan-400 font-bold text-lg">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white font-medium text-sm md:text-base">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      openIndex === index
                        ? "bg-cyan-400 text-primary-dark"
                        : "bg-cyan-400/10 text-cyan-400"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5 pl-14">
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
