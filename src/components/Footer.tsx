import { Link } from 'react-router-dom';
import Brand from './Brand';

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-ink-950/80">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Brand />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-sand-100/60">
            Платформа для агробизнеса, рыбоводства и экотуризма. 230 гектар земли
            и 25 га проточного водоема на берегу реки Аса.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://instagram.com/orleo8.kz" target="_blank" rel="noreferrer" className="btn-ghost">
              Instagram
            </a>
            <a href="https://tiktok.com/@orleo8.kz" target="_blank" rel="noreferrer" className="btn-ghost">
              TikTok
            </a>
          </div>
        </div>

        <div>
          <div className="h-eyebrow">Разделы</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-sand-100/70 hover:text-moss-400">Главная</Link></li>
            <li><Link to="/guests" className="text-sand-100/70 hover:text-moss-400">Для гостей</Link></li>
            <li><Link to="/partnership" className="text-sand-100/70 hover:text-moss-400">Партнерство</Link></li>
            <li><Link to="/about" className="text-sand-100/70 hover:text-moss-400">О КФХ</Link></li>
            <li><Link to="/contacts" className="text-sand-100/70 hover:text-moss-400">Контакты</Link></li>
          </ul>
        </div>

        <div>
          <div className="h-eyebrow">Контакты</div>
          <ul className="mt-4 space-y-3 text-sm text-sand-100/70">
            <li>
              <a href="tel:+77788868808" className="hover:text-moss-400">+7 778 886 88 08</a>
            </li>
            <li>
              <a href="mailto:orleo8@gmail.com" className="hover:text-moss-400">orleo8@gmail.com</a>
            </li>
            <li>
              Каратауская трасса, 39 км<br />
              водоем «Шеваниха каска»
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-sand-100/40 sm:flex-row">
          <div>© {new Date().getFullYear()} КФХ ӨRLEU. Все права защищены.</div>
          <div>Земли в долгосрочной аренде · Договоры о совместной деятельности</div>
        </div>
      </div>
    </footer>
  );
}
