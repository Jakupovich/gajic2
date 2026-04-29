import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Web dizajn | Gajic Agency",
  description: "Web dizajn koji gradi poverenje i konvertuje. Kreiranje izgleda i korisničkog iskustva web sajta.",
};

export default function WebDizajn() {
  return (
    <ServicePageLayout
      title="Web dizajn koji gradi poverenje i konvertuje"
      subtitle="Vaš web sajt je prvi utisak koji ostavljate. Mi dizajniramo digitalna iskustva koja nisu samo estetski dopušljiva, već strateški osmišljena da vode korisnika ka pravoj akciji."
      description="Svaki projekat započinjemo razumevanjem vašeg brenda, ciljne grupe i poslovnih ciljeva. Na osnovu toga kreiramo dizajn koji nije samo lep, već i strateški osmišljen da konvertuje."
      whatIsTitle="Šta je web dizajn?"
      whatIsText="Web dizajn je proces kreiranja vizuelnog izgleda i korisničkog iskustva web sajta. Obuhvata strukturu, raspored elemenata, tipografiju, boje i interakcije — sve što korisnik vidi i sa čime komunicira. Naš fokus je na kreiranju dizajna koji je intuitivan, estetski privlačan i optimizovan za konverzije. Svaki piksel ima svrhu, svaki element vodi korisnika ka željenom cilju."
      approach={[
        "Analizu korisničkog ponašanja i konkurencije",
        "Kreiranje wireframe struktura za jasnu navigaciju",
        "UI dizajn sa fokusom na brand identity",
        "Responsive dizajn za sve uređaje",
        "Interaktivne prototipove za testiranje pre razvoja",
      ]}
      processSteps={[
        {
          title: "Analiza i strategija",
          description: "Detaljno analiziramo vaš brend, ciljnu grupu i konkurenciju. Definišemo jasnu strategiju koja će voditi ceo proces dizajna.",
        },
        {
          title: "Struktura i wireframe",
          description: "Kreiramo wireframe strukturu sajta koja definiše raspored elemenata, navigaciju i korisničke tokove za optimalno iskustvo.",
        },
        {
          title: "Vizuelni identitet",
          description: "Razvijamo vizuelni identitet koji komunicira vrednosti vašeg brenda — boje, tipografija, ikonografija i stil fotografija.",
        },
        {
          title: "Finalna isporuka",
          description: "Isporučujemo finalne dizajn fajlove spremne za razvoj, sa svom pratećom dokumentacijom i asset-ima.",
        },
      ]}
      benefits={[
        "Pixel-perfect dizajn spreman za razvoj",
        "Responsive dizajn za desktop, tablet i mobilne uređaje",
        "Kompletna UI kit dokumentacija",
        "Interaktivni Figma prototip",
        "Do 2 runde revizija uključeno",
        "Svi source fajlovi u vlasništvu klijenta",
      ]}
      relatedProjects={[
        { title: "Tech Woven Suit E-commerce", slug: "tech-woven-suit", tags: ["Fashion", "E-commerce"] },
        { title: "Courtix Corporate", slug: "courtix", tags: ["Corporate", "Tennis"] },
        { title: "Ferro Decor", slug: "ferro-decor", tags: ["Interior", "Design"] },
      ]}
    />
  );
}
