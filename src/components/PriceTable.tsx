type Row = {
  category: string;
  day: string;
  full: string;
  highlight?: boolean;
};

type Props = { rows: Row[]; footnote?: string };

export default function PriceTable({ rows, footnote }: Props) {
  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-ink-900/45 backdrop-blur-xl">
      <div className="hidden grid-cols-3 border-b border-white/10 bg-ink-900/70 px-6 py-4 text-[11px] uppercase tracking-[0.2em] text-sand-100/50 sm:grid">
        <div>Категория</div>
        <div>Дневной</div>
        <div>Суточный</div>
      </div>
      <ul className="divide-y divide-white/5">
        {rows.map((r) => (
          <li
            key={r.category}
            className={`grid grid-cols-1 gap-2 px-6 py-5 sm:grid-cols-3 sm:items-center sm:gap-4 ${
              r.highlight ? 'bg-white/[0.06]' : ''
            }`}
          >
            <div>
              <div className="text-sm font-semibold text-sand-50">{r.category}</div>
              {r.highlight && (
                <span className="mt-1 inline-block rounded-full bg-white/15 px-2 py-0.5 text-[10px] uppercase tracking-wider text-sand-50">
                  Бесплатно
                </span>
              )}
            </div>
            <div className="text-sm text-sand-100/80">
              <span className="sm:hidden text-sand-100/40">Дневной: </span>
              {r.day}
            </div>
            <div className="text-base font-bold text-sand-50">
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
