type Step = {
  phase: string;
  title: string;
  text: string;
  status: 'current' | 'next' | 'future';
};

export default function Timeline({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative grid gap-6 lg:grid-cols-4">
      <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
      {steps.map((s, i) => (
        <li key={s.phase} className="relative">
          <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4">
            <span
              className={`grid h-12 w-12 flex-shrink-0 place-items-center rounded-full font-display text-sm font-bold ring-4 ring-ink-950 ${
                s.status === 'current'
                  ? 'bg-white text-ink-950 animate-pulseGlow'
                  : s.status === 'next'
                    ? 'bg-white/15 text-sand-50 border border-white/40'
                    : 'bg-ink-800 text-sand-100/50 border border-white/10'
              }`}
            >
              0{i + 1}
            </span>
            <div className="text-[11px] uppercase tracking-[0.25em] text-sand-100/70">
              {s.phase}
            </div>
          </div>
          <div className="card mt-5">
            <h3 className="text-lg font-bold text-sand-50">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-sand-100/70">{s.text}</p>
            <div
              className={`mt-5 inline-flex rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.25em] ${
                s.status === 'current'
                  ? 'bg-white/15 text-sand-50'
                  : s.status === 'next'
                    ? 'bg-amber-400/10 text-amber-300'
                    : 'bg-white/5 text-sand-100/45'
              }`}
            >
              {s.status === 'current' ? 'Текущий этап' : s.status === 'next' ? 'Ближайшее' : 'Долгосрочно'}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
