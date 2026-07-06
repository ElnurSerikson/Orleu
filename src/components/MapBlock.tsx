import { useCallback, useEffect, useRef, useState } from 'react';
import { IconPlay } from './Icon';
import MapLightbox from './MapLightbox';

type Props = {
  videoLabel?: string;
  caption?: string;
  onVideoClick?: () => void;
  extraActions?: React.ReactNode;
  /** Полная панорама карты: листается внутри секции и открывается на весь экран */
  fullSrc?: string;
};

export default function MapBlock({
  videoLabel = 'Видео-инструкция: как доехать и где встать',
  caption = 'Листайте карту стрелками или нажмите, чтобы раскрыть на весь экран.',
  onVideoClick,
  extraActions,
  fullSrc = '/photos/map-full.jpg',
}: Props) {
  const [mapOpen, setMapOpen] = useState(false);
  const [atStart, setAtStart] = useState(false);
  const [atEnd, setAtEnd] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const updateEdges = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  // Стартуем с центра панорамы, чтобы можно было листать в обе стороны
  const centerScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
    updateEdges();
  }, [updateEdges]);

  useEffect(() => {
    // Если картинка уже в кеше, onLoad не сработает — центруем сразу
    if (imgRef.current?.complete) centerScroll();
    window.addEventListener('resize', updateEdges);
    return () => window.removeEventListener('resize', updateEdges);
  }, [centerScroll, updateEdges]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const start = el.scrollLeft;
    const target = Math.max(
      0,
      Math.min(start + dir * el.clientWidth * 0.7, el.scrollWidth - el.clientWidth)
    );
    el.scrollTo({ left: target, behavior: 'smooth' });
    // Фолбэк: если плавная анимация не стартовала (reduced-motion,
    // фоновая вкладка, старый браузер) — переходим мгновенно
    window.setTimeout(() => {
      if (Math.abs(el.scrollLeft - start) < 2) el.scrollLeft = target;
    }, 150);
  };

  return (
    <>
      <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 bg-ink-900">
        {/* Панорама, листаемая прямо в секции */}
        <div
          ref={scrollerRef}
          onScroll={updateEdges}
          className="scrollbar-none absolute inset-0 overflow-x-auto overflow-y-hidden"
        >
          <img
            ref={imgRef}
            src={fullSrc}
            alt="Карта территории КФХ ӨRLEU"
            loading="lazy"
            draggable={false}
            onLoad={centerScroll}
            onClick={() => setMapOpen(true)}
            className="h-full w-auto max-w-none cursor-zoom-in select-none"
          />
        </div>

        {/* Боковые затемнения — намёк, что карта продолжается */}
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink-950/65 to-transparent transition-opacity duration-300 ${
            atStart ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink-950/65 to-transparent transition-opacity duration-300 ${
            atEnd ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Большие стрелки прокрутки по центру высоты */}
        <button
          type="button"
          onClick={() => scrollByDir(-1)}
          aria-label="Прокрутить карту влево"
          className={`absolute left-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-ink-950/70 text-sand-50 backdrop-blur-md transition hover:border-white/50 hover:bg-ink-950/90 sm:h-14 sm:w-14 ${
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
          aria-label="Прокрутить карту вправо"
          className={`absolute right-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-ink-950/70 text-sand-50 backdrop-blur-md transition hover:border-white/50 hover:bg-ink-950/90 sm:h-14 sm:w-14 ${
            atEnd ? 'pointer-events-none opacity-30' : ''
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>

        {/* Подсказка при наведении */}
        <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-ink-950/65 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-sand-50 opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
          Нажмите, чтобы раскрыть
        </span>

        <div className="pointer-events-none absolute inset-x-5 bottom-5 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="pointer-events-auto rounded-2xl border border-white/10 bg-ink-950/75 px-4 py-3 backdrop-blur">
            <div className="text-[11px] uppercase tracking-[0.2em] text-sand-100/60">
              Карта территории
            </div>
            <div className="mt-1 text-sm text-sand-50">{caption}</div>
          </div>
          <div className="pointer-events-auto flex flex-wrap gap-2">
            {extraActions}
            <button
              type="button"
              className="btn-primary"
              onClick={() =>
                onVideoClick
                  ? onVideoClick()
                  : alert('Видео-обзор откроется во всплывающем окне.')
              }
            >
              <IconPlay className="h-4 w-4" /> {videoLabel}
            </button>
          </div>
        </div>
      </div>

      <MapLightbox open={mapOpen} onClose={() => setMapOpen(false)} src={fullSrc} />
    </>
  );
}
