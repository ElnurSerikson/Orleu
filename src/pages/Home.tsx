import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import StatCard from '../components/StatCard';
import GalleryStrip from '../components/GalleryStrip';
import PhotoLightbox from '../components/PhotoLightbox';
import MapBlock from '../components/MapBlock';
import { PHOTOS } from '../data/photos';
import AssetPlaceholder from '../components/AssetPlaceholder';
import ContactBlock from '../components/ContactBlock';
import VideoLightbox from '../components/VideoLightbox';
import {
  IconArrowRight,
  IconCalendar,
  IconFish,
  IconLeaf,
  IconMap,
  IconPlay,
  IconRoute,
  IconSeed,
  IconUsers,
  IconWaves,
  IconTent,
} from '../components/Icon';

const WA_GUESTS =
  'https://wa.me/77788868808?text=' +
  encodeURIComponent('Здравствуйте! Хочу узнать про отдых и рыбалку в ORLEU.');
const WA_PARTNERS =
  'https://wa.me/77788868808?text=' +
  encodeURIComponent(
    'Здравствуйте! Интересует сотрудничество и бизнес-возможности на территории ORLEU.'
  );

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      {/* 1. HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src="/hero-bg.jpg"
          alt="Аэросъёмка КФХ ӨRLEU: водоём и поля"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/45 via-ink-950/35 to-ink-950/85" />
        <div className="absolute inset-0 bg-leaf-radial mix-blend-soft-light" />
        <div className="container-x relative grid min-h-[78vh] place-items-center py-16 sm:min-h-[88vh] sm:py-24">
          <div className="max-w-4xl text-center">
            <img
              src="/logo.png"
              alt="КФХ ORLEU"
              className="mx-auto mb-8 h-16 w-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] sm:h-20"
            />
            <span className="chip backdrop-blur">КФХ ORLEU · Жамбылская область</span>
            <h1 className="title-xl mt-6 text-balance drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
              Территория отдыха и{' '}
              <span className="bg-gradient-to-r from-moss-400 to-moss-500 bg-clip-text text-transparent">
                деловых возможностей
              </span>
            </h1>
            <div className="mt-6 font-display text-lg font-semibold uppercase tracking-[0.32em] text-sand-50/90">
              Соединяясь с природой
            </div>
            <p className="lead mx-auto mt-6 max-w-2xl text-sand-50/85 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
              Откройте потенциал щедрых земель и водоёмов Южного Казахстана для
              качественного отдыха и успешного бизнеса.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link to="/guests" className="btn-primary">
                Хочу на отдых <IconArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="btn-ghost backdrop-blur"
              >
                <IconPlay className="h-4 w-4" /> Посмотреть видео-обзор
              </button>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-sand-100/60">
          <span className="animate-floatSlow inline-block">↓ Листайте вниз</span>
        </div>
      </section>

      {/* 2. STATS — КФХ ORLEU в цифрах */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Масштаб, который впечатляет"
            title="КФХ ORLEU в цифрах"
            subtitle="Узнайте, почему ORLEU — это выгодное место для вашего отдыха и бизнеса."
          />
          <div className="mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <StatCard
              icon={<IconLeaf />}
              value="230+ га"
              label="Плодородные земли для эффективного агробизнеса и развития инфраструктуры"
              hint="01"
            />
            <StatCard
              icon={<IconWaves />}
              value="5+ км"
              label="Береговой линии — простор для приватного отдыха и коммерческих зон на воде"
              hint="02"
            />
            <StatCard
              icon={<IconFish />}
              value="25+ га"
              label="Водоёма — зарыбленное проточное хозяйство со статусом ОТРХ"
              hint="03"
            />
            <StatCard
              icon={<IconRoute />}
              value="25 км"
              label="От Тараза — близость, обеспечивающая лёгкую логистику и высокую посещаемость"
              hint="04"
            />
            <StatCard
              icon={<IconCalendar />}
              value="16 лет"
              label="Опыта — стабильная экосистема и проверенная временем бизнес-модель"
              hint="05"
            />
            <StatCard
              icon={<IconUsers />}
              value="1000+"
              label="Гостей — вместимость для масштабных потоков без потери качества"
              hint="06"
            />
          </div>
        </div>
      </section>

      {/* 3. AUDIENCE SPLIT — слева Гости, справа Партнёры */}
      <section className="section section-solid">
        <div className="container-x">
          <SectionHeader
            eyebrow="Ваш путь в ORLEU"
            title="Что ищете на ORLEU?"
            subtitle="Насладиться незабываемым отдыхом или построить успешный бизнес."
          />

          <div className="mt-10 sm:mt-14 grid gap-6 lg:grid-cols-2">
            {/* Слева — для гостей */}
            <Link
              to="/guests"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-850/70 transition hover:border-white/35"
            >
              <AssetPlaceholder
                variant="water"
                src="/photos/p644.jpg"
                alt="Водоём ORLEU"
                className="aspect-[16/10] rounded-none border-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
                <span className="chip">Для гостей и отдыхающих</span>
                <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Незабываемый отдых и трофейная рыбалка
                </h3>
                <p className="mt-2 max-w-md text-sm text-sand-100/70">
                  Чистый воздух, богатый водоем и идеальные условия для
                  семейного отдыха и настоящей рыбалки.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sand-50">
                  Хочу на отдых <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Справа — для партнёров */}
            <Link
              to="/partnership"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-850/70 transition hover:border-white/35"
            >
              <AssetPlaceholder
                variant="field"
                src="/photos/dji-aerial.jpg"
                alt="Аэросъёмка территории ORLEU"
                className="aspect-[16/10] rounded-none border-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
                <span className="chip">Для партнеров и инвесторов</span>
                <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Партнёрство и бизнес-проекты
                </h3>
                <p className="mt-2 max-w-md text-sm text-sand-100/70">
                  Перспективная платформа для сельского хозяйства, рыбоводства и
                  экотуризма. Уникальные условия для масштабирования.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sand-50">
                  Стать партнером <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. KEY OPPORTUNITIES */}
      <section className="section relative">
        <div className="container-x">
          <SectionHeader
            eyebrow="Ключевые возможности ORLEU"
            title="Больше, чем просто отдых: направления развития ORLEU"
            subtitle="Мы создаем пространство, где природа встречается с комфортом и новыми возможностями."
          />

          <div className="mt-10 sm:mt-14 grid gap-5 lg:grid-cols-3">
            {/* Карточка 1 — Рыбалка и Рекреация */}
            <div className="card group relative flex flex-col overflow-hidden">
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
              <AssetPlaceholder
                variant="fish"
                src="/photos/p643.jpg"
                alt="Открытая вода водоёма ORLEU"
                className="aspect-[4/3] -mx-6 -mt-6 mb-6 rounded-none border-0 sm:-mx-8 sm:-mt-8"
              />
              <span className="chip self-start">Рыбалка и Рекреация</span>
              <h3 className="title-md mt-4">Трофейная рыбалка и кемпинг</h3>
              <p className="mt-3 text-sm leading-relaxed text-sand-100/70">
                Наш 25-гектарный водоем — рай для рыболовов и любителей отдыха с
                палатками. Тишина, комфорт и восстановление.
              </p>
              <div className="mt-auto pt-6">
                <Link to="/guests" className="btn-primary w-full">
                  Забронировать отдых <IconArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Карточка 2 — Мероприятия */}
            <div className="card group relative flex flex-col overflow-hidden">
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
              <AssetPlaceholder
                variant="tent"
                src="/photos/p624.jpg"
                alt="Пикниковая роща со столами"
                className="aspect-[4/3] -mx-6 -mt-6 mb-6 rounded-none border-0 sm:-mx-8 sm:-mt-8"
              />
              <span className="chip self-start">Мероприятия</span>
              <h3 className="title-md mt-4">Пространство для ваших событий</h3>
              <p className="mt-3 text-sm leading-relaxed text-sand-100/70">
                Просторная территория для проведения корпоративов, тимбилдингов,
                семейных праздников и фестивалей на свежем воздухе под открытым небом.
              </p>
              <div className="mt-auto pt-6">
                <a href={WA_GUESTS} target="_blank" rel="noreferrer" className="btn-primary w-full">
                  Обсудить событие <IconArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Карточка 3 — Деловые возможности */}
            <div className="card group relative flex flex-col overflow-hidden">
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
              <AssetPlaceholder
                variant="aerial"
                src="/photos/p650.jpg"
                alt="Поля ORLEU"
                className="aspect-[4/3] -mx-6 -mt-6 mb-6 rounded-none border-0 sm:-mx-8 sm:-mt-8"
              />
              <span className="chip self-start">Деловые возможности</span>
              <h3 className="title-md mt-4">Партнерство и бизнес-проекты</h3>
              <p className="mt-3 text-sm leading-relaxed text-sand-100/70">
                ORLEU открыт для бизнеса. Аренда зон под услуги, совместное
                производство и развитие инфраструктуры на взаимовыгодных условиях.
              </p>
              <div className="mt-auto pt-6">
                <Link to="/partnership" className="btn-primary w-full">
                  Стать партнером <IconArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GALLERY / Атмосфера ORLEU */}
      <section className="section section-solid">
        <div className="container-x">
          <SectionHeader
            eyebrow="Атмосфера ORLEU"
            title="Убедитесь сами: ORLEU в объективе"
            subtitle="Лучшие кадры нашего хозяйства — листайте ленту и открывайте фото на весь экран."
          />

          <div className="mt-10 sm:mt-14">
            <GalleryStrip photos={PHOTOS} onTileClick={(i) => setLightboxIndex(i)} />
          </div>
        </div>
      </section>

      {/* 5.1 КАРТА ТЕРРИТОРИИ */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Карта территории"
            title="Схема водоёма и зон отдыха"
            subtitle="Листайте карту стрелками или разверните на весь экран, чтобы изучить каждую зону."
          />
          <div className="mt-8 sm:mt-12">
            <MapBlock
              caption="Тяните карту мышью или листайте стрелками."
              videoLabel="Видео-обзор территории"
              onVideoClick={() => setVideoOpen(true)}
            />
          </div>
        </div>
      </section>

      {/* mini-marquee with icons */}
      <section className="py-6">
        <div className="container-x grid grid-cols-2 gap-x-4 gap-y-4 text-xs uppercase tracking-[0.3em] text-sand-100/45 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-6">
          <span className="inline-flex items-center gap-2"><IconWaves className="h-4 w-4 text-sand-50/80" /> р. Малая Аса</span>
          <span className="inline-flex items-center gap-2"><IconLeaf className="h-4 w-4 text-sand-50/80" /> 230+ га земли</span>
          <span className="inline-flex items-center gap-2"><IconFish className="h-4 w-4 text-sand-50/80" /> сазан · карп · амур</span>
          <span className="inline-flex items-center gap-2"><IconTent className="h-4 w-4 text-sand-50/80" /> кемпинг 24/7</span>
          <span className="inline-flex items-center gap-2"><IconRoute className="h-4 w-4 text-sand-50/80" /> 25 км от Тараза</span>
          <span className="inline-flex items-center gap-2"><IconSeed className="h-4 w-4 text-sand-50/80" /> ОТРХ статус</span>
        </div>
      </section>

      {/* 6. WHAT INTERESTS YOU — WhatsApp CTA */}
      <section className="section section-solid">
        <div className="container-x">
          <SectionHeader
            eyebrow="Что вас интересует?"
            title="Что вас интересует?"
            subtitle="Вопросы отдыха или сотрудничества — выберите подходящую категорию, и мы ответим в WhatsApp."
          />

          <div className="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            <a
              href={WA_GUESTS}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-white/25 bg-white/[0.07] p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/50"
            >
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
              <span className="chip">Для гостей</span>
              <h3 className="title-md mt-5">Планирую отдых</h3>
              <p className="mt-3 text-sm text-sand-100/70">
                Узнать про отдых и рыбалку в ORLEU, забронировать место или инвентарь.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sand-50">
                Написать в WhatsApp
                <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </a>

            <a
              href={WA_PARTNERS}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-ink-900/45 p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/35"
            >
              <span className="chip">Для партнёров</span>
              <h3 className="title-md mt-5">Предложение по партнёрству</h3>
              <p className="mt-3 text-sm text-sand-100/70">
                Сотрудничество и бизнес-возможности на территории ORLEU.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sand-50">
                Написать в WhatsApp
                <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 7. CONTACTS */}
      <ContactBlock showGuestPartnerLinks />

      <VideoLightbox
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=SW4hlTy8Hwg"
        title="Видео-обзор КФХ ORLEU"
      />

      {lightboxIndex !== null && (
        <PhotoLightbox
          photos={PHOTOS}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
