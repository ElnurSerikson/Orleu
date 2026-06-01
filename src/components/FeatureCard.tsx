import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
  number?: string;
};

export default function FeatureCard({ icon, title, description, number }: Props) {
  return (
    <div className="card group relative overflow-hidden">
      {number && (
        <span className="absolute right-5 top-5 font-display text-3xl font-extrabold text-white/5 transition group-hover:text-moss-500/20">
          {number}
        </span>
      )}
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-moss-500/10 text-moss-400 ring-1 ring-moss-500/20 transition group-hover:bg-moss-500/20">
        {icon}
      </span>
      <h3 className="mt-5 text-lg font-bold text-sand-50">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-sand-100/65">{description}</p>
    </div>
  );
}
