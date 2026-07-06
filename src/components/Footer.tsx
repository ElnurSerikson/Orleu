import { Link } from 'react-router-dom';
import Brand from './Brand';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0a1710]">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Brand />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-sand-100/60">
            Платформа для агробизнеса, рыбоводства и экотуризма. 230 гектар земли
            и 25 га проточного водоема на берегу реки Аса.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://www.instagram.com/orleu8.kz/" target="_blank" rel="noreferrer" className="btn-ghost">
              Instagram
            </a>
            <a href="https://www.tiktok.com/@orleu8.kz" target="_blank" rel="noreferrer" className="btn-ghost">
              TikTok
            </a>
          </div>
        </div>

        <div>
          <div className="h-eyebrow">Разделы</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-sand-100/70 hover:text-white">Главная</Link></li>
            <li><Link to="/guests" className="text-sand-100/70 hover:text-white">Для гостей</Link></li>
            <li><Link to="/partnership" className="text-sand-100/70 hover:text-white">Партнерство</Link></li>
            <li><Link to="/about" className="text-sand-100/70 hover:text-white">О КФХ</Link></li>
            <li><Link to="/contacts" className="text-sand-100/70 hover:text-white">Контакты</Link></li>
          </ul>
        </div>

        <div>
          <div className="h-eyebrow">Контакты</div>
          <ul className="mt-4 space-y-3 text-sm text-sand-100/70">
            <li>
              <a href="tel:+77788868808" className="hover:text-white">+7 778 886 88 08</a>
            </li>
            <li>
              <a href="mailto:Orleu8.kz@gmail.com" className="hover:text-white">Orleu8.kz@gmail.com</a>
            </li>
            <li>
              Жамбылская область, 25 км от города Тараз,<br />
              на берегу реки Аса
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-sand-100/40 sm:flex-row">
          <div>© 2026 КФХ «ӨРЛЕУ». Все права защищены.</div>
          <div>Земли в долгосрочной аренде · Договоры о совместной деятельности</div>
        </div>
      </div>
    </footer>
  );
}
