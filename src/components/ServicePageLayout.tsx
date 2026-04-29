import Link from "next/link";
import { ArrowUpRight, Search, Layout, Palette, Package } from "lucide-react";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  whatIsTitle: string;
  whatIsText: string;
  approach: string[];
  processSteps: { title: string; description: string }[];
  benefits: string[];
  relatedProjects: { title: string; slug: string; tags: string[] }[];
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  whatIsTitle,
  whatIsText,
  approach,
  processSteps,
  benefits,
  relatedProjects,
}: ServicePageProps) {
  const processIcons = [Search, Layout, Palette, Package];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-primary to-primary" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
          <Link href="/zapocni-projekat" className="btn-primary text-base px-8 py-4">
            Započni projekat
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Project Examples */}
      <section className="py-16 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projekti/${project.slug}`}
                className="group card-dark hover:bg-surface-light"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-slate-700/30 to-slate-800/50 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-slate-400 text-sm">{project.title}</span>
                </div>
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What Is */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Usluga</span>
          <h2 className="section-title mt-3 mb-6">{whatIsTitle}</h2>
          <p className="text-slate-400 leading-relaxed">{whatIsText}</p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Naš pristup</h2>
          <p className="text-slate-400 leading-relaxed mb-6">{description}</p>
          <ul className="space-y-3 text-left max-w-2xl mx-auto">
            {approach.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                <span className="text-cyan-400 mt-1">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Proces rada</h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Strukturiran proces koji osigurava kvalitet, efikasnost i rezultat na svakom koraku.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {processSteps.map((step, i) => {
              const Icon = processIcons[i % processIcons.length];
              return (
                <div key={i} className="card-dark">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-white font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Šta dobijate:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-surface-border">
                <span className="text-cyan-400 text-lg">✓</span>
                <span className="text-slate-300 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Spremni da započnete?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Kontaktirajte nas danas i saznajte kako možemo pomoći vašem biznisu da raste.
          </p>
          <Link href="/zapocni-projekat" className="btn-primary text-base px-8 py-4">
            Započni projekat
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
