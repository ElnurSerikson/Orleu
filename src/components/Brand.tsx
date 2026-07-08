import { Link } from 'react-router-dom';

type Props = { className?: string };

export default function Brand({ className = 'h-8 w-auto sm:h-9' }: Props) {
  return (
    <Link to="/" className="inline-flex items-center" aria-label="КФХ ORLEU — на главную">
      <img src="/logo.png" alt="КФХ ORLEU" className={className} />
    </Link>
  );
}
