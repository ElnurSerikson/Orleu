type Row = {
  category: string;
  day: string;
  night: string;
  full: string;
  highlight?: boolean;
};

type Props = { rows: Row[]; footnote?: string };

export default function PriceTable({ rows, footnote }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-850/60 backdrop-blur">
      <div className="hidden grid-cols-4 border-b border-white/10 bg-ink-900/70 px-6 py-4 text-[11px] uppercase tracking-[0.2em] text-sand-100/50 sm:grid">
        <div>Категория</div>
        <div>Дневной 09:00–21:00</div>
        <div>Ночной 21:00–09:00</div>
        <div>Суточный</div>
      </div>
      <ul className="divide-y divide-white/5">
        {rows.map((r) => (
          <li
            key={r.category}
            className={`grid grid-cols-1 gap-2 px-6 py-5 sm:grid-cols-4 sm:items-center sm:gap-4 ${
              r.highlight ? 'bg-moss-500/[0.06]' : ''
            }`}
          >
            <div>
              <div className="text-sm font-semibold text-sand-50">{r.category}</div>
              {r.highlight && (
                <span className="mt-1 inline-block rounded-full bg-moss-500/15 px-2 py-0.5 text-[10px] uppercase tracking-wider text-moss-400">
                  Бесплатно
                </span>
              )}
            </div>
            <div className="text-sm text-sand-100/80">
              <span className="sm:hidden text-sand-100/40">Дневной: </span>
              {r.day}
            </div>
            <div className="text-sm text-sand-100/80">
              <span className="sm:hidden text-sand-100/40">Ночной: </span>
              {r.night}
            </div>
            <div className="text-base font-bold text-moss-400">
              <span className="sm:hidden text-sand-100/40 font-normal text-sm">Суточный: </span>
              {r.full}
            </div>
          </li>
        ))}
      </ul>
      {footnote && (
        <div className="border-t border-white/5 bg-ink-900/60 px-6 py-4 text-xs text-sand-100/55">
          {footnote}
        </div>
      )}
    </div>
  );
}
