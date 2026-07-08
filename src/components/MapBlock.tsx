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
  videoLabel = 'Видео-обзор территории',
  caption = 'Тяните карту мышью или листайте стрелками.',
  onVideoClick,
  extraActions,
  fullSrc = '/photos/map-full.jpg',
}: Props) {
  const [mapOpen, setMapOpen] = useState(false);
  const [atStart, setAtStart] = useState(false);
  const [atEnd, setAtEnd] = useState(false);
  const [dragging, setDragging] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const animRef = useRef<number>();
  // Состояние перетаскивания мышью
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  const updateEdges = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  const centeredOnce = useRef(false);
  const centerScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
    updateEdges();
  }, [updateEdges]);

  useEffect(() => {
    window.addEventListener('resize', updateEdges);
    const el = scrollerRef.current;
    const img = imgRef.current;
    let io: IntersectionObserver | undefined;

    const doCenter = () => {
      if (centeredOnce.current || !el) return;
      if (el.scrollWidth > el.clientWidth + 4) {
        centeredOnce.current = true;
        centerScroll();
      }
    };
    // Центруем только после полного декодирования панорамы — иначе браузер
    // сбрасывает scrollLeft, когда тяжёлая картинка дорисовывается
    const centerWhenReady = () => {
      if (!img || centeredOnce.current) return;
      const p = img.decode ? img.decode() : Promise.reject();
      p.then(() => requestAnimationFrame(doCenter)).catch(() => {
        if (img.complete) requestAnimationFrame(doCenter);
        else img.addEventListener('load', () => requestAnimationFrame(doCenter), { once: true });
      });
    };

    if (el) {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) centerWhenReady();
        },
        { threshold: 0.1 }
      );
      io.observe(el);
    }
    return () => {
      window.removeEventListener('resize', updateEdges);
      io?.disconnect();
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [centerScroll, updateEdges]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    if (animRef.current) cancelAnimationFrame(animRef.current);
    const start = el.scrollLeft;
    const target = Math.max(
      0,
      Math.min(start + dir * el.clientWidth * 0.7, el.scrollWidth - el.clientWidth)
    );
    const duration = 450;
    const t0 = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      el.scrollLeft = start + (target - start) * easeOutCubic(p);
      if (p < 1) animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
  };

  // Перетаскивание мышью (drag-to-pan)
  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (!el) return;
    if (animRef.current) cancelAnimationFrame(animRef.current);
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    setDragging(true);
    try {
      el.setPointerCapture(e.pointerId);
    } catch {
      /* синтетические/недоступные указатели игнорируем */
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (!el || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 3) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (el?.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    drag.current.active = false;
    setDragging(false);
  };

  return (
    <>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-ink-900 sm:aspect-[16/10]">
        {/* Панорама: тянется мышью (drag-to-pan) и листается стрелками */}
        <div
          ref={scrollerRef}
          onScroll={updateEdges}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          className={`scrollbar-none absolute inset-0 select-none overflow-x-auto overflow-y-hidden ${
            dragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          <img
            ref={imgRef}
            src={fullSrc}
            alt="Карта территории КФХ ӨRLEU"
            loading="lazy"
            draggable={false}
            className="pointer-events-none h-full w-auto max-w-none select-none"
          />
        </div>

        {/* Плашка-подпись (компактная на мобиле, чтобы не закрывать карту) */}
        <div className="pointer-events-none absolute left-3 top-3 max-w-[60%] rounded-xl border border-white/10 bg-ink-950/70 px-2.5 py-1.5 backdrop-blur sm:left-5 sm:top-5 sm:max-w-none sm:rounded-2xl sm:px-4 sm:py-2.5">
          <div className="text-[8px] uppercase tracking-[0.18em] text-sand-100/60 sm:text-[11px] sm:tracking-[0.2em]">
            Карта территории
          </div>
          <div className="mt-0.5 text-[11px] leading-snug text-sand-50 sm:text-sm">{caption}</div>
        </div>

        {/* Стрелки прокрутки по центру высоты */}
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
      </div>

      {/* Кнопки под холстом */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <button type="button" className="btn-primary" onClick={() => setMapOpen(true)}>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
          Открыть полностью
        </button>
        <button
          type="button"
          className="btn-ghost"
          onClick={() =>
            onVideoClick
              ? onVideoClick()
              : alert('Видео-обзор откроется во всплывающем окне.')
          }
        >
          <IconPlay className="h-4 w-4" /> {videoLabel}
        </button>
        {extraActions}
      </div>

      <MapLightbox open={mapOpen} onClose={() => setMapOpen(false)} src={fullSrc} />
    </>
  );
}
