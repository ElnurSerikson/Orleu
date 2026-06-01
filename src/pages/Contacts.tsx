import AssetPlaceholder from '../components/AssetPlaceholder';
import MapBlock from '../components/MapBlock';
import SectionHeader from '../components/SectionHeader';
import {
  IconInstagram,
  IconMail,
  IconPhone,
  IconPin,
  IconRoute,
  IconTikTok,
  IconWhatsApp,
} from '../components/Icon';

export default function Contacts() {
  return (
    <>
      {/* 5.1 HERO */}
      <section className="relative isolate overflow-hidden">
        <AssetPlaceholder variant="gates" className="absolute inset-0 rounded-none border-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/55 to-ink-950" />
        <div className="container-x relative grid min-h-[60vh] place-items-center py-24">
          <div className="max-w-3xl text-center">
            <span className="chip">Контакты</span>
            <h1 className="title-xl mt-6">Контакты КФХ ӨRLEU</h1>
            <p className="lead mx-auto mt-6 max-w-2xl">
              Приезжайте в гости или свяжитесь с нами для обсуждения совместных
              агро- и рекреационных проектов. Мы открыты к диалогу.
            </p>
          </div>
        </div>
      </section>

      {/* 5.2 CHANNELS */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Каналы оперативной связи"
            title="Телефоны и мессенджеры"
            subtitle="Мы разделили потоки B2C и B2B, чтобы вы быстрее получили ответ от нужного человека."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-moss-500/30 bg-gradient-to-br from-moss-500/15 via-ink-850 to-ink-900 p-8 sm:p-10">
              <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-moss-500/20 blur-3xl" />
              <span className="chip">B2C · Отдых</span>
              <h3 className="title-md relative mt-5">
                По вопросам отдыха и рыбалки
              </h3>
              <p className="relative mt-3 text-sm text-sand-100/75">
                Уточнить погоду, забронировать место для кемпинга, арендовать
                палатки, казаны или снасти.
              </p>
              <div className="relative mt-8 space-y-3">
                <a href="tel:+77788868808" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-950/40 px-4 py-3 text-sm font-semibold text-sand-50 hover:border-moss-500/40">
                  <IconPhone className="h-5 w-5 text-moss-400" /> +7 778 886 88 08
                </a>
                <a
                  href="https://wa.me/77788868808"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full animate-pulseGlow"
                >
                  <IconWhatsApp className="h-5 w-5" />
                  Написать администратору в WhatsApp
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 p-8 sm:p-10">
              <span className="chip">B2B · Инвесторы</span>
              <h3 className="title-md mt-5">Для инвесторов и партнеров</h3>
              <p className="mt-3 text-sm text-sand-100/75">
                Предложения по созданию совместных предприятий (СП),
                выращиванию культур, садковому хозяйству или коммерческим
                услугам на берегу.
              </p>
              <div className="mt-8 space-y-3">
                <a href="mailto:orleo8@gmail.com" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-950/40 px-4 py-3 text-sm font-semibold text-sand-50 hover:border-moss-500/40">
                  <IconMail className="h-5 w-5 text-moss-400" /> orleo8@gmail.com
                </a>
                <a
                  href="https://wa.me/77788868808"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-dark w-full border-moss-500/40"
                >
                  <IconWhatsApp className="h-5 w-5 text-moss-400" />
                  Написать собственнику КФХ (WhatsApp)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.3 MAP */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Навигация"
            title="ӨRLEU на карте"
            subtitle="Постройте маршрут в один клик прямо со смартфона."
          />
          <div className="mt-12">
            <MapBlock
              pins={[
                { x: 50, y: 50, label: 'Центральные ворота КФХ', tone: 'amber' },
                { x: 30, y: 65, label: 'Автостоянка' },
                { x: 70, y: 35, label: 'Касса и администратор', tone: 'blue' },
              ]}
              caption="Гео-метка въезда — Каратауская трасса, 39 км."
              videoLabel="🎥 Видео-маршрут от трассы"
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="https://2gis.kz/"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                🗺️ Открыть маршрут в 2ГИС
              </a>
              <a
                href="https://yandex.kz/maps/"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                🗺️ Открыть маршрут в Яндекс.Навигатор
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5.4 TEXT DIRECTIONS */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Как доехать"
            title="Адрес и ориентиры на местности"
            subtitle="Текстовый гид для тех, кто едет впервые — чтобы не заблудиться на съездах."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {[
              {
                icon: <IconPin className="h-6 w-6" />,
                title: 'Расположение',
                text: 'Республика Казахстан, Жамбылская область, 30 км от города Тараз, на берегу реки Аса.',
              },
              {
                icon: <IconRoute className="h-6 w-6" />,
                title: 'Подсказка в пути',
                text: 'Двигайтесь по навигатору до съезда к реке. Ориентируйтесь на брендированные указатели и баннеры ӨRLEU вдоль дороги.',
              },
              {
                icon: <span className="font-display text-xl font-extrabold">Ө</span>,
                title: 'Въезд',
                text: 'Вас встретят центральные откатные ворота с фирменной эмблемой Ө. На въезде обратитесь к дежурному администратору для оформления путевки.',
              },
            ].map((d) => (
              <div key={d.title} className="card">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-moss-500/10 text-moss-400 ring-1 ring-moss-500/20">
                  {d.icon}
                </span>
                <h3 className="mt-5 text-lg font-bold text-sand-50">{d.title}</h3>
                <p className="mt-3 text-sm text-sand-100/70">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5 SOCIAL */}
      <section className="section">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 via-ink-850 to-ink-900 p-10 sm:p-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-moss-500/10 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="chip">Соцсети</span>
                <h2 className="title-lg mt-6">
                  Следите за ӨRLEU в реальном времени
                </h2>
                <p className="lead mt-3 max-w-2xl">
                  Свежие фото уловов, видео с дрона, анонсы событий и
                  оперативные новости КФХ.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="https://instagram.com/orleo8.kz"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-950/40 px-5 py-4 hover:border-moss-500/40"
                >
                  <IconInstagram className="h-6 w-6 text-moss-400" />
                  <div className="text-left">
                    <div className="text-xs uppercase tracking-[0.2em] text-sand-100/55">Instagram</div>
                    <div className="text-sm font-semibold text-sand-50">@orleo8.kz</div>
                  </div>
                </a>
                <a
                  href="https://tiktok.com/@orleo8.kz"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-950/40 px-5 py-4 hover:border-moss-500/40"
                >
                  <IconTikTok className="h-6 w-6 text-moss-400" />
                  <div className="text-left">
                    <div className="text-xs uppercase tracking-[0.2em] text-sand-100/55">TikTok</div>
                    <div className="text-sm font-semibold text-sand-50">@orleo8.kz</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
