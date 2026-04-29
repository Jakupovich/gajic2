"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projectImages = [
  { title: "Get up to 35% off", color: "from-blue-500/30 to-blue-700/40" },
  { title: "Your Daily Guide to Smarter Eating", color: "from-green-600/30 to-green-800/40" },
  { title: "Every Bite", color: "from-orange-600/30 to-orange-800/40" },
  { title: "Old Tricks WITH NEW SOUNDS", color: "from-purple-600/30 to-purple-800/40" },
  { title: "AIRPODS PRO", color: "from-pink-600/30 to-pink-800/40" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-primary to-primary" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 pb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Transformišemo ideje u{" "}
          <br className="hidden md:block" />
          digitalna rešenja koja prodaju
        </h1>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          Dizajniramo i razvijamo web i digitalna iskustva koja nisu tu samo da izgledaju lepo, već da privuku pažnju, izazovu konverzije i donesu konkretne rezultate.
        </p>
        <Link href="/zapocni-projekat" className="btn-primary text-sm px-6 py-3">
          Započni projekat
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Project Image Carousel */}
      <div className="relative z-10 w-full overflow-hidden py-10">
        <div className="flex gap-4 animate-scroll px-4">
          {[...projectImages, ...projectImages].map((project, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-[220px] md:w-[280px] h-[280px] md:h-[340px] rounded-2xl bg-gradient-to-br ${project.color} flex items-end p-5 border border-white/5`}
            >
              <p className="text-white text-sm font-semibold leading-tight">{project.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
