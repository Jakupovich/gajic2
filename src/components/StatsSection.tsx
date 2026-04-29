export default function StatsSection() {
  const stats = [
    { value: "3", suffix: "+", label: "Godine iskustva" },
    { value: "20", suffix: "+", label: "Zadovoljnih klijenata" },
    { value: "100", suffix: "%", label: "Fokus na rezultat" },
    { value: "10", suffix: "+", label: "Članova tima" },
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-white max-w-3xl mx-auto mb-16 text-lg md:text-xl leading-relaxed">
          Dobar dizajn je <span className="font-bold">strategija, psihologija i performans</span> spojeni u jedno digitalno iskustvo koje <span className="font-bold">gradi poverenje i konvertuje</span>.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <p className="text-slate-400 text-xs uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
