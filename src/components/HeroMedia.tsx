type Props = {
  image: string;
  alt?: string;
  overlay?: 'dark' | 'soft';
  children?: React.ReactNode;
  className?: string;
};

export default function HeroMedia({
  image,
  alt = '',
  overlay = 'dark',
  children,
  className = '',
}: Props) {
  return (
    <section
      className={`relative isolate overflow-hidden ${className}`}
    >
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div
        className={`absolute inset-0 ${
          overlay === 'dark'
            ? 'bg-gradient-to-b from-ink-950/85 via-ink-950/70 to-ink-950'
            : 'bg-gradient-to-b from-ink-950/60 via-ink-950/40 to-ink-950'
        }`}
      />
      <div className="absolute inset-0 bg-leaf-radial" />
      {children}
    </section>
  );
}
