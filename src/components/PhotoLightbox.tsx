import { useCallback, useEffect, useState } from 'react';
import type { Photo } from '../data/photos';

type Props = {
  photos: Photo[];
  startIndex?: number;
  onClose: () => void;
};

/** Полноэкранный просмотр фото с перелистыванием (стрелки, клавиатура, счётчик) */
export default function PhotoLightbox({ photos, startIndex = 0, onClose }: Props) {
  const [i, setI] = useState(startIndex);

  const prev = useCallback(
    () => setI((v) => (v - 1 + photos.length) % photos.length),
    [photos.length]
  );
  const next = useCallback(
    () => setI((v) => (v + 1) % photos.length),
    [photos.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    // Сохраняем прежнее значение — лайтбокс может открываться поверх модалки
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, prev, next]);

  const photo = photos[i];

  return (
    <div
      className="fixed inset-0 z-[110] flex flex-col bg-ink-950/95 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-sand-100/60">
            {String(i + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
          </div>
          <div className="mt-1 text-sm font-semibold text-sand-50 sm:text-base">
            {photo.title}
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть просмотр"
          className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full border border-white/15 bg-ink-900/80 text-sand-50 transition hover:bg-ink-800"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>

      <div className="relative min-h-0 flex-1 px-4 pb-4 sm:px-20">
        <img
          src={photo.src}
          alt={photo.title}
          onClick={(e) => e.stopPropagation()}
          className="mx-auto h-full w-auto max-w-full rounded-2xl border border-white/10 object-contain"
        />

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Предыдущее фото"
          className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-ink-950/70 text-sand-50 backdrop-blur-md transition hover:border-white/50 hover:bg-ink-950/90 sm:left-5 sm:h-14 sm:w-14"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Следующее фото"
          className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-ink-950/70 text-sand-50 backdrop-blur-md transition hover:border-white/50 hover:bg-ink-950/90 sm:right-5 sm:h-14 sm:w-14"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      <div className="px-5 py-4 text-center text-sm text-sand-100/70">
        {photo.caption || ' '}
      </div>
    </div>
  );
}
