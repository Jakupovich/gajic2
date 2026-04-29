import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    slug: "tech-woven-suit",
    title: "E-commerce Design",
    subtitle: "Tech Woven Suit",
    tags: ["Fashion", "E-commerce"],
    image: "/images/project-1.jpg",
    color: "from-emerald-900/40 to-emerald-950/60",
  },
  {
    slug: "courtix",
    title: "Bold Web Presence for Courtix",
    subtitle: "Courtix",
    tags: ["Corporate", "Tennis"],
    image: "/images/project-2.jpg",
    color: "from-slate-800/60 to-slate-900/80",
  },
  {
    slug: "adidas-ecommerce",
    title: "Performance-Driven Adidas E-commerce",
    subtitle: "Adidas Adistar Shoes",
    tags: ["E-commerce", "Sport"],
    image: "/images/project-3.jpg",
    color: "from-gray-800/40 to-gray-900/60",
  },
  {
    slug: "ferro-decor",
    title: "Premium Online Experience for Ferro Decor",
    subtitle: "Ferro Decor",
    tags: ["Design", "Interior"],
    image: "/images/project-4.jpg",
    color: "from-amber-900/30 to-amber-950/50",
  },
  {
    slug: "delivery-app",
    title: "Delivery App",
    subtitle: "Food Delivery Mobile App",
    tags: ["App Design", "Food/Drink"],
    image: "/images/project-5.jpg",
    color: "from-orange-900/30 to-orange-950/50",
  },
];

export default function ProjectShowcase() {
  return (
    <section className="py-20 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">👋</span>
            <span className="section-label">Projekti</span>
          </div>
          <h2 className="section-title mb-4">Radovi koji govore umesto nas</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Digitalni proizvodi dizajnirani sa fokusom na jasnoću, funkcionalnost i dugoročni rast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((project) => (
            <div
              key={project.slug}
              className="group relative rounded-2xl overflow-hidden bg-surface border border-surface-border hover:border-cyan-400/20 transition-all duration-500"
            >
              <div className={`aspect-[16/10] bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <div className="text-center p-8">
                  <h3 className="text-white text-xl font-bold mb-2">{project.subtitle}</h3>
                  <p className="text-slate-300 text-sm">{project.title}</p>
                </div>
              </div>
              <div className="p-5 flex items-center justify-between">
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
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projekti" className="btn-primary">
            Pogledaj ceo portfolio
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
