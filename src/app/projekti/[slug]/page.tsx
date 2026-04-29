import Link from "next/link";
import { ArrowUpRight, Search, Layout, Palette, Package } from "lucide-react";
import { notFound } from "next/navigation";

const projects: Record<
  string,
  {
    title: string;
    subtitle: string;
    tags: string[];
    description: string;
    goal: string;
    approach: string;
    color: string;
    screenshots: string[];
    processSteps: { title: string; description: string }[];
  }
> = {
  "travel-booking": {
    title: "Conversion-Focused Travel Booking Experience",
    subtitle: "Travel Booking",
    tags: ["Booking", "Travel", "Web Design", "UI/UX"],
    description:
      "Moderna booking platforma dizajnirana da pojednostavi pretragu, booking i upravljanje rezervacijama.",
    goal: "Kreirati intuitivnu platformu za rezervacije koja povećava konverzije i pruža premium korisničko iskustvo.",
    approach:
      "Fokusirali smo se na jednostavnost pretrage i brzinu rezervacija. Svaki korak je dizajniran da minimizuje frikciju i vodi korisnika ka konverziji.",
    color: "from-blue-900/40 to-blue-950/60",
    screenshots: ["Search", "Listings", "Booking", "Confirmation"],
    processSteps: [
      { title: "Analiza zahteva", description: "Istraživanje korisničkih potreba i analiza konkurentskih booking platformi." },
      { title: "UX strategija", description: "Mapiranje korisničkih tokova za pretragu, filtriranje i rezervaciju." },
      { title: "Dizajn prototipa", description: "Kreiranje kompletnog UI dizajna sa fokusom na konverzije." },
      { title: "Razvoj rešenja", description: "Implementacija responsivne platforme sa real-time dostupnošću." },
    ],
  },
  lumivee: {
    title: "High-Impact Digital Presence for Lumivee",
    subtitle: "Lumivee",
    tags: ["Agency", "Creativity", "Web Design", "Marketing"],
    description:
      "Kreiranje digitalnog prisustva za marketing agenciju Lumivee. Sajt komunicira inovativnost, kreativnost i rezultate koje agencija postiže za svoje klijente.",
    goal: "Pozicionirati Lumivee kao premium marketing agenciju sa snažnim digitalnim prisustvom koje privlači nove klijente.",
    approach:
      "Koristili smo bold dizajn sa modernom tipografijom i dinamičnim vizualima koji odražavaju kreativnu energiju agencije.",
    color: "from-emerald-900/40 to-emerald-950/60",
    screenshots: ["Homepage", "Services", "Portfolio", "Contact"],
    processSteps: [
      { title: "Analiza zahteva", description: "Razumevanje brenda Lumivee i pozicioniranja na tržištu." },
      { title: "UX strategija", description: "Kreiranje korisničkih tokova za prezentaciju usluga i portfolio." },
      { title: "Dizajn prototipa", description: "Razvoj vizuelnog identiteta sa bold, modernim stilom." },
      { title: "Razvoj rešenja", description: "Implementacija sajta sa animacijama i interaktivnim elementima." },
    ],
  },
  medigroup: {
    title: "Trust-Driven Healthcare Platform for MediGroup",
    subtitle: "MediGroup",
    tags: ["Medical", "Healthcare", "Web Design", "Development"],
    description:
      "Zdravstvena medicinska platforma koja gradi poverenje i olakšava pristup informacijama.",
    goal: "Kreirati pouzdanu medicinsku platformu koja gradi poverenje kod pacijenata i olakšava pristup zdravstvenim informacijama.",
    approach:
      "Pristupili smo sa fokusom na čist, profesionalan dizajn koji komunicira kompetentnost i poverenje u medicinskom sektoru.",
    color: "from-teal-900/40 to-teal-950/60",
    screenshots: ["Homepage", "Services", "Doctors", "Contact"],
    processSteps: [
      { title: "Analiza zahteva", description: "Razumevanje specifičnih potreba zdravstvenog sektora i regulatornih zahteva." },
      { title: "UX strategija", description: "Kreiranje pristupačnog interfejsa za različite demografske grupe pacijenata." },
      { title: "Dizajn prototipa", description: "Profesionalan dizajn koji komunicira poverenje i kompetentnost." },
      { title: "Razvoj rešenja", description: "Razvoj platforme sa sistemom za zakazivanje i upravljanje informacijama." },
    ],
  },
  "smart-finance": {
    title: "Smart Finance Dashboard Experience",
    subtitle: "Smart Finance",
    tags: ["Corporate", "Template", "Dashboard", "UI/UX"],
    description:
      "Dizajn finansijskog dashboard-a koji pruža jasan pregled svih ključnih finansijskih metrika i izveštaja.",
    goal: "Kreirati intuitivan finansijski dashboard koji olakšava donošenje poslovnih odluka na osnovu podataka.",
    approach:
      "Koristili smo data-driven dizajn pristup sa čitkim grafikonima, tabelama i KPI indikatorima za brz uvid u finansijsko stanje.",
    color: "from-indigo-900/40 to-indigo-950/60",
    screenshots: ["Dashboard", "Analytics", "Reports", "Settings"],
    processSteps: [
      { title: "Analiza zahteva", description: "Definisanje ključnih metrika i KPI-jeva za prikaz na dashboard-u." },
      { title: "UX strategija", description: "Organizacija podataka i navigacije za brz pristup informacijama." },
      { title: "Dizajn prototipa", description: "Dizajn sa fokusom na čitljivost podataka i vizuelnu hijerarhiju." },
      { title: "Razvoj rešenja", description: "Implementacija interaktivnog dashboard-a sa real-time podacima." },
    ],
  },
  "tech-woven-suit": {
    title: "High-Impact Nike E-commerce Design",
    subtitle: "TECH WOVEN SUIT",
    tags: ["Fashion", "E-commerce", "Web Design", "UI/UX"],
    description:
      "Kompletno dizajnersko rešenje za premium fashion e-commerce platformu. Projekat je obuhvatio kreiranje modernog, minimalističkog dizajna sa fokusom na prezentaciju proizvoda i jednostavan proces kupovine.",
    goal: "Cilj projekta je bio kreirati e-commerce platformu koja odražava premium karakter brenda, pruža intuitivno korisničko iskustvo i maksimizuje konverzije kroz strateški osmišljen dizajn.",
    approach:
      "Krenuli smo od duboke analize ciljne grupe i konkurencije. Na osnovu insights-a kreirali smo wireframe strukturu, razvili vizuelni identitet i isporučili pixel-perfect dizajn spreman za development.",
    color: "from-emerald-900/40 to-emerald-950/60",
    screenshots: ["Homepage", "Product Page", "Cart", "Checkout"],
    processSteps: [
      { title: "Analiza zahteva", description: "Analiza brenda, ciljne grupe i konkurentskih e-commerce platformi u fashion industriji." },
      { title: "UX strategija", description: "Mapiranje korisničkih tokova za kupovinu, pretragu i filtriranje proizvoda." },
      { title: "Dizajn prototipa", description: "Kreiranje hi-fi prototipa sa kompletnim dizajnom svih ključnih stranica." },
      { title: "Razvoj rešenja", description: "Implementacija responsivnog frontend-a sa CMS integracijom za upravljanje proizvodima." },
    ],
  },
  courtix: {
    title: "Bold Web Presence for Courtix",
    subtitle: "Courtix",
    tags: ["Corporate", "Tennis", "Web Design", "Branding"],
    description:
      "Kreiranje snažnog digitalnog prisustva za tenisku akademiju Courtix. Projekat uključuje kompletno brendiranje, web dizajn i razvoj sajta koji komunicira profesionalnost i strast prema tenisu.",
    goal: "Izgraditi web prisustvo koje pozicionira Courtix kao premium tenisku akademiju, privlači nove članove i jasno komunicira vrednosti organizacije.",
    approach:
      "Pristupili smo projektu sa fokusom na sportski, energičan dizajn koji odražava dinamiku tenisa. Koristili smo jake vizuelne elemente i jasnu navigaciju za različite ciljne grupe.",
    color: "from-slate-800/60 to-slate-900/80",
    screenshots: ["Landing", "About", "Programs", "Contact"],
    processSteps: [
      { title: "Analiza zahteva", description: "Razumevanje brenda Courtix, ciljnih grupa i ključnih poruka za komunikaciju." },
      { title: "UX strategija", description: "Kreiranje korisničkih tokova za prijavu, informisanje o programima i kontakt." },
      { title: "Dizajn prototipa", description: "Razvoj vizuelnog identiteta i kompletnog UI dizajna sa sportskim, modernim stilom." },
      { title: "Razvoj rešenja", description: "Razvoj responsivnog sajta sa integracijom sistema za prijavu i upravljanje sadržajem." },
    ],
  },
  "adidas-ecommerce": {
    title: "Performance-Driven Adidas E-commerce",
    subtitle: "Adidas Adistar Shoes",
    tags: ["E-commerce", "Sport", "Web Design"],
    description:
      "Koncept dizajn za Adidas e-commerce platformu fokusiranu na Adistar liniju patika. Projekat demonstrira kako premium sportski brend može prezentovati proizvode na način koji inspiriše i konvertuje.",
    goal: "Kreirati e-commerce iskustvo koje kombinuje performanse sa stilom, naglašavajući tehničke karakteristike proizvoda kroz vizuelno privlačan dizajn.",
    approach:
      "Koristili smo bold tipografiju, dinamične vizuale i čist layout koji stavlja proizvod u centar pažnje dok istovremeno pruža sve informacije potrebne za odluku o kupovini.",
    color: "from-gray-800/40 to-gray-900/60",
    screenshots: ["Homepage", "Product Detail", "Category", "Cart"],
    processSteps: [
      { title: "Analiza zahteva", description: "Istraživanje Adidas brend standarda i best practice u sportskom e-commerce-u." },
      { title: "UX strategija", description: "Dizajn tokova za pretragu, filtriranje i kupovinu optimizovan za konverzije." },
      { title: "Dizajn prototipa", description: "Hi-fi dizajn svih stranica sa fokusom na prezentaciju proizvoda i brend konzistentnost." },
      { title: "Razvoj rešenja", description: "Frontend implementacija sa animacijama i interakcijama za premium korisničko iskustvo." },
    ],
  },
  "ferro-decor": {
    title: "Premium Online Experience for Ferro Decor",
    subtitle: "Ferro Decor",
    tags: ["Interior", "Design", "E-commerce", "Web"],
    description:
      "Dizajn i razvoj premium web prisustva za Ferro Decor — kompaniju specijalizovanu za luksuzni enterijerni dizajn. Sajt služi kao digitalni showroom koji odražava kvalitet i estetiku brenda.",
    goal: "Kreirati digitalno iskustvo koje odražava luksuzni karakter Ferro Decor brenda i služi kao efektan prodajni kanal za enterijerne proizvode.",
    approach:
      "Pristupili smo sa minimalističkim dizajnom koji pušta proizvode da govore sami za sebe. Koristili smo veliku fotografiju, prostran layout i suptilne animacije za premium osećaj.",
    color: "from-amber-900/30 to-amber-950/50",
    screenshots: ["Homepage", "Gallery", "Product", "About"],
    processSteps: [
      { title: "Analiza zahteva", description: "Duboko razumevanje brenda, proizvoda i ciljne grupe u segmentu luksuznog enterijernog dizajna." },
      { title: "UX strategija", description: "Kreiranje korisničkog toka koji vodi od inspiracije do kontakta i narudžbine." },
      { title: "Dizajn prototipa", description: "Minimalistički dizajn sa fokusom na veliku fotografiju i elegantnu tipografiju." },
      { title: "Razvoj rešenja", description: "Razvoj sajta sa CMS-om za upravljanje portfoliom i integracijom sa sistemom za narudžbine." },
    ],
  },
  "delivery-app": {
    title: "Delivery App",
    subtitle: "Food Delivery Mobile App",
    tags: ["App Design", "Development", "App Dev", "Food/Drink"],
    description:
      "Kompletno dizajnersko i razvojno rešenje za mobilnu aplikaciju za dostavu hrane. Aplikacija pokriva ceo korisnikčki tok od pretrage restorana do praćenja narudžbine u realnom vremenu.",
    goal: "Razviti intuitivnu mobilnu aplikaciju koja pojednostavljuje proces naručivanja hrane, pruža personalizovane preporuke i omogućava praćenje dostave u realnom vremenu.",
    approach:
      "Fokusirali smo se na brzinu i jednostavnost korišćenja. Svaki ekran je dizajniran da minimizuje broj koraka do narudžbine, dok istovremeno pruža sve potrebne informacije.",
    color: "from-orange-900/30 to-orange-950/50",
    screenshots: ["Home Screen", "Restaurant", "Order", "Tracking"],
    processSteps: [
      { title: "Analiza zahteva", description: "Mapiranje kompletnog ekosistema dostave — korisnici, restorani, dostavljači." },
      { title: "UX strategija", description: "Dizajn korisničkih tokova za naručivanje, plaćanje i praćenje dostave." },
      { title: "Dizajn prototipa", description: "UI dizajn svih ekrana sa animacijama, ikonografijom i kompletnim design systemom." },
      { title: "Razvoj rešenja", description: "Cross-platform razvoj sa real-time funkcionalnostima i push notifikacijama." },
    ],
  },
};

const processIcons = [Search, Layout, Palette, Package];

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-primary to-primary" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {project.subtitle}
          </h1>
          <p className="text-slate-400 text-lg mb-6">{project.title}</p>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-xs rounded-full border border-cyan-400/20 text-cyan-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-16 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.screenshots.map((screen, i) => (
              <div
                key={i}
                className={`aspect-[3/4] md:aspect-[4/3] bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center border border-surface-border`}
              >
                <span className="text-slate-300 text-sm font-medium">{screen}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">O projektu</h2>
              <p className="text-slate-400 leading-relaxed">{project.description}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Cilj projekta</h2>
              <p className="text-slate-400 leading-relaxed">{project.goal}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Naš pristup</h2>
              <p className="text-slate-400 leading-relaxed">{project.approach}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Proces rada
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.processSteps.map((step, i) => {
              const Icon = processIcons[i % processIcons.length];
              return (
                <div key={i} className="card-dark">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-white font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Imate sličan projekat?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Kontaktirajte nas i saznajte kako možemo pomoći vašem biznisu da raste.
          </p>
          <Link
            href="/zapocni-projekat"
            className="btn-primary text-base px-8 py-4"
          >
            Započni projekat
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
