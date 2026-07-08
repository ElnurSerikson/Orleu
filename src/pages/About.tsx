import { useState } from 'react';
import { Link } from 'react-router-dom';
import AssetPlaceholder from '../components/AssetPlaceholder';
import FeatureCard from '../components/FeatureCard';
import SectionHeader from '../components/SectionHeader';
import Timeline from '../components/Timeline';
import ContactBlock from '../components/ContactBlock';
import PhotoLightbox from '../components/PhotoLightbox';
import {
  IconArrowRight,
  IconChart,
  IconFish,
  IconSeed,
  IconSheep,
  IconShield,
  IconSparkle,
  IconTent,
} from '../components/Icon';

const GALLERY = [
  { variant: 'aerial' as const, src: '/photos/dji-aerial.jpg', title: 'Панорама с дрона' },
  { variant: 'water' as const, src: '/photos/p619.jpg', title: 'Зеркальная гладь водоема' },
  { variant: 'forest' as const, src: '/photos/p637.jpg', title: 'Прибрежная роща' },
  { variant: 'field' as const, src: '/photos/p650.jpg', title: 'Поля под клевер' },
  { variant: 'sunset' as const, src: '/photos/p660.jpg', title: 'Закат над р. Малая Аса' },
  { variant: 'tent' as const, src: '/photos/p624.jpg', title: 'Кемпинговая зона' },
  { variant: 'fish' as const, src: '/photos/p646.jpg', title: 'Рыболовные сектора' },
  { variant: 'aerial' as const, src: '/photos/p635.jpg', title: 'Русло реки Малая Аса' },
];

const ACTIVITIES = [
  {
    icon: <IconFish />,
    title: 'Индустриальная Аквакультура',
    desc: 'Управление зарыбленным водоемом (25 га) с 10-летней историей. Фокус на промышленное выращивание товарной рыбы и развитие садковых линий.',
    visual: 'water' as const,
    src: '/photos/p643.jpg',
  },
  {
    icon: <IconSeed />,
    title: 'Агросектор и Корма',
    desc: 'Стратегическое использование земельного фонда для обеспечения независимой кормовой базы и развития посевных площадей.',
    visual: 'field' as const,
    src: '/photos/p650.jpg',
  },
  {
    icon: <IconSheep />,
    title: 'Животноводство',
    desc: 'Создание базы для эффективного разведения мелкого рогатого скота (МРС), обеспеченной пастбищными угодьями и инфраструктурой.',
    visual: 'forest' as const,
    src: '/photos/p654.jpg',
  },
  {
    icon: <IconTent />,
    title: 'Современная Рекреация',
    desc: 'B2C-платформа: превращение береговой линии в прибыльный сервис для отдыха, который работает 24/7, обеспечивая поток клиентов для всех бизнес-единиц.',
    visual: 'tent' as const,
    src: '/photos/p624.jpg',
  },
];

export default function About() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      {/* 4.1 HERO */}
      <section className="relative isolate overflow-hidden">
        <AssetPlaceholder
          variant="aerial"
          src="/hero-bg.jpg"
          alt="Аэросъёмка КФХ ӨRLEU"
          className="absolute inset-0 rounded-none border-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/55 to-ink-950" />
        <div className="container-x relative grid min-h-[78vh] place-items-center py-24">
          <div className="max-w-3xl text-center">
            <span className="chip">Масштаб производства КФХ ӨRLEU</span>
            <h1 className="title-xl mt-6 text-balance">
              Масштабное{' '}
              <span className="bg-gradient-to-r from-moss-400 to-moss-500 bg-clip-text text-transparent">
                агро-рекреационное производство
              </span>
            </h1>
            <p className="lead mx-auto mt-6 max-w-2xl">
              Более 230 гектаров земли и 25 гектаров проточной воды под управлением
              профессиональной команды. Оцифрованная экосистема для инвестиций,
              агробизнеса и качественного загородного отдыха.
            </p>
            <div className="mt-10">
              <a href="#activities" className="btn-primary">
                Изучить деятельность и планы КФХ <IconArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4.2 СТАТУС И ФИЛОСОФИЯ */}
      <section className="section section-solid">
        <div className="container-x">
          <SectionHeader
            eyebrow="Статус и Философия бизнеса"
            title="Принципы управления ӨRLEU: Системность и масштаб"
            subtitle="Формируем образ надежного, системного и прозрачного партнера."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            <FeatureCard
              icon={<IconShield />}
              title="«Экосистема как капитал»"
              description="Мы не эксплуатируем ресурс, а капитализируем его. Ответственное природопользование — основа сохранения ценности наших земель и водоема на десятилетия вперед."
              number="01"
            />
            <FeatureCard
              icon={<IconChart />}
              title="«Оцифрованный бизнес»"
              description="Все процессы — от учета рыбопосадочного материала до контроля гостевого потока — оцифрованы. Мы исключаем человеческий фактор и хаос, предоставляя партнерам прозрачные данные о доходности."
              number="02"
            />
            <FeatureCard
              icon={<IconSparkle />}
              title="«Партнерский подход»"
              description="Мы не просто сдаем землю — мы создаем площадку для синергии. Наш подход исключает фиксированную аренду в пользу моделей участия в прибыли, где успех партнера — это успех хозяйства."
              number="03"
            />
          </div>
        </div>
      </section>

      {/* 4.3 ЦИФРОВАЯ ЭКОСИСТЕМА */}
      <section id="activities" className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Цифровая экосистема деятельности"
            title="Экосистема ӨRLEU: Диверсификация и стабильность"
            subtitle="Мы объединили агропроизводство, интенсивную аквакультуру и сервисную инфраструктуру в единый холдинг с управляемыми рисками."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {ACTIVITIES.map((a) => (
              <div key={a.title} className="card grid items-center gap-6 sm:grid-cols-[1.1fr_1fr]">
                <div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-moss-500/10 text-moss-400 ring-1 ring-moss-500/25">
                    {a.icon}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-sand-50">{a.title}</h3>
                  <p className="mt-3 text-sm text-sand-100/70">{a.desc}</p>
                </div>
                <AssetPlaceholder variant={a.visual} src={a.src} alt={a.title} className="aspect-[4/3]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.4 СТРАТЕГИЯ РАЗВИТИЯ */}
      <section className="section section-solid">
        <div className="container-x">
          <SectionHeader
            eyebrow="Стратегия развития и инвестиционный потенциал"
            title="Эволюция ӨRLEU: От освоения к системному масштабированию"
            subtitle="Планомерно масштабируем бизнес-модель КФХ по чётким этапам."
          />
          <div className="mt-14">
            <Timeline
              steps={[
                {
                  phase: 'Этап 1 · 2011–2024',
                  title: 'Фундамент и Экспертиза',
                  text: 'Период комплексного освоения земельного фонда и водоема. Наработка производственной экспертизы в растениеводстве и аквакультуре, формирование базового клиентского потока в сфере рыболовного отдыха.',
                },
                {
                  phase: 'Этап 2 · 2024–2026',
                  title: 'Трансформация и Оцифровка',
                  text: 'Переход к модели управляемого бизнеса: внедрение CRM-стандартов, создание прозрачной системы учета, запуск цифровых каналов коммуникации и системное обновление инфраструктуры для партнерских проектов и B2C сегментов.',
                },
                {
                  phase: 'Этап 3 · 2026–2027',
                  title: 'Интенсификация производства',
                  text: 'Масштабирование аквакультуры через установку промышленных садковых линий. Переход от экстенсивного использования ресурсов к интенсивным методам выращивания товарной рыбы с высокой маржинальностью.',
                },
                {
                  phase: 'Этап 4 · 2027–2028+',
                  title: 'Полный цикл и Капитализация',
                  text: 'Создание цеха глубокой переработки продукции (вяление, копчение), замыкание производственного цикла внутри экосистемы и развитие партнерских СП в агросекторе (МРС, кормопроизводство) для максимизации капитализации актива.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 4.5 ГАЛЕРЕЯ */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Галерея ӨRLEU"
            title="Галерея ӨRLEU: Масштаб земель и красота природы"
            subtitle="Фотофиксация ключевых объектов инфраструктуры, земельных угодий и атмосферы нашей экосистемы."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((g, i) => (
              <button
                key={`${g.title}-${i}`}
                type="button"
                onClick={() => setLightbox(i)}
                className="group text-left"
              >
                <AssetPlaceholder
                  variant={g.variant}
                  src={g.src}
                  alt={g.title}
                  className="aspect-[4/3] transition group-hover:-translate-y-1"
                  badge={`0${i + 1}`}
                />
                <div className="mt-3 text-sm font-semibold text-sand-50">{g.title}</div>
              </button>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-sand-100/55">
            Нажмите на любое фото, чтобы открыть его в полноэкранном режиме.
          </p>
        </div>
      </section>

      {/* 4.6 ФИНАЛИЗАЦИЯ ВЫБОРА */}
      <section className="section section-solid">
        <div className="container-x">
          <SectionHeader
            eyebrow="Сделайте выбор"
            title="Выберите ваш формат взаимодействия с ӨRLEU"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Link
              to="/guests"
              className="group relative overflow-hidden rounded-3xl border border-white/25 bg-white/[0.07] backdrop-blur-xl p-10 transition hover:-translate-y-1"
            >
              <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
              <span className="chip">Для Гостей</span>
              <h3 className="title-md relative mt-5">Рекреация и отдых</h3>
              <p className="lead relative mt-3 max-w-md">
                Территория комфорта на берегу реки Малая Аса: от профессиональной
                трофейной рыбалки до организации событийного отдыха в кругу близких.
              </p>
              <div className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sand-50">
                Перейти в раздел отдыха
                <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              to="/partnership"
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-ink-900/45 backdrop-blur-xl p-10 transition hover:-translate-y-1"
            >
              <span className="chip">Для Партнеров</span>
              <h3 className="title-md mt-5">Партнерство и совместные предприятия</h3>
              <p className="lead mt-3 max-w-md">
                Масштабируйте бизнес на базе нашей инфраструктуры. Предлагаем
                прозрачные условия для развития агро-проектов, сервисных услуг и
                event-площадок по модели Совместного Предприятия.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sand-50">
                Перейти в раздел партнерства
                <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4.7 Контакты */}
      <ContactBlock />

      {lightbox !== null && (
        <PhotoLightbox
          photos={GALLERY.map((g) => ({ src: g.src, title: g.title }))}
          startIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
