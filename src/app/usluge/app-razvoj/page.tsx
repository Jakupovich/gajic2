import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "App razvoj | Gajic Agency",
  description: "App razvoj koji pretvara dizajn u funkcionalan proizvod.",
};

export default function AppRazvoj() {
  return (
    <ServicePageLayout
      title="App razvoj koji pretvara ideju u funkcionalan proizvod"
      subtitle="Stabilan i kvalitetan razvoj je ključ svake uspešne aplikacije. Bez pouzdane tehničke implementacije, ni najbolji dizajn ne može da iskoristi svoj puni potencijal."
      description="Razvijamo mobilne aplikacije koristeći najnovije tehnologije za iOS i Android platforme. Svaka aplikacija je optimizovana za performanse, sigurnost i korisničko iskustvo."
      whatIsTitle="Šta je app razvoj?"
      whatIsText="App razvoj je tehnička realizacija i programiranje mobilne aplikacije prema definisanom dizajnu. Obuhvata implementaciju korisničkog interfejsa, poslovne logike, integracija sa API-jevima i eksternim servisima. Razvoj je moguć uz naš dizajn ili postojeće dizajnersko rešenje."
      approach={[
        "Cross-platform ili native razvoj prema potrebama projekta",
        "Agilna metodologija sa redovnim demonstracijama",
        "Kontinuirana integracija i automatsko testiranje",
        "Optimizacija performansi za glatko korisničko iskustvo",
        "Priprema za objavu na App Store i Google Play",
      ]}
      processSteps={[
        {
          title: "Analiza zahteva",
          description: "Definišemo tehničke specifikacije, arhitekturu i tehnološki stack na osnovu zahteva projekta i ciljnih platformi.",
        },
        {
          title: "UI implementacija",
          description: "Implementiramo dizajn sa piksel-preciznom tačnošću, animacijama i tranzicijama za premium korisničko iskustvo.",
        },
        {
          title: "Backend i API",
          description: "Razvijamo serversku infrastrukturu, API-jeve i integracije neophodne za funkcionisanje aplikacije.",
        },
        {
          title: "Testiranje i objava",
          description: "Kompletno testiranje na pravim uređajima, optimizacija performansi i priprema za objavu na prodavnicama aplikacija.",
        },
      ]}
      benefits={[
        "Aplikacija za iOS i/ili Android",
        "Optimizovane performanse i brzina",
        "Push notifikacije integrisane",
        "Analytics i praćenje korisnika",
        "Priprema za App Store / Google Play",
        "30 dana post-launch podrške",
      ]}
      relatedProjects={[
        { title: "Delivery App", slug: "delivery-app", tags: ["App", "Food/Drink"] },
        { title: "FitApp Mobile", slug: "fitapp", tags: ["Health", "Fitness"] },
        { title: "EcoTracker App", slug: "ecotracker", tags: ["Lifestyle", "Mobile"] },
      ]}
    />
  );
}
