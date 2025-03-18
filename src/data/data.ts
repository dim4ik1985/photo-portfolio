const navItems = [
  { id: 2, title: 'Обо мне', path: '/about' },
  {
    id: 3,
    title: 'Портфолио',
    path: '#',
    submenu: [
      { id: 31, title: 'Свадьба', path: '/portfolio' },
      { id: 32, title: 'Репортаж', path: '/portfolio' },
      { id: 33, title: 'Студия', path: '/portfolio' }
    ]
  },
  {
    id: 4,
    title: 'Прайс',
    path: '#',
    submenu: [
      { id: 41, title: 'Свадьба', path: '/prices' },
      { id: 42, title: 'Репортаж', path: '/prices' },
      { id: 43, title: 'Студия', path: '/prices' }
    ]
  },
  { id: 5, title: 'Контакты', path: '/contacts' }
];

const photos = [
  {
    id: 31,
    title: 'Свадьба',
    src: [
      {
        id: 1,
        src: 'https://sun9-38.userapi.com/impg/mh4yxsIxspBuTQjW-fC_inFPiF8fPen4tHv9Fg/PPMlvBLyWv8.jpg?size=1440x2160&quality=95&sign=d93aca01426249d2936b67ad213e7ef5&type=album'
      },
      {
        id: 2,
        src: 'https://sun9-72.userapi.com/impg/t57tP_EXfqYi6srBnRPfJjJB54TJdBq2S4vtnw/dQ4mVRqlCo4.jpg?size=2560x1707&quality=95&sign=31604fdf27f0dc0a88c051ecc53b5ad5&type=album'
      },
      {
        id: 3,
        src: 'https://sun9-61.userapi.com/impg/0b2NFG5lTaxdAtGvAJIotokQpa8tJ-hfk6O47g/6mXq2v0WJPE.jpg?size=1440x2160&quality=95&sign=b6a14814a0935fd946afcbfbcd8ee49b&type=album'
      },
      {
        id: 4,
        src: 'https://sun9-79.userapi.com/impg/15NCDRHcze4DvVPZrCgECUCTz2UdtyVZrURaYQ/TyWYR1k_2Ow.jpg?size=2560x1707&quality=95&sign=e2e4b0b21ff3f796d2ea90fd4ae4f7d0&type=album'
      },
      {
        id: 5,
        src: 'https://sun9-20.userapi.com/impg/J9JJGCmYEgglCyZWDpACcM-ebwQEvnv04aK-iA/YUExdcvkMsw.jpg?size=1500x1999&quality=95&sign=72489e07cf9bc8ec6524479ec70c36a8&type=album'
      }
    ]
  },
  {
    id: 33,
    title: 'Студия',
    src: [
      {
        id: 1,
        src: 'https://sun9-38.userapi.com/impg/mh4yxsIxspBuTQjW-fC_inFPiF8fPen4tHv9Fg/PPMlvBLyWv8.jpg?size=1440x2160&quality=95&sign=d93aca01426249d2936b67ad213e7ef5&type=album'
      },
      {
        id: 2,
        src: 'https://sun9-72.userapi.com/impg/t57tP_EXfqYi6srBnRPfJjJB54TJdBq2S4vtnw/dQ4mVRqlCo4.jpg?size=2560x1707&quality=95&sign=31604fdf27f0dc0a88c051ecc53b5ad5&type=album'
      },
      {
        id: 3,
        src: 'https://sun9-61.userapi.com/impg/0b2NFG5lTaxdAtGvAJIotokQpa8tJ-hfk6O47g/6mXq2v0WJPE.jpg?size=1440x2160&quality=95&sign=b6a14814a0935fd946afcbfbcd8ee49b&type=album'
      },
      {
        id: 4,
        src: 'https://sun9-79.userapi.com/impg/15NCDRHcze4DvVPZrCgECUCTz2UdtyVZrURaYQ/TyWYR1k_2Ow.jpg?size=2560x1707&quality=95&sign=e2e4b0b21ff3f796d2ea90fd4ae4f7d0&type=album'
      },
      {
        id: 5,
        src: 'https://sun9-20.userapi.com/impg/J9JJGCmYEgglCyZWDpACcM-ebwQEvnv04aK-iA/YUExdcvkMsw.jpg?size=1500x1999&quality=95&sign=72489e07cf9bc8ec6524479ec70c36a8&type=album'
      }
    ]
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

export { navItems, photos, prices };
