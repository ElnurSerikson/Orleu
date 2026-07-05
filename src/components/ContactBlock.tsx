import { useState } from 'react';
import {
  IconMail,
  IconPhone,
  IconPin,
  IconInstagram,
  IconTikTok,
  IconRoute,
} from './Icon';

export default function ContactBlock({
  showGuestPartnerLinks = false,
}: {
  showGuestPartnerLinks?: boolean;
}) {
  const [sent, setSent] = useState(false);

  return (
    <section className="section">
      <div className="container-x">
        <div className="flex flex-col gap-4 items-center text-center mb-12">
          <span className="chip">Контакты и навигация</span>
          <h2 className="title-lg max-w-3xl text-balance">
            Мы на связи по любым вопросам
          </h2>
          <p className="lead max-w-2xl">
            Выберите удобный способ связи или постройте маршрут до нас.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Колонка 1: Контакты */}
          <div className="card flex flex-col">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-moss-500/15 text-moss-400">
                <IconPhone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-moss-400">
                  Наши контакты
                </div>
                <div className="text-lg font-bold text-sand-50">
                  Телефоны и мессенджеры
                </div>
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href="tel:+77788868808"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-ink-950/40 px-4 py-3 font-semibold text-sand-50 transition hover:border-moss-500/40"
                >
                  <IconPhone className="h-5 w-5 text-moss-400" />
                  +7 778 886 88 08
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/77788868808"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-ink-950/40 px-4 py-3 font-semibold text-sand-50 transition hover:border-moss-500/40"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-moss-400" fill="currentColor">
                    <path d="M19.07 4.93A10 10 0 0 0 2.55 16.4L1 22l5.74-1.5a10 10 0 0 0 14.78-8.69 10 10 0 0 0-2.45-6.88ZM12 20a8 8 0 0 1-4.07-1.12l-.29-.18-3.4.9.91-3.32-.19-.31A8 8 0 1 1 12 20Zm4.5-5.93-.43-.22c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.69.15-.21.3-.79.98-.97 1.18-.18.21-.36.23-.66.08a6.6 6.6 0 0 1-1.95-1.2 7.4 7.4 0 0 1-1.36-1.7c-.14-.24 0-.37.11-.5.11-.13.24-.31.36-.46.12-.16.16-.27.24-.45.08-.18.04-.34-.02-.49-.06-.15-.66-1.6-.9-2.18-.24-.57-.49-.5-.68-.51h-.58c-.2 0-.5.07-.77.37-.27.3-1 1-1 2.45 0 1.45 1.03 2.85 1.17 3.05.14.2 2.03 3.1 4.92 4.34a16 16 0 0 0 1.65.61c.69.22 1.32.19 1.81.12.55-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.21-.57-.36Z" />
                  </svg>
                  WhatsApp / Telegram
                </a>
              </li>
              <li>
                <a
                  href="mailto:Orleu8.kz@gmail.com"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-ink-950/40 px-4 py-3 font-semibold text-sand-50 transition hover:border-moss-500/40"
                >
                  <IconMail className="h-5 w-5 text-moss-400" />
                  Orleu8.kz@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href="https://instagram.com/orleo8.kz"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost text-xs"
              >
                <IconInstagram className="h-4 w-4" /> Instagram
              </a>
              <a
                href="https://tiktok.com/@orleo8.kz"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost text-xs"
              >
                <IconTikTok className="h-4 w-4" /> TikTok
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost text-xs"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M23 7.5a3 3 0 0 0-2-2.1C19.1 5 12 5 12 5s-7.1 0-9 .4a3 3 0 0 0-2 2.1A31 31 0 0 0 .7 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2 2.1c1.9.4 9 .4 9 .4s7.1 0 9-.4a3 3 0 0 0 2-2.1 31 31 0 0 0 .3-4.5 31 31 0 0 0-.3-4.5ZM9.7 15.5v-7l6 3.5-6 3.5Z" />
                </svg>
                YouTube
              </a>
            </div>
          </div>

          {/* Колонка 2: Форма */}
          <div className="card flex flex-col">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-moss-500/15 text-moss-400">
                <IconMail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-moss-400">
                  Форма связи
                </div>
                <div className="text-lg font-bold text-sand-50">
                  Отправьте нам сообщение
                </div>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                (e.target as HTMLFormElement).reset();
              }}
              className="mt-6 space-y-4"
            >
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-sand-100/45">
                  Имя
                </label>
                <input
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-ink-950/40 px-4 py-3 text-sm text-sand-50 outline-none transition focus:border-moss-500/60"
                  placeholder="Как к вам обращаться"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-sand-100/45">
                  Телефон
                </label>
                <input
                  required
                  type="tel"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-ink-950/40 px-4 py-3 text-sm text-sand-50 outline-none transition focus:border-moss-500/60"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-sand-100/45">
                  Сообщение
                </label>
                <textarea
                  rows={3}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-ink-950/40 px-4 py-3 text-sm text-sand-50 outline-none transition focus:border-moss-500/60"
                  placeholder="Коротко опишите вопрос"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Отправить
              </button>
              {sent && (
                <div className="rounded-xl border border-moss-500/30 bg-moss-500/10 px-4 py-3 text-sm text-moss-400">
                  Спасибо! Заявка отправлена. Мы свяжемся с вами в ближайшее время.
                </div>
              )}
            </form>
          </div>

          {/* Колонка 3: Карта */}
          <div className="card flex flex-col">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-moss-500/15 text-moss-400">
                <IconPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-moss-400">
                  Карта проезда
                </div>
                <div className="text-lg font-bold text-sand-50">Как добраться</div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Яндекс.Карта — КФХ ӨRLEU"
                src="https://yandex.kz/map-widget/v1/?ll=71.400000%2C42.900000&z=11"
                className="h-56 w-full"
                loading="lazy"
                allowFullScreen
              />
            </div>

            <div className="mt-6 grid gap-2 sm:grid-cols-3">
              <a
                href="https://yandex.kz/maps/"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost text-xs"
              >
                <IconRoute className="h-4 w-4" /> Яндекс
              </a>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost text-xs"
              >
                <IconRoute className="h-4 w-4" /> Google
              </a>
              <a
                href="https://2gis.kz/"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost text-xs"
              >
                <IconRoute className="h-4 w-4" /> 2ГИС
              </a>
            </div>

            {!showGuestPartnerLinks && (
              <p className="mt-5 text-xs text-sand-100/55">
                Жамбылская область, 25 км от города Тараз, на берегу реки Аса.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
