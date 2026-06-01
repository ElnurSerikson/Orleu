import { Link } from 'react-router-dom';

type Props = { compact?: boolean };

export default function Brand({ compact = false }: Props) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-moss-500 to-moss-700 shadow-glow">
        <span className="font-display text-lg font-extrabold text-ink-950">Ө</span>
        <span className="absolute -inset-1 rounded-2xl bg-moss-500/0 transition group-hover:bg-moss-500/15" />
      </span>
      {!compact && (
        <div className="leading-tight">
          <div className="font-display text-base font-extrabold tracking-wide text-sand-50">
            КФХ ӨRLEU
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-moss-400/80">
            Жамбылская обл. · р. Аса
          </div>
        </div>
      )}
    </Link>
  );
}
