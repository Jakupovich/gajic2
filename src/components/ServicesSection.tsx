import Link from "next/link";
import { ArrowUpRight, Monitor, Smartphone, Code, Layers } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web dizajn",
    description: "Kreiranje vizuelnog izgleda i korisničkog iskustva web sajta. Usluga obuhvata",
    bold: "isključivo dizajn bez programiranja",
    suffix: ", spreman za dalju realizaciju.",
    href: "/usluge/web-dizajn",
  },
  {
    icon: Smartphone,
    title: "App dizajn",
    description: "Kreiranje interfejsa i korisničkog iskustva mobilne aplikacije. Usluga obuhvata",
    bold: "isključivo dizajn bez programiranja",
    suffix: ", spreman za razvoj.",
    href: "/usluge/app-dizajn",
  },
  {
    icon: Code,
    title: "Web razvoj",
    description: "Tehnička realizacija i programiranje web sajta prema definisanom dizajnu.",
    bold: "Razvoj je moguć uz naš dizajn",
    suffix: " ili postojeće dizajnersko rešenje.",
    href: "/usluge/web-razvoj",
  },
  {
    icon: Layers,
    title: "App razvoj",
    description: "Tehnička realizacija i programiranje mobilne app prema definisanom dizajnu.",
    bold: "Razvoj je moguć uz naš dizajn",
    suffix: " ili postojeće dizajnersko rešenje.",
    href: "/usluge/app-razvoj",
  },
];

export default function ServicesSection() {
  return (
    <section id="usluge" className="py-20 md:py-32 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">Usluge</span>
          <h2 className="section-title mt-3 mb-4">Šta nudimo</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Digitalna rešenja osmišljena da unaprede korisničko iskustvo i donesu konkretne poslovne rezultate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card-dark group hover:bg-surface-light"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {service.description} <span className="font-bold text-white">{service.bold}</span>{service.suffix}
                </p>
                <Link
                  href={service.href}
                  className="btn-outline text-xs px-5 py-2.5"
                >
                  Saznaj više
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
