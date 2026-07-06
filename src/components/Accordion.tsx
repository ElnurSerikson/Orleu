import { useState } from 'react';
import { IconPlus } from './Icon';

type Item = { q: string; a: string };

export default function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/15 bg-ink-900/45 backdrop-blur-xl">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={idx}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              className="flex w-full items-start gap-4 px-6 py-5 text-left transition hover:bg-white/[0.03] sm:px-8 sm:py-6"
            >
              <span
                className={`mt-1 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border transition ${
                  isOpen
                    ? 'border-white/40 bg-white text-ink-950 rotate-45'
                    : 'border-white/15 text-sand-50'
                }`}
              >
                <IconPlus className="h-4 w-4" />
              </span>
              <span className="flex-1">
                <div className="text-base font-semibold text-sand-50 sm:text-lg">
                  {item.q}
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="min-h-0">
                    <p className="text-sm leading-relaxed text-sand-100/70">{item.a}</p>
                  </div>
                </div>
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
