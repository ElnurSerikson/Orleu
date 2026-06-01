import Accordion from '../components/Accordion';
import AssetPlaceholder from '../components/AssetPlaceholder';
import FeatureCard from '../components/FeatureCard';
import MapBlock from '../components/MapBlock';
import SectionHeader from '../components/SectionHeader';
import {
  IconArrowRight,
  IconBath,
  IconChart,
  IconFish,
  IconSeed,
  IconShield,
  IconSparkle,
  IconWhatsApp,
} from '../components/Icon';

export default function Partnership() {
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
              ӨRLEU — готовая платформа для вашего{' '}
              <span className="bg-gradient-to-r from-moss-400 to-moss-500 bg-clip-text text-transparent">
                рекреационного и агробизнеса
              </span>
            </h1>
            <p className="lead mx-auto mt-6 max-w-2xl">
              Развивайте свои проекты на базе КФХ площадью 230 гектар.
              Уникальные условия для создания совместных предприятий и запуска
              коммерческих услуг без стартовой аренды.
            </p>
            <div className="mt-10">
              <a href="#categories" className="btn-primary">
                💼 Изучить направления и условия <IconArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3.2 MAP */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Инфраструктурная площадка"
            title="Карта коммерческого потенциала КФХ"
            subtitle="230 га земли и 25 га проточного водоема, готовые к целевому освоению."
          />
          <div className="mt-12">
            <MapBlock
              pins={[
                { x: 18, y: 30, label: 'Зоны под бани и тапчаны', tone: 'amber' },
                { x: 38, y: 50, label: 'Береговая линия / пирсы' },
                { x: 56, y: 38, label: 'Сектор садковых линий', tone: 'blue' },
                { x: 74, y: 52, label: 'Поля под клевер 230 га' },
                { x: 88, y: 30, label: 'Пастбища МРС' },
              ]}
              caption="Зум для просмотра коммерческих секторов и зон под застройку."
              videoLabel="🎥 Видео-обзор инфраструктуры"
            />
          </div>
        </div>
      </section>

      {/* 3.3 BENEFITS */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Преимущества для партнеров"
            title="Почему ваш бизнес зафиксирует прибыль в ӨRLEU?"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            <FeatureCard
              icon={<IconChart />}
              title="Минимум рисков на старте"
              description="Не берем плату за аренду земли на этапе запуска. Вы заходите, инвестируете в свои объекты и работаете на льготных условиях."
              number="01"
            />
            <FeatureCard
              icon={<IconSparkle />}
              title="100% выручки — вам"
              description="В сфере отдыха вы забираете всю кассу от своих услуг (бани, прокат, кафе). Наш заработок — это только входные билеты."
              number="02"
            />
            <FeatureCard
              icon={<IconArrowRight />}
              title="Готовый B2C-трафик"
              description="Не нужно искать клиентов в чистом поле. Маркетинг, дисконтная система и бренд ӨRLEU дают постоянный поток гостей."
              number="03"
            />
            <FeatureCard
              icon={<IconShield />}
              title="Полная инфраструктура"
              description="Охрана территории, видеонаблюдение, подъездные пути, электричество и техническая вода."
              number="04"
            />
          </div>
        </div>
      </section>

      {/* 3.4 CATEGORIES */}
      <section id="categories" className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Направления"
            title="Категории партнерства и условия сотрудничества"
            subtitle="Доступные направления — найдите свой масштаб и формат входа."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                tag: 'B2C сервис и отдых',
                icon: <IconBath />,
                title: 'Сервис и Отдых',
                items: [
                  'Бани на дровах',
                  'Топчаны и беседки',
                  'Эко-кафе и общепит',
                  'Прокат квадроциклов, лодок',
                  'Глэмпинг-зоны',
                ],
                conditions: 'Локация — бесплатно по договору. 100% прибыли — вам. Ваша задача — сервис и трафик.',
                accent: 'moss',
              },
              {
                tag: 'СП растениеводство',
                icon: <IconSeed />,
                title: 'Совместное растениеводство',
                items: [
                  'Кормовые культуры',
                  'Выращивание клевера',
                  'Земельный фонд 230 га',
                  'Юридическое сопровождение',
                ],
                conditions: 'СП: с нашей стороны — земля и юр. сопровождение, с вашей — операционка и техника. Прибыль по договору СД.',
                accent: 'amber',
              },
              {
                tag: 'СП инвестиции',
                icon: <IconFish />,
                title: 'Индустриальная аквакультура',
                items: [
                  'Садковые линии',
                  'Интенсивное выращивание',
                  '25 га проточного водоема',
                  'Статус ОТРХ',
                ],
                conditions: 'Привлечение инвестиционного капитала и технологических партнеров для совместного расширения рыбного производства.',
                accent: 'sky',
              },
            ].map((c, i) => (
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
                  {c.conditions}
                </div>
                <a
                  href="https://wa.me/77788868808"
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

      {/* 3.5 FAQ */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="FAQ"
              title="Ответы на критические вопросы партнеров"
              subtitle="Снимем главные юридические и операционные страхи до первого звонка."
            />
            <a
              href="https://wa.me/77788868808"
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-8"
            >
              <IconWhatsApp className="h-4 w-4" /> Спросить напрямую
            </a>
          </div>
          <Accordion
            items={[
              {
                q: 'На каком юридическом основании строится партнерство по земле?',
                a: 'Земли КФХ частично находятся в собственности и в долгосрочной аренде. По закону РК субаренда запрещена, поэтому мы работаем абсолютно легально через Договоры о совместной деятельности (СД) и создание совместных предприятий. Это полностью защищает обе стороны.',
              },
              {
                q: 'Какие коммуникации доступны на площадке?',
                a: 'Территория КФХ электрифицирована, обеспечены стабильные подъездные пути для любого транспорта, есть доступ к технической воде, организована круглосуточная охрана и видеонаблюдение.',
              },
              {
                q: 'Могу ли я построить капитальные здания?',
                a: 'В приоритете некапитальные, быстровозводимые и мобильные конструкции в эко-стиле (глэмпинги, модульные бани, каркасные топчаны), что позволяет запуститься в кратчайшие сроки.',
              },
              {
                q: 'Кто отвечает за маркетинг и поток гостей?',
                a: 'Бренд ӨRLEU и собственная маркетинговая команда КФХ обеспечивают B2C-трафик: соцсети, дисконтная программа, наружная реклама. Партнеру не нужно строить воронку с нуля.',
              },
            ]}
          />
        </div>
      </section>

      {/* 3.6 OWNER CTA */}
      <section className="section">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 via-ink-850 to-ink-900 p-10 sm:p-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-moss-500/10 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="chip">Прямой контакт собственника</span>
                <h2 className="title-lg mt-6 max-w-2xl">
                  Готовы запустить проект в ӨRLEU?
                </h2>
                <p className="lead mt-4 max-w-2xl">
                  Если у вас есть конкретное предложение по рекреационному
                  бизнесу или совместному агро-производству, свяжитесь напрямую
                  с главой КФХ для обсуждения условий.
                </p>
              </div>
              <a
                href="https://wa.me/77788868808"
                target="_blank"
                rel="noreferrer"
                className="btn-dark border-moss-500/40 hover:border-moss-500"
              >
                <IconWhatsApp className="h-5 w-5 text-moss-400" />
                Обсудить условия сотрудничества
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
