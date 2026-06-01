import { IconPlay } from './Icon';

type Pin = { x: number; y: number; label: string; tone?: 'green' | 'amber' | 'blue' };

type Props = {
  pins?: Pin[];
  videoLabel?: string;
  caption?: string;
};

const TONES: Record<string, string> = {
  green: 'bg-moss-500',
  amber: 'bg-amber-400',
  blue: 'bg-sky-400',
};

export default function MapBlock({
  pins = [],
  videoLabel = 'Видео-инструкция: как доехать и где встать',
  caption = '5 километров дикой природы, подготовленной для вашего удобства.',
}: Props) {
  return (
    <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 bg-ink-900">
      <svg
        viewBox="0 0 1000 625"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="terrain" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#0e1c18" />
            <stop offset="100%" stopColor="#13251f" />
          </linearGradient>
          <linearGradient id="water" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#0f3a5e" />
            <stop offset="100%" stopColor="#0a2742" />
          </linearGradient>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          </pattern>
        </defs>

        <rect width="1000" height="625" fill="url(#terrain)" />
        <rect width="1000" height="625" fill="url(#grid)" />

        <path
          d="M0 380 C 150 320, 260 470, 420 410 S 700 460, 850 380 L 1000 360 L 1000 625 L 0 625 Z"
          fill="url(#water)"
          opacity="0.95"
        />
        <path
          d="M0 380 C 150 320, 260 470, 420 410 S 700 460, 850 380 L 1000 360"
          stroke="#22c55e"
          strokeWidth="2"
          strokeDasharray="4 8"
          fill="none"
          opacity="0.6"
        />

        <path d="M40 60 L 280 90 L 540 70 L 780 120 L 960 90 L 960 320 L 40 300 Z"
          fill="rgba(34,197,94,0.06)"
          stroke="rgba(34,197,94,0.35)"
          strokeDasharray="6 6"
          strokeWidth="1.5"
        />

        <g opacity="0.6">
          {[120, 230, 360, 500, 640, 780, 900].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy={170 + (i % 2) * 40} r="6" fill="#15803d" />
              <circle cx={x + 22} cy={195 + (i % 2) * 40} r="4" fill="#16a34a" />
            </g>
          ))}
        </g>

        <text x="40" y="40" fill="rgba(255,255,255,0.4)" fontSize="14" fontFamily="Manrope">
          КФХ ӨRLEU · 230 га · р. Аса
        </text>
        <text x="40" y="600" fill="rgba(255,255,255,0.35)" fontSize="12" fontFamily="Manrope">
          ↑ С · Каратауская трасса 39 км
        </text>
      </svg>

      {pins.map((pin) => (
        <div
          key={pin.label}
          className="absolute -translate-x-1/2 -translate-y-full"
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
        >
          <div className="flex flex-col items-center">
            <div className="rounded-full border border-white/15 bg-ink-950/80 px-3 py-1 text-[11px] font-medium text-sand-50 shadow-card backdrop-blur whitespace-nowrap">
              {pin.label}
            </div>
            <div className="mt-1 flex h-3 w-3 items-center justify-center">
              <span className={`block h-3 w-3 rounded-full ${TONES[pin.tone || 'green']} animate-pulseGlow`} />
            </div>
            <div className={`-mt-1 h-2 w-px ${TONES[pin.tone || 'green']}`} />
          </div>
        </div>
      ))}

      <div className="absolute inset-x-5 bottom-5 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="rounded-2xl border border-white/10 bg-ink-950/75 px-4 py-3 backdrop-blur">
          <div className="text-[11px] uppercase tracking-[0.2em] text-moss-400">Карта территории</div>
          <div className="mt-1 text-sm text-sand-50">{caption}</div>
        </div>
        <button
          type="button"
          className="btn-primary"
          onClick={() => alert('Видео-обзор откроется во всплывающем окне.')}
        >
          <IconPlay className="h-4 w-4" /> {videoLabel}
        </button>
      </div>
    </div>
  );
}
