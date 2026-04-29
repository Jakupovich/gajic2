import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex flex-col items-start leading-none mb-4">
              <span className="text-[8px] text-slate-400 uppercase tracking-[0.25em]">agency</span>
              <span className="text-2xl font-bold text-white -mt-1">gajic.</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Gradimo digitalna iskustva koja kombinuju dizajn, funkcionalnost i strategiju. Naš fokus je na rešenjima koja grade poverenje, aktivno brend i podržavaju rast.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigacija</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Početna" },
                { href: "/usluge/web-dizajn", label: "Usluge" },
                { href: "/projekti", label: "Projekti" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Naše usluge</h4>
            <ul className="space-y-2">
              {[
                { href: "/usluge/web-dizajn", label: "Web dizajn" },
                { href: "/usluge/app-dizajn", label: "App dizajn" },
                { href: "/usluge/web-razvoj", label: "Web razvoj" },
                { href: "/usluge/app-razvoj", label: "App razvoj" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Zapratite nas</h4>
            <ul className="space-y-2">
              {["Facebook", "Twitter", "Instagram", "Linkedin"].map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="text-slate-400 text-sm hover:text-cyan-400 transition-colors"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <p className="text-slate-500 text-sm text-center">
            2026 &copy; GajicAgency | Sva prava zadržana
          </p>
        </div>
      </div>
    </footer>
  );
}
