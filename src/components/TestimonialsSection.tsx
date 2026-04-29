"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Marko Vuković",
    role: "Direktor, TechLine studios",
    text: "Iskreno, najviše me iznenadilo koliko su brzo \"shvatili\" šta zapravo želim. Nisam imao jasno definisan proces na početku, ali su kroz par razgovora izvukli suštinu i pretvorili je u sajt koji sada stvarno radi posao.",
    rating: 5,
    avatarColor: "from-orange-400 to-orange-600",
  },
  {
    name: "Ana Petrović",
    role: "Marketing menadžer, GreenLiving",
    text: "Profesionalan tim sa izuzetnim osećajem za dizajn. Naš novi sajt je potpuno promenio način na koji komuniciramo sa klijentima. Preporučujem svima!",
    rating: 5,
    avatarColor: "from-cyan-400 to-blue-500",
  },
  {
    name: "Stefan Jovanović",
    role: "Osnivač, FitApp",
    text: "Od ideje do gotovog proizvoda za samo 6 nedelja. Aplikacija koju su razvili za nas premašila je sva očekivanja. Jednostavno fantastičan rad!",
    rating: 5,
    avatarColor: "from-purple-400 to-purple-600",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="py-20 md:py-32 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Šta klijenti kažu</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Iskustva onih koji su nam ukazali poverenje i sa nama gradili svoja digitalna rešenja.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card-dark p-8 md:p-12">
            <div className="flex items-center gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">5.0</div>
                <div className="flex gap-0.5 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
              {t.text}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {testimonials.map((testimonial, i) => (
                    <div
                      key={i}
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white text-xs font-bold border-2 border-surface`}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-surface-border flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/30 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-surface-border flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/30 transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
