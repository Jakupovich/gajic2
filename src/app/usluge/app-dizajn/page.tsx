import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "App dizajn | Gajic Agency",
  description: "App dizajn koji pretvara ideju u intuitivno digitalno iskustvo.",
};

export default function AppDizajn() {
  return (
    <ServicePageLayout
      title="App dizajn koji pretvara ideju u intuitivno digitalno iskustvo"
      subtitle="Mobilna aplikacija nije samo skup ekrana. To je iskustvo koje mora biti jasno, jednostavno i prilagođeno korisniku od prvog dodira sa ekranom."
      description="Pristupamo dizajnu mobilnih aplikacija sa dubokim razumevanjem korisničkog ponašanja na mobilnim uređajima. Svaki ekran je pažljivo osmišljen da pruži intuitivno, brzo i prijatno iskustvo."
      whatIsTitle="Šta je app dizajn?"
      whatIsText="App dizajn obuhvata kreiranje kompletnog korisničkog interfejsa i iskustva mobilne aplikacije. Od navigacije i strukture ekrana do svakog dugmeta i animacije — sve je dizajnirano da korisnik može intuitivno da koristi aplikaciju bez razmišljanja. Naš pristup kombinuje estetiku sa funkcionalnošću, fokusirajući se na korisničke tokove koji vode do konverzija."
      approach={[
        "Duboko razumevanje ciljnih korisnika i njihovih navika",
        "Mapiranje korisničkih tokova za svaki scenario korišćenja",
        "Dizajn sistema konzistentan kroz celu aplikaciju",
        "Testiranje prototipova sa pravim korisnicima",
        "Optimizacija za iOS i Android platforme",
      ]}
      processSteps={[
        {
          title: "Analiza i strategija",
          description: "Razumevamo vašu ideju, ciljne korisnike i tržište. Definišemo ključne funkcionalnosti i prioritete za MVP ili punu verziju.",
        },
        {
          title: "UX istraživanje",
          description: "Kreiramo korisničke persone, mapiramo tokove i definišemo informacionu arhitekturu za intuitivnu navigaciju.",
        },
        {
          title: "UI dizajn i prototip",
          description: "Dizajniramo svaki ekran sa pažnjom na detalje, kreiramo interaktivne prototipove za validaciju koncepta.",
        },
        {
          title: "Finalna isporuka",
          description: "Isporučujemo dizajn spreman za razvoj sa kompletnim design system-om, specifikacijama i svim potrebnim asset-ima.",
        },
      ]}
      benefits={[
        "Kompletni UI dizajn za sve ekrane aplikacije",
        "Interaktivni prototip za testiranje",
        "Design system sa komponentama",
        "Dizajn optimizovan za iOS i Android",
        "Specifikacije za developere",
        "Source fajlovi u vlasništvu klijenta",
      ]}
      relatedProjects={[
        { title: "Delivery App", slug: "delivery-app", tags: ["App Design", "Food/Drink"] },
        { title: "FitApp", slug: "fitapp", tags: ["Health", "Fitness"] },
        { title: "EcoTracker", slug: "ecotracker", tags: ["Lifestyle", "Eco"] },
      ]}
    />
  );
}
