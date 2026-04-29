import Link from "next/link";

export const metadata = {
  title: "Hvala na prijavi! | Gajic Agency",
};

export default function Hvala() {
  return (
    <div className="pt-20 min-h-screen bg-primary flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Hvala na prijavi!
        </h1>
        <p className="text-cyan-400 font-medium mb-8">
          Primili smo vašu prijavu i već je u obradi.
        </p>

        <div className="space-y-4 text-slate-400 text-sm leading-relaxed mb-8">
          <p>
            Drago nam je što ste nas kontaktirali i ukazali nam poverenje.
            Vaš zahtev je stigao do našeg tima i trenutno ga pažljivo pregledamo
            kako bismo vam dali što konkretniji i korisniji odgovor.
          </p>
          <p>
            Javićemo vam se u najkraćem mogućem roku, najčešće u roku od 10 minuta,
            putem kontakta koji ste ostavili. Do tada, slobodno proverite vaš email
            ili budite dostupni na telefonu. U slučaju smo na raspolaganju.
          </p>
          <p>Radujemo se prilici da radimo na vašem projektu!</p>
        </div>

        <div className="mt-12">
          <Link href="/" className="flex items-center justify-center gap-1">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">agency</span>
            <span className="text-3xl font-bold text-white">gajic.</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
