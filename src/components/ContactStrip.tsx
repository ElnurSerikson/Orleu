import { useState } from 'react';
import { IconInstagram, IconMail, IconPhone, IconPin, IconTikTok } from './Icon';

export default function ContactStrip() {
  const [sent, setSent] = useState(false);

  return (
    <section className="section">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card">
            <span className="chip">Готовы к диалогу?</span>
            <h2 className="title-md mt-5">Свяжитесь с нами</h2>
            <p className="lead mt-3">
              Мы всегда открыты для новых партнерств и с радостью ответим на ваши
              вопросы.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-moss-500/10 text-moss-400"><IconPhone className="h-5 w-5" /></span>
                <div>
                  <div className="text-sand-100/55">Телефон</div>
                  <a href="tel:+77788868808" className="text-base font-semibold text-sand-50 hover:text-moss-400">
                    +7 778 886 88 08
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-moss-500/10 text-moss-400"><IconMail className="h-5 w-5" /></span>
                <div>
                  <div className="text-sand-100/55">Email</div>
                  <a href="mailto:orleo8@gmail.com" className="text-base font-semibold text-sand-50 hover:text-moss-400">
                    orleo8@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-moss-500/10 text-moss-400"><IconPin className="h-5 w-5" /></span>
                <div>
                  <div className="text-sand-100/55">Локация</div>
                  <div className="text-base font-semibold text-sand-50">
                    Каратауская трасса, 39 км · водоем «Шеваниха каска»
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              <a href="https://instagram.com/orleo8.kz" target="_blank" rel="noreferrer" className="btn-ghost">
                <IconInstagram className="h-4 w-4" /> @orleo8.kz
              </a>
              <a href="https://tiktok.com/@orleo8.kz" target="_blank" rel="noreferrer" className="btn-ghost">
                <IconTikTok className="h-4 w-4" /> TikTok
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              (e.target as HTMLFormElement).reset();
            }}
            className="card"
          >
            <h3 className="title-md">Оставьте заявку</h3>
            <p className="mt-2 text-sm text-sand-100/65">
              Заполните форму — мы перезвоним в течение рабочего дня.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-sand-100/45">Имя</label>
                <input
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-ink-950/40 px-4 py-3 text-sm text-sand-50 outline-none transition focus:border-moss-500/60"
                  placeholder="Как к вам обращаться"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-sand-100/45">Телефон</label>
                <input
                  required
                  type="tel"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-ink-950/40 px-4 py-3 text-sm text-sand-50 outline-none transition focus:border-moss-500/60"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-sand-100/45">Сообщение</label>
                <textarea
                  rows={4}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-ink-950/40 px-4 py-3 text-sm text-sand-50 outline-none transition focus:border-moss-500/60"
                  placeholder="Коротко опишите вопрос или проект"
                />
              </div>
            </div>

            <button type="submit" className="btn-primary mt-6 w-full">
              Отправить заявку
            </button>

            {sent && (
              <div className="mt-4 rounded-xl border border-moss-500/30 bg-moss-500/10 px-4 py-3 text-sm text-moss-400">
                Спасибо! Заявка отправлена. Мы свяжемся с вами в ближайшее время.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
