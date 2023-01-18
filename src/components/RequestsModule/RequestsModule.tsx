import React from 'react';
import Split from 'react-split';
import { selectRequests } from '../../redux/requests/selectors';
import MapComponent from '../MapComponent/MapComponent';
import RequestsList from '../RequestsList/RequestsList';
import { useSelector } from 'react-redux';
import { points } from '../../data/data';
import { Size, useWindowSize } from '../../hooks/useWindowSize';

const RequestsModule = () => {
  const size: Size = useWindowSize();

  console.log(size.width);

  const data = useSelector(selectRequests);

  return (
    <Split
      className="split-wrapper"
      sizes={size.width && size.width > 768 ? [40, 60] : [50, 50]}
      minSize={200}
      expandToMin={false}
      elementStyle={() => {
        return {
          height: 'calc(100% - 5px)',
        };
      }}
      gutterSize={5}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction={size.width && size.width > 768 ? 'horizontal' : 'vertical'}
    >
      <RequestsList
        data={data}
        cities={points}
      />
      <MapComponent />
    </Split>
  );
};

export default RequestsModule;
