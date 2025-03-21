const navItems = [
  { id: 1, title: 'На главную', path: '/photo-portfolio' },
  {
    id: 2,
    title: 'Портфолио',
    path: '/portfolio/1'
  },
  {
    id: 3,
    title: 'Прайс',
    path: '#',
    submenu: [
      { id: 41, title: 'Свадьба', path: '/prices' },
      { id: 42, title: 'Репортаж', path: '/prices' },
      { id: 43, title: 'Студия', path: '/prices' }
    ]
  },
  { id: 4, title: 'Контакты', path: 'contacts' }
];

const photoSlider = [
  {
    src: new URL('../img/sliderPhoto/photo_2025-03-18_18-44-16.jpg', import.meta.url),
    alt: 'Свадебное фото'
  },
  {
    src: new URL('../img/sliderPhoto/photo_2025-03-18_18-44-29.jpg', import.meta.url),
    alt: 'Свадебное фото'
  },
  {
    src: new URL('../img/sliderPhoto/photo_2025-03-18_18-44-30.jpg', import.meta.url),
    alt: 'Свадебное фото'
  },
  {
    src: new URL('../img/sliderPhoto/photo_2025-03-18_18-47-36.jpg', import.meta.url),
    alt: 'Свадебное фото'
  },
  {
    src: new URL('../img/sliderPhoto/photo_2025-03-18_18-47-37.jpg', import.meta.url),
    alt: 'Свадебное фото'
  },
  {
    src: new URL('../img/sliderPhoto/photo_2025-03-18_18-47-37 (2).jpg', import.meta.url),
    alt: 'Свадебное фото'
  },
  {
    src: new URL('../img/sliderPhoto/photo_2025-03-18_18-47-37 (3).jpg', import.meta.url),
    alt: 'Свадебное фото'
  },
  {
    src: new URL('../img/sliderPhoto/photo_2025-03-18_18-47-37 (4).jpg', import.meta.url),
    alt: 'Свадебное фото'
  },
  {
    src: new URL('../img/sliderPhoto/photo_2025-03-18_18-47-37 (5).jpg', import.meta.url),
    alt: 'Свадебное фото'
  }
];

const prices = [
  {
    id: 41,
    title: 'Свадьба',
    category: [
      { id: 1, title: 'Стандарт', price: 7000, duration: '3 часа', lotsOfPhoto: 50 },
      {
        id: 2,
        title: 'Премиум',
        price: 10000,
        duration: '5 часа',
        lotsOfPhoto: 100
      },
      { id: 3, title: 'PRO', price: 3000, duration: '12 часов', lotsOfPhoto: 300 }
    ]
  },
  { id: 42, title: 'Репортаж', price: 2000 },
  { id: 43, title: 'Студия', price: 3000 }
];

export { navItems, photoSlider, prices };
