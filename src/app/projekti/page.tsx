"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const allProjects = [
  {
    slug: "travel-booking",
    title: "Conversion-Focused Travel Booking Experience",
    subtitle: "Travel Booking",
    tags: ["Booking", "Travel"],
    category: "web",
    color: "from-blue-900/40 to-blue-950/60",
    budget: "3.200€",
  },
  {
    slug: "lumivee",
    title: "High-Impact Digital Presence for Lumivee",
    subtitle: "Lumivee",
    tags: ["Agency", "Creativity"],
    category: "web",
    color: "from-emerald-900/40 to-emerald-950/60",
    budget: "3.900€",
  },
  {
    slug: "medigroup",
    title: "Trust-Driven Healthcare Platform for MediGroup",
    subtitle: "MediGroup",
    tags: ["Medical", "Healthcare"],
    category: "web",
    color: "from-teal-900/40 to-teal-950/60",
    budget: "3.800€",
  },
  {
    slug: "adidas-ecommerce",
    title: "Performance-Driven Adidas E-commerce",
    subtitle: "Adidas Adistar Shoes",
    tags: ["E-commerce", "Sport"],
    category: "web",
    color: "from-gray-800/40 to-gray-900/60",
    budget: "5.800€",
  },
  {
    slug: "tech-woven-suit",
    title: "High-Impact Nike E-commerce Design",
    subtitle: "TECH WOVEN SUIT",
    tags: ["E-commerce", "Fashion"],
    category: "web",
    color: "from-slate-800/60 to-slate-900/80",
    budget: "6.500€",
  },
  {
    slug: "ferro-decor",
    title: "Premium Online Experience for Ferro Decor",
    subtitle: "FERRO DECOR",
    tags: ["Online shop", "Interior"],
    category: "web",
    color: "from-amber-900/30 to-amber-950/50",
    budget: "7.000€",
  },
  {
    slug: "courtix",
    title: "Bold Web Presence for Courtix",
    subtitle: "Courtix",
    tags: ["Corporate", "Tennis"],
    category: "web",
    color: "from-green-900/40 to-green-950/60",
    budget: "3.900€",
  },
  {
    slug: "smart-finance",
    title: "Smart Finance Dashboard Experience",
    subtitle: "Smart Finance",
    tags: ["Corporate", "Template"],
    category: "web",
    color: "from-indigo-900/40 to-indigo-950/60",
    budget: "3.800€",
  },
];

export default function Projekti() {
  const [filter, setFilter] = useState<"all" | "web" | "app">("all");

  const filtered =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  const hasAppProjects = allProjects.some((p) => p.category === "app");

  return (
    <div className="pt-20">
      <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-primary to-primary" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Projekti</span>
            <h1 className="section-title mt-3 mb-4">
              Projekti koji govore kroz rezultate
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Digitalna rešenja dizajnirana i razvijena sa jasnom strategijom, funkcionalnošću i poslovnim ciljem.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 mb-12">
            {[
              { key: "all" as const, label: "Svi projekti" },
              { key: "web" as const, label: "Web sajt" },
              ...(hasAppProjects ? [{ key: "app" as const, label: "Mobilna aplikacija" }] : []),
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === tab.key
                    ? "bg-cyan-400 text-primary-dark"
                    : "bg-surface border border-surface-border text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((project) => (
              <div
                key={project.slug}
                className="group rounded-2xl overflow-hidden bg-surface border border-surface-border hover:border-cyan-400/20 transition-all duration-500"
              >
                <div
                  className={`aspect-[16/10] bg-gradient-to-br ${project.color} flex items-center justify-center`}
                >
                  <div className="text-center p-8">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {project.subtitle}
                    </h3>
                    <p className="text-slate-300 text-sm">{project.title}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full border border-cyan-400/20 text-cyan-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/projekti/${project.slug}`}
                      className="btn-outline text-xs px-4 py-2"
                    >
                      Visit Project
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <p className="text-slate-400 text-xs">
                    Budžet projekta: <span className="text-white font-medium">{project.budget}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 text-sm mb-2">Nije u govoru koji vas je doveo ovde,</p>
          <p className="text-slate-400 text-sm mb-6">već u radu koji vas zadržava ovde.</p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">
              G
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">Gajic Agency</p>
              <p className="text-slate-400 text-sm">Digital Agency</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
