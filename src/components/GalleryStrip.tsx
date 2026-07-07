import { useCallback, useEffect, useRef, useState } from 'react';
import type { Photo } from '../data/photos';

type Props = {
  photos: Photo[];
  /** Клик по фото — открыть полноэкранный просмотр с этого кадра */
  onTileClick: (index: number) => void;
};

/** Горизонтальная лента крупных фотографий со снапом, большими стрелками и свайпом */
export default function GalleryStrip({ photos, onTileClick }: Props) {
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const updateEdges = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener('resize', updateEdges);
    return () => window.removeEventListener('resize', updateEdges);
  }, [updateEdges]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const start = el.scrollLeft;
    const target = Math.max(
      0,
      Math.min(start + dir * el.clientWidth * 0.8, el.scrollWidth - el.clientWidth)
    );
    el.scrollTo({ left: target, behavior: 'smooth' });
    window.setTimeout(() => {
      if (Math.abs(el.scrollLeft - start) < 2) el.scrollLeft = target;
    }, 150);
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        onScroll={updateEdges}
        className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto pb-1"
      >
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => onTileClick(i)}
            className="group/tile relative aspect-[16/10] w-[86%] flex-shrink-0 snap-start overflow-hidden rounded-3xl border border-white/10 text-left transition hover:border-white/35 sm:w-[70%] lg:w-[62%]"
          >
            <img
              src={p.src}
              alt={p.title}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover/tile:scale-[1.04]"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/75 via-transparent to-transparent" />
            <span className="absolute inset-x-6 bottom-5 flex items-center justify-between gap-3">
              <span className="text-lg font-semibold text-sand-50 drop-shadow sm:text-xl">
                {p.title}
              </span>
              <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border border-white/25 bg-ink-950/60 text-sand-50 opacity-0 backdrop-blur transition group-hover/tile:opacity-100">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Боковые затемнения-намёки */}
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 w-14 rounded-l-3xl bg-gradient-to-r from-ink-950/70 to-transparent transition-opacity duration-300 ${
          atStart ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 w-14 rounded-r-3xl bg-gradient-to-l from-ink-950/70 to-transparent transition-opacity duration-300 ${
          atEnd ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Большие стрелки по центру высоты */}
      <button
        type="button"
        onClick={() => scrollByDir(-1)}
        aria-label="Прокрутить фото влево"
        className={`absolute left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-ink-950/70 text-sand-50 backdrop-blur-md transition hover:border-white/50 hover:bg-ink-950/90 sm:h-14 sm:w-14 ${
          atStart ? 'pointer-events-none opacity-30' : ''
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => scrollByDir(1)}
        aria-label="Прокрутить фото вправо"
        className={`absolute right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-ink-950/70 text-sand-50 backdrop-blur-md transition hover:border-white/50 hover:bg-ink-950/90 sm:h-14 sm:w-14 ${
          atEnd ? 'pointer-events-none opacity-30' : ''
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
