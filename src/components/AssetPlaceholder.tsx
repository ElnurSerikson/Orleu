type Variant = 'aerial' | 'water' | 'field' | 'fish' | 'tent' | 'sunset' | 'forest' | 'gates' | 'gala';

type Props = {
  variant?: Variant;
  className?: string;
  title?: string;
  badge?: string;
};

const GRADIENTS: Record<Variant, string> = {
  aerial: 'from-[#0f2e22] via-[#163d2e] to-[#205545]',
  water: 'from-[#082b3f] via-[#0e4860] to-[#176a7a]',
  field: 'from-[#1c3a14] via-[#2e5a1a] to-[#5f8a2d]',
  fish: 'from-[#0d3148] via-[#13567a] to-[#0b6a8a]',
  tent: 'from-[#1a1a14] via-[#2a2a18] to-[#3a3320]',
  sunset: 'from-[#3a1d12] via-[#7a3a1c] to-[#c8782a]',
  forest: 'from-[#0a1a10] via-[#13321f] to-[#1f5230]',
  gates: 'from-[#1a1a1a] via-[#262626] to-[#3a3a3a]',
  gala: 'from-[#1b1228] via-[#2d1f4a] to-[#4d2b6e]',
};

const SCENES: Record<Variant, React.ReactNode> = {
  aerial: (
    <>
      <path d="M0 380 C 250 300, 500 460, 750 360 L 1000 320 L 1000 625 L 0 625 Z" fill="rgba(8,46,72,0.85)" />
      <path d="M0 420 C 250 360, 500 500, 750 410 L 1000 380" stroke="rgba(255,255,255,0.15)" fill="none" />
      <g opacity="0.5">
        {[80, 200, 340, 480, 620, 760, 900].map((x, i) => (
          <circle key={i} cx={x} cy={180 + (i % 3) * 20} r="4" fill="rgba(34,197,94,0.6)" />
        ))}
      </g>
    </>
  ),
  water: (
    <>
      <path d="M0 200 Q 200 180 400 220 T 800 200 T 1000 220 L 1000 625 L 0 625 Z" fill="rgba(8,46,72,0.7)" />
      <path d="M0 320 Q 200 300 400 340 T 800 320 T 1000 340" stroke="rgba(255,255,255,0.12)" fill="none" />
      <path d="M0 420 Q 200 400 400 440 T 800 420 T 1000 440" stroke="rgba(255,255,255,0.08)" fill="none" />
      <circle cx="780" cy="120" r="60" fill="rgba(255,220,150,0.25)" />
    </>
  ),
  field: (
    <>
      <path d="M0 350 L 1000 320 L 1000 625 L 0 625 Z" fill="rgba(40,80,30,0.65)" />
      {Array.from({ length: 14 }).map((_, i) => (
        <line key={i} x1={i * 80} y1="380" x2={i * 80 + 200} y2="625" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      ))}
      <circle cx="820" cy="140" r="50" fill="rgba(255,220,150,0.3)" />
    </>
  ),
  fish: (
    <>
      <path d="M0 0 H 1000 V 625 H 0 Z" fill="rgba(0,0,0,0)" />
      {[120, 260, 420, 580, 740, 880].map((x, i) => (
        <g key={i} opacity={0.4 + (i % 3) * 0.15}>
          <ellipse cx={x} cy={120 + i * 70} rx="40" ry="14" fill="rgba(34,197,94,0.45)" />
          <path d={`M${x + 40} ${120 + i * 70} l 16 -8 v 16 z`} fill="rgba(34,197,94,0.45)" />
        </g>
      ))}
      <path d="M0 480 Q 250 460 500 490 T 1000 480 L 1000 625 L 0 625 Z" fill="rgba(8,46,72,0.7)" />
    </>
  ),
  tent: (
    <>
      <path d="M0 500 L 1000 480 L 1000 625 L 0 625 Z" fill="rgba(20,40,25,0.7)" />
      <path d="M250 480 L 380 270 L 510 480 Z" fill="rgba(245,200,140,0.5)" stroke="rgba(255,255,255,0.2)" />
      <path d="M380 270 L 380 480" stroke="rgba(0,0,0,0.4)" />
      <path d="M580 480 L 700 320 L 820 480 Z" fill="rgba(150,90,40,0.4)" stroke="rgba(255,255,255,0.15)" />
      <circle cx="200" cy="160" r="40" fill="rgba(255,240,180,0.4)" />
    </>
  ),
  sunset: (
    <>
      <circle cx="500" cy="380" r="160" fill="rgba(255,200,120,0.45)" />
      <path d="M0 400 Q 250 380 500 410 T 1000 400 L 1000 625 L 0 625 Z" fill="rgba(40,20,10,0.7)" />
      <path d="M0 460 Q 250 440 500 470 T 1000 460" stroke="rgba(255,200,120,0.4)" fill="none" />
    </>
  ),
  forest: (
    <>
      {[80, 180, 280, 380, 480, 580, 680, 780, 880].map((x, i) => (
        <g key={i}>
          <path d={`M${x} 480 L ${x - 50} 200 L ${x} 240 L ${x + 50} 200 Z`} fill={`rgba(20,${60 + i * 10},30,0.6)`} />
          <rect x={x - 5} y="480" width="10" height="40" fill="rgba(40,30,20,0.7)" />
        </g>
      ))}
      <path d="M0 520 L 1000 520 L 1000 625 L 0 625 Z" fill="rgba(15,30,20,0.8)" />
    </>
  ),
  gates: (
    <>
      <rect x="350" y="200" width="300" height="280" fill="rgba(40,40,40,0.6)" stroke="rgba(255,255,255,0.15)" />
      <text x="500" y="350" textAnchor="middle" fill="rgba(34,197,94,0.6)" fontSize="120" fontFamily="Manrope" fontWeight="800">Ө</text>
      <path d="M0 480 L 1000 480 L 1000 625 L 0 625 Z" fill="rgba(20,25,20,0.8)" />
    </>
  ),
  gala: (
    <>
      <circle cx="500" cy="200" r="120" fill="rgba(180,140,220,0.3)" />
      {Array.from({ length: 20 }).map((_, i) => (
        <circle key={i} cx={Math.random() * 1000} cy={Math.random() * 400} r="1.5" fill="rgba(255,255,255,0.6)" />
      ))}
    </>
  ),
};

export default function AssetPlaceholder({
  variant = 'aerial',
  className = '',
  title,
  badge,
}: Props) {
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-white/10 ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS[variant]}`} />
      <svg viewBox="0 0 1000 625" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        {SCENES[variant]}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
      {badge && (
        <span className="absolute left-4 top-4 chip">{badge}</span>
      )}
      {title && (
        <div className="absolute inset-x-5 bottom-5">
          <div className="text-base font-semibold text-sand-50 drop-shadow">{title}</div>
        </div>
      )}
    </div>
  );
}
