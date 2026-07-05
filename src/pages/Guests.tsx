import { useState } from 'react';
import MapBlock from '../components/MapBlock';
import PriceTable from '../components/PriceTable';
import SectionHeader from '../components/SectionHeader';
import AssetPlaceholder from '../components/AssetPlaceholder';
import ContactBlock from '../components/ContactBlock';
import VideoLightbox from '../components/VideoLightbox';
import Carousel from '../components/Carousel';
import {
  IconFish,
  IconLeaf,
  IconShield,
  IconTent,
  IconWhatsApp,
  IconFire,
  IconRecycle,
  IconPlay,
  IconSparkle,
} from '../components/Icon';

const WA_GUESTS =
  'https://wa.me/77788868808?text=' +
  encodeURIComponent('Здравствуйте! Хочу узнать про отдых и рыбалку в ORLEU.');

const BANNERS = [
  {
    visual: 'forest' as const,
    title: 'Первозданная природа',
    text: 'Чистый воздух, густая роща, проточный водоем и полная удаленность от городского шума для вашего уединения.',
    icon: <IconLeaf className="h-6 w-6" />,
  },
  {
    visual: 'tent' as const,
    title: 'Место для ваших событий',
    text: 'Просторная территория для тимбилдингов, корпоративов и семейных праздников с возможностью ночевки в палатках под звездами.',
    icon: <IconTent className="h-6 w-6" />,
  },
  {
    visual: 'fish' as const,
    title: 'Трофейная рыбалка',
    text: 'Проточный водоем (25 га) с сазаном, карпом и амуром. 2 кг улова уже включены в путевку.',
    icon: <IconFish className="h-6 w-6" />,
  },
  {
    visual: 'field' as const,
    title: 'Прокат и удобства',
    text: 'Аренда удочек и палаток, мангалов, барбекюшниц и казанов. На кассе всегда в наличии дрова, уголь, прикормка, маринад и холодные напитки.',
    icon: <IconShield className="h-6 w-6" />,
  },
  {
    visual: 'sunset' as const,
    title: 'Развитие ORLEU',
    text: 'Скоро открытие партнеров: бани на дровах, эко-кафе, топчаны и беседки, прокат лодок и квадроциклов, конные прогулки, стрельба из лука и многое другое.',
    icon: <IconSparkle className="h-6 w-6" />,
  },
];

const RULES = [
  {
    icon: <IconFish className="h-6 w-6" />,
    title: 'Рыбалка — ваш бонус',
    text: 'В каждый билет включен бесплатный вылов 2 кг рыбы. Перелов оплачивается отдельно по прайсу.',
  },
  {
    icon: <IconRecycle className="h-6 w-6" />,
    title: 'Бережем чистоту',
    text: 'Весь мусор после отдыха просим собирать в пакеты и выбрасывать в специальные контейнеры КФХ.',
  },
  {
    icon: <IconFire className="h-6 w-6" />,
    title: 'Безопасный костер',
    text: 'Разведение костров разрешено строго в мангалах или специально подготовленных костровых зонах.',
  },
  {
    icon: <IconShield className="h-6 w-6" />,
    title: 'Защита водоема',
    text: 'Использование сетей, электроудочек и других браконьерских снастей строго запрещено.',
  },
  {
    icon: <IconLeaf className="h-6 w-6" />,
    title: 'Круглосуточный контроль',
    text: 'На территории ведется видеонаблюдение и круглосуточно производятся объезды территории егерем. При выезде администратор производит контрольный осмотр улова и багажника.',
  },
];

export default function Guests() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [photosOpen, setPhotosOpen] = useState(false);

  return (
    <>
      {/* 2.1 HERO */}
      <section className="relative isolate overflow-hidden">
        <AssetPlaceholder variant="water" className="absolute inset-0 rounded-none border-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/55 to-ink-950" />
        <div className="container-x relative grid min-h-[78vh] place-items-center py-24">
          <div className="max-w-3xl text-center">
            <span className="chip">Отдых · Рыбалка · Кемпинг</span>
            <h1 className="title-xl mt-6 text-balance">
              ORLEU: Территория вашего{' '}
              <span className="bg-gradient-to-r from-moss-400 to-moss-500 bg-clip-text text-transparent">
                комфортного отдыха на природе
              </span>
            </h1>
            <p className="lead mx-auto mt-6 max-w-2xl">
              Эко-отдых в 25 км от Тараза. Работаем круглосуточно: дневные, ночные
              и суточные форматы отдыха. Рыбалка уже включена в стоимость путевки
              (2 кг улова — в подарок).
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a href={WA_GUESTS} target="_blank" rel="noreferrer" className="btn-primary">
                <IconWhatsApp className="h-5 w-5" /> Планирую отдых
              </a>
              <a href="#prices" className="btn-ghost">Наши тарифы</a>
            </div>
          </div>
        </div>
      </section>

      {/* 2.2 MAP + VIDEO */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Ваш гид по территории"
            title="Карта водоема и береговой линии"
            subtitle="5 километров дикой природы, подготовленной для вашего удобства."
          />
          <div className="mt-12">
            <MapBlock
              pins={[
                { x: 18, y: 35, label: 'Въезд / касса', tone: 'amber' },
                { x: 32, y: 55, label: 'Автостоянка' },
                { x: 50, y: 40, label: 'Пикниковая зона' },
                { x: 64, y: 60, label: 'Роща' },
                { x: 82, y: 50, label: 'Сектор глубокой рыбалки', tone: 'blue' },
              ]}
              caption="Интерактивная карта территории — приблизьте, чтобы рассмотреть зоны."
              videoLabel="Посмотреть видео всей территории отдыха"
              onVideoClick={() => setVideoOpen(true)}
              extraActions={
                <button
                  type="button"
                  onClick={() => setPhotosOpen(true)}
                  className="btn-ghost"
                >
                  Посмотреть фото территории отдыха
                </button>
              }
            />
          </div>
        </div>
      </section>

      {/* 2.3 БАННЕРЫ — 5 штук */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Ваш комфортный отдых в ORLEU"
            title="Ваш комфортный отдых в ORLEU"
            subtitle="Создаем условия для спокойного семейного отдыха, корпоративных выездов и настоящей рыбалки."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BANNERS.map((b, i) => (
              <div
                key={b.title}
                className={`card group relative flex flex-col overflow-hidden ${
                  i === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <AssetPlaceholder
                  variant={b.visual}
                  className={`-mx-6 -mt-6 mb-6 rounded-none border-0 sm:-mx-8 sm:-mt-8 ${
                    i === 0 ? 'aspect-[2/1]' : 'aspect-[4/3]'
                  }`}
                />
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-moss-500/10 text-moss-400 ring-1 ring-moss-500/20">
                  {b.icon}
                </span>
                <h3 className="mt-5 text-xl font-bold text-sand-50">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand-100/70">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.4 Тарифы */}
      <section id="prices" className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Тарифы"
            title="Стоимость пребывания в ORLEU"
            subtitle="Официальный прайс-лист КФХ на сезон 2026 года."
          />
          <div className="mt-12">
            <PriceTable
              rows={[
                { category: 'Взрослый билет', day: '3 000 ₸', night: '3 000 ₸', full: '5 000 ₸' },
                { category: 'Детский билет (7–12 лет)', day: '1 500 ₸', night: '1 500 ₸', full: '2 500 ₸' },
              ]}
              footnote="В каждый взрослый билет включен бесплатный вылов 2 кг рыбы. Перелов: 1 500 ₸/кг."
            />
          </div>
        </div>
      </section>

      {/* 2.5 ПРАВИЛА */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Правила"
            title="Правила бережного отдыха"
            subtitle="Мы сохраняем чистоту и спокойствие для вашего качественного отдыха."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RULES.map((r) => (
              <div key={r.title} className="card flex flex-col gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-moss-500/10 text-moss-400 ring-1 ring-moss-500/20">
                  {r.icon}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-sand-50">{r.title}</h3>
                  <p className="mt-2 text-sm text-sand-100/70">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.6 CTA */}
      <section className="section">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-moss-500/30 bg-gradient-to-br from-moss-500/15 via-ink-850 to-ink-900 p-10 sm:p-16 text-center">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-moss-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-moss-700/30 blur-3xl" />
            <div className="relative">
              <span className="chip">Готовы к отдыху?</span>
              <h2 className="title-lg mt-6">Готовы к отдыху в ORLEU?</h2>
              <p className="lead mx-auto mt-4 max-w-2xl">
                Напишите нам — проконсультируем и поможем забронировать место.
              </p>
              <a
                href={WA_GUESTS}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-10 animate-pulseGlow"
              >
                <IconWhatsApp className="h-5 w-5" />
                Планирую отдых
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2.7 Контакты */}
      <ContactBlock />

      <VideoLightbox
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=SW4hlTy8Hwg"
        title="Видео-обзор всей территории отдыха ORLEU"
      />

      {photosOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/85 p-4 backdrop-blur-md"
          onClick={() => setPhotosOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPhotosOpen(false)}
              aria-label="Закрыть"
              className="absolute -top-12 right-0 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-ink-900/80 text-sand-50 transition hover:bg-ink-800"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
            <Carousel
              slides={[
                { src: '', title: 'Вид с высоты', caption: 'Панорама водоёма и полей.' },
                { src: '', title: 'Закат в ORLEU' },
                { src: '', title: 'Трофейный улов' },
                { src: '', title: 'Кемпинговая зона' },
              ].map((s) => ({
                ...s,
                src: `data:image/svg+xml;utf8,${encodeURIComponent(
                  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'><rect width='16' height='9' fill='%230a1612'/></svg>`
                )}`,
              }))}
            />
          </div>
        </div>
      )}
    </>
  );
}
