export const points = [
  {
    id: 'city-01',
    name: 'Москва',
    value: 'Moscow',
    position: [55.75396, 37.620393],
  },
  {
    id: 'city-02',
    name: 'Тверь',
    value: 'Tver',
    position: [56.85872, 35.9176],
  },
  {
    id: 'city-03',
    name: 'Тула',
    value: 'Tula',
    position: [54.1961, 37.6182],
  },
  {
    id: 'city-04',
    name: 'Рязань',
    value: 'Ryazan',
    position: [54.60954, 39.71259],
  },
];

export const requests = [
    {
      title: 'Заявка 1',
      id: 0,
      path: {
        startPoint: {
          id: 'city-01',
          name: 'Москва',
          value: 'Moscow',
          position: [55.75396, 37.620393],
        },
        finishPoint: {
          id: 'city-04',
          name: 'Рязань',
          value: 'Ryazan',
          position: [54.60954, 39.71259],
        },
      },
    },
    {
      title: 'Заявка 2',
      id: 1,
      path: {
        startPoint: { id: 'city-02', name: 'Тверь', value: 'Tver', position: [56.85872, 35.9176] },
        finishPoint: { id: 'city-03', name: 'Тула', value: 'Tula', position: [54.1961, 37.6182] },
      },
    },
    {
      title: 'Заявка 3',
      id: 2,
      path: {
        startPoint: { id: 'city-02', name: 'Тверь', value: 'Tver', position: [56.85872, 35.9176] },
        finishPoint: {
          id: 'city-04',
          name: 'Рязань',
          value: 'Ryazan',
          position: [54.60954, 39.71259],
        },
      },
    },
    {
      title: 'Заявка 4',
      id: 3,
      path: {
        finishPoint: { id: 'city-03', name: 'Тула', value: 'Tula', position: [54.1961, 37.6182] },
        startPoint: {
          id: 'city-01',
          name: 'Москва',
          value: 'Moscow',
          position: [55.75396, 37.620393],
        },
      },
    },
  ]
