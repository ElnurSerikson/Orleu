import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  value: string;
  label: string;
  hint?: string;
};

export default function StatCard({ icon, value, label, hint }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-ink-900/45 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/35">
      <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/10 blur-3xl transition group-hover:bg-white/15" />
      <div className="relative flex items-center justify-between">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-sand-50 ring-1 ring-white/20">
          {icon}
        </span>
        {hint && <span className="text-[10px] uppercase tracking-[0.2em] text-sand-100/40">{hint}</span>}
      </div>
      <div className="relative mt-6 font-display text-4xl font-extrabold text-sand-50 sm:text-5xl">
        {value}
      </div>
      <div className="relative mt-2 text-sm text-sand-100/65">{label}</div>
    </div>
  );
}
