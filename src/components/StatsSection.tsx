export default function StatsSection() {
  const stats = [
    { value: "20+", label: "Zadovoljnih klijenata" },
    { value: "100%", label: "Fokus na rezultat" },
    { value: "10+", label: "Članova tima" },
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-400 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          Dizajn je strategija, psihologija i performans spojeni u digitalno iskustvo
          koje gradi poverenje i konvertuje.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
