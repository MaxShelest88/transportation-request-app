import React from 'react';
import Split from 'react-split';
import { selectRequests } from '../../redux/requests/selectors';
import MapComponent from '../MapComponent/MapComponent';
import RequestsList from '../RequestsList/RequestsList';
import { useSelector } from 'react-redux';
import classes from './RequestsModule.module.scss';
import { points } from '../../data/data';

const RequestsModule = () => {
  const data = useSelector(selectRequests);
  return (
    <Split
      className="split-wrapper"
      sizes={[40, 60]}
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
