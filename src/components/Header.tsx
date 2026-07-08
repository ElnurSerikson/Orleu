import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Brand from './Brand';

const NAV = [
  { to: '/', label: 'Главная' },
  { to: '/guests', label: 'Для гостей' },
  { to: '/partnership', label: 'Для партнеров' },
  { to: '/about', label: 'О КФХ' },
  { to: '/contacts', label: 'Контакты' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between sm:h-20">
        <Brand src="/logo-insc.png" className="h-9 w-auto rounded-md sm:h-10" />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'text-sand-50'
                    : 'text-sand-100/60 hover:text-sand-50'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-white/80" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/77788868808"
            target="_blank"
            rel="noreferrer"
            className="hidden btn-primary lg:inline-flex"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-moss-400" fill="currentColor">
              <path d="M19.07 4.93A10 10 0 0 0 2.55 16.4L1 22l5.74-1.5a10 10 0 0 0 14.78-8.69 10 10 0 0 0-2.45-6.88ZM12 20a8 8 0 0 1-4.07-1.12l-.29-.18-3.4.9.91-3.32-.19-.31A8 8 0 1 1 12 20Zm4.5-5.93-.43-.22c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.69.15-.21.3-.79.98-.97 1.18-.18.21-.36.23-.66.08a6.6 6.6 0 0 1-1.95-1.2 7.4 7.4 0 0 1-1.36-1.7c-.14-.24 0-.37.11-.5.11-.13.24-.31.36-.46.12-.16.16-.27.24-.45.08-.18.04-.34-.02-.49-.06-.15-.66-1.6-.9-2.18-.24-.57-.49-.5-.68-.51h-.58c-.2 0-.5.07-.77.37-.27.3-1 1-1 2.45 0 1.45 1.03 2.85 1.17 3.05.14.2 2.03 3.1 4.92 4.34a16 16 0 0 0 1.65.61c.69.22 1.32.19 1.81.12.55-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.21-.57-.36Z" />
            </svg>
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-sand-50 lg:hidden"
            aria-label="Открыть меню"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-current transition ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? '-translate-y-1 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-ink-900/95 backdrop-blur-xl">
          <div className="container-x flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base font-medium transition ${
                    isActive
                      ? 'bg-white/10 text-sand-50'
                      : 'text-sand-100/80 hover:bg-white/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/77788868808"
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-2"
            >
              Связаться в WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
