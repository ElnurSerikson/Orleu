import FeatureCard from '../components/FeatureCard';
import MapBlock from '../components/MapBlock';
import PriceTable from '../components/PriceTable';
import SectionHeader from '../components/SectionHeader';
import AssetPlaceholder from '../components/AssetPlaceholder';
import {
  IconCheck,
  IconFish,
  IconLeaf,
  IconShield,
  IconTent,
  IconWhatsApp,
} from '../components/Icon';

export default function Guests() {
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
              Ваш идеальный отдых на природе и{' '}
              <span className="bg-gradient-to-r from-moss-400 to-moss-500 bg-clip-text text-transparent">
                трофейная рыбалка
              </span>{' '}
              в ӨRLEU
            </h1>
            <p className="lead mx-auto mt-6 max-w-2xl">
              Проведите время с семьей и друзьями в 30 минутах от города Тараз.
              Простор, тишина и гарантированный клев.
            </p>
            <div className="mt-10">
              <a href="#prices" className="btn-primary">
                🎣 Посмотреть цены и забронировать
              </a>
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
              caption="Кликните на точку, чтобы увидеть описание зоны."
              videoLabel="🎥 Видео-инструкция: как доехать"
            />
          </div>
        </div>
      </section>

      {/* 2.3 BENEFITS */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Почему выбирают КФХ ӨRLEU?"
            title="Преимущества отдыха у нас"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<IconLeaf />}
              title="Первозданная природа"
              description="Чистый воздух, столетняя роща, удаленность от промышленных зон и дорожного шума."
              number="01"
            />
            <FeatureCard
              icon={<IconFish />}
              title="Богатый улов"
              description="Проточный зарыбленный водоем 25 га. Сазан, зеркальный карп, белый амур и толстолобик."
              number="02"
            />
            <FeatureCard
              icon={<IconShield />}
              title="Комфорт на берегу"
              description="Костровые зоны, мангалы, чистые туалеты, урны и круглосуточная охрана. Подъезд на любой легковой."
              number="03"
            />
            <FeatureCard
              icon={<IconTent />}
              title="Семейный формат"
              description="Простор для детских игр, пикников и кемпинга. Тихий формат без шумных компаний."
              number="04"
            />
          </div>
        </div>
      </section>

      {/* 2.4 SERVICES */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Инфраструктура"
            title="Услуги и прокат инвентаря"
            subtitle="Что доступно сейчас и что появится в ближайшее время благодаря партнерам."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="card">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-moss-500/15 text-moss-400">
                  <IconCheck className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-moss-400">Доступно сейчас</div>
                  <div className="text-lg font-bold text-sand-50">Наш прокат КФХ</div>
                </div>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  'Рыбалка и путевки',
                  'Кемпинг со своими палатками',
                  'Аренда прочных палаток',
                  'Большие казаны',
                  'Мангалы',
                  'Удочки и снасти',
                  'Сухие дрова, уголь',
                  'Прикормка',
                  'Холодные напитки на кассе',
                ].map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-sand-100/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-moss-500" /> {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card border-dashed">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-amber-400/15 text-amber-400">
                  ◷
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-amber-400">Скоро открытие</div>
                  <div className="text-lg font-bold text-sand-50">Наши партнеры</div>
                </div>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  'Бани на дровах',
                  'Топчаны и беседки',
                  'Прокат квадроциклов',
                  'Прокат лодок',
                  'Эко-кафе',
                  'Свежий шашлык',
                ].map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-sand-100/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400/60" /> {s}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-xs text-amber-200/80">
                Эти сервисы предоставляются партнерами КФХ и появятся поэтапно
                в течение сезона.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 PRICE TABLE */}
      <section id="prices" className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Тарифы"
            title="Стоимость пребывания в ӨRLEU"
            subtitle="Официальный прайс-лист КФХ на сезон 2026 года."
          />

          <div className="mt-12">
            <PriceTable
              rows={[
                { category: 'Взрослый билет', day: '3 000 ₸', night: '3 000 ₸', full: '5 000 ₸' },
                { category: 'Детский билет (7–17 лет)', day: '1 500 ₸', night: '1 500 ₸', full: '2 000 ₸' },
                { category: 'Дети до 7 лет', day: '—', night: '—', full: '0 ₸', highlight: true },
              ]}
              footnote="Дети до 7 лет — бесплатно в сопровождении взрослых на любой период. В каждый взрослый билет включен бесплатный вылов 2 кг рыбы. Перелов: 1 500 ₸/кг."
            />
          </div>
        </div>
      </section>

      {/* 2.6 RULES */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Правила"
            title="Правила бережного отдыха"
            subtitle="Наша территория — общая ценность. Помогите нам её сохранить."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {[
              {
                title: 'Вылов рыбы',
                text: 'В каждый взрослый билет включен бесплатный вылов 2 кг рыбы. Перелов оплачивается по тарифу 1 500 ₸/кг.',
              },
              {
                title: 'Костры и мангалы',
                text: 'Разведение костров разрешено строго в мангалах или в специально подготовленных костровых зонах.',
              },
              {
                title: 'Чистота территории',
                text: 'Весь мусор после отдыха необходимо собрать в пакеты и выкинуть в контейнеры КФХ.',
              },
              {
                title: 'Безопасность и контроль',
                text: 'На территории ведется круглосуточное видеонаблюдение. Сети и электроудочки запрещены. На выезде — контрольный осмотр улова.',
              },
            ].map((r, i) => (
              <div key={r.title} className="card flex gap-5">
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-moss-500 font-display text-sm font-bold text-ink-950">
                  {i + 1}
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

      {/* 2.7 BOOKING */}
      <section className="section">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-moss-500/30 bg-gradient-to-br from-moss-500/15 via-ink-850 to-ink-900 p-10 sm:p-16 text-center">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-moss-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-moss-700/30 blur-3xl" />
            <div className="relative">
              <span className="chip">Бронирование</span>
              <h2 className="title-lg mt-6">Запланируйте свой выезд</h2>
              <p className="lead mx-auto mt-4 max-w-2xl">
                Напишите нашему администратору, чтобы уточнить погоду,
                забронировать инвентарь или задать любой вопрос.
              </p>
              <a
                href="https://wa.me/77788868808"
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-10 animate-pulseGlow"
              >
                <IconWhatsApp className="h-5 w-5" />
                Связаться с администратором в WhatsApp
              </a>
              <div className="mt-4 text-xs text-sand-100/55">Среднее время ответа — 15 минут</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
