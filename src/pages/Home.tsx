import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import StatCard from '../components/StatCard';
import FeatureCard from '../components/FeatureCard';
import Carousel from '../components/Carousel';
import ContactStrip from '../components/ContactStrip';
import AssetPlaceholder from '../components/AssetPlaceholder';
import {
  IconArrowRight,
  IconCalendar,
  IconFish,
  IconLeaf,
  IconMap,
  IconPlay,
  IconRoute,
  IconSeed,
  IconSparkle,
  IconTent,
  IconWaves,
} from '../components/Icon';

export default function Home() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/55 via-ink-950/40 to-ink-950/85" />
        <div className="absolute inset-0 bg-leaf-radial mix-blend-soft-light" />
        <div className="container-x relative grid min-h-[88vh] place-items-center py-24">
          <div className="max-w-4xl text-center">
            <span className="chip backdrop-blur">КФХ ӨRLEU · Жамбылская область</span>
            <h1 className="title-xl mt-6 text-balance drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
              Ваш путь к процветанию и{' '}
              <span className="bg-gradient-to-r from-moss-400 to-moss-500 bg-clip-text text-transparent">
                незабываемому отдыху
              </span>
            </h1>
            <p className="lead mx-auto mt-6 max-w-2xl text-sand-50/85 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
              Откройте потенциал щедрой земли Казахстана для прибыльного бизнеса
              и насладитесь её первозданной красотой. 230 гектар возможностей в
              30 км от Тараза.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.youtube.com/watch?v=SW4hlTy8Hwg"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <IconPlay className="h-4 w-4" /> Смотреть видео-обзор КХ
              </a>
              <Link to="/guests" className="btn-ghost backdrop-blur">
                Я хочу на отдых <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-sand-100/60">
          <span className="animate-floatSlow inline-block">↓ Листайте вниз</span>
        </div>
      </section>

      {/* 2. STATS */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Масштаб, который впечатляет"
            title="Наши активы в цифрах"
            subtitle="Познакомьтесь с потенциалом КХ ӨRLEU в фактах."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <StatCard icon={<IconLeaf />} value="250+" label="гектаров плодородных земель" hint="01" />
            <StatCard icon={<IconMap />} value="9" label="уникальных участков" hint="02" />
            <StatCard icon={<IconFish />} value="25 га" label="собственного водоема ОТРХ" hint="03" />
            <StatCard icon={<IconCalendar />} value="49" label="лет долгосрочной аренды" hint="04" />
            <StatCard icon={<IconRoute />} value="30 км" label="от города Тараз" hint="05" />
          </div>
        </div>
      </section>

      {/* 3. AUDIENCE SPLIT */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Ваш путь в ӨRLEU"
            title="Что ищете на ӨRLEU?"
            subtitle="Выберите свой путь: построить успешный бизнес или насладиться незабываемым отдыхом."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Link to="/partnership" className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-850/70 transition hover:border-moss-500/40">
              <AssetPlaceholder variant="field" className="aspect-[16/10] rounded-none border-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
                <span className="chip">Для партнеров и инвесторов</span>
                <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Для амбициозного бизнеса и инвестиций
                </h3>
                <p className="mt-2 max-w-md text-sm text-sand-100/70">
                  Перспективная платформа для сельского хозяйства, рыбоводства и
                  экотуризма. Уникальные условия для масштабирования.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-moss-400">
                  Стать партнером <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            <Link to="/guests" className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-850/70 transition hover:border-moss-500/40">
              <AssetPlaceholder variant="water" className="aspect-[16/10] rounded-none border-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
                <span className="chip">Для гостей и отдыхающих</span>
                <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Для незабываемого отдыха и трофейной рыбалки
                </h3>
                <p className="mt-2 max-w-md text-sm text-sand-100/70">
                  Чистый воздух, богатый водоем и идеальные условия для
                  семейного отдыха и настоящей рыбалки.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-moss-400">
                  Приехать на отдых <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
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
            eyebrow="Ключевые возможности"
            title="Наши ведущие направления и перспективы"
            subtitle="Исследуйте ключевые сферы для вашего успешного развития на землях ӨRLEU."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            <Link to="/partnership" className="group lg:col-span-2 relative overflow-hidden rounded-3xl border border-moss-500/30 bg-gradient-to-br from-ink-800 to-ink-900 p-8 transition hover:-translate-y-1 hover:border-moss-500/60">
              <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-moss-500/15 blur-3xl" />
              <span className="chip">Флагман</span>
              <h3 className="title-md relative mt-6 max-w-sm">
                Готовая бизнес-модель: Проект Глэмпинга
              </h3>
              <p className="relative mt-3 max-w-md text-sm text-sand-100/70">
                Наш проработанный концепт глэмпинга — это шанс для быстрого
                старта в экотуризме с маркетинговыми исследованиями и эскизным
                проектом.
              </p>
              <div className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-moss-400">
                Узнать подробнее <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
              <div className="relative mt-10 grid grid-cols-3 gap-3">
                <AssetPlaceholder variant="tent" className="aspect-[4/3]" />
                <AssetPlaceholder variant="sunset" className="aspect-[4/3]" />
                <AssetPlaceholder variant="forest" className="aspect-[4/3]" />
              </div>
            </Link>

            <div className="grid gap-5">
              <FeatureCard
                icon={<IconSeed />}
                title="Агропотенциал"
                description="Богарные и поливные земли, пастбища, кормопроизводство и животноводство."
                number="02"
              />
              <FeatureCard
                icon={<IconFish />}
                title="Рыбное хозяйство"
                description="25-гектарный водоем со статусом ОТРХ для товарного рыбоводства и рекреации."
                number="03"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. GALLERY / 3D */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Атмосфера ӨRLEU"
            title="Убедитесь сами: фото и 3D-тур"
            subtitle="Лучшие кадры и возможность виртуально пройтись по КХ, чтобы почувствовать его атмосферу."
          />

          <div className="mt-14">
            <Carousel
              slides={[
                { src: '', title: 'Панорама с дрона на закате', caption: 'Реку Аса видно на 5 км вдоль южной границы.' },
                { src: '', title: 'Зеркальная гладь водоема', caption: '25 гектаров проточной воды со статусом ОТРХ.' },
                { src: '', title: 'Палаточный городок в роще', caption: 'Тень столетних деревьев и оборудованные костровые зоны.' },
                { src: '', title: 'Поля под клевер и пастбища', caption: '230 га — площадь для СП и совместного сенокоса.' },
              ].map((s, i) => ({
                ...s,
                src:
                  ['aerial', 'water', 'tent', 'field', 'forest', 'sunset'][i % 6] &&
                  `data:image/svg+xml;utf8,${encodeURIComponent(
                    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'><rect width='16' height='9' fill='%230a1612'/></svg>`
                  )}`,
              }))}
            />

            <div className="mt-6 grid gap-4 sm:grid-cols-4">
              <AssetPlaceholder variant="aerial" title="Аэро · Восход" />
              <AssetPlaceholder variant="water" title="Водоем" />
              <AssetPlaceholder variant="forest" title="Роща" />
              <AssetPlaceholder variant="field" title="Поля" />
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <button className="btn-ghost">Смотреть все фото</button>
              <button className="btn-primary">
                <IconSparkle className="h-4 w-4" /> Погрузиться в 3D-тур
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* mini-marquee with icons */}
      <section className="border-y border-white/5 bg-ink-900/40 py-6">
        <div className="container-x flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.3em] text-sand-100/45">
          <span className="inline-flex items-center gap-2"><IconWaves className="h-4 w-4 text-moss-400" /> р. Аса</span>
          <span className="inline-flex items-center gap-2"><IconLeaf className="h-4 w-4 text-moss-400" /> 230 га земли</span>
          <span className="inline-flex items-center gap-2"><IconFish className="h-4 w-4 text-moss-400" /> сазан · карп · амур</span>
          <span className="inline-flex items-center gap-2"><IconTent className="h-4 w-4 text-moss-400" /> кемпинг 24/7</span>
          <span className="inline-flex items-center gap-2"><IconRoute className="h-4 w-4 text-moss-400" /> 30 км от Тараза</span>
        </div>
      </section>

      {/* 6. CONTACT */}
      <ContactStrip />
    </>
  );
}
