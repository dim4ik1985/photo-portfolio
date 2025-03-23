const navItems = [
  { id: 1, title: 'На главную', path: '/photo-portfolio' },
  { id: 2, title: 'Обо мне', path: '/photo-portfolio/about-me' },
  {
    id: 3,
    title: 'Портфолио',

    submenu: [
      {
        id: 21,
        title: 'Свадьба',
        path: '/photo-portfolio/portfolio'
      },
      {
        id: 22,
        title: 'Репортаж',
        path: '/photo-portfolio/portfolio'
      },
      {
        id: 23,
        title: 'Студия',
        path: '/photo-portfolio/portfolio'
      }
    ]
  },
  {
    id: 4,
    title: 'Прайс',

    submenu: [
      { id: 41, title: 'Свадьба', path: '/photo-portfolio/prices' },
      { id: 42, title: 'Репортаж', path: '/photo-portfolio/prices' },
      { id: 43, title: 'Студия', path: '/photo-portfolio/prices' }
    ]
  },
  { id: 5, title: 'Контакты', anchor: 'contacts' }
];

const categoryPhoto = [
  {
    id: 21,
    label: 'Свадьба',
    cards: [
      {
        id: 1,
        title: 'Свадьба 1',
        description: 'Оля и Саша',
        image: new URL(
          '../img/weddingPortfolio/dmitry-schemelev-OEnKKXvdbDU-unsplash.jpg',
          import.meta.url
        )
      },
      {
        id: 2,
        title: 'Свадьба 2',
        description: 'Настя и Паша',
        image: new URL(
          '../img/weddingPortfolio/drew-coffman-llWjwo200fo-unsplash.jpg',
          import.meta.url
        )
      },
      {
        id: 3,
        title: 'Свадьба 3',
        description: 'Катя и Петя',
        image: new URL(
          '../img/weddingPortfolio/olivia-bauso-30UOqDM5QW0-unsplash.jpg',
          import.meta.url
        )
      }
    ]
  },
  {
    id: 22,
    label: 'Репортаж',
    cards: [
      {
        id: 1,
        title: 'Репортаж 1',
        description: 'Концерт',
        image:
          'https://images.unsplash.com/photo-1560176821-b10af3e89479?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 2,
        title: 'Репортаж 2',
        description: 'Танцы',
        image:
          'https://images.unsplash.com/photo-1611435263724-3f3c4e4cca27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 3,
        title: 'Репортаж 3',
        description: 'Конференция',
        image:
          'https://images.unsplash.com/photo-1677061856652-673bfdc25d5b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ]
  },
  {
    id: 23,
    label: 'Студия',
    cards: [
      {
        id: 1,
        title: 'Студия 1',
        description: 'Модель Оля',
        image:
          'https://images.unsplash.com/photo-1612052355380-d7c1d631f00f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 2,
        title: 'Студия 2',
        description: 'Модель Настя',
        image:
          'https://images.unsplash.com/photo-1553614186-a373dedbb390?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 3,
        title: 'Студия 3',
        description: 'Модель Петя',
        image:
          'https://images.unsplash.com/photo-1567432421732-f5620d123fbb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ]
  }
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

export { navItems, photoSlider, prices, categoryPhoto };
