import { Link } from 'react-router-dom';
import { useState } from 'react';
import AssetPlaceholder from '../components/AssetPlaceholder';
import FeatureCard from '../components/FeatureCard';
import SectionHeader from '../components/SectionHeader';
import Timeline from '../components/Timeline';
import { IconChart, IconFish, IconLeaf, IconSeed, IconSheep, IconShield, IconSparkle, IconTent } from '../components/Icon';

const GALLERY_TABS = ['Фото с дрона', 'Рыбалка и уловы', 'Наше хозяйство'] as const;
type Tab = (typeof GALLERY_TABS)[number];

const GALLERIES: Record<Tab, { variant: 'aerial' | 'water' | 'field' | 'fish' | 'tent' | 'sunset' | 'forest'; title: string }[]> = {
  'Фото с дрона': [
    { variant: 'aerial', title: 'Восход над водоемом' },
    { variant: 'water', title: 'Зеркальная гладь' },
    { variant: 'sunset', title: 'Закат над р. Аса' },
    { variant: 'forest', title: 'Столетняя роща' },
    { variant: 'field', title: 'Южные поля' },
    { variant: 'aerial', title: 'Северная граница' },
  ],
  'Рыбалка и уловы': [
    { variant: 'fish', title: 'Сазан 8 кг' },
    { variant: 'water', title: 'Закидушки на рассвете' },
    { variant: 'fish', title: 'Зеркальный карп' },
    { variant: 'fish', title: 'Белый амур' },
    { variant: 'water', title: 'Тихий сектор' },
    { variant: 'fish', title: 'Толстолобик' },
  ],
  'Наше хозяйство': [
    { variant: 'field', title: 'Поля клевера' },
    { variant: 'tent', title: 'Кемпинговая зона' },
    { variant: 'forest', title: 'Подъездные пути' },
    { variant: 'field', title: 'Пастбища' },
    { variant: 'aerial', title: 'Инфраструктура' },
    { variant: 'sunset', title: 'Закат на хозяйстве' },
  ],
};

export default function About() {
  const [tab, setTab] = useState<Tab>('Фото с дрона');

  return (
    <>
      {/* 4.1 HERO */}
      <section className="relative isolate overflow-hidden">
        <AssetPlaceholder variant="field" className="absolute inset-0 rounded-none border-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/55 to-ink-950" />
        <div className="container-x relative grid min-h-[78vh] place-items-center py-24">
          <div className="max-w-3xl text-center">
            <span className="chip">Земельный кластер · 10+ лет</span>
            <h1 className="title-xl mt-6 text-balance">
              Твердо стоим на земле,{' '}
              <span className="bg-gradient-to-r from-moss-400 to-moss-500 bg-clip-text text-transparent">
                уверенно смотрим в будущее
              </span>
            </h1>
            <p className="lead mx-auto mt-6 max-w-2xl">
              Управление активами площадью 230 гектар. Более 10 лет бережного
              развития природной экосистемы, ведения эффективного
              агропроизводства и создания условий для качественного отдыха.
            </p>
            <div className="mt-10">
              <a href="#activities" className="btn-primary">
                📜 Изучить деятельность и планы КФХ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4.2 VALUES */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Философия бизнеса"
            title="Принципы, на которых мы строим ӨRLEU"
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            <FeatureCard
              icon={<IconShield />}
              title="Ответственность и экологичность"
              description="Сохраняем первозданную чистоту реки и земли. Никакой химии, браконьерства или варварского освоения ресурсов. Защита водоема — приоритет."
              number="01"
            />
            <FeatureCard
              icon={<IconChart />}
              title="Прозрачность и системность"
              description="Вся операционная и коммерческая деятельность КФХ оцифрована. CRM-системы для контроля гостевого потока, аренды и транзакций."
              number="02"
            />
            <FeatureCard
              icon={<IconSparkle />}
              title="Открытость к инновациям"
              description="Не стоим на месте. Каждая зона КФХ проектируется с учетом современных трендов экотуризма и интенсивной аквакультуры."
              number="03"
            />
          </div>
        </div>
      </section>

      {/* 4.3 ACTIVITIES */}
      <section id="activities" className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Деятельность"
            title="Многофункциональная деятельность КФХ"
            subtitle="ӨRLEU развивается как диверсифицированный холдинг, объединяющий производство и сервис."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: <IconFish />,
                title: 'Индустриальная аквакультура',
                desc: 'Зарыбленный проточный водоем 25 га с 10-летней естественной экосистемой. Основные виды: сазан, карп, белый амур, толстолобик. Собственные пруды для подращивания малька.',
                visual: 'water' as const,
              },
              {
                icon: <IconSeed />,
                title: 'Растениеводство и кормовая база',
                desc: 'Использование земельного фонда для выращивания высококачественных кормовых культур (клевер и др.). Собственная независимая кормовая база.',
                visual: 'field' as const,
              },
              {
                icon: <IconSheep />,
                title: 'Животноводство и птицеводство',
                desc: 'Подготовка инфраструктуры и пастбищ для разведения мелкого рогатого скота (МРС) и птицы мясных пород.',
                visual: 'forest' as const,
              },
              {
                icon: <IconTent />,
                title: 'Современная рекреация (экотуризм)',
                desc: 'B2C-платформа для загородного отдыха вдоль 5-километровой береговой линии. Кемпинг, трофейная рыбалка и интеграция B2C-партнеров.',
                visual: 'tent' as const,
              },
            ].map((a) => (
              <div key={a.title} className="card grid items-center gap-6 sm:grid-cols-[1.1fr_1fr]">
                <div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-moss-500/10 text-moss-400 ring-1 ring-moss-500/20">
                    {a.icon}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-sand-50">{a.title}</h3>
                  <p className="mt-3 text-sm text-sand-100/70">{a.desc}</p>
                </div>
                <AssetPlaceholder variant={a.visual} className="aspect-[4/3]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.4 ROADMAP */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Дорожная карта"
            title="Стратегия развития и инвестиционные планы"
            subtitle="Мы планомерно масштабируем бизнес-модель КФХ."
          />
          <div className="mt-14">
            <Timeline
              steps={[
                {
                  phase: 'Этап 1 · 2024–2026',
                  title: 'Оцифровка и инфраструктура',
                  text: 'Внедрение CRM-системы контроля гостей, запуск дисконтной программы, благоустройство берега, привлечение первых B2C-партнеров (бани, прокат).',
                  status: 'current',
                },
                {
                  phase: 'Этап 2 · 2026–2027',
                  title: 'Интенсивное рыбоводство',
                  text: 'Установка современных садковых линий в проточном водоеме для кратного увеличения объемов производства товарной рыбы.',
                  status: 'next',
                },
                {
                  phase: 'Этап 3 · 2027–2028',
                  title: 'Расширение агросектора',
                  text: 'Полноценное хозяйство по разведению МРС на собственных пастбищах, масштабирование посевных площадей под клевер через СП.',
                  status: 'future',
                },
                {
                  phase: 'Этап 4 · 2028+',
                  title: 'Полный цикл переработки',
                  text: 'Собственный цех по переработке, вялению и копчению рыбы. Замкнутая экосистема производство → переработка → сбыт/туризм.',
                  status: 'future',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 4.5 GALLERY */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Галерея"
            title="Жизнь и атмосфера КФХ"
            subtitle="Лучшие медиа-материалы по направлениям."
          />

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {GALLERY_TABS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  tab === t
                    ? 'border-moss-500/60 bg-moss-500/10 text-moss-400'
                    : 'border-white/10 text-sand-100/65 hover:border-white/30'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERIES[tab].map((g, i) => (
              <AssetPlaceholder
                key={`${tab}-${i}`}
                variant={g.variant}
                className="aspect-[4/3]"
                title={g.title}
                badge={tab === 'Фото с дрона' ? 'Аэро' : tab === 'Рыбалка и уловы' ? 'Улов' : 'Хозяйство'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4.6 CTA SPLIT */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-2">
            <Link
              to="/guests"
              className="group relative overflow-hidden rounded-3xl border border-moss-500/30 bg-gradient-to-br from-moss-500/15 to-ink-900 p-10"
            >
              <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-moss-500/20 blur-3xl" />
              <span className="chip">Для гостей</span>
              <h3 className="title-md relative mt-5">
                🎣 Приехать как гость
              </h3>
              <p className="lead relative mt-3 max-w-md">
                Тихий семейный отдых, кемпинг и трофейная рыбалка.
              </p>
              <div className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-moss-400">
                Перейти на страницу отдыха →
              </div>
            </Link>

            <Link
              to="/partnership"
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-ink-800 to-ink-900 p-10"
            >
              <span className="chip">Для партнеров</span>
              <h3 className="title-md mt-5">💼 Стать партнером / Создать СП</h3>
              <p className="lead mt-3 max-w-md">
                Готовая платформа для B2C-сервисов и совместных предприятий.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sand-50">
                Условия и категории →
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
