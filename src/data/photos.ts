export type Photo = {
  src: string;
  title: string;
  caption?: string;
};

/** Единый набор фотографий хозяйства для лент, сеток и лайтбоксов */
export const PHOTOS: Photo[] = [
  { src: '/photos/dji-aerial.jpg', title: 'Вид с высоты', caption: 'Панорама водоёма и полей КФХ ORLEU.' },
  { src: '/photos/p639.jpg', title: 'Водоём 25 га', caption: 'Проточное озеро с камышовыми берегами.' },
  { src: '/photos/p624.jpg', title: 'Пикниковая роща', caption: 'Столы и костровые зоны в тени деревьев.' },
  { src: '/photos/p660.jpg', title: 'Вечер на берегу', caption: 'Тишина и красота природы.' },
  { src: '/photos/p646.jpg', title: 'Рыболовный сектор', caption: 'Берег, подготовленный для рыбалки.' },
  { src: '/photos/p635.jpg', title: 'Русло реки Аса', caption: 'Пять километров береговой линии.' },
  { src: '/photos/p619.jpg', title: 'Зеркальная гладь', caption: 'Спокойная вода на закате дня.' },
  { src: '/photos/p637.jpg', title: 'Прибрежная роща', caption: 'Вековые деревья у самой воды.' },
  { src: '/photos/p650.jpg', title: 'Поля под клевер', caption: 'Плодородные земли хозяйства.' },
  { src: '/photos/p643.jpg', title: 'Открытая вода', caption: 'Простор для рыбалки и отдыха.' },
  { src: '/photos/p644.jpg', title: 'Простор водоёма', caption: 'Широкая акватория хозяйства.' },
  { src: '/photos/p654.jpg', title: 'Пастбища', caption: 'Угодья для животноводства.' },
];
