import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Web razvoj | Gajic Agency",
  description: "Web razvoj koji pretvara dizajn u stabilno digitalno rešenje.",
};

export default function WebRazvoj() {
  return (
    <ServicePageLayout
      title="Web razvoj koji pretvara dizajn u stabilno digitalno rešenje"
      subtitle="Izrada i programiranje web sajta koji radi brzo, pouzdano i skalabilno."
      description="Naš razvojni tim koristi moderne tehnologije i best practice pristupe da bi vaš sajt bio brz, siguran i spreman za rast. Svaki projekat prolazi kroz rigorozno testiranje pre isporuke."
      whatIsTitle="Šta je web razvoj?"
      whatIsText="Web razvoj je proces programiranja i izrade web sajta na osnovu dizajna. Obuhvata front-end razvoj (ono što korisnik vidi), back-end razvoj (serverska logika i baze podataka) i integracije sa eksternim servisima. Razvoj je moguć uz naš dizajn ili postojeće dizajnersko rešenje koje ste pripremili sa drugim timom."
      approach={[
        "Korišćenje modernih framework-ova i tehnologija",
        "SEO optimizacija od samog starta",
        "Performanse i brzina učitavanja kao prioritet",
        "Responsivan razvoj za sve uređaje",
        "Sigurnosne best practice integrisane u proces",
      ]}
      processSteps={[
        {
          title: "Analiza zahteva",
          description: "Detaljno analiziramo dizajn i tehničke zahteve projekta. Definišemo tehnološki stack i arhitekturu sistema.",
        },
        {
          title: "Frontend razvoj",
          description: "Implementiramo dizajn koristeći moderne tehnologije. Svaka komponenta je optimizovana za performanse i pristupačnost.",
        },
        {
          title: "Backend i integracije",
          description: "Razvijamo serversku logiku, baze podataka i integracije sa eksternim servisima prema zahtevima projekta.",
        },
        {
          title: "Testiranje i lansiranje",
          description: "Rigorozno testiramo na svim uređajima i pregledačima. Nakon finalne validacije, lansiramo sajt u produkciju.",
        },
      ]}
      benefits={[
        "Brz i optimizovan web sajt",
        "SEO optimizacija uključena",
        "CMS za upravljanje sadržajem",
        "SSL sertifikat i bezbednosne mere",
        "Responsivan na svim uređajima",
        "30 dana besplatne tehničke podrške",
      ]}
      relatedProjects={[
        { title: "Tech Woven Suit", slug: "tech-woven-suit", tags: ["E-commerce", "Fashion"] },
        { title: "Courtix", slug: "courtix", tags: ["Corporate", "Web"] },
        { title: "Ferro Decor", slug: "ferro-decor", tags: ["Interior", "Web"] },
      ]}
    />
  );
}
