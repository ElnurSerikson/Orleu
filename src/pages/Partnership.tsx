import { useState } from 'react';
import Accordion from '../components/Accordion';
import AssetPlaceholder from '../components/AssetPlaceholder';
import FeatureCard from '../components/FeatureCard';
import MapBlock from '../components/MapBlock';
import SectionHeader from '../components/SectionHeader';
import ContactBlock from '../components/ContactBlock';
import VideoLightbox from '../components/VideoLightbox';
import {
  IconArrowRight,
  IconBath,
  IconChart,
  IconFish,
  IconLeaf,
  IconRoute,
  IconSeed,
  IconShield,
  IconSparkle,
  IconUsers,
  IconWhatsApp,
  IconWaves,
} from '../components/Icon';

const WA_PARTNERSHIP =
  'https://wa.me/77788868808?text=' +
  encodeURIComponent(
    'Здравствуйте! Меня интересует партнерство в КФХ «ӨRLEU». Хотел бы обсудить возможности сотрудничества.'
  );
const WA_LAND =
  'https://wa.me/77788868808?text=' +
  encodeURIComponent(
    'Здравствуйте! Меня интересуют детали по условиям сотрудничества с КФХ «ӨRLEU».'
  );

const FACTS = [
  {
    icon: <IconLeaf />,
    value: '230+ га',
    label: 'Земли — плодородные территории для эффективного агробизнеса и размещения инфраструктурных объектов',
  },
  {
    icon: <IconFish />,
    value: '25+ га',
    label: 'Водоёма — проточное хозяйство со статусом ОТРХ, профессиональная база для аквакультуры и товарного рыбоводства',
  },
  {
    icon: <IconWaves />,
    value: '5+ км',
    label: 'Береговой линии — эксклюзивное пространство для приватных зон и коммерческих прибрежных точек',
  },
  {
    icon: <IconRoute />,
    value: '25 км',
    label: 'До Тараза — логистическое плечо, обеспечивающее доступность для клиентов, персонала и доставки ресурсов',
  },
  {
    icon: <IconShield />,
    value: '24/7',
    label: 'Охрана — круглосуточный мониторинг и видеонаблюдение, гарантия безопасности вашего имущества и оборудования',
  },
  {
    icon: <IconUsers />,
    value: '1000+',
    label: 'Гостей — пиковая вместимость площадки, готовой к приему крупных потоков без потери качества',
  },
];

const BENEFITS = [
  {
    icon: <IconShield />,
    title: 'Партнерство без аренды',
    description:
      'Мы ушли от модели фиксированных платежей. Вы инвестируете в развитие своего проекта, а не в расходы на аренду территории.',
  },
  {
    icon: <IconUsers />,
    title: 'Готовый клиентский поток',
    description:
      'Вам не нужно искать первых клиентов. За счет действующей рекреационной зоны вы получаете доступ к сформированной базе гостей с первого дня работы.',
  },
  {
    icon: <IconChart />,
    title: 'Прозрачная система дохода',
    description:
      'Вместо аренды — участие в прибыли. Мы работаем на результат, где ваш доход напрямую зависит от эффективности проекта и оборота.',
  },
  {
    icon: <IconShield />,
    title: 'Юридическая стабильность',
    description:
      'Ваш бизнес защищен легальным статусом КФХ и ОТРХ. Все процессы прозрачны, а правовые риски исключены.',
  },
  {
    icon: <IconSparkle />,
    title: 'Инфраструктурная синергия',
    description:
      'Используйте готовую базу (охрана, логистика, трафик) для запуска своего направления. Экономьте на создании инфраструктуры с нуля.',
  },
  {
    icon: <IconLeaf />,
    title: 'Участие в экосистеме',
    description:
      'Вы не просто арендуете кусок земли, вы становитесь частью сообщества, где ресурсы хозяйства и маркетинговые инструменты работают на рост вашего дохода.',
  },
];

const CATEGORIES = [
  {
    tag: 'Производственный кластер',
    icon: <IconSeed />,
    title: 'Агро & Аква',
    items: ['Растениеводство', 'Животноводство', 'Разведение рыбы', 'Богарные и поливные земли'],
    conditions:
      'Профессиональная база для масштабирования бизнеса в сфере сельского хозяйства и товарного рыбоводства. Долевое участие в прибыли или долгосрочное партнерство с использованием инфраструктуры КФХ и ОТРХ.',
  },
  {
    tag: 'Сервисная инфраструктура',
    icon: <IconBath />,
    title: 'Досуг & Гостеприимство',
    items: ['Кафе', 'Банные комплексы', 'Топчаны и глэмпинг', 'Аренда техники и конные прогулки'],
    conditions:
      'Создание точек притяжения для потока гостей, уже присутствующих на территории хозяйства. Индивидуальное соглашение по разделению дохода (Revenue Share) без фиксированной арендной платы.',
  },
  {
    tag: 'Event-площадки',
    icon: <IconSparkle />,
    title: 'События & Спорт',
    items: ['Фестивали', 'Корпоративные тимбилдинги', 'Спортивные соревнования', 'Частные мероприятия'],
    conditions:
      'Масштабное пространство для проведения мероприятий любого формата и уровня сложности. Гибкая система партнерства на основе оборота мероприятия с технической поддержкой и маркетинговым продвижением.',
  },
];

const FAQ = [
  {
    q: 'Чем статус КФХ и ОТРХ выгоден для моего проекта?',
    a: 'Это обеспечивает легальную базу для вашей деятельности, гарантирует законность использования водных и земельных ресурсов, а также защищает бизнес от правовых рисков при проверках.',
  },
  {
    q: 'Как именно распределяется прибыль без фиксированной аренды?',
    a: 'Мы используем модель Revenue Share (разделение выручки). Это позволяет партнеру не «замораживать» оборотные средства в аренде, а инвестировать их в развитие своего направления, делясь процентом от фактически полученной прибыли.',
  },
  {
    q: 'Какую именно инфраструктуру (электричество, вода, охрана) предоставляет ӨRLEU?',
    a: 'Мы предоставляем доступ к инженерным сетям, круглосуточной охране и системе видеонаблюдения, а также обеспечиваем техническое обслуживание периметра, что позволяет вам сэкономить на капитальных затратах при старте.',
  },
  {
    q: 'Могу ли я реализовывать на вашей территории свой маркетинговый план?',
    a: 'Да, мы приветствуем синергию. Мы предоставляем доступ к нашей базе гостей и маркетинговым каналам для ускоренного продвижения ваших услуг внутри экосистемы хозяйства.',
  },
  {
    q: 'Что происходит, если мой проект требует долгосрочного планирования?',
    a: 'Мы заключаем долгосрочные договоры о совместной деятельности, которые гарантируют стабильность использования площадки и защищают интересы обеих сторон на весь срок реализации проекта.',
  },
];

export default function Partnership() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      {/* 3.1 HERO */}
      <section className="relative isolate overflow-hidden">
        <AssetPlaceholder variant="aerial" className="absolute inset-0 rounded-none border-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/90 via-ink-950/65 to-ink-950" />
        <div className="container-x relative grid min-h-[78vh] place-items-center py-24">
          <div className="max-w-3xl text-center">
            <span className="chip">B2B · СП · Инвестиции</span>
            <h1 className="title-xl mt-6 text-balance">
              ӨRLEU — масштабируемая бизнес-платформа на{' '}
              <span className="bg-gradient-to-r from-moss-400 to-moss-500 bg-clip-text text-transparent">
                255 гектарах
              </span>
            </h1>
            <p className="lead mx-auto mt-6 max-w-2xl">
              Готовая инфраструктура для сервисного бизнеса, event-индустрии,
              растениеводства и аквакультуры. Запускайте свои проекты без стартовых
              вложений в аренду земли — работайте в партнерской экосистеме с
              гарантированным клиентским потоком.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a href="#categories" className="btn-primary">
                Выбрать направление партнерства <IconArrowRight className="h-4 w-4" />
              </a>
              <a href={WA_PARTNERSHIP} target="_blank" rel="noreferrer" className="btn-ghost">
                Обсудить детали
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3.2 ФАКТЫ И ПОТЕНЦИАЛ */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Факты и потенциал"
            title="Факты и коммерческий потенциал"
            subtitle="Технический паспорт: масштаб и инфраструктурная готовность, подтвержденные цифрами."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FACTS.map((f, i) => (
              <FeatureCard
                key={f.value}
                icon={f.icon}
                title={`${f.value}`}
                description={f.label}
                number={`0${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3.3 ИНТЕРАКТИВНАЯ КАРТА РЕСУРСОВ */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Интерактивная карта ресурсов"
            title="Карта инфраструктурных возможностей ӨRLEU"
            subtitle="Визуализация ключевых зон с готовым клиентским трафиком."
          />
          <div className="mt-12">
            <MapBlock
              pins={[
                { x: 18, y: 30, label: 'Зона активного отдыха', tone: 'amber' },
                { x: 38, y: 50, label: 'Профессиональное рыбоводство', tone: 'blue' },
                { x: 56, y: 38, label: 'Event-площадка' },
                { x: 74, y: 52, label: 'Поля под клевер 230 га' },
                { x: 88, y: 30, label: 'Пастбища МРС' },
              ]}
              caption="Кликните на маркер, чтобы увидеть описание зоны."
              videoLabel="Видео-обзор инфраструктуры"
              onVideoClick={() => setVideoOpen(true)}
            />
          </div>

          <div className="mt-10 card">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="h-eyebrow">Расширение возможностей</div>
                <p className="mt-3 text-sm leading-relaxed text-sand-100/75">
                  Помимо представленных на карте рекреационных зон, в управлении
                  хозяйства находятся дополнительные земельные массивы (включая
                  поливные, пастбищные и богарные земли) общей площадью{' '}
                  <strong className="text-sand-50">230+ гектаров</strong>. Эти
                  территории предназначены для масштабного растениеводства,
                  животноводства и реализации крупных производственных проектов.
                </p>
              </div>
              <a
                href={WA_LAND}
                target="_blank"
                rel="noreferrer"
                className="btn-primary flex-shrink-0"
              >
                Узнать подробнее о земельных участках <IconArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3.4 ВЫГОДЫ ПАРТНЁРСТВА */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Бизнес-модель"
            title="Почему сотрудничество с ӨRLEU — ваш эффективный актив"
            subtitle="Мы предлагаем модель, где вы капитализируете свои проекты, а не теряете средства на фиксированной аренде."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b, i) => (
              <FeatureCard
                key={b.title}
                icon={b.icon}
                title={b.title}
                description={b.description}
                number={`0${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3.5 КАТЕГОРИИ ПАРТНЁРСТВА */}
      <section id="categories" className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Категории партнерства"
            title="Форматы реализации вашего бизнеса"
            subtitle="Выберите направление, соответствующее вашим целям, и используйте инфраструктуру ӨRLEU для быстрого старта."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <div key={c.title} className="card relative flex flex-col overflow-hidden">
                <span className="chip">{c.tag}</span>
                <span className="mt-6 grid h-12 w-12 place-items-center rounded-2xl bg-moss-500/10 text-moss-400 ring-1 ring-moss-500/20">
                  {c.icon}
                </span>
                <h3 className="mt-5 text-xl font-bold text-sand-50">{c.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-sand-100/75">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-moss-500" /> {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-xl border border-white/10 bg-ink-950/40 p-4 text-xs leading-relaxed text-sand-100/65">
                  <div className="mb-1 text-[10px] uppercase tracking-[0.2em] text-moss-400">
                    Условия сотрудничества
                  </div>
                  {c.conditions}
                </div>
                <a
                  href={WA_PARTNERSHIP}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost mt-6"
                >
                  Обсудить категорию <IconArrowRight className="h-4 w-4" />
                </a>
                <div className="absolute right-4 top-4 font-display text-3xl font-extrabold text-white/5">
                  0{i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.6 FAQ */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="FAQ"
              title="Вопросы и решения"
              subtitle="Разъясняем ключевые аспекты нашего партнерства."
            />
            <a
              href={WA_PARTNERSHIP}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-8"
            >
              <IconWhatsApp className="h-4 w-4" /> Спросить напрямую
            </a>
          </div>
          <Accordion items={FAQ} />
        </div>
      </section>

      {/* 3.7 Контакты */}
      <ContactBlock />

      <VideoLightbox
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=SW4hlTy8Hwg"
        title="Видео-обзор инфраструктуры ӨRLEU"
      />
    </>
  );
}
