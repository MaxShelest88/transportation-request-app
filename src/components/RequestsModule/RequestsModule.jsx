import React from 'react';
import Split from 'react-split';
import MapComponent from '../MapComponent/MapComponent';
import RequestsList from '../RequestsList/RequestsList';

import classes from './RequestsModule.module.scss';

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
      <RequestsList />
      <MapComponent />
    </Split>
  );
};

export default RequestsModule;
