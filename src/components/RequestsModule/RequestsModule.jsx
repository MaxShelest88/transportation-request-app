import React from 'react';
import Split from 'react-split';
import MapComponent from '../MapComponent/MapComponent';
import RequestsList from '../RequestsList/RequestsList';

import classes from './RequestsModule.module.scss';

const points = [
  {
    name: 'Москва',
    value: 'Moscow',
    position: [55.75396, 37.620393],
  },
  {
    name: 'Тверь',
    value: 'Tver',
    position: [56.85872, 35.9176],
  },
  {
    name: 'Тула',
    value: 'Tula',
    position: [55.75396, 37.620393],
  },
  {
    name: 'Рязань',
    value: 'Ryazan',
    position: [54.60954, 39.71259],
  },
];

const data = [
  {
    title: 'Заявка 1',
    id: 0,
    path: {
      startPoint: points[0],
      finishPoint: points[3],
    },
  },
  {
    title: 'Заявка 2',
    id: 1,
    path: {
      startPoint: points[1],
      finishPoint: points[2],
    },
  },
  {
    title: 'Заявка 3',
    id: 2,
    path: {
      startPoint: points[3],
      finishPoint: points[1],
    },
  },
  {
    title: 'Заявка 4',
    id: 3,
    path: {
      startPoint: points[2],
      finishPoint: points[0],
    },
  },
];

const RequestsModule = () => {
  return (
    <Split
      className="split-wrapper"
      sizes={[30, 70]}
      minSize={200}
      expandToMin={false}
      gutterSize={5}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction="horizontal">
      <RequestsList data={data} cities={points} />
      <MapComponent />
    </Split>
  );
};

export default RequestsModule;
