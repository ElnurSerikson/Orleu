import { useState } from 'react';
import { IconPlay } from './Icon';

type Pin = { x: number; y: number; label: string; tone?: 'green' | 'amber' | 'blue' };

type Props = {
  pins?: Pin[];
  videoLabel?: string;
  caption?: string;
  onVideoClick?: () => void;
  extraActions?: React.ReactNode;
  mapSrc?: string;
};

const TONES: Record<string, string> = {
  green: 'bg-moss-500',
  amber: 'bg-amber-400',
  blue: 'bg-sky-400',
};

const DEFAULT_MAP_SRC =
  'https://yandex.kz/map-widget/v1/?ll=71.400000%2C42.900000&z=12';

export default function MapBlock({
  pins = [],
  videoLabel = 'Видео-инструкция: как доехать и где встать',
  caption = '5 километров дикой природы, подготовленной для вашего удобства.',
  onVideoClick,
  extraActions,
  mapSrc = DEFAULT_MAP_SRC,
}: Props) {
  const [activePin, setActivePin] = useState<string | null>(null);

  return (
    <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 bg-ink-900">
      {/* Яндекс.Карта через iframe */}
      <iframe
        title="Карта территории КФХ ӨRLEU"
        src={mapSrc}
        className="absolute inset-0 h-full w-full grayscale-[0.2]"
        style={{ filter: 'invert(0.92) hue-rotate(180deg) saturate(0.8)' }}
        loading="lazy"
        allowFullScreen
      />

      {/* Лёгкая тёмная маска для единого стиля сайта */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-ink-950/20" />

      {/* Пины-маркеры поверх карты */}
      {pins.map((pin) => (
        <div
          key={pin.label}
          className="absolute -translate-x-1/2 -translate-y-full"
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
        >
          <button
            type="button"
            onClick={() => setActivePin(activePin === pin.label ? null : pin.label)}
            className="flex flex-col items-center outline-none"
          >
            <div
              className={`rounded-full border border-white/15 bg-ink-950/85 px-3 py-1 text-[11px] font-medium text-sand-50 shadow-card backdrop-blur whitespace-nowrap transition ${
                activePin === pin.label ? 'ring-2 ring-moss-500/60' : ''
              }`}
            >
              {pin.label}
            </div>
            <div className="mt-1 flex h-3 w-3 items-center justify-center">
              <span
                className={`block h-3 w-3 rounded-full ${TONES[pin.tone || 'green']} animate-pulseGlow`}
              />
            </div>
            <div className={`-mt-1 h-2 w-px ${TONES[pin.tone || 'green']}`} />
          </button>

          {activePin === pin.label && (
            <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-full rounded-xl border border-white/10 bg-ink-950/95 px-4 py-2 text-xs text-sand-100/85 shadow-card backdrop-blur whitespace-nowrap">
              {pin.label}
            </div>
          )}
        </div>
      ))}

      <div className="absolute inset-x-5 bottom-5 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="rounded-2xl border border-white/10 bg-ink-950/75 px-4 py-3 backdrop-blur">
          <div className="text-[11px] uppercase tracking-[0.2em] text-moss-400">
            Карта территории
          </div>
          <div className="mt-1 text-sm text-sand-50">{caption}</div>
        </div>
        <div className="flex flex-wrap gap-2">
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
  );
}
