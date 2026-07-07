type Step = {
  phase: string;
  title: string;
  text: string;
};

export default function Timeline({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative grid gap-6 lg:grid-cols-4">
      <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
      {steps.map((s, i) => (
        <li key={s.phase} className="relative flex flex-col">
          <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4">
            <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-white font-display text-sm font-bold text-ink-950 ring-4 ring-ink-950">
              0{i + 1}
            </span>
            <div className="text-[11px] uppercase tracking-[0.25em] text-sand-100/70">
              {s.phase}
            </div>
          </div>
          <div className="mt-5 flex-1 rounded-2xl border border-white/20 bg-white/[0.06] p-6 backdrop-blur-xl transition duration-300 hover:border-white/40 hover:bg-white/[0.1] sm:p-7">
            <h3 className="text-lg font-bold text-sand-50">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-sand-100/70">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
