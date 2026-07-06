import { useState } from 'react';

type Slide = { src: string; title: string; caption?: string };

type Props = { slides: Slide[] };

export default function Carousel({ slides }: Props) {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + slides.length) % slides.length);
  const next = () => setI((v) => (v + 1) % slides.length);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {slides.map((s, idx) => (
          <div key={idx} className="relative aspect-[16/9] w-full flex-shrink-0">
            <img src={s.src} alt={s.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 sm:inset-x-10 sm:bottom-10">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-sand-100/70">
                {String(idx + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-sand-50 sm:text-3xl">{s.title}</h3>
              {s.caption && <p className="mt-1 max-w-xl text-sm text-sand-100/70">{s.caption}</p>}
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Назад"
        className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink-950/60 text-sand-50 backdrop-blur hover:bg-ink-950/90"
      >
        ←
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Вперед"
        className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink-950/60 text-sand-50 backdrop-blur hover:bg-ink-950/90"
      >
        →
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Слайд ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? 'w-8 bg-white' : 'w-3 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
