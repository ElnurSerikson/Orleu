type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: Props) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      } ${className}`}
    >
      {eyebrow && <span className="chip">{eyebrow}</span>}
      <h2 className="title-lg max-w-3xl text-balance">{title}</h2>
      {subtitle && <p className="lead max-w-2xl">{subtitle}</p>}
    </div>
  );
}
