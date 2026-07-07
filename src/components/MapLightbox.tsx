import { useEffect } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  src?: string;
  title?: string;
};

/**
 * Полноэкранный просмотр карты территории.
 * Вся панорама вписывается в экран целиком (object-contain), без прокрутки.
 */
export default function MapLightbox({
  open,
  onClose,
  src = '/photos/map-full.jpg',
  title = 'Карта территории КФХ ӨRLEU',
}: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-ink-950/95 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-sand-100/60">
            Карта территории
          </div>
          <div className="mt-1 text-sm font-semibold text-sand-50 sm:text-base">{title}</div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть карту"
          className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full border border-white/15 bg-ink-900/80 text-sand-50 transition hover:bg-ink-800"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-8">
        <img
          src={src}
          alt={title}
          draggable={false}
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full select-none rounded-xl object-contain"
        />
      </div>
    </div>
  );
}
