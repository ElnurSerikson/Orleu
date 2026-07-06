import { useState } from 'react';
import { IconPlay } from './Icon';
import MapLightbox from './MapLightbox';

type Props = {
  videoLabel?: string;
  caption?: string;
  onVideoClick?: () => void;
  extraActions?: React.ReactNode;
  /** Кадрированное фото карты для рамки секции (16:10) */
  frameSrc?: string;
  /** Полная панорама карты для полноэкранного просмотра */
  fullSrc?: string;
};

export default function MapBlock({
  videoLabel = 'Видео-инструкция: как доехать и где встать',
  caption = 'Нажмите на карту, чтобы рассмотреть территорию в деталях.',
  onVideoClick,
  extraActions,
  frameSrc = '/photos/map-frame.jpg',
  fullSrc = '/photos/map-full.jpg',
}: Props) {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <>
      <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 bg-ink-900">
        {/* Фото-карта территории; клик — полноэкранный просмотр панорамы */}
        <button
          type="button"
          onClick={() => setMapOpen(true)}
          aria-label="Открыть карту территории на весь экран"
          className="absolute inset-0 block h-full w-full cursor-zoom-in outline-none"
        >
          <img
            src={frameSrc}
            alt="Карта территории КФХ ӨRLEU"
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-ink-950/25" />
          <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-ink-950/65 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-sand-50 opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
            Нажмите, чтобы раскрыть
          </span>
        </button>

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
