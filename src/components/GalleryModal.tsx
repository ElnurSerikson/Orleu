import { useEffect, useState } from 'react';
import PhotoLightbox from './PhotoLightbox';
import type { Photo } from '../data/photos';

type Props = {
  open: boolean;
  onClose: () => void;
  photos: Photo[];
  title?: string;
};

/** Модальное окно с сеткой всех фотографий; клик по фото — лайтбокс с листанием */
export default function GalleryModal({
  open,
  onClose,
  photos,
  title = 'Галерея ORLEU',
}: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (!open) {
      setLightbox(null);
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      // Когда открыт лайтбокс — Esc обрабатывает он
      if (e.key === 'Escape') onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (lightbox === null) window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose, lightbox]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-ink-950/95 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-sand-100/60">
            {photos.length} фото
          </div>
          <div className="mt-1 text-sm font-semibold text-sand-50 sm:text-base">{title}</div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть галерею"
          className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full border border-white/15 bg-ink-900/80 text-sand-50 transition hover:bg-ink-800"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-10 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setLightbox(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 text-left transition hover:border-white/35"
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/75 via-transparent to-transparent" />
              <span className="absolute inset-x-4 bottom-3 text-sm font-semibold text-sand-50 drop-shadow">
                {p.title}
              </span>
            </button>
          ))}
        </div>
        <p className="mt-6 text-center text-xs uppercase tracking-[0.3em] text-sand-100/45">
          Нажмите на фото, чтобы открыть просмотр
        </p>
      </div>

      {lightbox !== null && (
        <PhotoLightbox
          photos={photos}
          startIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}
